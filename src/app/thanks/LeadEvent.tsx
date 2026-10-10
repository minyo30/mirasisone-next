'use client';

import { useEffect } from 'react';

export default function LeadEvent() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('lead_sent')) return;
      sessionStorage.setItem('lead_sent', '1');
    } catch {
      // sessionStorage is unavailable (private mode etc.); still send the event
    }

    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.('event', 'generate_lead');
  }, []);

  return null;
}
