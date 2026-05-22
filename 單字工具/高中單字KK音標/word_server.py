"""簡易 Word 匯出 API 伺服器
用法：python3 word_server.py
在 index.html 中加上按鈕，fetch 到 http://localhost:8765/export
傳送搜尋結果的 JSON，回傳 .docx 檔案
"""

import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from docx import Document
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from urllib.parse import urlparse, parse_qs

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
            except:
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
        pass  # 安靜模式

def create_word(data):
    doc = Document()
    
    # 設定預設字型
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Calibri'
    font.size = Pt(11)
    
    for item in data:
        w = item.get('w', '')
        k = item.get('k', '')
        z = item.get('z', '')
        e = item.get('e', '')
        ez = item.get('ez', '')
        
        # 第一行：單字  [KK]  (詞類/中譯)
        if w or k or z:
            line1 = f"{w}  [{k}]  {z}" if k else f"{w}  {z}"
            p = doc.add_paragraph(line1)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.space_before = Pt(6)
            for run in p.runs:
                run.font.size = Pt(12)
                run.font.bold = True
        
        # 第二行：例句
        if e:
            p = doc.add_paragraph(e)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.space_before = Pt(1)
            for run in p.runs:
                run.font.size = Pt(10)
        
        # 第三行：例句中譯（如果有的話）
        if ez:
            p = doc.add_paragraph(ez)
            p.paragraph_format.space_after = Pt(6)
            p.paragraph_format.space_before = Pt(1)
            for run in p.runs:
                run.font.size = Pt(10)
                run.font.color.rgb = None  # 灰色？docx 顏色有點麻煩，跳過
    
    return doc

if __name__ == '__main__':
    server = HTTPServer(('127.0.0.1', 8765), ExportHandler)
    print('Word export server running on http://127.0.0.1:8765')
    print('Press Ctrl+C to stop')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()
