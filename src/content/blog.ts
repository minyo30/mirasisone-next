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

const samplePosts = [
  {
    slug: "projection-mapping-cost-guide",
    title: "プロジェクションマッピングの費用感と進め方",
    description:
      "空間演出を検討するときに押さえておきたい、費用の考え方、制作範囲、相談前に整理しておく項目をまとめました。",
    category: "プロジェクションマッピング",
    publishedAt: "2026-07-24",
    revisedAt: "2026-07-24",
    eyecatch: "/top-value-planning.jpg",
    content: [
      "プロジェクションマッピングは、投影する場所の形状、映像尺、設営条件、運用期間によって必要な設計が変わります。まずは実施目的と来場者に残したい印象を整理することで、最適な制作範囲が見えやすくなります。",
      "初期相談では、会場写真、投影面のサイズ、実施時期、想定予算があるとスムーズです。まだ詳細が決まっていない段階でも、実現可能性や進め方の整理から伴走できます。",
      "この記事は仮データです。Wixからの記事移行時に、本文、画像、カテゴリ、公開日、SEO情報を本番データに差し替えます。",
    ],
  },
  {
    slug: "ar-content-production-guide",
    title: "AR・XRコンテンツ制作で体験価値を高めるには",
    description:
      "AR・XRを企画する際に必要な体験設計、導線づくり、撮影や3DCG制作との組み合わせ方を整理します。",
    category: "AR・XRコンテンツ",
    publishedAt: "2026-07-27",
    revisedAt: "2026-07-27",
    eyecatch: "/service-ar-xr.png",
    content: [
      "AR・XRコンテンツは、技術そのものよりも、ユーザーがどの瞬間に驚き、どう共有したくなるかを設計することが大切です。",
      "店舗、イベント、観光、展示会など、使われる場所によって適した表現や操作方法は変わります。体験の目的を決めたうえで、映像、3DCG、Web、SNS導線を組み合わせます。",
      "この記事は仮データです。今後CMSと連携し、実際の記事本文へ置き換える想定です。",
    ],
  },
  {
    slug: "3dcg-video-production-guide",
    title: "3DCG映像制作でブランド体験を立ち上げる",
    description:
      "SNS広告、プロモーション映像、施設演出に3DCGを活用するときの設計ポイントを紹介します。",
    category: "3DCG映像制作",
    publishedAt: "2026-07-13",
    revisedAt: "2026-07-13",
    eyecatch: "/service-immersive.png",
    content: [
      "3DCG映像は、実写では撮影しにくい世界観や製品価値を、直感的に伝えられる制作手法です。ブランドの印象を短時間で届けたい場面にも向いています。",
      "映像単体で完結させるだけでなく、プロジェクション、デジタルサイネージ、AR、Webコンテンツに展開することで、体験全体の一貫性を高められます。",
      "この記事は仮データです。本番移行時にはWix記事の内容に合わせてメタ情報も維持します。",
    ],
  },
  {
    slug: "wedding-venue-projection-mapping",
    title: "結婚式場での空間演出を印象に残す方法",
    description:
      "ホテル、式場、イベント会場で、ゲストの記憶に残る演出をつくるための考え方をまとめました。",
    category: "空間演出",
    publishedAt: "2026-07-29",
    revisedAt: "2026-07-29",
    eyecatch: "/contact-hero-bg.png",
    content: [
      "空間演出は、会場の雰囲気や進行に合わせて、光、映像、音、導線を設計することで印象が大きく変わります。",
      "特別な瞬間にあわせて演出を切り替えることで、写真や動画として残りやすく、SNSでの共有にもつながります。",
      "この記事は仮データです。実際の記事移行後は、旧URLを保ったままコンテンツを差し替えます。",
    ],
  },
] satisfies BlogPost[];

const sampleBySlug = new Map(samplePosts.map((post) => [post.slug, post]));

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
    const sample = sampleBySlug.get(slug);

    if (sample) {
      return sample;
    }

    return {
      slug,
      title: titleFromSlug(slug),
      description:
        "WixからNext.jsへ移行予定の記事です。URLを維持したまま、本文とSEO情報を本番データへ差し替えます。",
      category: "BLOG",
      publishedAt: entry.lastmod,
      revisedAt: entry.lastmod,
      eyecatch: "/top-value-spatial.jpg",
      content: [
        "この記事は、現在Wixからの移行準備中です。まずは旧サイトのURL構造をNext.js側に再現し、検索評価を引き継げる状態を作っています。",
        "本番化の際は、記事タイトル、本文、画像、カテゴリ、公開日、description、OGP画像をCMSまたは移行データから反映します。",
        "高頻度で更新するブログは、HTML直書きではなくCMS連携にすると、公開後の運用がかなり楽になります。",
      ],
    } satisfies BlogPost;
  });

export const blogPosts = [
  ...samplePosts,
  ...inventoryPosts.filter((post) => !sampleBySlug.has(post.slug)),
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
