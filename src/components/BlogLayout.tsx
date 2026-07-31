import Link from "next/link";
import type { ReactNode } from "react";

type BlogShellProps = {
  children: ReactNode;
};

export function BlogShell({ children }: BlogShellProps) {
  return (
    <main className="blog-shell">
      <div className="blog-bg" aria-hidden="true" />
      <header className="blog-nav">
        <Link className="blog-logo" href="/">
          MIRASISONE
        </Link>
        <nav aria-label="Blog navigation">
          <Link href="/works">WORKS</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </header>
      {children}
    </main>
  );
}
