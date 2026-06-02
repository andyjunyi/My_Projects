"""
build_projects_data.py
======================
掃描 E:\\My_Projects 目錄結構，產生 projects_data.json。
讓 index.html 可以動態載入並顯示每個專案的完整檔案列表。

用法：
  python build_projects_data.py
  (會在 script 同目錄下產生 projects_data.json)
"""

import os, json, datetime, mimetypes, fnmatch

# ─── 設定 ────────────────────────────────────────────────────

ROOT = r"E:\My_Projects"
if os.path.exists("/mnt/"):
    ROOT = "/mnt/e/My_Projects"

OUTPUT  = os.path.join(ROOT, "projects_data.json")
CATEGORIES_FILE = os.path.join(ROOT, "categories.json")  # 可選分類覆蓋

# 排除的資料夾/檔案
EXCLUDE_DIRS = {".git", "__pycache__", "node_modules", "bin", "obj", ".hermes"}
EXCLUDE_FILES = {".DS_Store", "Thumbs.db"}
EXCLUDE_PATTERNS = ["*.pyc"]

# 檔案類別對應（用於圖示）
FILE_CATEGORIES = {
    # 程式碼
    ".py":   "code",    ".pyw":  "code",
    ".js":   "code",    ".ts":   "code",
    ".java": "code",    ".c":    "code",
    ".cpp":  "code",    ".h":    "code",
    ".rb":   "code",    ".go":   "code",
    ".rs":   "code",    ".sh":   "code",
    ".bat":  "code",    ".ps1":  "code",
    # 網頁
    ".html": "web",     ".css":  "web",
    ".scss": "web",     ".sass": "web",
    # 資料
    ".json": "data",    ".xml":  "data",
    ".yaml": "data",    ".yml":  "data",
    ".csv":  "data",    ".toml": "data",
    ".ini":  "data",    ".cfg":  "data",
    # 文件
    ".md":   "doc",     ".txt":  "doc",
    ".pdf":  "doc",     ".docx": "doc",
    ".xlsx": "doc",     ".pptx": "doc",
    ".doc":  "doc",     ".xls":  "doc",
    # 圖片
    ".png":  "image",   ".jpg":  "image",
    ".jpeg": "image",   ".gif":  "image",
    ".svg":  "image",   ".webp": "image",
    ".ico":  "image",   ".bmp":  "image",
    # 影片
    ".mp4":  "video",   ".mov":  "video",
    ".avi":  "video",   ".mkv":  "video",
    # 音訊
    ".mp3":  "audio",   ".wav":  "audio",
    ".ogg":  "audio",
    # 壓縮檔
    ".zip":  "archive", ".rar":  "archive",
    ".tar":  "archive", ".gz":   "archive",
    ".7z":   "archive",
    # 設定
    ".env":  "config",  ".gitignore": "config",
    ".gitattributes": "config",
}

ICONS = {
    "code":    "📄", "web":     "🌐",
    "data":    "📊", "doc":     "📝",
    "image":   "🖼️", "video":    "🎬",
    "audio":   "🎵", "archive": "📦",
    "config":  "⚙️", "folder":  "📁",
    "default": "📄",
}


def fmt_size(size):
    for unit in ("B", "KB", "MB", "GB"):
        if size < 1024:
            if unit == "B":
                return f"{size}B"
            return f"{size:.1f}{unit}" if size >= 100 else f"{size:.1f}{unit}"
        size /= 1024
    return f"{size:.1f}TB"


def should_exclude(name, is_dir=False):
    if is_dir and name in EXCLUDE_DIRS:
        return True
    if not is_dir and name in EXCLUDE_FILES:
        return True
    for pat in EXCLUDE_PATTERNS:
        if fnmatch.fnmatch(name, pat):
            return True
    return False


def scan_dir(path, depth=0):
    """掃描目錄，回傳檔案列表與子目錄列表。"""
    if depth > 6:  # 防止過深
        return {"error": "too_deep", "files": [], "dirs": []}

    try:
        items = sorted(os.listdir(path))
    except PermissionError:
        return {"error": "permission", "files": [], "dirs": []}

    files = []
    dirs = []

    for name in items:
        full = os.path.join(path, name)
        if should_exclude(name, is_dir=os.path.isdir(full)):
            continue

        try:
            stat = os.stat(full)
        except OSError:
            continue

        if os.path.isfile(full):
            ext = os.path.splitext(name)[1].lower()
            cat = FILE_CATEGORIES.get(ext, FILE_CATEGORIES.get(name, "default"))
            icon = ICONS.get(cat, ICONS["default"])
            mtime = datetime.datetime.fromtimestamp(stat.st_mtime).strftime("%Y-%m-%d %H:%M")

            files.append({
                "n": name,
                "s": fmt_size(stat.st_size),
                "b": stat.st_size,  # bytes for sorting
                "m": mtime,
                "t": cat,
                "i": icon,
                "e": ext,
            })
        elif os.path.isdir(full):
            sub = scan_dir(full, depth + 1)
            sub_files = sub.get("files", [])
            sub_dirs = sub.get("dirs", [])
            all_count = len(sub_files) + len(sub_dirs)
            mtime = datetime.datetime.fromtimestamp(stat.st_mtime).strftime("%Y-%m-%d %H:%M")

            dirs.append({
                "n": name,
                "m": mtime,
                "c": sub,      # children
                "fc": all_count,  # file count
                "i": ICONS["folder"],
            })

    return {"files": files, "dirs": dirs}


def get_readme(path):
    """嘗試讀取 README 的前幾行作為專案簡介。"""
    for name in ("README.md", "README.txt", "README", "readme.md"):
        rp = os.path.join(path, name)
        if os.path.exists(rp):
            try:
                with open(rp, "r", encoding="utf-8", errors="ignore") as f:
                    lines = f.read().strip().split("\n")[:5]
                    desc = " ".join(l.strip() for l in lines if l.strip() and not l.startswith("#"))
                    return desc[:200]
            except: pass
    return ""


def main():
    projects = []
    total_files = 0

    for name in sorted(os.listdir(ROOT)):
        full = os.path.join(ROOT, name)
        if not os.path.isdir(full) or name.startswith("."):
            continue

        # 掃描目錄結構
        content = scan_dir(full)
        files = content.get("files", [])
        dirs = content.get("dirs", [])
        fc = len(files) + sum(d.get("fc", 0) for d in dirs)
        total_files += fc

        # 看有沒有 README
        desc = get_readme(full)

        # 看有沒有 index.html（表示是網頁專案）
        has_website = any(f["n"] == "index.html" for f in files) or \
                      any(os.path.exists(os.path.join(full, d["n"], "index.html"))
                          for d in dirs)

        # 統計各類型檔案數量
        type_count = {}
        for f in files:
            t = f["t"]
            type_count[t] = type_count.get(t, 0) + 1
        for d in dirs:
            for f in d["c"].get("files", []):
                t = f["t"]
                type_count[t] = type_count.get(t, 0) + 1

        # 取得最後修改時間（取最近檔案）
        latest = max(
            [f["m"] for f in files] +
            [d["m"] for d in dirs] +
            [datetime.datetime.fromtimestamp(
                os.path.getmtime(full)
            ).strftime("%Y-%m-%d %H:%M")]
        )

        # 取得資料夾大小（粗略，只算頂層檔案）
        total_kb = sum(f["b"] for f in files) / 1024

        projects.append({
            "n": name,
            "d": desc or "",
            "c": content,       # files + dirs tree
            "fc": fc,
            "tc": type_count,
            "wh": has_website,
            "lm": latest,
            "kb": int(total_kb),
        })

    # 排序：有網站的優先，再來依名稱
    projects.sort(key=lambda p: (not p["wh"], p["n"]))

    output = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "total_projects": len(projects),
        "total_files": total_files,
        "projects": projects,
    }

    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"✅ 掃描完成！")
    print(f"   專案數: {len(projects)}")
    print(f"   檔案數: {total_files}")
    print(f"   輸出: {OUTPUT}")


if __name__ == "__main__":
    main()
