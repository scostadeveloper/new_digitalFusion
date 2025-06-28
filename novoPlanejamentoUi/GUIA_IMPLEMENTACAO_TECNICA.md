# 🛠️ Guia de Implementação Técnica - Digital Fusion UI Refactor

## 📦 Dependências e Instalação

### **Comando de Instalação Completo**
```bash
# Animações e 3D
npm install @lottiefiles/react-lottie-player
npm install three @react-three/fiber @react-three/drei
npm install react-spring @react-spring/parallax
npm install react-intersection-observer
npm install framer-motion@latest

# Efeitos Visuais
npm install react-particles tsparticles
npm install react-tilt
npm install react-countup
npm install react-typing-effect
npm install canvas-confetti
npm install react-parallax

# UI Modernos
npm install @headlessui/react
npm install react-hot-toast
npm install react-use-gesture
npm install locomotive-scroll
npm install react-reveal

# Utilitários
npm install react-use
npm install react-intersection-observer
npm install @tabler/icons-react
npm install react-transition-group

# Dev Dependencies
npm install --save-dev @types/three
npm install --save-dev @types/canvas-confetti
```

---

## 🏗️ Estrutura de Componentes Moderna

### **Nova Estrutura de Pastas**
```
src/
├── components/
│   ├── ui/              # Componentes shadcn (existente)
│   ├── modern/          # Novos componentes modernos
│   │   ├── GlassCard/
│   │   ├── NeonButton/
│   │   ├── TechBackground/
│   │   ├── FloatingElements/
│   │   ├── TypingAnimation/
│   │   └── CounterAnimation/
│   ├── sections/        # Seções principais refatoradas
│   │   ├── ModernHero/
│   │   ├── TechServices/
│   │   ├── Portfolio3D/
│   │   └── FuturisticContact/
│   └── effects/         # Efeitos visuais
│       ├── ParticleSystem/
│       ├── GlitchText/
│       └── HologramEffect/
├── hooks/
│   ├── useParallax.ts
│   ├── useGestures.ts
│   ├── useIntersection.ts
│   └── useMousePosition.ts
├── styles/
│   ├── modern/
│   │   ├── glass.css
│   │   ├── neon.css
│   │   ├── animations.css
│   │   └── 3d-effects.css
│   └── utilities.css
└── utils/
    ├── three-helpers.ts
    ├── animation-variants.ts
    └── performance.ts
```

---

## 🎨 Implementação dos Componentes Base

### **1. GlassCard Component**
```typescript
// src/components/modern/GlassCard/GlassCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: number;
  opacity?: number;
  glow?: boolean;
  tilt3d?: boolean;
  variant?: 'default' | 'blue' | 'cyan';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  blur = 20,
  opacity = 0.1,
  glow = false,
  tilt3d = false,
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-white/10 border-white/20',
    blue: 'bg-blue-500/10 border-blue-500/30',
    cyan: 'bg-cyan-500/10 border-cyan-500/30'
  };

  return (
    <motion.div
      className={cn(
        'relative backdrop-blur-sm border rounded-2xl p-6',
        'shadow-[0_8px_32px_rgba(31,38,135,0.37)]',
        variants[variant],
        glow && 'shadow-[0_0_20px_rgba(0,245,255,0.3)]',
        tilt3d && 'transform-gpu transition-transform duration-300',
        className
      )}
      style={{
        backdropFilter: `blur(${blur}px)`,
      }}
      whileHover={tilt3d ? {
        rotateY: 10,
        rotateX: 10,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};
```

### **2. NeonButton Component**
```typescript
// src/components/modern/NeonButton/NeonButton.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'purple' | 'green';
  size?: 'sm' | 'md' | 'lg';
  glowIntensity?: 'low' | 'medium' | 'high';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  glowIntensity = 'medium',
  onClick,
  className,
  disabled = false
}) => {
  const colors = {
    blue: { border: '#00F5FF', glow: 'rgba(0,245,255,0.5)', text: '#00F5FF' },
    cyan: { border: '#005F73', glow: 'rgba(0,95,115,0.5)', text: '#005F73' },
    purple: { border: '#8A2BE2', glow: 'rgba(138,43,226,0.5)', text: '#8A2BE2' },
    green: { border: '#39FF14', glow: 'rgba(57,255,20,0.5)', text: '#39FF14' }
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const glowSizes = {
    low: '0 0 10px',
    medium: '0 0 20px',
    high: '0 0 30px'
  };

  return (
    <motion.button
      className={cn(
        'relative overflow-hidden border-2 rounded-lg font-cyber font-bold',
        'bg-transparent transition-all duration-300 uppercase tracking-wider',
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      style={{
        borderColor: colors[variant].border,
        color: colors[variant].text,
      }}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        boxShadow: `${glowSizes[glowIntensity]} ${colors[variant].glow}`,
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{ backgroundColor: colors[variant].border }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
```

### **3. TechBackground Component**
```typescript
// src/components/modern/TechBackground/TechBackground.tsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface TechBackgroundProps {
  variant?: 'particles' | 'grid' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export const TechBackground: React.FC<TechBackgroundProps> = ({
  variant = 'particles',
  intensity = 'medium',
  interactive = true
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const getParticleConfig = () => {
    const counts = { low: 50, medium: 100, high: 200 };
    
    return {
      background: { color: { value: 'transparent' } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: interactive, mode: 'push' },
          onHover: { enable: interactive, mode: 'repulse' },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ['#007BFF', '#00F5FF', '#005F73'] },
        links: {
          color: '#007BFF',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        collisions: { enable: true },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: counts[intensity],
        },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    };
  };

  if (variant === 'grid') {
    return (
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,123,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,123,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    );
  }

  if (variant === 'matrix') {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="matrix-rain" />
      </div>
    );
  }

  return (
    <Particles
      id="tech-background"
      init={particlesInit}
      options={getParticleConfig()}
      className="absolute inset-0"
    />
  );
};
```

### **4. TypingAnimation Component**
```typescript
// src/components/modern/TypingAnimation/TypingAnimation.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  cursorColor?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  loop = true,
  className = '',
  cursorColor = '#00F5FF'
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        
        if (currentText === fullText) {
          if (loop) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, loop]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span 
        className="inline-block w-0.5 ml-1 animate-pulse"
        style={{ 
          backgroundColor: cursorColor,
          opacity: showCursor ? 1 : 0,
          height: '1em'
        }}
      />
    </motion.span>
  );
};
```

---

## 🎭 Hooks Customizados

### **useMousePosition Hook**
```typescript
// src/hooks/useMousePosition.ts
import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};
```

### **useIntersectionObserver Hook**
```typescript
// src/hooks/useIntersectionObserver.ts
import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isIntersecting };
};
```

---

## 🎨 Estilos CSS Modernos

### **modern.css - Classes Base**
```css
/* src/styles/modern/modern.css */

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

:root {
  /* Cyber Fonts */
  --font-cyber: 'Orbitron', monospace;
  --font-modern: 'Rajdhani', sans-serif;
  
  /* Neon Colors */
  --neon-blue: #00F5FF;
  --neon-purple: #8A2BE2;
  --neon-green: #39FF14;
  
  /* Glass Effects */
  --glass-blur: blur(20px);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-bg: rgba(255, 255, 255, 0.1);
}

/* Utility Classes */
.font-cyber { font-family: var(--font-cyber); }
.font-modern { font-family: var(--font-modern); }

.text-neon-blue { color: var(--neon-blue); }
.text-neon-purple { color: var(--neon-purple); }
.text-neon-green { color: var(--neon-green); }

.glow-blue { 
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.8);
}

.glow-purple { 
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.8);
}

/* Glass Morphism */
.glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
}

/* 3D Transform Base */
.transform-3d {
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Hover States */
.hover-lift:hover {
  transform: translateY(-10px) rotateX(5deg);
}

.hover-tilt:hover {
  transform: rotateY(10deg) rotateX(5deg);
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px currentColor; }
  50% { box-shadow: 0 0 25px currentColor; }
}

.animate-float { animation: float 3s ease-in-out infinite; }
.animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
```

---

## 📱 Implementação Responsiva

### **Breakpoints Modernos**
```css
/* src/styles/modern/responsive.css */

/* Mobile First Approach */
.container-modern {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}

/* Mobile Small */
@media (min-width: 320px) {
  .container-modern { max-width: 320px; }
}

/* Mobile Medium */
@media (min-width: 375px) {
  .container-modern { max-width: 375px; }
}

/* Mobile Large */
@media (min-width: 425px) {
  .container-modern { max-width: 425px; }
}

/* Tablet */
@media (min-width: 768px) {
  .container-modern { 
    max-width: 768px;
    padding: 0 2rem;
  }
}

/* Laptop */
@media (min-width: 1024px) {
  .container-modern { 
    max-width: 1024px;
    padding: 0 3rem;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .container-modern { 
    max-width: 1200px;
    padding: 0 4rem;
  }
}

/* Adaptações para Mobile */
@media (max-width: 768px) {
  .glass-card { backdrop-filter: blur(10px); }
  .neon-button { padding: 0.5rem 1rem; font-size: 0.875rem; }
  .floating-element { animation: none; }
  .transform-3d { perspective: none; }
}
```

---

## ⚡ Otimizações de Performance

### **Lazy Loading Components**
```typescript
// src/utils/lazy-components.ts
import { lazy } from 'react';

export const LazyModernHero = lazy(() => import('@/components/sections/ModernHero'));
export const LazyTechServices = lazy(() => import('@/components/sections/TechServices'));
export const LazyPortfolio3D = lazy(() => import('@/components/sections/Portfolio3D'));
export const LazyParticleSystem = lazy(() => import('@/components/effects/ParticleSystem'));
```

### **Performance Utilities**
```typescript
// src/utils/performance.ts
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const reducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

---

Este guia fornece toda a base técnica necessária para implementar o novo design moderno! 🚀
