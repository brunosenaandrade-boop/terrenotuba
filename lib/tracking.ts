// Declarações de tipo para Meta Pixel e Google Analytics
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    gtag: (...args: unknown[]) => void;
  }
}

// --- Meta Pixel Events ---

export function trackPixelEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}

export function trackPixelCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }
}

// --- Google Analytics 4 Events ---

export function trackGA4Event(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// --- Eventos de Conversão do Projeto ---

export function trackWhatsAppClick() {
  trackPixelEvent('Contact', { content_name: 'WhatsApp Click' });
  trackGA4Event('whatsapp_click', { event_category: 'engagement' });
}

export function trackFormSubmit(formData: {
  interesse?: string;
  prazo?: string;
  pagamento?: string;
}) {
  trackPixelEvent('Lead', {
    content_name: 'Formulário de Qualificação',
    ...formData,
  });
  trackGA4Event('generate_lead', {
    event_category: 'conversion',
    ...formData,
  });
}

export function trackFormStart() {
  trackPixelCustomEvent('FormStart', { content_name: 'Formulário de Qualificação' });
  trackGA4Event('form_start', { event_category: 'engagement' });
}

export function trackCTAClick(ctaName: string) {
  trackPixelCustomEvent('CTAClick', { content_name: ctaName });
  trackGA4Event('cta_click', { event_category: 'engagement', cta_name: ctaName });
}

export function trackVideoPlay() {
  trackPixelCustomEvent('VideoPlay', { content_name: 'Video Tour' });
  trackGA4Event('video_start', { event_category: 'engagement' });
}

export function trackScrollDepth(percent: number) {
  trackPixelCustomEvent('ScrollDepth', { percent });
  trackGA4Event('scroll', { event_category: 'engagement', percent });
}
