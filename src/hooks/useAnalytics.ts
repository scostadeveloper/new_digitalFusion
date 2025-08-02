import { GA_CONFIG } from '../lib/analytics-config';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  params?: Record<string, unknown>;
}

export const useAnalytics = () => {
  const trackEvent = ({
    action,
    category,
    label,
    value,
    params = {},
  }: AnalyticsEvent) => {
    if (GA_CONFIG.DEBUG_MODE) {
      console.log('Analytics Event:', {
        action,
        category,
        label,
        value,
        params,
      });
    }

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...GA_CONFIG.DEFAULT_EVENT_PARAMS,
      ...params,
    });
  };

  const trackProjectView = (projectId: string, projectName: string) => {
    trackEvent({
      action: 'view_project',
      category: 'Project',
      label: projectName,
      params: {
        project_id: projectId,
        project_name: projectName,
      },
    });
  };

  const trackContactForm = (action: string, success: boolean) => {
    trackEvent({
      action,
      category: 'Contact Form',
      label: success ? 'Success' : 'Error',
      params: {
        success,
        timestamp: new Date().toISOString(),
      },
    });
  };

  const trackExternalLink = (url: string, label: string) => {
    trackEvent({
      action: 'click_external_link',
      category: 'External Link',
      label,
      params: {
        url,
        destination: label,
      },
    });
  };

  const trackServiceView = (serviceId: string, serviceName: string) => {
    trackEvent({
      action: 'view_service',
      category: 'Service',
      label: serviceName,
      params: {
        service_id: serviceId,
        service_name: serviceName,
      },
    });
  };

  const trackPageView = (pageName: string, pageTitle?: string) => {
    trackEvent({
      action: 'page_view',
      category: 'Navigation',
      label: pageName,
      params: {
        page_name: pageName,
        page_title: pageTitle || pageName,
        timestamp: new Date().toISOString(),
      },
    });
  };

  const trackUserInteraction = (element: string, action: string, context?: string) => {
    trackEvent({
      action: `${action}_${element}`,
      category: 'User Interaction',
      label: context || element,
      params: {
        element_type: element,
        interaction_type: action,
        context,
      },
    });
  };

  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent({
      action: 'download_file',
      category: 'Download',
      label: fileName,
      params: {
        file_name: fileName,
        file_type: fileType,
      },
    });
  };

  const trackSearch = (query: string, resultsCount?: number) => {
    trackEvent({
      action: 'search',
      category: 'Search',
      label: query,
      params: {
        search_query: query,
        results_count: resultsCount,
      },
    });
  };

  const trackSocialShare = (platform: string, content: string) => {
    trackEvent({
      action: 'social_share',
      category: 'Social Media',
      label: platform,
      params: {
        platform,
        content_shared: content,
      },
    });
  };

  return {
    trackEvent,
    trackProjectView,
    trackContactForm,
    trackExternalLink,
    trackServiceView,
    trackPageView,
    trackUserInteraction,
    trackDownload,
    trackSearch,
    trackSocialShare,
  };
};
