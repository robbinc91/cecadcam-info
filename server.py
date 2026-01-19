#!/usr/bin/env python3
"""
CAD/CAM Study Center - Development Server with PWA Support
"""
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class PWAHandler(SimpleHTTPRequestHandler):
    MIME_TYPES = {
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.mjs': 'application/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.webp': 'image/webp',
        '.xml': 'application/xml',
        '.webmanifest': 'application/manifest+json'
    }
    
    def guess_type(self, path):
        ext = os.path.splitext(path)[1].lower()
        return self.MIME_TYPES.get(ext, 'application/octet-stream')
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        print(f"[Server] {args[0]}")


def run_server(port=8050):
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(('localhost', port), PWAHandler)
    
    print(f"""
╔════════════════════════════════════════════════════╗
║  CAD/CAM Study Center - Development Server         ║
║                                                    ║
║  Server: http://localhost:{port}                    ║
║                                                    ║
║  Press Ctrl+C to stop                              ║
╚════════════════════════════════════════════════════╝
    """)
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[Server] Stopped")
        server.shutdown()


if __name__ == '__main__':
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8050
    run_server(port)
