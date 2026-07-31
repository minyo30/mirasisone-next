import { seoUrlInventory } from "@/content/seo-url-inventory";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  revisedAt: string;
  eyecatch: string;
  content: readonly string[];
};

export const blogNavCategories = [
  "All Posts",
  "プロジェクションマッピング",
  "3D映像制作",
  "デジタルサイネージ",
  "空間演出",
];

const featuredPosts = [
  {
    slug: "マッピングとは？プロジェクションマッピングの仕組みを初心者向けに解説",
    title: "マッピングとは？プロジェクションマッピングの仕組みを初心者向けに解説",
    description:
      "マッピング（プロジェクションマッピング）の仕組みを初心者向けに解説。投影面の測定から映像制作、投影、微調整の4ステップと、飲食店・ホテル・屋外イベントでの活用シーン・費用目安を網羅。",
    category: "プロジェクションマッピング",
    publishedAt: "2026-07-30",
    revisedAt: "2026-07-30",
    eyecatch: "/top-value-spatial.jpg",
    content: [
      "プロジェクションマッピングは、建物や壁面、テーブルなどの形状に合わせて映像を投影し、現実の空間を動きのある演出へ変える表現です。",
      "通常のスクリーン投影と違い、投影面の凹凸や距離、見え方を細かく調整することで、空間そのものが変化しているような体験をつくれます。",
      "導入時は、会場の写真、投影面のサイズ、実施時期、目的、予算感を整理しておくと、演出内容や必要機材を具体化しやすくなります。",
    ],
  },
  {
    slug: "常設プロジェクションマッピング完全ガイド2026-飲食店・ホテル・商業施設の導入設計と費用",
    title: "常設プロジェクションマッピング完全ガイド2026｜飲食店・ホテル・商業施設の導入設計と費用",
    description:
      "飲食店、ホテル、商業施設で常設プロジェクションマッピングを導入する際の設計、費用、運用、失敗しない進め方をまとめました。",
    category: "プロジェクションマッピング",
    publishedAt: "2026-07-24",
    revisedAt: "2026-07-24",
    eyecatch: "/top-value-spatial.jpg",
    content: [
      "常設演出では、一度きりのイベントとは異なり、日々の運用、メンテナンス、スタッフの操作性まで含めて設計する必要があります。",
      "飲食店やホテルでは、空間の雰囲気を壊さずに顧客体験を高めることが重要です。照明、席配置、投影距離、音響とのバランスを丁寧に見ます。",
      "企画初期から実装条件を確認することで、導入後に運用しやすく、長く価値を発揮する演出になります。",
    ],
  },
  {
    slug: "naked-eye-3d-signage-guide",
    title: "裸眼3Dサイネージとは？仕組みと活用シーンをわかりやすく解説",
    description:
      "裸眼3Dサイネージの見え方、制作の考え方、屋外広告や商業施設での活用ポイントを紹介します。",
    category: "デジタルサイネージ",
    publishedAt: "2026-07-22",
    revisedAt: "2026-07-22",
    eyecatch: "/service-immersive.png",
    content: [
      "裸眼3Dサイネージは、視点に合わせた映像設計によって、立体物が画面から飛び出して見えるように感じさせる表現です。",
      "交差点や商業施設など、人が自然に立ち止まる場所と相性がよく、短時間で強い印象を残せます。",
      "制作時は、設置場所、視認距離、放映時間、ブランドメッセージを踏まえて、最も効果的な見せ方を設計します。",
    ],
  },
  {
    slug: "3dcg-video-production-guide",
    title: "3DCG映像制作でブランド体験を立ち上げる",
    description:
      "SNS広告、プロモーション映像、施設演出に3DCGを活用するときの設計ポイントを紹介します。",
    category: "3D映像制作",
    publishedAt: "2026-07-13",
    revisedAt: "2026-07-13",
    eyecatch: "/service-ar-xr.png",
    content: [
      "3DCG映像は、実写では撮影しにくい世界観や製品価値を、直感的に伝えられる制作手法です。",
      "映像単体で完結させるだけでなく、プロジェクション、デジタルサイネージ、AR、Webコンテンツに展開することで、体験全体の一貫性を高められます。",
      "ブランドの印象を短時間で届けたい場面では、質感、動き、光の設計が特に重要になります。",
    ],
  },
] satisfies BlogPost[];

const featuredBySlug = new Map(featuredPosts.map((post) => [post.slug, post]));

function decodeSlug(path: string) {
  const rawSlug = path.replace(/^\/post\//, "");

  try {
    return decodeURIComponent(rawSlug);
  } catch {
    return rawSlug;
  }
}

function titleFromSlug(slug: string) {
  return slug
    .replaceAll("-", " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (value) => value.toUpperCase());
}

const inventoryPosts = seoUrlInventory
  .filter((entry) => entry.type === "blog-post")
  .map((entry) => {
    const slug = decodeSlug(entry.path);
    const featured = featuredBySlug.get(slug);

    if (featured) {
      return featured;
    }

    return {
      slug,
      title: titleFromSlug(slug),
      description:
        "WixからNext.jsへ移行予定の記事です。URLを維持したまま、本文とSEO情報を本番データへ差し替えます。",
      category: "All Posts",
      publishedAt: entry.lastmod,
      revisedAt: entry.lastmod,
      eyecatch: "/top-value-planning.jpg",
      content: [
        "この記事は、現在Wixからの移行準備中です。まずは旧サイトのURL構造をNext.js側に再現し、検索評価を引き継げる状態を作っています。",
        "本番化の際は、記事タイトル、本文、画像、カテゴリ、公開日、description、OGP画像をCMSまたは移行データから反映します。",
        "高頻度で更新するブログは、HTML直書きではなくCMS連携にすると、公開後の運用がかなり楽になります。",
      ],
    } satisfies BlogPost;
  });

export const blogPosts = [
  ...featuredPosts,
  ...inventoryPosts.filter((post) => !featuredBySlug.has(post.slug)),
];

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category))).sort();

export function getBlogPost(slug: string) {
  const decoded = (() => {
    try {
      return decodeURIComponent(slug);
    } catch {
      return slug;
    }
  })();

  return blogPosts.find((post) => post.slug === decoded);
}
