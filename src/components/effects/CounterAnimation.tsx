import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

interface CounterAnimationProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  enableScrollTrigger?: boolean;
  onComplete?: () => void;
}

export function CounterAnimation({
  value,
  duration = 2,
  delay = 0,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0,
  enableScrollTrigger = true,
  onComplete,
}: CounterAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const shouldAnimate = enableScrollTrigger ? isInView : true;

  return (
    <span ref={ref} className={cn('inline-block', className)}>
      {shouldAnimate && (
        <CountUp
          start={0}
          end={value}
          duration={duration}
          delay={delay}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
          onEnd={onComplete}
          preserveValue
        />
      )}
    </span>
  );
}

// Neon glow counter variant
export function NeonCounter({
  value,
  className = '',
  ...props
}: Omit<CounterAnimationProps, 'className'> & { className?: string }) {
  return (
    <CounterAnimation
      value={value}
      className={cn(
        'text-neon-cyan font-bold text-4xl md:text-6xl',
        'drop-shadow-neon-cyan',
        'animate-pulse-glow',
        className
      )}
      {...props}
    />
  );
}

// Gradient counter variant
export function GradientCounter({
  value,
  className = '',
  ...props
}: Omit<CounterAnimationProps, 'className'> & { className?: string }) {
  return (
    <CounterAnimation
      value={value}
      className={cn(
        'text-gradient-neon font-bold text-3xl md:text-5xl',
        className
      )}
      {...props}
    />
  );
}

// Stats card with animated counter
interface StatsCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'neon' | 'gradient' | 'glass';
}

export function StatsCard({
  title,
  value,
  suffix = '',
  prefix = '',
  description,
  icon,
  className = '',
  variant = 'glass',
}: StatsCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardSpring = useSpring({
    from: { opacity: 0, y: 50, scale: 0.9 },
    to: isInView
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 50, scale: 0.9 },
    config: { tension: 280, friction: 60 },
    delay: 200,
  });

  const getVariantClasses = () => {
    switch (variant) {
      case 'neon':
        return 'bg-black/40 border-neon-cyan border-2 shadow-neon-cyan/30';
      case 'gradient':
        return 'bg-gradient-to-br from-cyber-purple/20 to-neon-cyan/20 border-gray-700';
      case 'glass':
      default:
        return 'glass-card border-glass';
    }
  };

  return (
    <animated.div
      ref={ref}
      style={cardSpring}
      className={cn(
        'p-6 rounded-xl backdrop-blur-sm border transition-all duration-300',
        'hover:scale-105 hover:shadow-lg hover:shadow-white/10',
        getVariantClasses(),
        className
      )}
    >
      {icon && (
        <div className="flex justify-center mb-4 text-neon-cyan text-3xl">
          {icon}
        </div>
      )}

      <div className="text-center">
        <div className="mb-2">
          {variant === 'neon' ? (
            <NeonCounter
              value={value}
              suffix={suffix}
              prefix={prefix}
              enableScrollTrigger={isInView}
            />
          ) : (
            <GradientCounter
              value={value}
              suffix={suffix}
              prefix={prefix}
              enableScrollTrigger={isInView}
            />
          )}
        </div>

        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>

        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
    </animated.div>
  );
}

// Progress bar with counter
interface ProgressCounterProps {
  label: string;
  value: number;
  max?: number;
  className?: string;
  showPercentage?: boolean;
}

export function ProgressCounter({
  label,
  value,
  max = 100,
  className = '',
  showPercentage = true,
}: ProgressCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const percentage = Math.min((value / max) * 100, 100);

  const progressSpring = useSpring({
    from: { width: '0%' },
    to: isInView ? { width: `${percentage}%` } : { width: '0%' },
    config: { duration: 2000 },
    delay: 300,
  });

  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{label}</span>
        {showPercentage && (
          <span className="text-neon-cyan font-mono">
            <CounterAnimation
              value={percentage}
              suffix="%"
              decimals={0}
              enableScrollTrigger={isInView}
            />
          </span>
        )}
      </div>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <animated.div
          style={progressSpring}
          className="h-full bg-gradient-to-r from-cyber-purple to-neon-cyan rounded-full"
        />
      </div>
    </div>
  );
}

export default CounterAnimation;
