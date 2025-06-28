import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingElement {
  id: string;
  content: React.ReactNode;
  position: { x: number; y: number };
  scale?: number;
  rotation?: number;
  delay?: number;
  duration?: number;
}

interface FloatingElementsProps {
  elements: FloatingElement[];
  className?: string;
  enableHover?: boolean;
  enableClick?: boolean;
  autoFloat?: boolean;
}

export function FloatingElements({
  elements,
  className = '',
  enableHover = true,
  enableClick = false,
  autoFloat = true
}: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div 
      ref={containerRef}
      className={cn('relative w-full h-full pointer-events-none', className)}
    >
      {elements.map((element) => (
        <FloatingItem
          key={element.id}
          element={element}
          isVisible={isInView}
          enableHover={enableHover}
          enableClick={enableClick}
          autoFloat={autoFloat}
        />
      ))}
    </div>
  );
}

interface FloatingItemProps {
  element: FloatingElement;
  isVisible: boolean;
  enableHover: boolean;
  enableClick: boolean;
  autoFloat: boolean;
}

function FloatingItem({
  element,
  isVisible,
  enableHover,
  enableClick,
  autoFloat
}: FloatingItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  // Initial animation
  const initialSpring = useSpring({
    from: { 
      opacity: 0, 
      transform: 'translate3d(0, 100px, 0) scale(0.8) rotate(0deg)' 
    },
    to: isVisible 
      ? { 
          opacity: 1, 
          transform: `translate3d(${element.position.x}px, ${element.position.y}px, 0) scale(${element.scale || 1}) rotate(${element.rotation || 0}deg)` 
        }
      : { 
          opacity: 0, 
          transform: 'translate3d(0, 100px, 0) scale(0.8) rotate(0deg)' 
        },
    config: { tension: 280, friction: 60 },
    delay: element.delay || 0
  });

  // Auto floating animation
  const floatingSpring = useSpring({
    from: { y: 0 },
    to: async (next) => {
      if (autoFloat && isVisible) {
        while (true) {
          await next({ y: -10 });
          await next({ y: 10 });
        }
      }
    },
    config: { duration: element.duration || 3000 }
  });

  // Hover animation
  const [hoverSpring, setHoverSpring] = useSpring(() => ({
    scale: 1,
    rotate: 0,
    config: { tension: 300, friction: 20 }
  }));

  const handleMouseEnter = () => {
    if (enableHover) {
      setHoverSpring({
        scale: 1.1,
        rotate: 5
      });
    }
  };

  const handleMouseLeave = () => {
    if (enableHover) {
      setHoverSpring({
        scale: 1,
        rotate: 0
      });
    }
  };

  const handleClick = () => {
    if (enableClick) {
      setHoverSpring({
        scale: 0.95,
        rotate: -5
      });
      setTimeout(() => {
        setHoverSpring({
          scale: 1,
          rotate: 0
        });
      }, 150);
    }
  };

  return (
    <animated.div
      ref={itemRef}
      style={{
        ...initialSpring,
        y: autoFloat ? floatingSpring.y : 0,
        scale: hoverSpring.scale,
        rotate: hoverSpring.rotate
      }}
      className={cn(
        'absolute select-none',
        enableHover || enableClick ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {element.content}
    </animated.div>
  );
}

// Predefined floating icon component
interface FloatingIconProps {
  icon: React.ReactNode;
  position: { x: number; y: number };
  size?: 'sm' | 'md' | 'lg';
  variant?: 'neon' | 'glass' | 'gradient';
  className?: string;
}

export function FloatingIcon({
  icon,
  position,
  size = 'md',
  variant = 'glass',
  className = ''
}: FloatingIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl'
  };

  const variantClasses = {
    neon: 'bg-black/40 border-neon-cyan border-2 shadow-neon-cyan/30 text-neon-cyan',
    glass: 'glass-card border-glass text-white',
    gradient: 'bg-gradient-to-br from-cyber-purple/40 to-neon-cyan/40 border-gray-600 text-white'
  };

  const element: FloatingElement = {
    id: `icon-${position.x}-${position.y}`,
    position,
    content: (
      <div
        className={cn(
          'rounded-xl backdrop-blur-sm border flex items-center justify-center',
          'transition-all duration-300 hover:shadow-lg',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      >
        {icon}
      </div>
    )
  };

  return (
    <FloatingElements
      elements={[element]}
      enableHover
      autoFloat
    />
  );
}

// Tech symbols floating background
export function TechFloatingSymbols({ className = '' }: { className?: string }) {
  const symbols = [
    { icon: '</>', position: { x: 100, y: 50 }, delay: 0 },
    { icon: '{}', position: { x: 300, y: 120 }, delay: 500 },
    { icon: '<html>', position: { x: 500, y: 80 }, delay: 1000 },
    { icon: 'CSS', position: { x: 150, y: 200 }, delay: 1500 },
    { icon: 'JS', position: { x: 400, y: 180 }, delay: 2000 },
    { icon: '⚛️', position: { x: 250, y: 300 }, delay: 2500 },
    { icon: '🚀', position: { x: 450, y: 250 }, delay: 3000 },
    { icon: '💻', position: { x: 80, y: 350 }, delay: 3500 }
  ];

  const elements: FloatingElement[] = symbols.map((symbol, index) => ({
    id: `tech-${index}`,
    position: symbol.position,
    delay: symbol.delay,
    scale: 0.8 + Math.random() * 0.4,
    rotation: Math.random() * 20 - 10,
    content: (
      <div className="text-neon-cyan/60 font-mono text-xl opacity-50 hover:opacity-100 transition-opacity">
        {symbol.icon}
      </div>
    )
  }));

  return (
    <FloatingElements
      elements={elements}
      className={cn('absolute inset-0 overflow-hidden', className)}
      enableHover
      autoFloat
    />
  );
}

// Geometric shapes floating
export function FloatingShapes({ className = '' }: { className?: string }) {
  const shapes = [
    { 
      shape: 'square', 
      position: { x: 120, y: 80 }, 
      size: 20,
      color: 'border-neon-cyan' 
    },
    { 
      shape: 'circle', 
      position: { x: 320, y: 150 }, 
      size: 24,
      color: 'border-cyber-purple' 
    },
    { 
      shape: 'triangle', 
      position: { x: 200, y: 250 }, 
      size: 18,
      color: 'border-neon-green' 
    },
    { 
      shape: 'diamond', 
      position: { x: 400, y: 100 }, 
      size: 22,
      color: 'border-neon-pink' 
    }
  ];

  const elements: FloatingElement[] = shapes.map((shape, index) => ({
    id: `shape-${index}`,
    position: shape.position,
    delay: index * 400,
    content: (
      <div
        className={cn(
          'border-2 opacity-30 hover:opacity-70 transition-opacity',
          shape.color,
          shape.shape === 'circle' && 'rounded-full',
          shape.shape === 'diamond' && 'rotate-45',
          shape.shape === 'triangle' && 'triangle'
        )}
        style={{
          width: shape.size,
          height: shape.size
        }}
      />
    )
  }));

  return (
    <FloatingElements
      elements={elements}
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      autoFloat
    />
  );
}

export default FloatingElements;
