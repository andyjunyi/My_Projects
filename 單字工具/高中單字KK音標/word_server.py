"""簡易 Word 匯出 API 伺服器
用法：python3 word_server.py
在 index.html 中加上按鈕，fetch 到 http://localhost:8765/export
傳送搜尋結果的 JSON，回傳 .docx 檔案
"""

import json
import os
from http.server import HTTPServer, BaseHTTPRequestHandler
from docx import Document
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

TEMPLATE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'word_template.docx')


class ExportHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        if self.path == '/export':
            content_len = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_len)
            try:
                data = json.loads(body.decode('utf-8'))
            except Exception:
                self.send_error(400, 'Invalid JSON')
                return

            doc = create_word(data)

            self.send_response(200)
            self.send_header('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
            self.send_header('Content-Disposition', 'attachment; filename="vocabulary.docx"')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()

            doc.save(self.wfile)
        else:
            self.send_error(404)

    def log_message(self, format, *args):
        pass


def _rpr(sz, bold=False, color=None, theme_color=None, theme_tint=None, theme_shade=None):
    """Build w:rPr with Arial Unicode MS for all scripts."""
    rPr = OxmlElement('w:rPr')

    rFonts = OxmlElement('w:rFonts')
    for attr in ('w:ascii', 'w:eastAsia', 'w:hAnsi', 'w:cs'):
        rFonts.set(qn(attr), 'Arial Unicode MS')
    rFonts.set(qn('w:hint'), 'eastAsia')
    rPr.append(rFonts)

    if bold:
        rPr.append(OxmlElement('w:b'))
        rPr.append(OxmlElement('w:bCs'))

    if color:
        c = OxmlElement('w:color')
        c.set(qn('w:val'), color)
        if theme_color:
            c.set(qn('w:themeColor'), theme_color)
        if theme_tint:
            c.set(qn('w:themeTint'), theme_tint)
        if theme_shade:
            c.set(qn('w:themeShade'), theme_shade)
        rPr.append(c)

    for tag in ('w:sz', 'w:szCs'):
        el = OxmlElement(tag)
        el.set(qn('w:val'), str(sz))
        rPr.append(el)

    return rPr


def _run(text, sz, bold=False, color=None, theme_color=None, theme_tint=None, theme_shade=None):
    """Build a complete w:r element."""
    r = OxmlElement('w:r')
    r.append(_rpr(sz, bold, color, theme_color, theme_tint, theme_shade))

    t = OxmlElement('w:t')
    t.text = text
    if text != text.strip():
        t.set('{http://www.w3.org/XML/1998/namespace}space', 'preserve')
    r.append(t)

    return r


def _para_header(word, kk, definition):
    """Line 1: word [kk] (POS) definition — mixed font sizes and colours."""
    p = OxmlElement('w:p')

    if word:
        # 20pt bold blue (theme text2 tint BF)
        p.append(_run(word, 40, bold=True, color='215E99', theme_color='text2', theme_tint='BF'))
        p.append(_run(' ', 32))
    if kk:
        # 18pt orange (theme accent2 shade BF), wrapped in brackets
        p.append(_run(f'[{kk}]', 36, color='BF4E14', theme_color='accent2', theme_shade='BF'))
        p.append(_run(' ', 32))
    if definition:
        # 14pt black
        p.append(_run(definition, 28))

    return p


def _para_example(text):
    """Line 2: example sentence — List Paragraph style with hanging indent."""
    p = OxmlElement('w:p')

    pPr = OxmlElement('w:pPr')

    ps = OxmlElement('w:pStyle')
    ps.set(qn('w:val'), 'a3')  # 清單段落 (List Paragraph)
    pPr.append(ps)

    numPr = OxmlElement('w:numPr')
    ilvl = OxmlElement('w:ilvl')
    ilvl.set(qn('w:val'), '0')
    numId = OxmlElement('w:numId')
    numId.set(qn('w:val'), '2')
    numPr.append(ilvl)
    numPr.append(numId)
    pPr.append(numPr)

    adj = OxmlElement('w:adjustRightInd')
    adj.set(qn('w:val'), '0')
    pPr.append(adj)

    snap = OxmlElement('w:snapToGrid')
    snap.set(qn('w:val'), '0')
    pPr.append(snap)

    spacing = OxmlElement('w:spacing')
    spacing.set(qn('w:line'), '180')
    spacing.set(qn('w:lineRule'), 'auto')
    pPr.append(spacing)

    ind = OxmlElement('w:ind')
    ind.set(qn('w:leftChars'), '100')
    ind.set(qn('w:left'), '580')   # 29pt left
    ind.set(qn('w:hanging'), '340')  # 17pt hanging
    pPr.append(ind)

    p.append(pPr)
    p.append(_run(text, 32))  # 16pt black

    return p


def _para_translation(text):
    """Line 3: Chinese translation — green, 30pt left indent."""
    p = OxmlElement('w:p')

    pPr = OxmlElement('w:pPr')
    ind = OxmlElement('w:ind')
    ind.set(qn('w:leftChars'), '250')
    ind.set(qn('w:left'), '600')  # 30pt
    pPr.append(ind)
    p.append(pPr)

    # 14pt green (theme accent6)
    p.append(_run(text, 28, color='4EA72E', theme_color='accent6'))

    return p


def _para_separator():
    """Empty line with 1pt before / 6pt after spacing between entries."""
    p = OxmlElement('w:p')

    pPr = OxmlElement('w:pPr')
    spacing = OxmlElement('w:spacing')
    spacing.set(qn('w:before'), '20')   # 1pt
    spacing.set(qn('w:after'), '120')   # 6pt
    pPr.append(spacing)
    p.append(pPr)

    return p


def create_word(data):
    doc = Document(TEMPLATE_PATH)

    # Remove existing content paragraphs; keep sectPr (page setup)
    body = doc.element.body
    for child in list(body):
        if child.tag != qn('w:sectPr'):
            body.remove(child)

    def add(elem):
        # Insert before sectPr (always the last element after clearing)
        body.insert(len(body) - 1, elem)

    for item in data:
        w = item.get('w', '')
        k = item.get('k', '')
        z = item.get('z', '')
        e = item.get('e', '')
        ez = item.get('ez', '')

        if w or k or z:
            add(_para_header(w, k, z))
        if e:
            add(_para_example(e))
        if ez:
            add(_para_translation(ez))
        add(_para_separator())

    return doc


if __name__ == '__main__':
    server = HTTPServer(('127.0.0.1', 8765), ExportHandler)
    print('Word export server running on http://127.0.0.1:8765')
    print(f'Template: {TEMPLATE_PATH}')
    print('Press Ctrl+C to stop')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()
