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

    function revealInitialTopCopy() {
      const story = document.getElementById("scroll-story");
      const firstPhase = document.getElementById("ss-p1");
      const introPhase = document.getElementById("ss-p2");
      if (!story || !firstPhase || !introPhase) return;

      const storyRect = story.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -storyRect.top / Math.max(1, story.offsetHeight - window.innerHeight)));
      if (progress > 0.48) return;

      firstPhase.classList.add("is-active");
      introPhase.classList.add("is-active");
      introPhase.style.setProperty("opacity", "1", "important");
      introPhase.style.setProperty("pointer-events", "auto", "important");

      introPhase
        .querySelectorAll<HTMLElement>(".ss-reveal-text, .ss-title-text")
        .forEach((text) => {
          text.classList.add("is-final");
          text.style.setProperty("opacity", "1", "important");
          text.style.setProperty("visibility", "visible", "important");
          text.style.setProperty("clip-path", "none", "important");
          text.style.setProperty("filter", "none", "important");
        });

      introPhase.querySelectorAll<HTMLElement>(".ss-reveal-overlay").forEach((overlay) => {
        overlay.style.setProperty("display", "none", "important");
        overlay.style.setProperty("opacity", "0", "important");
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

      revealInitialTopCopy();
      window.setTimeout(revealInitialTopCopy, 80);
      window.setTimeout(revealInitialTopCopy, 300);
      window.setTimeout(revealInitialTopCopy, 900);
    }

    runScripts();
    window.addEventListener("scroll", revealInitialTopCopy, { passive: true });
    window.addEventListener("resize", revealInitialTopCopy);

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", revealInitialTopCopy);
      window.removeEventListener("resize", revealInitialTopCopy);
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
