"""
Apply translation results from translation_results.json back to Excel
"""
import sys
import io
import json
import openpyxl

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


def main():
    with open('translation_results.json', encoding='utf-8') as f:
        results = json.load(f)

    wb = openpyxl.load_workbook('國中935單.xlsx')

    for sheet_name in ['935']:
        ws = wb[sheet_name]
        updated = 0
        skipped = 0

        for row in ws.iter_rows(min_row=2):
            word_cell = row[1]   # col B
            zh_d_cell = row[3]   # col D
            zh_n_cell = row[13]  # col N

            word = word_cell.value
            if not word or word not in results:
                skipped += 1
                continue

            new_zh = results[word]
            old_zh = zh_d_cell.value

            if old_zh != new_zh:
                zh_d_cell.value = new_zh
                zh_n_cell.value = new_zh
                updated += 1

        print(f'Sheet "{sheet_name}": {updated} rows updated, {skipped} skipped')

    wb.save('國中935單.xlsx')
    print('Saved to 國中935單.xlsx')


if __name__ == '__main__':
    main()
