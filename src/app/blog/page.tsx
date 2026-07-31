import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogShell } from "@/components/BlogLayout";
import { blogCategories, blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "BLOG",
  description:
    "プロジェクションマッピング、3DCG映像制作、AR・XR、空間演出に関するMIRASISONEのブログ記事一覧です。",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "BLOG | MIRASISONE",
    description:
      "プロジェクションマッピング、3DCG映像制作、AR・XR、空間演出に関するブログ記事一覧です。",
    url: "/blog",
  },
};

export default function BlogPage() {
  const featured = blogPosts.slice(0, 4);
  const rest = blogPosts.slice(4, 16);

  return (
    <BlogShell>
      <section className="blog-hero">
        <p className="blog-kicker">MIRASISONE JOURNAL</p>
        <h1>空間体験を、言葉でも設計する。</h1>
        <p>
          プロジェクションマッピング、3DCG、AR・XR、イマーシブ空間演出の知見を、
          実装前の検討に役立つ記事として整理しています。
        </p>
      </section>

      <section className="blog-categories" aria-label="カテゴリ">
        {blogCategories.slice(0, 8).map((category) => (
          <span key={category}>{category}</span>
        ))}
      </section>

      <section className="blog-grid" aria-label="記事一覧">
        {featured.map((post, index) => (
          <article className={index === 0 ? "blog-card blog-card-large" : "blog-card"} key={post.slug}>
            <Link href={`/post/${encodeURIComponent(post.slug)}`}>
              <div className="blog-card-image">
                <Image src={post.eyecatch} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className="blog-card-body">
                <p className="blog-card-meta">
                  {post.category} / {post.publishedAt}
                </p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <section className="blog-list" aria-label="その他の記事">
        {rest.map((post) => (
          <article key={post.slug}>
            <Link href={`/post/${encodeURIComponent(post.slug)}`}>
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            </Link>
          </article>
        ))}
      </section>
    </BlogShell>
  );
}
