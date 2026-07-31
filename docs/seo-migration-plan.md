# MIRASISONE SEO Migration Plan

作成日: 2026-07-31

## 目的

Wix で公開中の `https://www.mirasisone.com/home` 配下から、TOP 以外のページを Next.js + Vercel に移行する。検索評価を落とさないため、既存 URL、meta 情報、canonical、構造化データ、sitemap、robots、301 リダイレクトを管理する。

## 現在確認できた sitemap 構造

Wix の `https://www.mirasisone.com/sitemap.xml` は以下の sitemap index を返す。

| 種別 | URL | 状態 |
| --- | --- | --- |
| ブログ記事 | `https://www.mirasisone.com/blog-posts-sitemap.xml` | 取得済み |
| ブログカテゴリ | `https://www.mirasisone.com/blog-categories-sitemap.xml` | 取得済み |
| 固定ページ | `https://www.mirasisone.com/pages-sitemap.xml` | 取得済み |

`robots.txt` は sitemap と `?lightbox=` の除外を指定している。Next.js 側でも同等設定を追加済み。

## 棚卸し結果

| 種別 | 件数 | 保存先 |
| --- | ---: | --- |
| 固定ページ | 7 | `docs/seo-url-inventory.csv` |
| ブログ記事 | 83 | `docs/seo-url-inventory.csv` |
| ブログカテゴリ | 10 | `docs/seo-url-inventory.csv` |
| 合計 | 100 | `docs/seo-url-inventory.csv` |

固定ページ・ブログカテゴリ・主要ブログ記事12件については、title / description / canonical / OGP の部分取得も完了。保存先は `docs/seo-metadata-inventory.partial.csv`。

## Next.js 側で実装済み

| 項目 | 対応内容 |
| --- | --- |
| canonical 基盤 | `src/app/layout.tsx` に `metadataBase` と基本 metadata を追加 |
| 正式 WORKS URL | `/works` を追加し、既存の `worksPage` を表示 |
| 旧作業URLの整理 | `/services-works` から `/works` へ 301 |
| TOP旧URLの整理 | `/home` から `/` へ 301 |
| sitemap | `src/app/sitemap.ts` を追加 |
| robots | `src/app/robots.ts` を追加 |

## URL 移行表

| Wix / 既存URL | Next.js URL | 対応方針 | 実装状態 |
| --- | --- | --- | --- |
| `/home` | `/` | 301 redirect。TOPは既にNext.js化済み | 済 |
| `/works` | `/works` | 既存の制作/サービスページを正式URLとして公開 | 済 |
| `/services-works` | `/works` | 作業中URLは重複防止のため301 | 済 |
| `/contact` | `/contact` | 新規問い合わせページ。公開する場合は sitemap に掲載 | 済 |
| `/blog` | `/blog` | Wix ブログ一覧を移行。CMS連携推奨 | 未 |
| `/blog/{slug}` | `/blog/{slug}` | slug、title、description、公開日、更新日、OGPを維持 | 未 |
| `/blog/categories/{category}` | `/blog/categories/{category}` | カテゴリURLを維持、または 301 で新カテゴリURLへ | 未 |
| その他固定ページ | 同一URLを優先 | sitemap 再取得後に確定 | 未 |

## ブログ移行で必ず保持する項目

| 項目 | 理由 |
| --- | --- |
| slug / URL | 検索評価と外部リンクを維持するため |
| title | 検索結果の主要表示要素 |
| meta description | CTR維持のため |
| h1 | ページ主題の維持 |
| publishedTime / modifiedTime | 記事鮮度と構造化データ用 |
| category / tag | 一覧と内部リンク維持 |
| og:image | SNSシェア表示維持 |
| canonical | 重複判定の防止 |
| 画像 alt | 画像検索とアクセシビリティ維持 |

## 推奨する次の実装

1. ブログCMSを決める。更新頻度が高いなら microCMS が第一候補。
2. `/blog`、`/post/[slug]`、`/blog/categories/[...category]` をNext.jsに追加する。
3. Wixから記事本文、アイキャッチ、カテゴリ、公開日、更新日を移す。
4. 各記事に `generateMetadata` を実装する。
5. ブログ移行後に全記事URLを `sitemap.ts` に追加する。
6. Vercelプレビューで `curl -I` と Search Console URL検査を行う。

## 公開前チェックリスト

| チェック | 状態 |
| --- | --- |
| 旧URLが 200 または 301 で解決する | 一部済 |
| 404になる旧URLがない | 未 |
| sitemap.xml に公開URLのみ載っている | 一部済 |
| robots.txt がクロールを妨げていない | 済 |
| 各ページに canonical がある | 一部済 |
| 各ページ title が重複していない | 未 |
| OGP画像が絶対URLで出る | 未 |
| Search Console に sitemap を再送信 | 未 |
