import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/post/${encodeURIComponent(post.slug)}`,
    },
    openGraph: {
      title: `${post.title} | MIRASISONE`,
      description: post.description,
      url: `/post/${encodeURIComponent(post.slug)}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.revisedAt,
      images: [{ url: post.eyecatch }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="wix-blog-page">
      <article className="wix-article">
        <Link className="wix-article-back" href="/blog">
          All Posts
        </Link>
        <div className="wix-article-meta">
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          <span>•</span>
          <Link href="/blog">{post.category}</Link>
        </div>
        <h1>{post.title}</h1>
        <p className="wix-article-lead">{post.description}</p>
        <div className="wix-article-image">
          <Image src={post.eyecatch} alt="" fill sizes="(max-width: 900px) 100vw, 860px" priority />
        </div>
        <div className="wix-article-body">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="wix-related" aria-label="関連記事">
        <h2>関連記事</h2>
        <div>
          {related.map((item) => (
            <Link href={`/post/${encodeURIComponent(item.slug)}`} key={item.slug}>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
