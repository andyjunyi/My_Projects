# 照片文字疊加工具 — 打包說明

## 在 Windows 上打包

### 1. 確認 Python 已安裝
打開 cmd 或 PowerShell：
```cmd
python --version
pip --version
```

### 2. 安裝所需套件
```cmd
pip install pillow pyinstaller
```

### 3. 執行打包
打開 cmd 到程式所在目錄：
```cmd
cd /d E:\My_Projects\photo-text-overlay
pyinstaller --onefile --windowed --name PhotoTextOverlay photo_text_overlay.py
```

### 4. 完成
打包後的 `.exe` 在 `dist\PhotoTextOverlay.exe`，可直接複製到桌面或任何位置使用。

---

## 使用方法
1. 開啟程式 → 點「開啟圖片」
2. 右側面板：日期會自動讀取 EXIF / 可手動修改
3. 輸入地點、文字敘述
4. 選擇文字位置（左上/右上/左下/右下/中間）
5. 調整字型大小、顏色
6. 點「更新預覽」看效果
7. 點「產出圖片」存檔
