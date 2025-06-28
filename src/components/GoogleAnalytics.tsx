import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_CONFIG } from '../lib/analytics-config';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicializa o GA4 apenas se ainda não estiver inicializado
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_CONFIG.MEASUREMENT_ID, {
        debug_mode: GA_CONFIG.DEBUG_MODE,
        ...GA_CONFIG.DEFAULT_EVENT_PARAMS
      });
    }
  }, []);

  useEffect(() => {
    if (GA_CONFIG.SEND_PAGE_VIEWS && window.gtag) {
      // Rastreia mudanças de página
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        ...GA_CONFIG.DEFAULT_EVENT_PARAMS
      });
    }
  }, [location]);

  return null;
}; 