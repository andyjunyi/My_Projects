# -*- coding: utf-8 -*-
"""
照片文字疊加工具
左側預覽、右側輸入文字資訊，產出加上日期/地點/敘述的新圖片
"""

import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from PIL import Image, ImageDraw, ImageFont, ImageTk
import os
import datetime
from pathlib import Path

# ── 支援中文字型 ──
def find_chinese_font(size=24):
    candidates = [
        "C:/Windows/Fonts/msjh.ttc",           # 微軟正黑體
        "C:/Windows/Fonts/msjhbd.ttc",          # 微軟正黑體粗體
        "C:/Windows/Fonts/notosanscjk.ttc",
        "C:/Windows/Fonts/NotoSansCJK-Regular.ttc",
        "C:/Windows/Fonts/NotoSansTC-Regular.otf",
        "C:/Windows/Fonts/NOTOSANSSC-REGULAR.OTF",
        "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc",
        "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    ]
    for p in candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except:
                continue
    return ImageFont.load_default()


class PhotoTextOverlayApp:
    def __init__(self, root):
        self.root = root
        self.root.title("照片文字疊加工具")
        self.root.geometry("1100x700")
        self.root.minsize(900, 600)

        self.image_path = None
        self.original_image = None
        self.preview_image = None
        self.preview_tk = None

        # 文字設定
        self.text_position = tk.StringVar(value="右下")
        self.text_color = tk.StringVar(value="#ffffff")
        self.font_size = tk.IntVar(value=28)
        self.date_str = tk.StringVar()
        self.location_str = tk.StringVar()
        self.description_str = tk.StringVar()
        self.output_format = tk.StringVar(value="PNG")

        self.setup_ui()

    def setup_ui(self):
        # 主框架
        main_frame = ttk.Frame(self.root, padding=10)
        main_frame.pack(fill=tk.BOTH, expand=True)

        # ── 左側：圖片預覽 ──
        left = ttk.Frame(main_frame)
        left.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

        ttk.Label(left, text="圖片預覽", font=("", 12, "bold")).pack(anchor=tk.W)

        btn_frame = ttk.Frame(left)
        btn_frame.pack(fill=tk.X, pady=(5, 10))
        ttk.Button(btn_frame, text="📁 開啟圖片", command=self.open_image).pack(side=tk.LEFT)
        ttk.Button(btn_frame, text="💾 另存新檔", command=self.save_image).pack(side=tk.LEFT, padx=(10, 0))
        ttk.Button(btn_frame, text="🔄 重新整理", command=self.refresh_preview).pack(side=tk.LEFT, padx=(10, 0))

        self.preview_canvas = tk.Canvas(left, bg="#2d2d2d", highlightthickness=0)
        self.preview_canvas.pack(fill=tk.BOTH, expand=True)

        # ── 右側：控制面板 ──
        right = ttk.Frame(main_frame, width=320)
        right.pack(side=tk.RIGHT, fill=tk.Y, padx=(10, 0))
        right.pack_propagate(False)

        ttk.Label(right, text="文字設定", font=("", 12, "bold")).pack(anchor=tk.W)

        # 日期
        ttk.Label(right, text="📅 日期 (留白自動讀取 EXIF)").pack(anchor=tk.W, pady=(15, 2))
        date_entry = ttk.Entry(right, textvariable=self.date_str, font=("", 11))
        date_entry.pack(fill=tk.X)
        ttk.Button(right, text="讀取 EXIF 日期", command=self.load_exif_date).pack(anchor=tk.W, pady=(2, 0))

        # 地點
        ttk.Label(right, text="📍 地點").pack(anchor=tk.W, pady=(10, 2))
        ttk.Entry(right, textvariable=self.location_str, font=("", 11)).pack(fill=tk.X)

        # 文字敘述
        ttk.Label(right, text="✏️ 文字敘述").pack(anchor=tk.W, pady=(10, 2))
        self.desc_text = tk.Text(right, height=4, font=("", 11))
        self.desc_text.pack(fill=tk.X)
        # 綁定 text 到變數
        self.desc_text.bind("<KeyRelease>", lambda e: self.sync_desc())

        # 文字位置
        ttk.Label(right, text="📍 文字位置").pack(anchor=tk.W, pady=(10, 2))
        pos_frame = ttk.Frame(right)
        pos_frame.pack(fill=tk.X)
        positions = ["左上", "右上", "左下", "右下", "正中間", "自訂(滑鼠點擊)"]
        for i, pos in enumerate(positions):
            ttk.Radiobutton(pos_frame, text=pos, variable=self.text_position,
                            value=pos, command=self.refresh_preview).pack(side=tk.LEFT if i < 3 else tk.TOP, anchor=tk.W, padx=2)

        # 字型大小
        ttk.Label(right, text="🔤 字型大小").pack(anchor=tk.W, pady=(10, 2))
        size_frame = ttk.Frame(right)
        size_frame.pack(fill=tk.X)
        ttk.Scale(size_frame, from_=14, to=60, variable=self.font_size,
                  orient=tk.HORIZONTAL, command=lambda x: self.refresh_preview()).pack(side=tk.LEFT, fill=tk.X, expand=True)
        ttk.Label(size_frame, textvariable=self.font_size, width=3).pack(side=tk.RIGHT, padx=(5, 0))

        # 文字顏色
        ttk.Label(right, text="🎨 文字顏色 (Hex, 如 #ffffff)").pack(anchor=tk.W, pady=(10, 2))
        color_frame = ttk.Frame(right)
        color_frame.pack(fill=tk.X)
        ttk.Entry(color_frame, textvariable=self.text_color, width=10).pack(side=tk.LEFT)
        for c, name in [("#ffffff", "白"), ("#ffff00", "黃"), ("#ff4444", "紅"), ("#000000", "黑")]:
            ttk.Button(color_frame, text=name, width=3,
                       command=lambda color=c: self.set_color(color)).pack(side=tk.LEFT, padx=(3, 0))

        # 輸出格式
        ttk.Label(right, text="💾 輸出格式").pack(anchor=tk.W, pady=(10, 2))
        fmt_frame = ttk.Frame(right)
        fmt_frame.pack(fill=tk.X)
        for fmt in ["PNG", "JPEG", "WEBP"]:
            ttk.Radiobutton(fmt_frame, text=fmt, variable=self.output_format,
                            value=fmt).pack(side=tk.LEFT, padx=5)

        # 預覽按鈕
        ttk.Button(right, text="🔄 更新預覽", command=self.refresh_preview).pack(fill=tk.X, pady=(15, 0))

        # 產出按鈕
        ttk.Button(right, text="💾 產出圖片", command=self.save_image).pack(fill=tk.X, pady=(5, 0))

        # 狀態列
        self.status_var = tk.StringVar(value="就緒 — 請先開啟圖片")
        status_bar = ttk.Label(self.root, textvariable=self.status_var,
                               relief=tk.SUNKEN, anchor=tk.W, padding=5)
        status_bar.pack(fill=tk.X, side=tk.BOTTOM)

    def sync_desc(self):
        self.description_str.set(self.desc_text.get("1.0", tk.END).strip())

    def set_color(self, color):
        self.text_color.set(color)
        self.refresh_preview()

    def open_image(self):
        path = filedialog.askopenfilename(
            title="選擇圖片",
            filetypes=[("圖片檔案", "*.jpg *.jpeg *.png *.webp *.bmp *.tiff")]
        )
        if not path:
            return
        self.image_path = path
        self.original_image = Image.open(path).convert("RGBA")
        self.status_var.set(f"已載入: {os.path.basename(path)}")
        self.load_exif_date()
        self.refresh_preview()

    def load_exif_date(self):
        if not self.original_image:
            return
        try:
            exif = self.original_image._getexif()
            if exif and 36867 in exif:
                dt = exif[36867]  # DateTimeOriginal
                self.date_str.set(dt[:10].replace(":", "/"))
                return
            if exif and 36868 in exif:
                dt = exif[36868]
                self.date_str.set(dt[:10].replace(":", "/"))
                return
            if exif and 306 in exif:
                dt = exif[306]
                self.date_str.set(dt[:10].replace(":", "/"))
                return
        except:
            pass
        # 如果沒有 EXIF，用檔案修改時間
        if self.image_path:
            mtime = os.path.getmtime(self.image_path)
            self.date_str.set(datetime.datetime.fromtimestamp(mtime).strftime("%Y/%m/%d"))

    def draw_text_on_image(self, img):
        """在圖片上疊加文字，返回新的 RGBA Image"""
        draw = ImageDraw.Draw(img)
        w, h = img.size

        # 組裝文字內容
        lines = []
        date = self.date_str.get().strip()
        location = self.location_str.get().strip()
        desc = self.desc_text.get("1.0", tk.END).strip() or self.description_str.get().strip()

        if date:
            lines.append(f"📅 {date}")
        if location:
            lines.append(f"📍 {location}")
        if desc:
            # 依換行分開
            for line in desc.split("\n"):
                lines.append(line)

        if not lines:
            return img  # 沒有文字就回傳原圖

        # 決定字型大小（根據圖片寬度縮放）
        base_size = self.font_size.get()
        scale = max(0.5, min(2.0, w / 1200))
        font_size = max(14, int(base_size * scale))
        font = find_chinese_font(font_size)

        # 計算每行最大寬度
        max_line_w = max(draw.textbbox((0, 0), line, font=font)[2] for line in lines)
        line_h = draw.textbbox((0, 0), "A", font=font)[3] - draw.textbbox((0, 0), "A", font=font)[1]
        padding = int(font_size * 0.6)
        total_text_h = len(lines) * (line_h + 4) + padding * 2
        total_text_w = max_line_w + padding * 2

        # 決定文字方塊位置
        pos = self.text_position.get()
        margin = int(font_size * 1.2)
        if pos == "左上":
            bx, by = margin, margin
        elif pos == "右上":
            bx, by = w - total_text_w - margin, margin
        elif pos == "左下":
            bx, by = margin, h - total_text_h - margin
        elif pos == "正中間":
            bx, by = (w - total_text_w) // 2, (h - total_text_h) // 2
        else:  # 右下 (預設)
            bx, by = w - total_text_w - margin, h - total_text_h - margin

        # 繪製半透明背景
        overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
        overlay_draw = ImageDraw.Draw(overlay)
        overlay_draw.rounded_rectangle(
            [bx, by, bx + total_text_w, by + total_text_h],
            radius=int(font_size * 0.3),
            fill=(0, 0, 0, 160)
        )
        img = Image.alpha_composite(img, overlay)

        # 繪製文字
        draw = ImageDraw.Draw(img)
        try:
            color = self.text_color.get().strip()
            if not color.startswith("#"):
                color = "#" + color
            r, g, b = int(color[1:3], 16), int(color[3:5], 16), int(color[5:7], 16)
        except:
            r, g, b = 255, 255, 255

        text_x = bx + padding
        text_y = by + padding
        for i, line in enumerate(lines):
            draw.text((text_x, text_y + i * (line_h + 4)), line, font=font, fill=(r, g, b, 255))

        return img

    def refresh_preview(self, event=None):
        if not self.original_image:
            return

        # 在預覽上繪製文字
        preview_img = self.original_image.copy()
        preview_img = self.draw_text_on_image(preview_img)

        # 縮放適應 Canvas
        canvas_w = self.preview_canvas.winfo_width() or 600
        canvas_h = self.preview_canvas.winfo_height() or 500
        if canvas_w < 50:
            canvas_w = 600
        if canvas_h < 50:
            canvas_h = 500

        img_w, img_h = preview_img.size
        scale = min(canvas_w / img_w, canvas_h / img_h)
        new_w, new_h = int(img_w * scale), int(img_h * scale)
        display_img = preview_img.resize((new_w, new_h), Image.LANCZOS)

        self.preview_tk = ImageTk.PhotoImage(display_img)
        self.preview_canvas.delete("all")
        self.preview_canvas.create_image(
            canvas_w // 2, canvas_h // 2,
            image=self.preview_tk, anchor=tk.CENTER
        )

    def save_image(self):
        if not self.original_image:
            messagebox.showwarning("未載入圖片", "請先開啟一張圖片")
            return

        # 預設檔名
        base = os.path.splitext(os.path.basename(self.image_path))[0]
        fmt = self.output_format.get()
        ext = fmt.lower()
        if fmt == "JPEG":
            ext = "jpg"

        default_name = f"{base}_overlay.{ext}"
        path = filedialog.asksaveasfilename(
            title="儲存圖片",
            initialfile=default_name,
            defaultextension=f".{ext}",
            filetypes=[(f"{fmt} 圖片", f"*.{ext}")]
        )
        if not path:
            return

        # 生成最終圖片
        result_img = self.original_image.copy()
        result_img = self.draw_text_on_image(result_img)

        # 如果是 JPEG，轉回 RGB
        if fmt == "JPEG":
            result_img = result_img.convert("RGB")

        result_img.save(path, format=fmt, quality=95)
        self.status_var.set(f"✅ 已儲存: {os.path.basename(path)}")
        messagebox.showinfo("完成", f"圖片已儲存至:\n{path}")


if __name__ == "__main__":
    root = tk.Tk()
    app = PhotoTextOverlayApp(root)
    root.mainloop()
