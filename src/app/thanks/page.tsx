import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THANKS",
  description: "MIRASISONEへのお問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。",
  alternates: {
    canonical: "/thanks",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-grid" aria-hidden="true" />
      <section className="thanks-shell">
        <p className="thanks-kicker">Thank You</p>
        <h1>
          お問い合わせ
          <span>ありがとうございます。</span>
        </h1>
        <div className="thanks-rule" aria-hidden="true">
          <span />
        </div>
        <p className="thanks-lead">
          内容を確認のうえ、担当者よりご連絡いたします。
          <br />
          通常、2〜3営業日以内に返信いたします。
        </p>
        <p className="thanks-copy">
          入力いただいたメールアドレス宛に返信いたします。数日経っても連絡がない場合は、
          お手数ですが <span>info@mirasisone.co.jp</span> までご連絡ください。
        </p>
        <div className="thanks-actions">
          <Link className="thanks-primary" href="/">
            TOPへ戻る
          </Link>
          <Link className="thanks-secondary" href="/works">
            WORKSを見る
          </Link>
        </div>
      </section>
    </main>
  );
}
