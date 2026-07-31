import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogNavCategories, blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "TOPICS・NEWS",
  description:
    "MIRASISONEのブログ記事一覧です。プロジェクションマッピング、3D映像制作、デジタルサイネージ、空間演出に関する記事を掲載しています。",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "TOPICS・NEWS | MIRASISONE",
    description:
      "MIRASISONEのブログ記事一覧です。プロジェクションマッピング、3D映像制作、デジタルサイネージ、空間演出に関する記事を掲載しています。",
    url: "/blog",
  },
};

function relativeDate(index: number) {
  if (index === 0) {
    return "1日前";
  }

  if (index === 1) {
    return "3日前";
  }

  return blogPosts[index]?.publishedAt ?? "";
}

export default function BlogPage() {
  const visiblePosts = blogPosts.slice(0, 14);

  return (
    <main className="wix-blog-page" id="top">
      <nav className="wix-blog-nav" aria-label="Blog categories">
        {blogNavCategories.map((category) => (
          <Link href="/blog" key={category}>
            {category}
          </Link>
        ))}
        <button type="button" aria-label="続きを読む">
          続きを読む
          <span aria-hidden="true">⌄</span>
        </button>
      </nav>

      <section className="wix-post-list" aria-label="ブログ記事一覧">
        {visiblePosts.map((post, index) => (
          <article className="wix-post-card" key={`${post.slug}-${index}`}>
            <Link className="wix-post-image" href={`/post/${encodeURIComponent(post.slug)}`}>
              <Image src={post.eyecatch} alt="" fill sizes="(max-width: 900px) 100vw, 454px" priority={index === 0} />
            </Link>
            <div className="wix-post-body">
              <div className="wix-post-topline">
                <span>{relativeDate(index)}</span>
                <button type="button" aria-label="記事メニュー">
                  ⋮
                </button>
              </div>
              <Link className="wix-post-category" href="/blog">
                {post.category}
              </Link>
              <Link className="wix-post-title" href={`/post/${encodeURIComponent(post.slug)}`}>
                {post.title}
              </Link>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </section>

      <a className="wix-page-top" href="#top" aria-label="ページ上部へ戻る">
        ⌃
      </a>
    </main>
  );
}
