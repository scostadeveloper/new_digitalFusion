export const ANALYTICS_EVENTS = {
  PROJECT: {
    VIEW: 'view_project',
    CLICK: 'click_project',
    SHARE: 'share_project',
  },
  CONTACT: {
    SUBMIT: 'submit_contact',
    SUCCESS: 'contact_success',
    ERROR: 'contact_error',
  },
  NAVIGATION: {
    EXTERNAL_LINK: 'click_external_link',
    INTERNAL_LINK: 'click_internal_link',
  },
} as const;
