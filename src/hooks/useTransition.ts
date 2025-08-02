import { useMemo } from 'react';
import { cn } from '@/lib/utils';

export interface TransitionConfig {
  duration?: 'fast' | 'normal' | 'slow';
  hover?: {
    transform?: 'lift' | 'scale' | 'rotate' | 'none';
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
    glow?: boolean;
  };
  focus?: {
    ring?: boolean;
    scale?: boolean;
  };
}

const durationClasses = {
  fast: 'transition-all duration-200',
  normal: 'transition-all duration-300',
  slow: 'transition-all duration-500'
};

const transformClasses = {
  lift: 'hover:-translate-y-2',
  scale: 'hover:scale-105',
  rotate: 'hover:rotate-1',
  none: ''
};

const shadowClasses = {
  sm: 'hover:shadow-sm',
  md: 'hover:shadow-md',
  lg: 'hover:shadow-lg',
  xl: 'hover:shadow-xl',
  none: ''
};

export function useTransition(config: TransitionConfig = {}) {
  const {
    duration = 'normal',
    hover = { transform: 'lift', shadow: 'xl', glow: false },
    focus = { ring: true, scale: false }
  } = config;

  return useMemo(() => {
    const classes = [
      durationClasses[duration],
      transformClasses[hover.transform || 'none'],
      shadowClasses[hover.shadow || 'none']
    ];

    if (hover.glow) {
      classes.push('hover:shadow-2xl hover:shadow-blue-500/20');
    }

    if (focus.ring) {
      classes.push('focus:outline-none focus:ring-2 focus:ring-blue-500/50');
    }

    if (focus.scale) {
      classes.push('focus:scale-105');
    }

    return cn(...classes);
  }, [duration, hover, focus]);
}

export function useHoverTransition(type: 'card' | 'button' | 'link' = 'card') {
  const configs = {
    card: {
      duration: 'normal' as const,
      hover: { transform: 'lift' as const, shadow: 'xl' as const, glow: false },
      focus: { ring: false, scale: false }
    },
    button: {
      duration: 'fast' as const,
      hover: { transform: 'scale' as const, shadow: 'md' as const, glow: true },
      focus: { ring: true, scale: true }
    },
    link: {
      duration: 'fast' as const,
      hover: { transform: 'none' as const, shadow: 'none' as const, glow: false },
      focus: { ring: true, scale: false }
    }
  };

  return useTransition(configs[type]);
}

export default useTransition;