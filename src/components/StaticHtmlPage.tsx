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

const pageLayoutOverrides = `
  @media (max-width: 1180px) {
    body .str2-section .str2-layout {
      display: flex !important;
      flex-direction: column !important;
      gap: clamp(20px, 4vw, 36px) !important;
    }

    body .str2-section .str2-list {
      order: 1 !important;
      width: 100% !important;
    }

    body .str2-section .str2-image-wrap {
      order: 2 !important;
      position: relative !important;
      top: auto !important;
      display: flex !important;
      width: 100% !important;
      height: clamp(280px, 48vw, 460px) !important;
      margin-top: clamp(14px, 3vw, 28px) !important;
      border-radius: 16px !important;
      overflow: hidden !important;
    }

    body .str2-section .str2-images {
      width: 100% !important;
      height: 100% !important;
      flex: none !important;
    }
  }
`;

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
    const timeouts: number[] = [];
    let cancelled = false;

    function ensureProjectionValueHover() {
      const items = Array.from(document.querySelectorAll<HTMLElement>(".str2-item"));
      const images = Array.from(document.querySelectorAll<HTMLElement>(".str2-img"));
      const bgNum = document.getElementById("str2BgNum");

      if (!items.length || !images.length) return;

      function playImageMotion(image: HTMLElement) {
        const sweepFilter = image.closest(".str2-images")?.querySelector<HTMLElement>(
          ":scope > .img-reveal-filter",
        );

        image.classList.remove("is-filtering");
        sweepFilter?.classList.remove("is-sweeping");

        void image.offsetWidth;
        if (sweepFilter) {
          void sweepFilter.offsetWidth;
        }

        image.classList.add("is-filtering");
        sweepFilter?.classList.add("is-sweeping");

        const timeout = window.setTimeout(() => {
          image.classList.remove("is-filtering");
          sweepFilter?.classList.remove("is-sweeping");
        }, 1000);
        timeouts.push(timeout);
      }

      function activate(index: string | undefined, motion = true) {
        if (!index) return;

        items.forEach((item) => {
          item.classList.toggle("is-default", item.dataset.img === index);
        });

        images.forEach((image) => {
          const active = image.dataset.index === index;
          image.classList.toggle("is-active", active);
          if (active) {
            image.classList.add("is-visible");
            if (motion) {
              playImageMotion(image);
            }
          }
        });

        if (bgNum) {
          bgNum.textContent = String(Number(index) + 1).padStart(2, "0");
        }
      }

      activate(items[0]?.dataset.img ?? "0", false);

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

    function ensureContactFormSubmit() {
      const submitHandler = async (event: SubmitEvent) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (!(form instanceof HTMLFormElement)) return false;

        const button = form.querySelector<HTMLButtonElement>(".form-submit");
        const originalText = button?.textContent ?? "送信する";
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        if (button) {
          button.textContent = "送信中...";
          button.disabled = true;
          button.style.background = "";
        }

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const result = (await response.json().catch(() => ({}))) as { message?: string };

          if (!response.ok) {
            throw new Error(result.message || "送信に失敗しました。");
          }

          form.reset();
          window.location.href = "/thanks";
        } catch (error) {
          if (button) {
            button.textContent = error instanceof Error ? error.message : "送信に失敗しました";
            button.style.background = "#dc2626";
            window.setTimeout(() => {
              button.textContent = originalText;
              button.style.background = "";
              button.disabled = false;
            }, 3500);
          }
        }

        return false;
      };

      (
        window as typeof window & {
          handleContactPageSubmit?: (event: SubmitEvent) => Promise<boolean>;
        }
      ).handleContactPageSubmit = submitHandler;
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
        ensureContactFormSubmit();
      }
    }

    runScripts();

    return () => {
      cancelled = true;
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      cleanups.forEach((cleanup) => cleanup());
      injectedScripts.forEach((script) => script.remove());
    };
  }, [page]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: page.style }} suppressHydrationWarning />
      <style dangerouslySetInnerHTML={{ __html: pageLayoutOverrides }} suppressHydrationWarning />
      <div dangerouslySetInnerHTML={{ __html: body }} suppressHydrationWarning />
    </>
  );
}
