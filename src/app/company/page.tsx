import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "COMPANY",
  description:
    "MIRASISONEの会社情報です。空間演出、プロジェクションマッピング、3DCG、AR・XRコンテンツ制作を通じて、体験価値を設計します。",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "COMPANY | MIRASISONE",
    description:
      "MIRASISONEの会社情報です。空間演出、プロジェクションマッピング、3DCG、AR・XRコンテンツ制作を通じて、体験価値を設計します。",
    url: "/company",
  },
};

const companyRows = [
  ["会社名", "MIRASISONE"],
  ["事業内容", "プロジェクションマッピング、3DCG映像制作、AR・XRコンテンツ、イマーシブ空間演出、デジタルサイネージ、空間体験の企画・制作・運用"],
  ["対応領域", "飲食店、商業施設、ホテル、イベント、展示会、ミュージアム、ブランドプロモーション"],
  ["所在地", "東京都"],
  ["お問い合わせ", "info@mirasisone.co.jp"],
];

export default function CompanyPage() {
  return (
    <SiteShell>
      <section className="subpage-hero">
        <p className="blog-kicker">COMPANY</p>
        <h1>
          空間の価値を、
          <br />
          体験として設計する。
        </h1>
        <p>
          MIRASISONEは、光と映像、3DCG、インタラクティブ技術を組み合わせ、
          施設やブランドの記憶に残る体験を企画から実装まで支援します。
        </p>
      </section>

      <section className="subpage-panel">
        <div className="subpage-heading">
          <p className="blog-kicker">MISSION</p>
          <h2>ただ映すだけではない、感情が動くシーンをつくる。</h2>
        </div>
        <p>
          プロジェクションマッピングや3DCG映像は、空間の見え方を変えるだけでなく、
          訪れた人の期待、驚き、記憶を動かすための設計です。
          MIRASISONEは、企画、制作、設置、運用までを一体で考え、
          ビジネスに新しい体験価値を生み出します。
        </p>
      </section>

      <section className="subpage-panel">
        <div className="subpage-heading">
          <p className="blog-kicker">PROFILE</p>
          <h2>会社概要</h2>
        </div>
        <dl className="info-list">
          {companyRows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="subpage-cta">
        <p>空間演出や映像制作のご相談は、構想段階からお気軽にお問い合わせください。</p>
        <Link href="/contact">CONTACT US</Link>
      </section>
    </SiteShell>
  );
}
