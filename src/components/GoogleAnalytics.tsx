import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_CONFIG } from '../lib/analytics-config';

type GtagCommand = 'config' | 'event' | 'js' | 'set';
type GtagConfigParams = {
  debug_mode?: boolean;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: GtagCommand, ...args: unknown[]) => void;
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicializa o GA4 apenas se ainda não estiver inicializado
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag(command: GtagCommand, ...args: unknown[]) {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_CONFIG.MEASUREMENT_ID, {
        debug_mode: GA_CONFIG.DEBUG_MODE,
        ...GA_CONFIG.DEFAULT_EVENT_PARAMS,
      });
    }
  }, []);

  useEffect(() => {
    if (GA_CONFIG.SEND_PAGE_VIEWS && window.gtag) {
      // Rastreia mudanças de página
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        ...GA_CONFIG.DEFAULT_EVENT_PARAMS,
      });
    }
  }, [location]);

  return null;
};
