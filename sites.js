// サイト台帳（これが元データ）。1サイト1オブジェクト。
// 1行目と最後の行以外は JSON として読めるように書く（tools/check_sites.py が読む）。
// category: "study"（勉強サイト）/ "app"（アプリ関連ページ）/ "other"
// visibility: "listed"（トップから辿れる）/ "unlisted"（URLを知っている人だけ）/ "noindex"（検索除外）
// status: "live"（公開中）/ "draft"（作成中）/ "archived"（公開終了）
window.SITES = [
  {
    "id": "eibunpou-matome",
    "title": "英文法まとめノート",
    "category": "study",
    "subject": "英語",
    "kind": "まとめ",
    "url": "https://youki29.github.io/eibunpou-matome/",
    "repo": "youki29/eibunpou-matome",
    "source": "MyApps/eibunpou_matome",
    "preview": "eibunpou",
    "visibility": "unlisted",
    "status": "live",
    "created": "2026-11-09",
    "updated": "2026-11-09",
    "notes": "5文型・品詞・動詞・分詞・関係代名詞。例文はオリジナル"
  },
  {
    "id": "apps-top",
    "title": "アプリ一覧サイト（トップ）",
    "category": "app",
    "subject": "",
    "kind": "サイト",
    "url": "https://youki29.github.io/",
    "repo": "youki29/youki29.github.io",
    "source": "MyApps/youki29.github.io",
    "preview": "apps-site",
    "visibility": "listed",
    "status": "live",
    "created": "2026-10-11",
    "updated": "2026-11-09",
    "notes": "privacy.html と app-ads.txt は ASC／AdMob 登録済みなので場所を変えない。ローカルフォルダごと rsync しない（Web アップロード分が消える）"
  },
  {
    "id": "site-management",
    "title": "サイト管理（この一覧）",
    "category": "other",
    "subject": "",
    "kind": "管理",
    "url": "https://youki29.github.io/site-management/",
    "repo": "youki29/site-management",
    "source": "MyApps/site-management",
    "preview": "site-management",
    "visibility": "unlisted",
    "status": "live",
    "created": "2026-11-09",
    "updated": "2026-11-09",
    "notes": "アプリ一覧とは別リポジトリ。アプリ一覧からリンクしない"
  }
];
