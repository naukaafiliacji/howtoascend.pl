#!/usr/bin/env python3
from __future__ import annotations

import functools
import http.server
import mimetypes
import os
import socketserver
from pathlib import Path


PORT = int(os.environ.get("DHTA_PORT", "8000"))
ROOT = Path(__file__).resolve().parent

mimetypes.add_type("text/javascript", ".mjs")
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("application/octet-stream", ".framercms")

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)

with socketserver.ThreadingTCPServer(("127.0.0.1", PORT), handler) as server:
    server.allow_reuse_address = True
    print(f"Strona działa pod adresem: http://localhost:{PORT}/")
    print("Aby ją wyłączyć, naciśnij Ctrl+C.")
    server.serve_forever()
