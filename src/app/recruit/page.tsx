import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "RECRUIT",
  description:
    "MIRASISONEの採用情報です。プロジェクションマッピング、3DCG、空間演出、AR・XR領域で共に体験をつくる仲間を募集しています。",
  alternates: {
    canonical: "/recruit",
  },
  openGraph: {
    title: "RECRUIT | MIRASISONE",
    description:
      "MIRASISONEの採用情報です。プロジェクションマッピング、3DCG、空間演出、AR・XR領域で共に体験をつくる仲間を募集しています。",
    url: "/recruit",
  },
};

const roles = [
  {
    title: "映像・3DCGクリエイター",
    body: "空間演出、プロモーション、イベント向けの映像表現を制作します。",
  },
  {
    title: "空間演出プランナー",
    body: "施設やブランドの目的に合わせて、体験設計と制作進行を担います。",
  },
  {
    title: "テクニカルディレクター",
    body: "投影、機材、現場実装、運用までを見据えた技術設計を行います。",
  },
];

export default function RecruitPage() {
  return (
    <SiteShell>
      <section className="subpage-hero">
        <p className="blog-kicker">RECRUIT</p>
        <h1>
          未来の体験を、
          <br />
          一緒につくる。
        </h1>
        <p>
          MIRASISONEでは、映像、空間、テクノロジーを横断しながら、
          人の感情が動く体験づくりに向き合うメンバーを募集しています。
        </p>
      </section>

      <section className="subpage-panel">
        <div className="subpage-heading">
          <p className="blog-kicker">WORK STYLE</p>
          <h2>企画から現場実装まで、体験の完成度に向き合う。</h2>
        </div>
        <p>
          私たちの仕事は、映像をつくって終わりではありません。
          どんな場所で、誰が、どの瞬間に心を動かすのか。
          その設計から制作、現場調整、運用までをチームで進めます。
        </p>
      </section>

      <section className="subpage-cards" aria-label="募集領域">
        {roles.map((role) => (
          <article key={role.title}>
            <h2>{role.title}</h2>
            <p>{role.body}</p>
          </article>
        ))}
      </section>

      <section className="subpage-panel">
        <div className="subpage-heading">
          <p className="blog-kicker">ENTRY</p>
          <h2>まずは話してみるところから。</h2>
        </div>
        <p>
          制作実績、ポートフォリオ、これまで関わってきたプロジェクトなどを添えてご連絡ください。
          具体的な募集条件は、状況に応じて個別にご案内します。
        </p>
      </section>

      <section className="subpage-cta">
        <p>採用・協業に関するお問い合わせはこちらから。</p>
        <Link href="/contact">CONTACT US</Link>
      </section>
    </SiteShell>
  );
}
