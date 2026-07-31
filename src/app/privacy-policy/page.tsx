import type { Metadata } from "next";
import { SiteShell } from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "PRIVACY POLICY",
  description:
    "MIRASISONEのプライバシーポリシーです。個人情報の取得、利用、管理、第三者提供、開示請求等について定めています。",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "PRIVACY POLICY | MIRASISONE",
    description:
      "MIRASISONEのプライバシーポリシーです。個人情報の取得、利用、管理、第三者提供、開示請求等について定めています。",
    url: "/privacy-policy",
  },
};

const sections = [
  {
    title: "個人情報の取得について",
    body: "当サイトでは、お問い合わせ時に氏名、メールアドレス、電話番号、会社名、ご相談内容などの個人情報をご入力いただく場合があります。",
  },
  {
    title: "個人情報の利用目的",
    body: "取得した個人情報は、お問い合わせへの回答、サービスのご案内、業務上必要な連絡、品質向上のための分析に利用します。",
  },
  {
    title: "個人情報の第三者提供",
    body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供することはありません。",
  },
  {
    title: "個人情報の管理",
    body: "取得した個人情報は、不正アクセス、紛失、改ざん、漏えい等を防止するため、適切な安全管理措置を講じます。",
  },
  {
    title: "アクセス解析ツールについて",
    body: "当サイトでは、サイト改善や利用状況の把握のため、アクセス解析ツールを利用する場合があります。",
  },
  {
    title: "プライバシーポリシーの変更",
    body: "本ポリシーの内容は、法令その他必要に応じて変更することがあります。変更後の内容は当サイトに掲載した時点で有効となります。",
  },
  {
    title: "お問い合わせ",
    body: "個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="subpage-hero">
        <p className="blog-kicker">PRIVACY POLICY</p>
        <h1>
          プライバシー
          <br />
          ポリシー
        </h1>
        <p>
          MIRASISONEは、個人情報の重要性を認識し、適切な取得、利用、管理を行います。
        </p>
      </section>

      <article className="policy-panel">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
    </SiteShell>
  );
}
