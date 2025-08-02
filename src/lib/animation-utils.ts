import { Variants } from 'framer-motion';

// Configurações de easing padrão
export const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
  sharp: [0.4, 0, 0.2, 1],
  linear: [0, 0, 1, 1]
} as const;

// Durações padrão
export const DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  slower: 1.0
} as const;

// Variantes de animação comuns
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const slideInUp: Variants = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { y: '100%' }
};

export const slideInDown: Variants = {
  initial: { y: '-100%' },
  animate: { y: 0 },
  exit: { y: '-100%' }
};

// Função para criar animações sequenciais
export function createStaggeredAnimation(
  variant: Variants,
  staggerDelay: number = 0.1,
  duration: number = DURATION.slow
) {
  return {
    ...variant,
    animate: {
      ...variant.animate,
      transition: {
        duration,
        ease: EASING.smooth,
        staggerChildren: staggerDelay
      }
    }
  };
}

// Função para criar transições personalizadas
export function createTransition(
  duration: number = DURATION.normal,
  delay: number = 0,
  ease: number[] = EASING.smooth
) {
  return {
    duration,
    delay,
    ease
  };
}

// Animações de hover comuns
export const hoverAnimations = {
  lift: {
    y: -8,
    transition: createTransition(DURATION.fast)
  },
  scale: {
    scale: 1.05,
    transition: createTransition(DURATION.fast)
  },
  glow: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
    transition: createTransition(DURATION.fast)
  },
  rotate: {
    rotate: 2,
    transition: createTransition(DURATION.fast)
  }
};

// Animações de foco
export const focusAnimations = {
  ring: {
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)',
    transition: createTransition(DURATION.fast)
  },
  scale: {
    scale: 1.02,
    transition: createTransition(DURATION.fast)
  }
};

// Container para animações staggered
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Item para animações staggered
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth
    }
  }
};

export default {
  EASING,
  DURATION,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInUp,
  slideInDown,
  createStaggeredAnimation,
  createTransition,
  hoverAnimations,
  focusAnimations,
  staggerContainer,
  staggerItem
};