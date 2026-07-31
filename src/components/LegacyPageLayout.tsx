import Link from "next/link";
import type { ReactNode } from "react";

type LegacyPageShellProps = {
  children: ReactNode;
};

export function LegacyPageShell({ children }: LegacyPageShellProps) {
  return (
    <main className="legacy-shell">
      <header className="legacy-header">
        <Link className="legacy-brand" href="/">
          MIRASISONE
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">HOME</Link>
          <Link href="/company">COMPANY</Link>
          <Link href="/recruit">RECRUIT</Link>
          <Link href="/works">SERVICES &amp; WORKS</Link>
          <Link href="/blog">TOPICS・NEWS</Link>
          <Link className="legacy-contact" href="/contact">
            CONTACT US
          </Link>
        </nav>
      </header>
      {children}
      <footer className="legacy-footer">
        <Link href="/">TOP</Link>
        <Link href="/privacy-policy">Privacy・Policy</Link>
        <span>2025 MIRASISONE All Rights Reserved.</span>
      </footer>
    </main>
  );
}
