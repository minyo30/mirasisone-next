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
    const cleanups: Array<() => void> = [];
    let cancelled = false;

    function ensureProjectionValueHover() {
      const items = Array.from(document.querySelectorAll<HTMLElement>(".str2-item"));
      const images = Array.from(document.querySelectorAll<HTMLElement>(".str2-img"));
      const bgNum = document.getElementById("str2BgNum");

      if (!items.length || !images.length) return;

      function activate(index: string | undefined) {
        if (!index) return;

        items.forEach((item) => {
          item.classList.toggle("is-default", item.dataset.img === index);
        });

        images.forEach((image) => {
          const active = image.dataset.index === index;
          image.classList.toggle("is-active", active);
          if (active) {
            image.classList.add("is-visible");
          }
        });

        if (bgNum) {
          bgNum.textContent = String(Number(index) + 1).padStart(2, "0");
        }
      }

      activate(items[0]?.dataset.img ?? "0");

      items.forEach((item) => {
        const onEnter = () => activate(item.dataset.img);
        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("focusin", onEnter);
        cleanups.push(() => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("focusin", onEnter);
        });
      });
    }

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

      if (!cancelled) {
        ensureProjectionValueHover();
      }
    }

    runScripts();

    return () => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
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
