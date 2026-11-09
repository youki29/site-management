#!/usr/bin/env python3
"""sites.js の各 URL にアクセスして表示できるか確認し、check-result.js に書き出す。

使い方: python3 tools/check_sites.py
"""
import datetime
import json
import pathlib
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent


def load_sites():
    text = (ROOT / "sites.js").read_text(encoding="utf-8")
    start = text.index("[")
    end = text.rindex("]") + 1
    return json.loads(text[start:end])


def status(url):
    req = urllib.request.Request(url, headers={"User-Agent": "site-check"})
    try:
        with urllib.request.urlopen(req, timeout=15) as res:
            return res.status
    except urllib.error.HTTPError as e:
        return e.code
    except Exception:
        return 0


def main():
    sites = load_sites()
    ids = [s["id"] for s in sites]
    dup = {i for i in ids if ids.count(i) > 1}
    if dup:
        print("id が重複しています:", ", ".join(sorted(dup)))

    results = {}
    for s in sites:
        if s.get("status") == "archived":
            continue
        code = status(s["url"])
        results[s["id"]] = {"code": code}
        mark = "OK " if code == 200 else "NG "
        print(f"{mark}{code:>3}  {s['title']}  {s['url']}")

    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    out = {"checked_at": now, "results": results}
    (ROOT / "check-result.js").write_text(
        "// tools/check_sites.py が自動生成。手で編集しない。\n"
        "window.CHECK_RESULT = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    bad = [k for k, v in results.items() if v["code"] != 200]
    print(f"\n{len(results)} 件チェック、表示できないもの {len(bad)} 件 → check-result.js を更新")


if __name__ == "__main__":
    main()
