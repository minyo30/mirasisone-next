import type { Metadata } from "next";
import { LegacyPageShell } from "@/components/LegacyPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MIRASISONEのプライバシーポリシーです。個人情報の取得、利用、管理、第三者提供、開示請求等について定めています。",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | MIRASISONE",
    description:
      "MIRASISONEのプライバシーポリシーです。個人情報の取得、利用、管理、第三者提供、開示請求等について定めています。",
    url: "/privacy-policy",
  },
};

const policies = [
  {
    title: "1. 個人情報の取得について",
    body: "当サイトでは、お問い合わせ時に氏名、メールアドレス、電話番号、会社名、ご相談内容などの個人情報をご入力いただく場合があります。",
  },
  {
    title: "2. 個人情報の利用目的",
    body: "取得した個人情報は、お問い合わせへの回答、サービスのご案内、業務上必要な連絡、品質向上のための分析に利用します。",
  },
  {
    title: "3. 個人情報の第三者提供",
    body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供することはありません。",
  },
  {
    title: "4. 個人情報の管理",
    body: "取得した個人情報は、不正アクセス、紛失、改ざん、漏えい等を防止するため、適切な安全管理措置を講じます。",
  },
  {
    title: "5. 個人情報の開示・訂正・削除",
    body: "ご本人から個人情報の開示、訂正、削除等を求められた場合は、本人確認のうえ、法令に基づき適切に対応します。",
  },
  {
    title: "6. アクセス解析ツールについて",
    body: "当サイトでは、サイト改善や利用状況の把握のため、アクセス解析ツールを利用する場合があります。",
  },
  {
    title: "7. プライバシーポリシーの変更",
    body: "本ポリシーの内容は、法令その他必要に応じて変更することがあります。変更後の内容は当サイトに掲載した時点で有効となります。",
  },
  {
    title: "8. お問い合わせ",
    body: "個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegacyPageShell>
      <section className="legacy-hero legacy-hero-policy">
        <p>PRIVACY POLICY</p>
        <h1>Privacy Policy</h1>
      </section>

      <article className="legacy-policy">
        <p className="legacy-policy-lead">
          MIRASISONEは、個人情報の重要性を認識し、適切な取得、利用、管理を行います。
        </p>
        {policies.map((policy) => (
          <section key={policy.title}>
            <h2>{policy.title}</h2>
            <p>{policy.body}</p>
          </section>
        ))}
      </article>
    </LegacyPageShell>
  );
}
