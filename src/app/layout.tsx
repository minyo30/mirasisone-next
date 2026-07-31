import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mirasisone.com"),
  title: {
    default: "MIRASISONE",
    template: "%s | MIRASISONE",
  },
  description:
    "MIRASISONEは、プロジェクションマッピング・3DCG・AR / XRを活用し、空間体験の企画から制作・実装まで支援します。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "MIRASISONE",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;700;900&family=Oswald:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="afterInteractive" />
      </body>
    </html>
  );
}
