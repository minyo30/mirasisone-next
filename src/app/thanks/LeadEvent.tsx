'use client';

import { useEffect } from 'react';

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export default function LeadEvent() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('lead_sent')) return;
      sessionStorage.setItem('lead_sent', '1');
    } catch {
      // sessionStorage is unavailable (private mode etc.); still send the event
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
