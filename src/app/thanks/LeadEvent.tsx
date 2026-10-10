'use client';

import { useEffect } from 'react';

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

const DEDUPE_KEY = 'lead_sent_at';
const DEDUPE_WINDOW_MS = 10 * 60 * 1000;

export default function LeadEvent() {
  useEffect(() => {
    // Reaching this page from another page of our own site is a visit, not a
    // submission. An empty or external referrer is treated as a submission so a
    // real lead is never dropped when the browser withholds the referrer.
    const referrer = document.referrer;
    if (referrer.startsWith(window.location.origin)) {
      let path = '';
      try {
        path = new URL(referrer).pathname;
      } catch {
        // Malformed referrer; fall through and treat it as a submission.
      }
      if (path && !path.startsWith('/contact')) return;
    }

    // Guard against reloads, but let a genuine later enquiry still count.
    try {
      const last = Number(window.sessionStorage.getItem(DEDUPE_KEY) || 0);
      if (last && Date.now() - last < DEDUPE_WINDOW_MS) return;
      window.sessionStorage.setItem(DEDUPE_KEY, String(Date.now()));
    } catch {
      // sessionStorage is unavailable (private mode etc.); still send the event.
    }

    const send = () => {
      const w = window as unknown as GtagWindow;
      if (typeof w.gtag !== 'function') return false;
      w.gtag('event', 'generate_lead');
      return true;
    };

    if (send()) return;

    // The GA4 script is loaded with afterInteractive, so it can still be
    // pending when this effect runs. Retry for a few seconds before giving up.
    let tries = 0;
    const timer = window.setInterval(() => {
      if (send() || (tries += 1) > 50) window.clearInterval(timer);
    }, 200);

    return () => window.clearInterval(timer);
  }, []);

  return null;
}
