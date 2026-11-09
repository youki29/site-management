# サイト管理（site-management）

youki29.github.io 配下で公開している Web サイトの台帳。勉強サイトがメイン、アプリ用ページは補助。
公開先：リポジトリ youki29/site-management（GitHub Pages、https://youki29.github.io/site-management/）。
アプリ一覧（youki29/youki29.github.io）とは別リポジトリ。アプリ一覧からリンクしない・混ぜない。
変更したら commit して main に push する（このフォルダ自体が git リポジトリ）。

## ファイル
- `sites.js` … 台帳（元データ）。1サイト1オブジェクト。JSON として読める書き方を崩さない
- `index.html` … 一覧ダッシュボード。ブラウザで直接開ける（file:// で可）
- `tools/check_sites.py` … 全 URL の表示可否を確認し `check-result.js` を生成
- `check-result.js` … 自動生成。手で編集しない

## 運用ルール
- 勉強サイトを新しく作った・公開した・更新したら、必ず `sites.js` に追加／`updated` を更新する
- 追加時の項目：id（英小文字とハイフン）・title・category・subject・kind・url・repo・source・preview・visibility・status・created・updated・notes
- subject は「国語／数学／英語／理科／社会→地理・歴史など科目名／情報／その他」から選ぶ
- 公開をやめたら `status: "archived"` にする。完全に削除したサイトは台帳からも外す
- 一覧ページを公開サイト（youki29.github.io）に載せるのは、ユーザーが頼んだときだけ（2026-11-09 に一度作って取り消した経緯あり）
- 問題集・教科書の文章はそのまま載せない。例文・問題文はオリジナルにする
- youki29.github.io への追加は単体ファイルを clone 先に足して push。ローカルフォルダごと rsync しない
- 台帳を変えたら `python3 tools/check_sites.py` を実行して確認する
