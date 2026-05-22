#!/usr/bin/env python3
"""
Merriam-Webster API 詞類比對腳本
對 multi-POS 單字查 MW 權威詞典，比對資料庫標註是否正確
"""
import json, re, urllib.request, urllib.parse, time, sys
from collections import Counter

API_KEY = "615007e4-2e70-4d73-a284-8a6e309483c8"

BASE = "/mnt/e/My_Projects/單字工具/高中單字KK音標"
JSON_PATH = f"{BASE}/word_data.json"

with open(JSON_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

from nltk.corpus import wordnet

WN_TO_ZH = {'n': '名', 'v': '動', 'a': '形', 's': '形', 'r': '副'}
MW_TO_ZH = {
    'adjective': '形', 'adverb': '副', 'verb': '動', 'noun': '名',
    'preposition': '介', 'conjunction': '連', 'interjection': '感',
    'pronoun': '代', 'article': '冠', 'auxiliary verb': '助',
}

def get_wordnet(word):
    synsets = wordnet.synsets(word)
    if not synsets:
        return set()
    zh = set()
    for s in synsets:
        p = s.pos()
        if p in WN_TO_ZH:
            zh.add(WN_TO_ZH[p])
    return zh

def query_mw(word):
    url = f"https://www.dictionaryapi.com/api/v3/references/collegiate/json/{urllib.parse.quote(word)}?key={API_KEY}"
    try:
        req = urllib.request.urlopen(url, timeout=10)
        result = json.loads(req.read())
        if not result or isinstance(result[0], str):
            return set()
        zh = set()
        for entry in result:
            fl = entry.get('fl', '')
            base_fl = fl.split(' ')[0] if fl else ''
            if base_fl in MW_TO_ZH:
                zh.add(MW_TO_ZH[base_fl])
        return zh
    except Exception as e:
        return set()

# 過濾出 target POS groups
target_groups = {'形副', '副形', '形動', '動形'}
words_to_check = []
for item in data:
    z = item.get('z', '')
    word = item['w']
    if not z:
        continue
    poses = re.findall(r'\((形|名|動|副|介|連|感|代|冠|數|量|助|片)\)', z)
    unique_poses = list(dict.fromkeys(poses))
    pos_str = ''.join(unique_poses)
    if pos_str in target_groups and not any(c in word for c in ' ?!,.') :
        words_to_check.append((word, pos_str, item['z'], item.get('k', '')))

print(f"需查詢 MW 的單字: {len(words_to_check)} 筆\n", flush=True)

results = []
for i, (word, pos_str, z, kk) in enumerate(words_to_check):
    wn = get_wordnet(word)
    mw = query_mw(word)
    
    current_set = set(list(pos_str))
    wn_missing = current_set - wn if wn else set()
    mw_missing = current_set - mw if mw else set()
    
    results.append({
        'word': word, 'kk': kk, 'z': z, 'poses': pos_str,
        'wn_zh': ''.join(sorted(wn)) if wn else '-',
        'mw_zh': ''.join(sorted(mw)) if mw else '-',
        'wn_ok': len(wn_missing) == 0,
        'mw_ok': len(mw_missing) == 0,
        'wn_has': wn is not None and len(wn) > 0,
        'mw_has': mw is not None and len(mw) > 0,
    })
    
    if (i+1) % 25 == 0:
        print(f"  進度: {i+1}/{len(words_to_check)}", flush=True)
    time.sleep(0.2)

# 統計
wn_ok = sum(1 for r in results if r['wn_ok'] and r['wn_has'])
wn_notfound = sum(1 for r in results if not r['wn_has'])
wn_bad = sum(1 for r in results if not r['wn_ok'] and r['wn_has'])
mw_ok = sum(1 for r in results if r['mw_ok'] and r['mw_has'])
mw_notfound = sum(1 for r in results if not r['mw_has'])
mw_bad = sum(1 for r in results if not r['mw_ok'] and r['mw_has'])

print(f"\n=== 比對結果 ===")
print(f"總共檢查: {len(results)} 筆")
print(f"  WordNet OK: {wn_ok} | 有問題: {wn_bad} | 查不到: {wn_notfound}")
print(f"  MW      OK: {mw_ok} | 有問題: {mw_bad} | 查不到: {mw_notfound}")

# 三種結果分類
all_ok = sum(1 for r in results if r['wn_ok'] and r['mw_ok'])
wn_ok_mw_bad = sum(1 for r in results if r['wn_ok'] and not r['mw_ok'] and r['mw_has'])
wn_bad_mw_ok = sum(1 for r in results if not r['wn_ok'] and r['wn_has'] and r['mw_ok'])
both_bad = sum(1 for r in results if not r['wn_ok'] and r['wn_has'] and not r['mw_ok'] and r['mw_has'])
one_notfound = sum(1 for r in results if (not r['wn_has'] or not r['mw_has']))

print(f"\n  兩者都正確: {all_ok}")
print(f"  WN正確但MW有問題: {wn_ok_mw_bad}")
print(f"  WN有問題但MW正確: {wn_bad_mw_ok}")
print(f"  兩者都有問題: {both_bad}")
print(f"  至少一方查不到: {one_notfound}")

# 列出不一致的
print(f"\n=== MW 認為正確但我們之前按 WordNet 改錯的 ===")
reconsider = [r for r in results if r['wn_ok'] and not r['mw_ok'] and r['mw_has']]
print(f"共 {len(reconsider)} 筆")
for r in reconsider:
    print(f"  {r['word']:25s} DB:{r['poses']:4s} WN:{r['wn_zh']:4s} MW:{r['mw_zh']:4s}")

# 輸出結果 JSON
out = {'stats': {
    'total': len(results),
    'all_ok': all_ok, 'wn_ok_mw_bad': wn_ok_mw_bad, 'wn_bad_mw_ok': wn_bad_mw_ok,
    'both_bad': both_bad, 'one_notfound': one_notfound
}, 'results': results}

with open(f'{BASE}/mw_check_result.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False)

print(f"\n✅ 結果已儲存到 mw_check_result.json")
print(f"✅ 完成！")
