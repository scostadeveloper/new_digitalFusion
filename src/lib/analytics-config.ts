export const GA_CONFIG = {
  MEASUREMENT_ID: 'G-NPGXJJEF5W',
  DEBUG_MODE: process.env.NODE_ENV === 'development',
  SEND_PAGE_VIEWS: true,
  DEFAULT_EVENT_PARAMS: {
    site_version: '1.0.0',
    environment: process.env.NODE_ENV,
  },
} as const;
