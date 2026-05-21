"""
mdhtml.py — Markdown to Staticnova HTML converter
Usage: python mdhtml.py input.md output.html
"""

import sys
import os
import re
from datetime import datetime


# ── INLINE MARKDOWN PARSER ──────────────────────────────────────────────────

def parse_inline(text):
    """Convert inline markdown (bold, italic, code, links) to HTML."""
    # Escape HTML special chars first
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    # Bold+italic ***text***
    text = re.sub(r'\*\*\*(.*?)\*\*\*', r'<strong><em>\1</em></strong>', text)
    # Bold **text**
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
    # Italic *text*
    text = re.sub(r'\*(.*?)\*', r'<em>\1</em>', text)
    # Bold __text__
    text = re.sub(r'__(.*?)__', r'<strong>\1</strong>', text)
    # Italic _text_
    text = re.sub(r'_(.*?)_', r'<em>\1</em>', text)
    # Inline code `code`
    text = re.sub(r'`(.*?)`', r'<code>\1</code>', text)
    # Links [text](url)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', text)
    return text


# ── BLOCK MARKDOWN PARSER ───────────────────────────────────────────────────

def parse_markdown(md):
    """
    Convert Markdown text to HTML blocks.
    Handles: headings, hr, blockquote, code fences,
    unordered lists, ordered lists, tables, paragraphs.
    """
    lines  = md.splitlines()
    html   = []
    i      = 0
    n      = len(lines)

    def flush_paragraph(buf):
        if buf:
            html.append('<p>' + parse_inline(' '.join(buf)) + '</p>')
            buf.clear()

    para_buf = []

    while i < n:
        line = lines[i]
        raw  = line.rstrip()

        # ── Blank line → flush paragraph
        if raw.strip() == '':
            flush_paragraph(para_buf)
            i += 1
            continue

        # ── Fenced code block ```
        if raw.startswith('```'):
            flush_paragraph(para_buf)
            lang = raw[3:].strip()
            code_lines = []
            i += 1
            while i < n and not lines[i].rstrip().startswith('```'):
                code_lines.append(lines[i].replace('&','&amp;').replace('<','&lt;').replace('>','&gt;'))
                i += 1
            i += 1  # skip closing ```
            lang_attr = f' class="lang-{lang}"' if lang else ''
            html.append(f'<pre><code{lang_attr}>' + '\n'.join(code_lines) + '</code></pre>')
            continue

        # ── Horizontal rule ---  ***  ___
        if re.match(r'^(\-{3,}|\*{3,}|_{3,})\s*$', raw):
            flush_paragraph(para_buf)
            html.append('<hr />')
            i += 1
            continue

        # ── ATX Headings # ## ### etc.
        m = re.match(r'^(#{1,6})\s+(.*)', raw)
        if m:
            flush_paragraph(para_buf)
            level = len(m.group(1))
            text  = parse_inline(m.group(2).strip())
            html.append(f'<h{level}>{text}</h{level}>')
            i += 1
            continue

        # ── Setext headings (underlined with === or ---)
        if i + 1 < n:
            next_raw = lines[i+1].rstrip()
            if re.match(r'^=+\s*$', next_raw):
                flush_paragraph(para_buf)
                html.append('<h1>' + parse_inline(raw) + '</h1>')
                i += 2
                continue
            if re.match(r'^-+\s*$', next_raw) and len(next_raw) >= 2:
                flush_paragraph(para_buf)
                html.append('<h2>' + parse_inline(raw) + '</h2>')
                i += 2
                continue

        # ── Blockquote >
        if raw.startswith('>'):
            flush_paragraph(para_buf)
            bq_lines = []
            while i < n and lines[i].rstrip().startswith('>'):
                bq_lines.append(lines[i].rstrip().lstrip('>').strip())
                i += 1
            inner = parse_markdown('\n'.join(bq_lines))
            html.append('<blockquote>' + inner + '</blockquote>')
            continue

        # ── Unordered list  - / * / +
        if re.match(r'^(\s*)([-*+])\s+', raw):
            flush_paragraph(para_buf)
            items = []
            while i < n and re.match(r'^(\s*)([-*+])\s+', lines[i].rstrip()):
                items.append('<li>' + parse_inline(re.sub(r'^\s*[-*+]\s+', '', lines[i].rstrip())) + '</li>')
                i += 1
            html.append('<ul>' + ''.join(items) + '</ul>')
            continue

        # ── Ordered list  1. 2. etc.
        if re.match(r'^\d+\.\s+', raw):
            flush_paragraph(para_buf)
            items = []
            while i < n and re.match(r'^\d+\.\s+', lines[i].rstrip()):
                items.append('<li>' + parse_inline(re.sub(r'^\d+\.\s+', '', lines[i].rstrip())) + '</li>')
                i += 1
            html.append('<ol>' + ''.join(items) + '</ol>')
            continue

        # ── Table  | col | col |
        if '|' in raw and i + 1 < n and re.match(r'^\s*\|?[\s\-:]+\|', lines[i+1]):
            flush_paragraph(para_buf)
            # header row
            headers = [c.strip() for c in raw.strip().strip('|').split('|')]
            i += 2  # skip separator row
            rows = []
            while i < n and '|' in lines[i]:
                cells = [c.strip() for c in lines[i].strip().strip('|').split('|')]
                rows.append(cells)
                i += 1
            th_html = ''.join(f'<th>{parse_inline(h)}</th>' for h in headers)
            tr_html = ''
            for row in rows:
                tr_html += '<tr>' + ''.join(f'<td>{parse_inline(c)}</td>' for c in row) + '</tr>'
            html.append(f'<table><thead><tr>{th_html}</tr></thead><tbody>{tr_html}</tbody></table>')
            continue

        # ── Regular paragraph line
        para_buf.append(raw)
        i += 1

    flush_paragraph(para_buf)
    return '\n'.join(html)


# ── HTML TEMPLATE ────────────────────────────────────────────────────────────

CSS = """
* { margin:0; padding:0; box-sizing:border-box; }

body {
  background-color: #2c2c2c;
  color: #d4d4a0;
  font-family: Verdana, Arial, Tahoma, sans-serif;
  font-size: 12px;
  min-height: 100vh;
}

/* HEADER */
#header {
  background: #111;
  border-bottom: 2px solid #4a4a1a;
  padding: 14px 10px 10px;
  text-align: center;
}
#header h1 {
  font-family: "Courier New", monospace;
  font-size: clamp(20px, 5vw, 32px);
  color: #c8ff98;
  text-shadow: 0 0 8px #4aff00;
  letter-spacing: 4px;
  text-transform: uppercase;
}
#header .subtitle {
  color: #ff7777;
  font-family: "Courier New", monospace;
  font-size: clamp(8px, 2.2vw, 10px);
  letter-spacing: 2px;
  margin-top: 4px;
  text-transform: uppercase;
}
#header .blink {
  display: inline-block;
  font-family: "Courier New", monospace;
  font-size: 9px;
  color: #ffaa33;
  margin-top: 5px;
  animation: blink 1s step-start infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

/* TOP NAV */
#topnav {
  background: #0f0f0f;
  border-bottom: 1px solid #333318;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  text-align: center;
  padding: 0 8px;
}
#topnav a {
  display: inline-block;
  padding: 6px 12px;
  color: #888866;
  text-decoration: none;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-right: 1px solid #222218;
}
#topnav a:hover, #topnav a.active {
  background: #1e1e0e;
  color: #c8ff98;
}

/* PAGE */
#page {
  max-width: 860px;
  margin: 10px auto 0;
  padding: 0 8px;
}

/* WARN BOX */
.warn-box {
  background: #180808;
  border: 1px solid #550000;
  border-left: 4px solid #aa0000;
  padding: 5px 8px;
  margin-bottom: 10px;
  font-family: "Courier New", monospace;
  font-size: 10px;
  color: #ff8888;
  line-height: 1.6;
}
.warn-box b { color: #ff4444; }

/* CONTENT PANEL */
.panel {
  background: #1e1e12;
  border: 1px solid #4a4a22;
  border-top: 2px solid #6a6a30;
  margin-bottom: 12px;
}
.panel-title {
  background: linear-gradient(to bottom, #3a3a18, #1a1a08);
  color: #c8ff98;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 5px 10px;
  border-bottom: 1px solid #3a3a1a;
}
.panel-body {
  padding: 14px 16px;
  line-height: 1.75;
}

/* MARKDOWN CONTENT STYLES */
.panel-body h1, .panel-body h2, .panel-body h3,
.panel-body h4, .panel-body h5, .panel-body h6 {
  font-family: "Courier New", monospace;
  color: #c8ff98;
  margin: 18px 0 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid #3a3a18;
  padding-bottom: 3px;
}
.panel-body h1 { font-size: 18px; }
.panel-body h2 { font-size: 15px; color: #b8e888; }
.panel-body h3 { font-size: 13px; color: #a8d878; border-bottom-style: dashed; }
.panel-body h4, .panel-body h5, .panel-body h6 {
  font-size: 11px; color: #90c060; border: none;
}

.panel-body p {
  margin-bottom: 10px;
  color: #c8c8a0;
  font-size: 11px;
}

.panel-body a { color: #88ccff; text-decoration: none; }
.panel-body a:hover { color: #cceeff; text-decoration: underline; }

.panel-body strong { color: #e8e8b8; }
.panel-body em { color: #b8d898; font-style: italic; }

.panel-body code {
  font-family: "Courier New", monospace;
  background: #0d0d06;
  border: 1px solid #3a3a18;
  color: #88ff88;
  padding: 1px 4px;
  font-size: 10px;
}

.panel-body pre {
  background: #0a0a06;
  border: 1px solid #3a3a18;
  border-left: 3px solid #556622;
  padding: 10px 12px;
  overflow-x: auto;
  margin: 10px 0;
  -webkit-overflow-scrolling: touch;
}
.panel-body pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: 10px;
  color: #a8e888;
  line-height: 1.6;
}

.panel-body ul, .panel-body ol {
  margin: 8px 0 10px 20px;
  color: #c0c090;
  font-size: 11px;
}
.panel-body li { margin-bottom: 3px; line-height: 1.6; }
.panel-body li::marker { color: #6a9a33; }

.panel-body blockquote {
  background: #141408;
  border-left: 3px solid #6a6a28;
  padding: 6px 10px;
  margin: 8px 0;
  color: #909070;
  font-style: italic;
  font-family: "Courier New", monospace;
  font-size: 10px;
}

.panel-body hr {
  border: none;
  border-top: 1px solid #3a3a18;
  margin: 14px 0;
}

.panel-body table {
  width: 100%;
  border-collapse: collapse;
  font-size: 10px;
  margin: 10px 0;
  overflow-x: auto;
  display: block;
}
.panel-body table th {
  background: linear-gradient(to bottom, #333318, #1a1a08);
  color: #c8ff98;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 8px;
  border: 1px solid #3a3a18;
  text-align: left;
  white-space: nowrap;
}
.panel-body table td {
  padding: 4px 8px;
  border: 1px solid #282810;
  color: #aaa880;
  vertical-align: top;
}
.panel-body table tr:nth-child(even) td { background: #181808; }
.panel-body table tr:nth-child(odd)  td { background: #141406; }
.panel-body table tr:hover td { background: #262610; color: #e4e4b0; }

/* FOOTER */
#footer {
  max-width: 860px;
  margin: 4px auto 14px;
  padding: 8px 10px;
  background: #0d0d06;
  border: 1px solid #222218;
  border-top: 2px solid #333318;
  text-align: center;
  font-family: "Courier New", monospace;
  font-size: 9px;
  color: #3e3e2e;
}
#footer span { color: #555544; }
"""

def build_html(title, body_html, source_file):
    today = datetime.now().strftime("%B %Y")
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{title} — Staticnova</title>
<style>
{CSS}
</style>
</head>
<body>

<div id="header">
  <h1>Staticnova</h1>
  <div class="subtitle">&#9733; DO NOT SHOW STAFF &#9733;</div>
  <div class="blink">Hide this tab if a teacher walks by.</div>
</div>

<div id="topnav">
  <a href="../index.html" class="active">Home</a>
  <a href="../uploads.html">Uploads</a>
  <a href="../music.html">Music</a>
  <a href="../about.html">About us</a>
</div>

<div id="page">

  <div class="warn-box">
    <b>&#9888; WARNING:</b> DO NOT access this during Computer Lab. Close tab if staff walks by.
  </div>

  <div class="panel">
    <div class="panel-title">:: {title.upper()} ::</div>
    <div class="panel-body">
{body_html}
    </div>
  </div>

</div>

<div id="footer">
  <span>Generated from: {os.path.basename(source_file)} &nbsp;|&nbsp; {today}</span><br />
  <span style="color:#2e2e22;">&copy; Staticnova &nbsp;//&nbsp; Not affiliated with any school.</span>
</div>

</body>
</html>"""


# ── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 3:
        print("Usage: python mdhtml.py input.md output.html")
        sys.exit(1)

    input_path  = sys.argv[1]
    output_path = sys.argv[2]

    # Validate input
    if not os.path.isfile(input_path):
        print(f"Error: File not found: {input_path}")
        sys.exit(1)
    if not input_path.lower().endswith('.md'):
        print(f"Warning: Input file does not have a .md extension.")

    # Read markdown
    with open(input_path, 'r', encoding='utf-8', errors='replace') as f:
        md_text = f.read()

    # Use first H1 as page title, fallback to filename
    title_match = re.search(r'^#\s+(.+)', md_text, re.MULTILINE)
    title = title_match.group(1).strip() if title_match else os.path.splitext(os.path.basename(input_path))[0]

    # Convert markdown to HTML
    body_html = parse_markdown(md_text)

    # Build full page
    full_html = build_html(title, body_html, input_path)

    # Write output
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(full_html)

    print(f"Done: {input_path}  -->  {output_path}")


if __name__ == "__main__":
    main()