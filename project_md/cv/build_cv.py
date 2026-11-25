"""Fill {{icon:name}} markers in cv.template.html and write cv.html.

Icons come from icons.json (lucide icons, ISC licence, and the Instagram mark from
simple-icons, CC0). Then print cv.html to public/judith-urevbu-cv.pdf (see README.md).
"""
import json
import re
from pathlib import Path

here = Path(__file__).parent
icons = json.loads((here / "icons.json").read_text(encoding="utf-8"))
html = (here / "cv.template.html").read_text(encoding="utf-8")
html = re.sub(r"\{\{icon:([\w-]+)\}\}", lambda m: icons[m.group(1)], html)
(here / "cv.html").write_text(html, encoding="utf-8", newline="\n")
print("cv.html written")
