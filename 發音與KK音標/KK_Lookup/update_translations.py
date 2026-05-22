"""
Update Chinese translations in 國中935單.xlsx
Rules:
- If a word has 2+ common meanings, list the top 2
- If a word has only 1 meaning but has another common one, add it
- If a word has 2+ POS, list 2 POS, max 2 translations each
"""
import sys
import io
import json
import time
import os
import anthropic

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SYSTEM_PROMPT = """你是國中英語教材專家。你的任務是將英文單字的中文翻譯格式化，遵守以下規則：

格式規則：
1. 詞類標記用中文：(名)(動)(形)(副)(介)(連)(助)(限)(感)
2. 如果一個單字有兩個以上常用意思，列出最常用的兩個，用「；」分隔
3. 如果目前只有一個意思，但該單字還有其他常用意思，補上第二個
4. 如果一個單字有兩個以上詞類，列出兩個詞類，每個詞類的中譯最多兩個
5. 中譯要精簡，適合國中生程度
6. 不要加括號說明（除非原本就有，例如：(使)）
7. 不同詞類之間用空格分隔，例如：(動) 做；製作 (名) 品牌

回傳格式：JSON 陣列，每個元素為 {"word": "英文單字", "zh": "中文翻譯"}
只回傳 JSON，不要有其他說明文字。"""

def process_batch(client, batch):
    words_text = "\n".join([f'{i+1}. {item["word"]} (目前: {item["current"]})' for i, item in enumerate(batch)])

    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=4000,
        system=SYSTEM_PROMPT,
        messages=[{
            "role": "user",
            "content": f"請更新以下單字的中文翻譯：\n\n{words_text}\n\n回傳 JSON 陣列格式。"
        }]
    )

    text = response.content[0].text.strip()
    # Strip markdown code blocks if present
    if text.startswith('```'):
        text = text.split('\n', 1)[1]
        if text.endswith('```'):
            text = text.rsplit('```', 1)[0]

    return json.loads(text)


def main():
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        print("Error: ANTHROPIC_API_KEY not set")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)

    with open('words_to_process.json', encoding='utf-8') as f:
        words = json.load(f)

    # Load existing results if any (resume support)
    results_file = 'translation_results.json'
    if os.path.exists(results_file):
        with open(results_file, encoding='utf-8') as f:
            results = json.load(f)
        print(f'Resuming: {len(results)} words already processed')
    else:
        results = {}

    BATCH_SIZE = 40
    total = len(words)

    for start in range(0, total, BATCH_SIZE):
        batch = words[start:start + BATCH_SIZE]

        # Skip if all in batch already processed
        if all(item['word'] in results for item in batch):
            print(f'Batch {start//BATCH_SIZE + 1}: already done, skipping')
            continue

        print(f'Processing batch {start//BATCH_SIZE + 1}/{(total + BATCH_SIZE - 1)//BATCH_SIZE} (words {start+1}-{min(start+BATCH_SIZE, total)})...')

        try:
            batch_results = process_batch(client, batch)
            for item in batch_results:
                results[item['word']] = item['zh']

            # Save after each batch
            with open(results_file, 'w', encoding='utf-8') as f:
                json.dump(results, f, ensure_ascii=False, indent=2)

            print(f'  Done. Total processed: {len(results)}/{total}')
            time.sleep(1)  # Rate limit buffer

        except Exception as e:
            print(f'  Error in batch: {e}')
            print(f'  Saving progress and retrying next run...')
            with open(results_file, 'w', encoding='utf-8') as f:
                json.dump(results, f, ensure_ascii=False, indent=2)
            break

    print(f'\nProcessing complete: {len(results)}/{total} words')

    if len(results) == total:
        print('All words processed! Run apply_translations.py to update Excel.')
    else:
        print(f'Not complete yet ({total - len(results)} remaining). Re-run to continue.')


if __name__ == '__main__':
    main()
