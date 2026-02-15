// Dados de contato centralizados (via env vars ou fallback)
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '554831920163';
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Tenho interesse no terreno comercial em Tubarão/SC - Vila Moema.'
);
export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '554831920163';
// IDs de serviços externos
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '';
export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwP-bhuUQjRgj3arG3xfauFHnDCa9pOeWCbqZyWQkU1k_-QT2giJsR7a8sGb2-MsNZWOA/exec';
