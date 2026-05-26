"""
單字卡產生器
============
用法：雙擊執行，或在命令列輸入 python 單字卡產生器.py

需求：
  pip install python-docx
  （Python 內建 tkinter，Windows 預設已含）

範本檔案 word範本.docx 需與本程式放在同一資料夾中。
欄位：word, kk_phonetics, definition_zh, example_sentence, sentence_zh
"""

import tkinter as tk
from tkinter import ttk, filedialog, messagebox
import csv
import copy
import os
import threading

try:
    from docx import Document
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement
except ImportError:
    import subprocess, sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "python-docx"])
    from docx import Document
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement


SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE   = os.path.join(SCRIPT_DIR, "word範本.docx")
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "輸出docx")

# 自動轉換路徑：WSL 下把 E:\ 轉成 /mnt/e/
_DEFAULT_CSV = r"E:\My_Projects\gk-300\gk_350.csv"
if os.path.exists("/mnt/"):
    _DEFAULT_CSV = _DEFAULT_CSV.replace("E:\\", "/mnt/e/").replace("E:/", "/mnt/e/")
    _DEFAULT_CSV = _DEFAULT_CSV.replace("\\", "/")


# ═══════════════════════════════════════════════════════════════
#  DOCX 核心
# ═══════════════════════════════════════════════════════════════

def _fill_paragraph(para_el, data: dict):
    """將段落 XML 內所有 MERGEFIELD 換成實際資料，保留原始格式。"""
    all_ch = list(para_el)
    state, field_runs, rPr_tmpl, groups = "out", [], None, []

    for ch in all_ch:
        if ch.tag != qn("w:r"):
            continue
        fc  = ch.find(qn("w:fldChar"))
        ins = ch.find(qn("w:instrText"))

        if fc is not None:
            ft = fc.get(qn("w:fldCharType"))
            if ft == "begin":
                state, field_runs = "field", [ch]
                rp = ch.find(qn("w:rPr"))
                rPr_tmpl = copy.deepcopy(rp) if rp is not None else None
            elif ft == "separate" and state == "field":
                state = "value"
                field_runs.append(ch)
            elif ft == "end" and state in ("field", "value"):
                field_runs.append(ch)
                fname = None
                for r in field_runs:
                    it = r.find(qn("w:instrText"))
                    if it is not None:
                        t = (it.text or "").strip()
                        if t.startswith("MERGEFIELD"):
                            fname = t.split()[1].strip()
                groups.append((list(field_runs), fname, rPr_tmpl))
                state, field_runs = "out", []
        elif ins is not None and state == "field":
            field_runs.append(ch)
        elif state == "value":
            field_runs.append(ch)

    for runs, fname, rPr in reversed(groups):
        if fname is None:
            continue
        value = data.get(fname, "")
        new_r = OxmlElement("w:r")
        if rPr is not None:
            new_r.append(copy.deepcopy(rPr))
        new_t = OxmlElement("w:t")
        new_t.text = value
        if value and (value[0] == " " or value[-1] == " "):
            new_t.set("{http://www.w3.org/XML/1998/namespace}space", "preserve")
        new_r.append(new_t)
        insert_pos = list(para_el).index(runs[0])
        para_el.insert(insert_pos, new_r)
        for r in runs:
            if r in para_el:
                para_el.remove(r)


def _remove_mail_merge_settings(doc):
    """移除 settings.xml 中的 <w:mailMerge> 區塊，避免 Word 開啟時詢問資料來源。"""
    settings = doc.settings.element
    for mm in settings.findall(qn("w:mailMerge")):
        settings.remove(mm)


def generate_one_docx(data: dict, out_path: str):
    """用範本產生單一單字的 docx，填入資料並移除合併列印連結，存到 out_path。"""
    doc = Document(TEMPLATE)
    for para in doc.paragraphs:
        _fill_paragraph(para._p, data)
    _remove_mail_merge_settings(doc)
    doc.save(out_path)


# ═══════════════════════════════════════════════════════════════
#  CSV 工具
# ═══════════════════════════════════════════════════════════════

def load_csv(path: str):
    rows = []
    with open(path, encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append({k.strip(): v.strip() for k, v in row.items()})
    return rows


# ═══════════════════════════════════════════════════════════════
#  GUI
# ═══════════════════════════════════════════════════════════════

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("單字卡產生器")
        self.resizable(False, False)
        self.configure(padx=24, pady=20)

        self.csv_path = tk.StringVar()
        self.csv_path.set(_DEFAULT_CSV)
        self.out_dir  = tk.StringVar(value=OUTPUT_DIR)
        self.all_rows = []

        self._build_ui()
        self._check_template()
        # 自動載入預設 CSV
        self.after(100, self._auto_load_csv)

    def _build_ui(self):
        tk.Label(self, text="單字卡產生器", font=("Arial", 18, "bold")).grid(
            row=0, column=0, columnspan=3, pady=(0, 16), sticky="w")

        # CSV 選擇
        tk.Label(self, text="CSV 檔案：", anchor="w").grid(row=1, column=0, sticky="w", pady=4)
        tk.Entry(self, textvariable=self.csv_path, width=44, state="readonly").grid(
            row=1, column=1, sticky="ew", padx=(0, 8))
        tk.Button(self, text="瀏覽…", command=self._pick_csv).grid(row=1, column=2)

        # 輸出資料夾
        tk.Label(self, text="輸出資料夾：", anchor="w").grid(row=2, column=0, sticky="w", pady=4)
        tk.Entry(self, textvariable=self.out_dir, width=44, state="readonly").grid(
            row=2, column=1, sticky="ew", padx=(0, 8))
        tk.Button(self, text="瀏覽…", command=self._pick_outdir).grid(row=2, column=2)

        ttk.Separator(self, orient="horizontal").grid(
            row=3, column=0, columnspan=3, sticky="ew", pady=12)

        # 單字輸入區
        tk.Label(self, text="輸入單字：", anchor="w").grid(
            row=4, column=0, sticky="nw", pady=(2, 0))

        input_frame = tk.Frame(self)
        input_frame.grid(row=4, column=1, columnspan=2, sticky="ew", pady=(0, 4))

        self.word_text = tk.Text(input_frame, width=44, height=8,
                                 font=("Arial", 12), relief="solid",
                                 bd=1, padx=8, pady=6)
        self.word_text.pack(side="left", fill="both", expand=True)
        sb = tk.Scrollbar(input_frame, command=self.word_text.yview)
        sb.pack(side="right", fill="y")
        self.word_text.config(yscrollcommand=sb.set)

        tk.Label(self, text="每行一個單字\n（大小寫不拘）",
                 font=("Arial", 10), fg="#888888", justify="left").grid(
            row=5, column=0, sticky="nw", pady=(0, 4))

        # 比對結果提示
        self.match_var = tk.StringVar(value="")
        tk.Label(self, textvariable=self.match_var, anchor="w",
                 fg="#1a5fb4", font=("Arial", 10)).grid(
            row=5, column=1, columnspan=2, sticky="w")

        self.word_text.bind("<KeyRelease>", lambda e: self._update_match())

        ttk.Separator(self, orient="horizontal").grid(
            row=6, column=0, columnspan=3, sticky="ew", pady=12)

        # 進度條
        self.progress = ttk.Progressbar(self, orient="horizontal",
                                        mode="determinate", length=500)
        self.progress.grid(row=7, column=0, columnspan=3, sticky="ew")

        self.status_var = tk.StringVar(value="請先載入 CSV 檔案。")
        tk.Label(self, textvariable=self.status_var, anchor="w",
                 fg="#555555", font=("Arial", 10)).grid(
            row=8, column=0, columnspan=3, sticky="w", pady=(4, 12))

        # 產生按鈕
        self.gen_btn = tk.Button(
            self, text="▶  產生 docx 檔案",
            command=self._start_generate,
            bg="#1a5fb4", fg="white",
            font=("Arial", 12, "bold"),
            padx=20, pady=8, relief="flat", cursor="hand2")
        self.gen_btn.grid(row=9, column=0, columnspan=3, pady=(0, 4))

    # ── 事件 ────────────────────────────────────────────────────

    def _check_template(self):
        if not os.path.exists(TEMPLATE):
            messagebox.showwarning(
                "找不到範本",
                f"找不到範本檔案：\n{TEMPLATE}\n\n"
                "請將 word範本.docx 放在與程式相同的資料夾中。")

    def _pick_csv(self):
        path = filedialog.askopenfilename(
            title="選擇 CSV 檔案",
            filetypes=[("CSV 檔案", "*.csv"), ("所有檔案", "*.*")])
        if not path:
            return
        self.csv_path.set(path)
        self._load_csv_file()

    def _auto_load_csv(self):
        """啟動時自動載入預設 CSV"""
        if self.csv_path.get():
            self._load_csv_file()

    def _load_csv_file(self):
        """載入目前 csv_path 指向的 CSV 檔案"""
        path = self.csv_path.get()
        if not os.path.exists(path):
            self.status_var.set(f"找不到 CSV 檔案：{path}")
            return
        if not self.out_dir.get():
            self.out_dir.set(os.path.dirname(path))
        try:
            self.all_rows = load_csv(path)
            self.status_var.set(f"已載入 {len(self.all_rows)} 筆資料。")
            self._update_match()
        except Exception as e:
            messagebox.showerror("載入失敗", str(e))

    def _pick_outdir(self):
        path = filedialog.askdirectory(title="選擇輸出資料夾")
        if path:
            self.out_dir.set(path)

    def _get_input_words(self):
        raw = self.word_text.get("1.0", tk.END)
        return [w.strip() for w in raw.splitlines() if w.strip()]

    def _update_match(self):
        if not self.all_rows:
            return
        words = self._get_input_words()
        if not words:
            self.match_var.set("")
            return
        row_map   = {r.get("word", "").strip().lower(): r for r in self.all_rows}
        found     = [w for w in words if w.lower() in row_map]
        not_found = [w for w in words if w.lower() not in row_map]
        parts = [f"找到 {len(found)} 個"]
        if not_found:
            parts.append(f"找不到：{', '.join(not_found)}")
        self.match_var.set("　".join(parts))

    def _start_generate(self):
        if not self.csv_path.get():
            messagebox.showwarning("提示", "請先選擇 CSV 檔案。")
            return
        if not self.out_dir.get():
            messagebox.showwarning("提示", "請先選擇輸出資料夾。")
            return
        if not os.path.exists(TEMPLATE):
            messagebox.showerror("錯誤", f"找不到範本：\n{TEMPLATE}")
            return
        words = self._get_input_words()
        if not words:
            messagebox.showwarning("提示", "請輸入至少一個單字。")
            return
        self.gen_btn.config(state="disabled")
        threading.Thread(target=self._generate, args=(words,), daemon=True).start()

    def _generate(self, words):
        out_dir = self.out_dir.get()
        os.makedirs(out_dir, exist_ok=True)
        row_map = {r.get("word", "").strip().lower(): r for r in self.all_rows}
        total   = len(words)
        success = 0
        errors  = []

        self.progress["maximum"] = total
        self.progress["value"]   = 0

        for i, word in enumerate(words, 1):
            self.status_var.set(f"產生中… {i}/{total}：{word}")
            row = row_map.get(word.lower())
            if row is None:
                errors.append(f"{word}（CSV 中找不到）")
                self.progress["value"] = i
                continue
            try:
                out_path = os.path.join(out_dir, f"{word}.docx")
                generate_one_docx(row, out_path)
                success += 1
            except Exception as e:
                errors.append(f"{word}（{e}）")
            self.progress["value"] = i

        if errors:
            msg = f"完成！成功 {success} 個，失敗 {len(errors)} 個：\n" + "\n".join(errors)
            self.after(0, lambda: messagebox.showwarning("部分失敗", msg))
        else:
            msg = f"全部完成！共產生 {success} 個 docx 檔案。\n\n儲存位置：\n{out_dir}"
            self.after(0, lambda: messagebox.showinfo("完成", msg))

        self.status_var.set(f"完成！已產生 {success} 個檔案。")
        self.gen_btn.config(state="normal")


# ═══════════════════════════════════════════════════════════════
#  入口
# ═══════════════════════════════════════════════════════════════

if __name__ == "__main__":
    app = App()
    app.mainloop()
