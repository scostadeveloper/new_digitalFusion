import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}: ParallaxElementProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [0, -speed * 100]),
    down: useTransform(scrollYProgress, [0, 1], [0, speed * 100]),
    left: useTransform(scrollYProgress, [0, 1], [0, -speed * 100]),
    right: useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  };

  const getTransformStyle = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: transforms[direction] };
      case 'left':
      case 'right':
        return { x: transforms[direction] };
      default:
        return { y: transforms.up };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={getTransformStyle()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlowEffectProps {
  children: React.ReactNode;
  color?: 'cyan' | 'purple' | 'green' | 'pink';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  hover?: boolean;
}

export function GlowEffect({ 
  children, 
  color = 'cyan', 
  intensity = 'medium',
  className = '',
  hover = false
}: GlowEffectProps) {
  const colorMap = {
    cyan: 'shadow-neon-cyan border-neon-cyan',
    purple: 'shadow-cyber-purple border-cyber-purple',
    green: 'shadow-neon-green border-neon-green',
    pink: 'shadow-neon-pink border-neon-pink'
  };

  const intensityMap = {
    low: 'shadow-sm',
    medium: 'shadow-md',
    high: 'shadow-xl'
  };

  return (
    <div 
      className={cn(
        'relative transition-all duration-300',
        hover && 'hover:scale-105',
        className
      )}
    >
      <div 
        className={cn(
          'absolute inset-0 rounded-lg blur-sm opacity-50',
          colorMap[color],
          intensityMap[intensity],
          hover && 'group-hover:opacity-75 group-hover:blur-md'
        )}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

interface PulseElementProps {
  children: React.ReactNode;
  duration?: number;
  scale?: number;
  className?: string;
}

export function PulseElement({ 
  children, 
  duration = 2, 
  scale = 1.05,
  className = '' 
}: PulseElementProps) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function RevealText({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  stagger = 0.05 
}: RevealTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay 
      }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration
      }
    }
  };

  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  magnetStrength?: number;
}

export function MagneticButton({ 
  children, 
  className = '',
  magnetStrength = 0.3 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * magnetStrength}px, ${y * magnetStrength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('transition-transform duration-300 ease-out', className)}
    >
      {children}
    </div>
  );
}

interface ScrollProgressProps {
  className?: string;
  color?: string;
  height?: string;
}

export function ScrollProgress({ 
  className = '', 
  color = 'bg-neon-cyan',
  height = 'h-1' 
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 origin-left',
        height,
        color,
        className
      )}
      style={{ scaleX: scrollYProgress }}
    />
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  maxTilt?: number;
  className?: string;
  glare?: boolean;
}

export function TiltCard({ 
  children, 
  maxTilt = 20, 
  className = '',
  glare = true 
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((centerX - x) / centerX) * maxTilt;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (glare) {
      const glareElement = ref.current.querySelector('.glare-effect') as HTMLElement;
      if (glareElement) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glareElement.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 70%)`;
      }
    }
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    
    if (glare) {
      const glareElement = ref.current.querySelector('.glare-effect') as HTMLElement;
      if (glareElement) {
        glareElement.style.background = 'transparent';
      }
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('transition-transform duration-300 ease-out relative', className)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div 
          className="glare-effect absolute inset-0 pointer-events-none rounded-lg"
          style={{ mixBlendMode: 'overlay' }}
        />
      )}
    </div>
  );
}

export { ParallaxElement as default };
