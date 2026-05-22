#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate vocab_search.html from 935-400 國中單字.xlsx and 114P_English.pdf
"""

import re
import json
import openpyxl
from pdfminer.high_level import extract_text

# ── 1. Read Excel ─────────────────────────────────────────────────────────────
wb = openpyxl.load_workbook(r'E:\ClaudeCode Projects\935 Voc\935-400 國中單字.xlsx')
ws = wb.active

vocab_935 = {}   # word.lower() → dict
for row in ws.iter_rows(min_row=2, values_only=True):
    word = row[0]
    if word is None:
        continue
    word = str(word).strip()
    zh    = str(row[1]).strip() if row[1] else ''
    ex_en = str(row[2]).strip() if row[2] else ''
    ex_zh = str(row[3]).strip() if row[3] else ''
    cnt   = int(row[4]) if row[4] is not None else 0
    yrs   = int(row[5]) if row[5] is not None else 0
    lvl   = str(row[6]).strip() if row[6] else ''
    core300  = True if row[7] == '✓' else False
    gd450    = True if row[8] == '✓' else False
    vocab_935[word.lower()] = {
        'word':    word,
        'zh':      zh,
        'ex_en':   ex_en,
        'ex_zh':   ex_zh,
        'cnt':     cnt,
        'yrs':     yrs,
        'lvl':     lvl,
        'core300': core300,
        'gd450':   gd450,
        'in935':   True,
        'in114':   False,
    }

print(f'Excel: {len(vocab_935)} words loaded')

# ── 2. Extract words from PDF ─────────────────────────────────────────────────
pdf_text = extract_text(r'E:\ClaudeCode Projects\935 Voc\114P_English.pdf')

# pull out all alphabetic tokens
raw_tokens = re.findall(r"[a-zA-Z]+(?:[''][a-zA-Z]+)*", pdf_text)
pdf_words_raw = set(t.lower() for t in raw_tokens)

ignore = {
    'a','an','the','in','on','at','to','for','of','by','as','up','out',
    'it','its','he','she','we','you','they','my','his','her','our','their',
    'this','that','these','those','who','which','what','when','where','how',
    'why','i','me','us','him','them','be','am','is','are','was','were',
    'been','being','have','has','had','having','do','does','did','done',
    'doing','will','would','could','should','may','might','must','shall',
    'can','cannot','not','no','nor','so','yet','but','and','or','if','than',
    'then','too','very','just','more','most','much','many','few','all',
    'some','any','each','both','other','another','with','from','into','onto',
    'about','after','before','during','until','while','because','although',
    'however','though','since','there','here','only','also','even','still',
    'never','always','rex','libby','larson','cameron','ariely','stacy',
    'jenny','linda','mark','jerry','mia','daphne','cindy','lena','john',
    'jo','jane','dad','dan','melisa','tom','ivy','jeff','dennis','alisa',
    'wu','ikea','rolling','acres','easter','island','uk','tv','white',
    'lake','curry','stephen','god','p','m','pm','ok','re','ll','mr','mrs',
    'mainly','couldn','didn','doesn','wouldn','won','isn','aren','weren',
    'haven','hadn','mine','your','himself','themselves','ourselves',
    'everyone','everybody','anyone','someone','something','nothing','anytime'
}

# ── 3. Lemmatize PDF words ────────────────────────────────────────────────────
import nltk
try:
    from nltk.stem import WordNetLemmatizer
    from nltk.corpus import wordnet
    # ensure resources are available
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('wordnet')
    nltk.download('omw-1.4')
    from nltk.stem import WordNetLemmatizer

lemmatizer = WordNetLemmatizer()

def lemmatize_all(token):
    """Return set of base forms for a token across all POS."""
    forms = {token}
    for pos in ('n', 'v', 'a', 'r', 's'):
        forms.add(lemmatizer.lemmatize(token, pos=pos))
    return forms

# Build set: for each PDF token, gather all base lemmas
pdf_lemmas = set()   # all lemma forms found in PDF
pdf_token_to_lemmas = {}  # token → {lemmas}
for tok in pdf_words_raw:
    if tok in ignore or len(tok) <= 1:
        continue
    lems = lemmatize_all(tok)
    pdf_lemmas.update(lems)
    pdf_token_to_lemmas[tok] = lems

print(f'PDF: {len(pdf_words_raw)} raw tokens, {len(pdf_lemmas)} unique lemmas after filtering')

# ── 4. Mark 935 words that appear in 114 exam ────────────────────────────────
in114_count = 0
for key, data in vocab_935.items():
    word_lower = data['word'].lower()
    # check if this word (or any of its forms) appears in pdf_lemmas
    if word_lower in pdf_lemmas:
        data['in114'] = True
        in114_count += 1

print(f'935 words also in 114 exam: {in114_count}')

# ── 5. Extra words from 114 exam NOT in 935 list ─────────────────────────────
extra_known = {
    'cabinet':    {'zh': '(n.) 櫃子',                     'ex_en': '', 'ex_zh': ''},
    'camp':       {'zh': '(n.) 營地；夏令營',              'ex_en': '', 'ex_zh': ''},
    'campground': {'zh': '(n.) 露營地',                    'ex_en': '', 'ex_zh': ''},
    'cookie':     {'zh': '(n.) 餅乾',                      'ex_en': '', 'ex_zh': ''},
    'doctor':     {'zh': '(n.) 醫生',                      'ex_en': '', 'ex_zh': ''},
    'effect':     {'zh': '(n.) 效應；效果',                'ex_en': '', 'ex_zh': ''},
    'electricity':{'zh': '(n.) 電力；電',                  'ex_en': '', 'ex_zh': ''},
    'elementary': {'zh': '(adj.) 初級的；基礎的',          'ex_en': '', 'ex_zh': ''},
    'grandchild': {'zh': '(n.) 孫子女',                    'ex_en': '', 'ex_zh': ''},
    'grandparent':{'zh': '(n.) 祖父母',                    'ex_en': '', 'ex_zh': ''},
    'handsome':   {'zh': '(adj.) 英俊的',                  'ex_en': '', 'ex_zh': ''},
    'mop':        {'zh': '(v.) 拖（地板）',                'ex_en': '', 'ex_zh': ''},
    'online':     {'zh': '(adj./adv.) 線上的',             'ex_en': '', 'ex_zh': ''},
    'origami':    {'zh': '(n.) 摺紙',                      'ex_en': '', 'ex_zh': ''},
    'paragraph':  {'zh': '(n.) 段落',                      'ex_en': '', 'ex_zh': ''},
    'police':     {'zh': '(n.) 警察',                      'ex_en': '', 'ex_zh': ''},
    'rainwater':  {'zh': '(n.) 雨水',                      'ex_en': '', 'ex_zh': ''},
    'sacrifice':  {'zh': '(n./v.) 犧牲',                   'ex_en': '', 'ex_zh': ''},
    'statue':     {'zh': '(n.) 雕像',                      'ex_en': '', 'ex_zh': ''},
    'zone':       {'zh': '(n.) 區域；地帶',                'ex_en': '', 'ex_zh': ''},
}

added_extra = 0
for w, info in extra_known.items():
    if w not in vocab_935:
        vocab_935[w] = {
            'word':    w,
            'zh':      info['zh'],
            'ex_en':   info['ex_en'],
            'ex_zh':   info['ex_zh'],
            'cnt':     0,
            'yrs':     0,
            'lvl':     '',
            'core300': False,
            'gd450':   False,
            'in935':   False,
            'in114':   True,
        }
        added_extra += 1
    else:
        # already in 935, just mark in114
        vocab_935[w]['in114'] = True

print(f'Extra 114 words added (not in 935): {added_extra}')

# ── 6. Build POS and clean translation ───────────────────────────────────────
pos_pattern = re.compile(r'^\(([^)]+)\)\s*(.*)', re.DOTALL)

def parse_zh(zh):
    m = pos_pattern.match(zh)
    if m:
        return '(' + m.group(1) + ')', m.group(2).strip()
    return '', zh

# ── 7. Assemble JS data array ────────────────────────────────────────────────
js_rows = []
for key, d in vocab_935.items():
    pos_tag, zh_clean = parse_zh(d['zh'])
    js_rows.append({
        'word':    d['word'],
        'pos':     pos_tag,
        'zh':      zh_clean,
        'zh_full': d['zh'],
        'ex_en':   d['ex_en'],
        'ex_zh':   d['ex_zh'],
        'cnt':     d['cnt'],
        'yrs':     d['yrs'],
        'lvl':     d['lvl'],
        'core300': d['core300'],
        'gd450':   d['gd450'],
        'in935':   d['in935'],
        'in114':   d['in114'],
    })

# Sort by cnt descending for default view
js_rows.sort(key=lambda x: (-x['cnt'], x['word']))

js_data = json.dumps(js_rows, ensure_ascii=False, separators=(',', ':'))
print(f'Total records in JS: {len(js_rows)}')

# ── 8. Generate HTML ──────────────────────────────────────────────────────────
html = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>935單字搜尋 — 105-114年國中教育會考</title>
<style>
*,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f1f5f9;color:#1e293b;min-height:100vh}}
header{{background:#2563eb;color:#fff;padding:20px 24px 16px}}
header h1{{font-size:1.4rem;font-weight:700;margin-bottom:4px}}
header p{{font-size:.85rem;opacity:.85}}
.container{{max-width:1400px;margin:0 auto;padding:20px 16px}}
.search-wrap{{position:sticky;top:0;z-index:100;background:#f1f5f9;padding:12px 0 8px}}
.search-box{{display:flex;gap:10px;align-items:center}}
#searchInput{{flex:1;height:48px;padding:0 18px;border:2px solid #cbd5e1;border-radius:12px;font-size:1rem;outline:none;transition:border-color .2s,box-shadow .2s;background:#fff}}
#searchInput:focus{{border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.15)}}
#clearBtn{{height:48px;padding:0 18px;background:#e2e8f0;border:none;border-radius:12px;cursor:pointer;font-size:.9rem;color:#475569;transition:background .2s}}
#clearBtn:hover{{background:#cbd5e1}}
.meta{{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:12px}}
.result-count{{font-size:.9rem;color:#64748b}}
.legend{{display:flex;gap:8px;flex-wrap:wrap}}
.badge{{display:inline-flex;align-items:center;padding:2px 9px;border-radius:20px;font-size:.75rem;font-weight:600;white-space:nowrap}}
.badge-core{{background:#dcfce7;color:#166534}}
.badge-gd{{background:#ccfbf1;color:#0f766e}}
.badge-exam{{background:#fed7aa;color:#9a3412}}
.badge-extra{{background:#fee2e2;color:#991b1b}}
.badge-pos{{background:#f1f5f9;color:#64748b;border:1px solid #e2e8f0}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}}
.card{{background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 1px 3px rgba(0,0,0,.08);transition:box-shadow .2s,transform .15s;cursor:default;display:flex;flex-direction:column;gap:10px}}
.card:hover{{box-shadow:0 4px 16px rgba(37,99,235,.12);transform:translateY(-1px)}}
.card-head{{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;flex-wrap:wrap}}
.word{{font-size:1.4rem;font-weight:700;color:#1e293b;letter-spacing:.02em}}
.badges{{display:flex;gap:5px;flex-wrap:wrap}}
.card-zh{{font-size:1rem;color:#334155}}
.stats{{display:flex;gap:14px;flex-wrap:wrap;font-size:.82rem;color:#64748b;border-top:1px solid #f1f5f9;padding-top:8px;margin-top:2px}}
.stat{{display:flex;align-items:center;gap:4px}}
.stat-icon{{font-size:.9rem}}
.ex-toggle{{background:none;border:1px solid #e2e8f0;border-radius:8px;padding:4px 10px;font-size:.78rem;color:#64748b;cursor:pointer;align-self:flex-start;transition:all .2s}}
.ex-toggle:hover{{background:#f8fafc;border-color:#2563eb;color:#2563eb}}
.ex-block{{display:none;border-left:3px solid #2563eb;padding:8px 12px;margin-top:2px;background:#f8fafc;border-radius:0 8px 8px 0}}
.ex-block.open{{display:block}}
.ex-en{{font-size:.88rem;color:#1e293b;margin-bottom:4px;font-style:italic}}
.ex-zh{{font-size:.84rem;color:#64748b}}
.empty{{text-align:center;padding:60px 20px;color:#94a3b8}}
.empty p{{font-size:1.1rem;margin-bottom:8px}}
.divider{{height:1px;background:#e2e8f0;margin:20px 0}}
@media(max-width:640px){{
  .grid{{grid-template-columns:1fr}}
  header h1{{font-size:1.2rem}}
}}
</style>
</head>
<body>
<header>
  <h1>935單字搜尋</h1>
  <p>資料來源：105-114年國中教育會考，共10年 | 收錄935個核心單字 + 114年會考額外單字</p>
</header>
<div class="container">
  <div class="search-wrap">
    <div class="search-box">
      <input id="searchInput" type="text" placeholder="輸入英文單字搜尋…" autocomplete="off" spellcheck="false">
      <button id="clearBtn" onclick="clearSearch()">清除</button>
    </div>
  </div>
  <div class="meta">
    <span class="result-count" id="resultCount"></span>
    <div class="legend">
      <span class="badge badge-core">核心300</span>
      <span class="badge badge-gd">鞏固450</span>
      <span class="badge badge-exam">114年會考</span>
      <span class="badge badge-extra">超出935表</span>
    </div>
  </div>
  <div class="grid" id="grid"></div>
</div>

<script>
const DATA = {js_data};

function parsePOS(zh_full){{
  const m = zh_full.match(/^\\(([^)]+)\\)\\s*(.*)/s);
  if(m) return {{pos:'('+m[1]+')', zh: m[2].trim()}};
  return {{pos:'', zh: zh_full}};
}}

function makeCard(d,idx){{
  const hasEx = d.ex_en || d.ex_zh;
  const badges = [];
  if(d.core300) badges.push('<span class="badge badge-core">核心300</span>');
  if(d.gd450)   badges.push('<span class="badge badge-gd">鞏固450</span>');
  if(d.in114)   badges.push('<span class="badge badge-exam">114年會考</span>');
  if(!d.in935)  badges.push('<span class="badge badge-extra">超出935表</span>');
  const badgeHtml = badges.length ? `<div class="badges">${{badges.join('')}}</div>` : '';
  const posHtml = d.pos ? `<span class="badge badge-pos">${{d.pos}}</span>` : '';
  const yrsHtml = d.yrs > 0 ? `出現${{d.yrs}}年（105-114年共10年）` : '—';
  const cntHtml = d.cnt > 0 ? `共${{d.cnt}}次` : '—';
  const exBtn = hasEx ? `<button class="ex-toggle" onclick="toggleEx(this)">例句 ▾</button>` : '';
  const exBlock = hasEx
    ? `<div class="ex-block">
         ${{d.ex_en ? `<div class="ex-en">${{d.ex_en}}</div>` : ''}}
         ${{d.ex_zh ? `<div class="ex-zh">${{d.ex_zh}}</div>` : ''}}
       </div>`
    : '';
  return `<div class="card">
    <div class="card-head">
      <span class="word">${{d.word}}</span>
      ${{badgeHtml}}
    </div>
    <div>${{posHtml}} <span class="card-zh">${{d.zh}}</span></div>
    <div class="stats">
      <span class="stat"><span class="stat-icon">📊</span> 出現次數：${{cntHtml}}</span>
      <span class="stat"><span class="stat-icon">📅</span> ${{yrsHtml}}</span>
    </div>
    ${{exBtn}}
    ${{exBlock}}
  </div>`;
}}

function toggleEx(btn){{
  const block = btn.nextElementSibling;
  const open = block.classList.toggle('open');
  btn.textContent = open ? '例句 ▴' : '例句 ▾';
}}

function clearSearch(){{
  document.getElementById('searchInput').value='';
  render('');
}}

let debounceTimer;
document.getElementById('searchInput').addEventListener('input', function(){{
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(()=> render(this.value.trim().toLowerCase()), 120);
}});

function render(q){{
  const grid = document.getElementById('grid');
  const countEl = document.getElementById('resultCount');
  let results;
  if(!q){{
    // browse mode: top 50 by 出現次數
    results = DATA.slice(0,50);
    countEl.textContent = `顯示出現次數最高的50筆（共${{DATA.length}}筆）`;
  }} else {{
    results = DATA.filter(d => d.word.toLowerCase().includes(q) || d.zh.toLowerCase().includes(q) || d.zh_full.toLowerCase().includes(q));
    countEl.textContent = `找到 ${{results.length}} 筆結果`;
  }}
  if(results.length===0){{
    grid.innerHTML='<div class="empty"><p>找不到相符的單字</p><span>請試試其他關鍵字</span></div>';
    return;
  }}
  grid.innerHTML = results.map((d,i)=>makeCard(d,i)).join('');
}}

render('');
</script>
</body>
</html>"""

out_path = r'E:\ClaudeCode Projects\935 Voc\vocab_search.html'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(html)

print(f'\nDone! HTML written to: {out_path}')
import os
size_kb = os.path.getsize(out_path) / 1024
print(f'File size: {size_kb:.1f} KB')
