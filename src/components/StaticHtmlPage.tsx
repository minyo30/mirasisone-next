"use client";

import { useEffect, useMemo } from "react";

type StaticPageData = {
  readonly title: string;
  readonly style: string;
  readonly body: string;
  readonly scripts: readonly string[];
  readonly scriptTags?: readonly StaticScript[];
};

type StaticScript = {
  readonly src?: string;
  readonly content?: string;
};

type StaticHtmlPageProps = {
  page: StaticPageData;
  contactLinks?: boolean;
};

function rewriteLinks(html: string, contactLinks = false) {
  let nextHtml = html
    .replaceAll("mirasisone-works-renewal.html#", "/#")
    .replaceAll("mirasisone-works-renewal.html", "/")
    .replaceAll("20260705_mirasisone-contact-page.html", "/contact")
    .replaceAll("mirasisone-contact-page.html", "/contact");

  if (contactLinks) {
    nextHtml = nextHtml
      .replaceAll('href="#contact"', 'href="/contact"')
      .replaceAll('href="#contact-form"', 'href="/contact"');
  }

  return nextHtml;
}

export function StaticHtmlPage({ page, contactLinks = false }: StaticHtmlPageProps) {
  const body = useMemo(() => rewriteLinks(page.body, contactLinks), [page.body, contactLinks]);

  useEffect(() => {
    document.title = page.title;

    const injectedScripts: HTMLScriptElement[] = [];
    let cancelled = false;

    async function runScripts() {
      const scriptTags: readonly StaticScript[] =
        page.scriptTags ?? page.scripts.map((content) => ({ content }));

      for (const script of scriptTags) {
        if (cancelled) return;
        const element = document.createElement("script");
        injectedScripts.push(element);

        if (script.src) {
          element.src = script.src;
          element.async = false;
          document.body.appendChild(element);
          await new Promise<void>((resolve) => {
            element.onload = () => resolve();
            element.onerror = () => resolve();
          });
          continue;
        }

        element.textContent = script.content ?? "";
        document.body.appendChild(element);
      }
    }

    runScripts();

    return () => {
      cancelled = true;
      injectedScripts.forEach((script) => script.remove());
    };
  }, [page]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: page.style }} suppressHydrationWarning />
      <div dangerouslySetInnerHTML={{ __html: body }} suppressHydrationWarning />
    </>
  );
}
