#!/usr/bin/env python3
"""
KK 音標同步腳本
從修改記錄檔 (tsv) 讀取變更 → 更新 word_list.xlsx → 重新產生所有輸出檔

使用方式：
  1. 在網頁上修改 KK 音標後，點「同步」→「複製」
  2. 將內容貼到 changes.tsv
  3. 執行 python3 sync_kk.py
  4. 或直接：python3 sync_kk.py < changes.txt

輸入格式（Tab 分隔）：
  單字\t原音標\t新音標
  conference\t'kɑnfɚəns\t'kɑnfərəns
"""

import sys, os, json, re

BASE = os.path.dirname(os.path.abspath(__file__))
XLSX_PATH = os.path.join(BASE, "word_list.xlsx")
JSON_PATH = os.path.join(BASE, "word_data.json")

def read_changes():
    """從 stdin 或參數讀取修改記錄"""
    changes = []
    for line in sys.stdin:
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        parts = line.split('\t')
        if len(parts) >= 3:
            word = parts[0].strip()
            new_kk = parts[2].strip()
            changes.append((word, new_kk))
    return changes

def update_xlsx(changes):
    """更新 Excel 中的 KK 音標"""
    from openpyxl import load_workbook
    
    wb = load_workbook(XLSX_PATH)
    ws = wb.active
    
    word_col = 1   # B column
    kk_col = 3     # D column
    
    updated = 0
    not_found = []
    
    for word, new_kk in changes:
        found = False
        for row in ws.iter_rows(min_row=2):
            cell_word = row[word_col].value
            if cell_word and str(cell_word).strip() == word:
                row[kk_col].value = new_kk
                updated += 1
                found = True
                break
        if not found:
            not_found.append(word)
    
    wb.save(XLSX_PATH)
    return updated, not_found

def regenerate_json():
    """從 Excel 重新產生 word_data.json"""
    from openpyxl import load_workbook
    
    wb = load_workbook(XLSX_PATH, read_only=True)
    ws = wb.active
    
    words = []
    for row in ws.iter_rows(min_row=2, values_only=True):
        word = row[1]
        if word is None:
            continue
        item = {
            "w": str(word) if word else "",
            "k": str(row[3]) if row[3] else "",
            "z": str(row[4]) if row[4] else "",
            "e": str(row[5]) if row[5] else "",
            "ez": str(row[6]) if row[6] else "",
            "l": str(row[2]) if row[2] else "",
            "c": str(row[7]) if row[7] else "",
        }
        words.append(item)
    
    wb.close()
    
    with open(JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(words, f, ensure_ascii=False, separators=(',', ':'))
    
    return len(words)

def sync_export_files():
    """同步更新到 export/ 目錄的 word_list.json/csv"""
    from openpyxl import load_workbook
    import csv
    
    EX_PORT = os.path.join(os.path.dirname(BASE), "Voc_15000", "export")
    
    wb = load_workbook(XLSX_PATH, read_only=True)
    ws = wb.active
    
    # 讀取所有資料
    headers = []
    for cell in next(ws.iter_rows(min_row=1, max_row=1)):
        headers.append(cell.value)
    
    rows = []
    for row in ws.iter_rows(min_row=2, values_only=True):
        rows.append(row)
    
    wb.close()
    
    # 輸出 word_list.json
    full_json = []
    for row in rows:
        item = {}
        for i, h in enumerate(headers):
            item[h] = str(row[i]) if row[i] else ''
        full_json.append(item)
    
    if os.path.exists(EX_PORT):
        with open(os.path.join(EX_PORT, 'word_list.json'), 'w', encoding='utf-8') as f:
            json.dump(full_json, f, ensure_ascii=False)
        
        with open(os.path.join(EX_PORT, 'word_list_pretty.json'), 'w', encoding='utf-8') as f:
            json.dump(full_json, f, ensure_ascii=False, indent=2)
        
        # 輸出 CSV
        with open(os.path.join(EX_PORT, 'word_list.csv'), 'w', encoding='utf-8-sig', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(headers)
            for row in rows:
                writer.writerow(row)
    
    return os.path.exists(EX_PORT)

def main():
    changes = read_changes()
    
    if not changes:
        print("❌ 沒有讀取到修改記錄")
        print("用法：python3 sync_kk.py < changes.tsv")
        print("  或將修改內容 pipe 進來")
        sys.exit(1)
    
    print(f"📋 讀取到 {len(changes)} 筆修改")
    for w, k in changes:
        print(f"   {w:20s} → {k}")
    
    # Step 1: 更新 Excel
    print("\n🔧 更新 word_list.xlsx...")
    updated, not_found = update_xlsx(changes)
    print(f"   ✅ 已更新 {updated} 筆")
    if not_found:
        print(f"   ⚠️ 未找到：{', '.join(not_found)}")
    
    # Step 2: 重新產生 JSON
    print("\n🔄 重新產生 word_data.json...")
    count = regenerate_json()
    print(f"   ✅ 已輸出 {count} 筆")
    
    # Step 3: 同步 export/
    print("\n🔄 同步到 export/ 目錄...")
    exported = sync_export_files()
    if exported:
        print(f"   ✅ word_list.json / csv 已更新")
    else:
        print(f"   ⚪ export/ 目錄不存在，跳過")
    
    print("\n✅ 全部完成！")

if __name__ == '__main__':
    main()
