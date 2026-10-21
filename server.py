#!/usr/bin/env python3
"""
Custom development server for the Zainab Kabira Playground clone.
Supports:
- HTTP 206 Partial Content (Range requests) for smooth Safari/Chrome video/audio playback.
- Single Page Application (SPA) routing fallback.
- Correct MIME types for webp, svg, mp4, webm, mp3, etc.
"""

import os
import sys
import mimetypes
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

mimetypes.init()
mimetypes.add_type("video/mp4", ".mp4")
mimetypes.add_type("video/webm", ".webm")
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("audio/mpeg", ".mp3")
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")

class RangeHTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def do_GET(self):
        # Support SPA clean URLs: if path doesn't exist, try matching index.html
        path = self.translate_path(self.path)
        if not os.path.exists(path) and not os.path.splitext(self.path)[1]:
            # Route to index.html for SPA routes like /playground or /about
            self.path = "/index.html"
            path = self.translate_path(self.path)

        # Handle range requests for video/audio
        if "Range" in self.headers and os.path.isfile(path):
            self.send_range_response(path)
        else:
            super().do_GET()

    def send_range_response(self, path):
        try:
            file_size = os.path.getsize(path)
            range_header = self.headers.get("Range")
            # Parse 'bytes=start-end'
            range_match = range_header.strip().lower()
            if not range_match.startswith("bytes="):
                super().do_GET()
                return

            ranges = range_match[6:].split("-")
            start = int(ranges[0]) if ranges[0] else 0
            end = int(ranges[1]) if ranges[1] else file_size - 1

            if start >= file_size or end >= file_size or start > end:
                self.send_error(416, "Requested Range Not Satisfiable")
                return

            length = end - start + 1
            content_type, _ = mimetypes.guess_type(path)

            self.send_response(206)
            self.send_header("Content-Type", content_type or "application/octet-stream")
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
            self.send_header("Content-Length", str(length))
            self.send_header("Accept-Ranges", "bytes")
            self.end_headers()

            with open(path, "rb") as f:
                f.seek(start)
                bytes_to_send = length
                chunk_size = 64 * 1024
                while bytes_to_send > 0:
                    read_len = min(chunk_size, bytes_to_send)
                    chunk = f.read(read_len)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    bytes_to_send -= len(chunk)
        except (BrokenPipeError, ConnectionResetError):
            pass
        except Exception as e:
            self.send_error(500, str(e))

def run():
    port = PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass

    server_address = ("", port)
    httpd = HTTPServer(server_address, RangeHTTPRequestHandler)
    print(f"==================================================")
    print(f" Zainab Kabira Playground Clone Server Running!")
    print(f" Local URL: http://localhost:{port}")
    print(f" Playground: http://localhost:{port}/playground")
    print(f"==================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()

if __name__ == "__main__":
    run()
