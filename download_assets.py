import os
import re
import urllib.parse
import urllib.request
import concurrent.futures

BASE_URL = "https://zainabkabira.com"
WEB_DIR = "/Users/mac/Documents/web"
ASSETS_DIR = os.path.join(WEB_DIR, "assets")

def collect_asset_paths():
    files_to_scan = [
        os.path.join(WEB_DIR, "index.html"),
        os.path.join(WEB_DIR, "css", "site.css"),
        os.path.join(WEB_DIR, "js", "site.js")
    ]
    
    found = set()
    for fpath in files_to_scan:
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        
        # Matches /assets/... or assets/... or ../assets/...
        raw_matches = re.findall(r'[\'\"\(](/?(?:(?:\.\./)*assets/[^\'\"\)\s<>]+))[\'\"\)]', text)
        for m in raw_matches:
            clean = m.split('#')[0].split('?')[0]
            if clean.startswith('../'):
                clean = clean[2:]
            if not clean.startswith('/'):
                clean = '/' + clean
            if clean.startswith('/assets/'):
                found.add(clean)
                
        # Also specifically check playground items
        pg_matches = re.findall(r'[\'\"](/assets/playground/[^\'\"]+)[\'\"]', text)
        for m in pg_matches:
            clean = m.split('#')[0].split('?')[0]
            found.add(clean)

    # Filter out wildcards like .*
    valid_paths = [p for p in found if not p.endswith('.*')]
    return sorted(valid_paths)

def download_one(rel_path):
    # rel_path is like /assets/playground/pg-burger.mp4
    # or /assets/Jumpable%20case%20study%20assets/...
    unquoted = urllib.parse.unquote(rel_path)
    # Target local path
    local_rel = unquoted.lstrip('/')
    local_file = os.path.join(WEB_DIR, local_rel)
    
    if os.path.exists(local_file) and os.path.getsize(local_file) > 0:
        return (rel_path, "already exists", os.path.getsize(local_file))
        
    os.makedirs(os.path.dirname(local_file), exist_ok=True)
    
    # URL to fetch
    # Make sure path is properly encoded
    encoded_path = urllib.parse.quote(unquoted)
    url = f"{BASE_URL}{encoded_path}"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://zainabkabira.com/playground"
    }
    
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
            with open(local_file, "wb") as out:
                out.write(data)
            return (rel_path, "OK", len(data))
    except Exception as e:
        return (rel_path, f"FAILED: {e}", 0)

def main():
    paths = collect_asset_paths()
    print(f"Total asset paths discovered: {len(paths)}")
    
    success = 0
    failed = 0
    skipped = 0
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(download_one, p): p for p in paths}
        for future in concurrent.futures.as_completed(futures):
            path, status, size = future.result()
            if status == "OK":
                success += 1
                print(f"[DOWNLOADED] {path} ({size} bytes)")
            elif status == "already exists":
                skipped += 1
            else:
                failed += 1
                print(f"[ERROR] {path} -> {status}")
                
    print(f"\nSummary: {success} downloaded, {skipped} already existed, {failed} failed.")

if __name__ == "__main__":
    main()
