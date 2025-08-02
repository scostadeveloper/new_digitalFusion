import { useMemo } from 'react';

export interface SequentialAnimationConfig {
  baseDelay?: number;
  delayIncrement?: number;
  duration?: number;
  ease?: number[];
}

export interface AnimationProps {
  initial: Record<string, any>;
  animate: Record<string, any>;
  transition: {
    duration: number;
    delay: number;
    ease: number[];
  };
}

export function useSequentialAnimation(
  index: number,
  config: SequentialAnimationConfig = {}
): AnimationProps {
  const {
    baseDelay = 0,
    delayIncrement = 0.1,
    duration = 0.6,
    ease = [0.25, 0.46, 0.45, 0.94]
  } = config;

  return useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration,
      delay: baseDelay + (index * delayIncrement),
      ease
    }
  }), [index, baseDelay, delayIncrement, duration, ease]);
}

export function useStaggeredAnimation(
  itemCount: number,
  config: SequentialAnimationConfig = {}
) {
  const {
    baseDelay = 0,
    delayIncrement = 0.1,
    duration = 0.6,
    ease = [0.25, 0.46, 0.45, 0.94]
  } = config;

  return useMemo(() => {
    return Array.from({ length: itemCount }, (_, index) => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration,
        delay: baseDelay + (index * delayIncrement),
        ease
      }
    }));
  }, [itemCount, baseDelay, delayIncrement, duration, ease]);
}

export default useSequentialAnimation;