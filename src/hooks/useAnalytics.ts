import { GA_CONFIG } from '../lib/analytics-config';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  params?: Record<string, any>;
}

export const useAnalytics = () => {
  const trackEvent = ({ action, category, label, value, params = {} }: AnalyticsEvent) => {
    if (GA_CONFIG.DEBUG_MODE) {
      console.log('Analytics Event:', { action, category, label, value, params });
    }

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...GA_CONFIG.DEFAULT_EVENT_PARAMS,
      ...params
    });
  };

  const trackProjectView = (projectId: string, projectName: string) => {
    trackEvent({
      action: 'view_project',
      category: 'Project',
      label: projectName,
      params: {
        project_id: projectId,
        project_name: projectName
      }
    });
  };

  const trackContactForm = (action: string, success: boolean) => {
    trackEvent({
      action,
      category: 'Contact Form',
      label: success ? 'Success' : 'Error',
      params: {
        success,
        timestamp: new Date().toISOString()
      }
    });
  };

  const trackExternalLink = (url: string, label: string) => {
    trackEvent({
      action: 'click_external_link',
      category: 'External Link',
      label,
      params: {
        url,
        destination: label
      }
    });
  };

  return {
    trackEvent,
    trackProjectView,
    trackContactForm,
    trackExternalLink
  };
}; 