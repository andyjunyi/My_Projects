"""
KK Lookup Server
Run: python server.py
Then open http://localhost:5001
"""
import json, os, re, sys
from flask import Flask, request, jsonify, send_file
from openai import OpenAI

# ── Load API key from .env if not already in environment ──────────────────────
def _load_dotenv():
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env')
    try:
        with open(path, encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, _, v = line.partition('=')
                    k, v = k.strip(), v.strip().strip('"').strip("'")
                    if k and k not in os.environ:
                        os.environ[k] = v
    except FileNotFoundError:
        pass

_load_dotenv()

_api_key = os.environ.get('DEEPSEEK_API_KEY')

app = Flask(__name__)
client = OpenAI(api_key=_api_key, base_url='https://api.deepseek.com') if _api_key else None
USER_WORDS_FILE = 'user_words.json'

# ── CORS: allow file:// and localhost origins ──────────────────────────────

@app.after_request
def add_cors(response):
    origin = request.headers.get('Origin', '')
    # file:// pages send Origin: null; also allow any localhost port
    if origin in ('null', '') or 'localhost' in origin or '127.0.0.1' in origin:
        response.headers['Access-Control-Allow-Origin'] = origin or '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

@app.route('/api/<path:path>', methods=['OPTIONS'])
def handle_options(path):
    return '', 204

# ── Persistent storage helpers ─────────────────────────────────────────────

def load_user_words():
    try:
        with open(USER_WORDS_FILE, encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

def save_user_words(words):
    with open(USER_WORDS_FILE, 'w', encoding='utf-8') as f:
        json.dump(words, f, ensure_ascii=False, indent=2)

# ── Routes ─────────────────────────────────────────────────────────────────

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/api/user_words')
def get_user_words():
    return jsonify(load_user_words())

@app.route('/api/lookup')
def lookup():
    word = request.args.get('word', '').strip()
    if not word:
        return jsonify({'found': False, 'error': 'empty word'}), 400
    key = word.lower()

    # Check confirmed words first
    uw = load_user_words()
    if key in uw:
        return jsonify({'found': True, 'data': uw[key], 'source': 'confirmed'})

    # Ask Claude
    prompt = (
        f'For the English word "{word}", return ONLY valid JSON with this exact structure:\n'
        '{{"kk":"KK音標","entries":[{{"abbr":"n.","zh":"名詞","mean":"繁體中文"}}]}}\n\n'
        'Rules:\n'
        '- kk: accurate KK phonetic symbols (e.g. ˈæpl)\n'
        '- entries: 1-2 most common PRIMARY parts of speech only\n'
        '- abbr options: n. v. adj. adv. prep. conj. pron. interj. num.\n'
        '- zh must match abbr: n.=名詞, v.=動詞, adj.=形容詞, adv.=副詞, '
        'prep.=介系詞, conj.=連接詞, pron.=代名詞, interj.=感嘆詞, num.=數詞\n'
        '- mean: concise Traditional Chinese translation (繁體中文), max 2 meanings separated by ；\n'
        '- NEVER include derived forms as entries: no 現在分詞, 過去式, 過去分詞, '
        '比較級, 最高級, 第三人稱單數, 名詞複數. '
        'E.g. for "charming" list only adj. entry, not the v. present-participle entry\n'
        '- If not a real English word, return {"error":"not a word"}'
    )

    if client is None:
        return jsonify({'found': False, 'error': '未設定 DEEPSEEK_API_KEY'}), 500

    try:
        resp = client.chat.completions.create(
            model='deepseek-chat',
            max_tokens=256,
            messages=[{'role': 'user', 'content': prompt}]
        )
        text = (resp.choices[0].message.content or '').strip()
        m = re.search(r'\{.*\}', text, re.DOTALL)
        if not m:
            return jsonify({'found': False, 'error': 'parse failed'})
        data = json.loads(m.group())
        if 'error' in data:
            return jsonify({'found': False, 'error': data['error']})
        data['w'] = word
        return jsonify({'found': True, 'data': data, 'source': 'ai'})
    except Exception as e:
        err = str(e)
        if 'auth' in err.lower() or '401' in err or '403' in err:
            return jsonify({'found': False, 'error': '請確認 DEEPSEEK_API_KEY 是否正確'}), 500
        return jsonify({'found': False, 'error': err}), 500

@app.route('/api/confirm', methods=['POST'])
def confirm():
    body = request.json or {}
    word = body.get('word', '').strip()
    data = body.get('data')
    if not word or not data:
        return jsonify({'error': 'missing word or data'}), 400
    uw = load_user_words()
    uw[word.lower()] = data
    save_user_words(uw)
    return jsonify({'ok': True, 'saved': word})

@app.route('/api/delete', methods=['POST'])
def delete_word():
    body = request.json or {}
    word = body.get('word', '').strip().lower()
    if not word:
        return jsonify({'error': 'missing word'}), 400
    uw = load_user_words()
    removed = word in uw
    if removed:
        del uw[word]
        save_user_words(uw)
    return jsonify({'ok': True, 'removed': removed})

# ── Entry point ────────────────────────────────────────────────────────────

if __name__ == '__main__':
    if not os.environ.get('DEEPSEEK_API_KEY'):
        print('\n[警告] 未設定 DEEPSEEK_API_KEY，AI 補字功能將無法使用')
        print('請在環境變數設定後重新啟動\n')
    print('KK 單字查詢伺服器啟動中...')
    print('請開啟瀏覽器前往 http://localhost:5001')
    print('按 Ctrl+C 停止\n')
    app.run(port=5001, debug=False)
