import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogShell } from "@/components/BlogLayout";
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
    <BlogShell>
      <article className="post-article">
        <Link className="post-back" href="/blog">
          BLOG
        </Link>
        <p className="blog-kicker">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="post-description">{post.description}</p>
        <div className="post-meta">
          <time dateTime={post.publishedAt}>公開日 {post.publishedAt}</time>
          <time dateTime={post.revisedAt}>更新日 {post.revisedAt}</time>
        </div>
        <div className="post-eyecatch">
          <Image src={post.eyecatch} alt="" fill sizes="(max-width: 760px) 100vw, 980px" priority />
        </div>
        <div className="post-body">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="post-related" aria-label="関連記事">
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
    </BlogShell>
  );
}
