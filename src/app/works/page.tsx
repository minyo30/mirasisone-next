import type { Metadata } from "next";
import { StaticHtmlPage } from "@/components/StaticHtmlPage";
import { worksPage } from "@/content/works";

export const metadata: Metadata = {
  title: "SERVICES & WORKS",
  description:
    "プロジェクションマッピング、3DCG映像制作、AR・XRコンテンツ、イマーシブ空間演出の制作領域と実績を紹介します。",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "SERVICES & WORKS | MIRASISONE",
    description:
      "空間演出・3DCG・AR / XRコンテンツ制作のサービスと制作実績を紹介します。",
    url: "/works",
  },
};

export default function WorksPage() {
  return <StaticHtmlPage page={worksPage} contactLinks />;
}
