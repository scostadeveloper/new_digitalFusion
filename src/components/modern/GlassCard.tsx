import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const glassCardVariants = cva(
  'backdrop-blur-glass border rounded-lg transition-all duration-300 relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-glass-white border-white/20 shadow-glass',
        dark: 'bg-glass-dark border-white/10 shadow-glass',
        blue: 'bg-glass-blue border-blue-500/30 shadow-neon-blue',
        purple: 'bg-plasma-purple/10 border-plasma-purple/30 shadow-neon-purple',
        cyan: 'bg-df-cyan/10 border-df-cyan/30',
        gradient: 'bg-gradient-to-br from-white/10 to-blue-500/10 border-white/20',
        frosted: 'bg-white/5 backdrop-blur-xl border-white/10',
        neon: 'bg-gray-900/50 border-cyan-500/50 shadow-neon-cyan',
        aurora: 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border-white/20',
      },
      size: {
        xs: 'p-2',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
        '2xl': 'p-12',
      },
      hover: {
        none: '',
        tilt: 'hover-tilt hover:shadow-2xl',
        float: 'hover:-translate-y-2 hover:shadow-2xl',
        glow: 'hover:shadow-neon-blue hover:border-electric-blue/50 hover-glow',
        magnetic: 'hover-magnetic',
        scale: 'hover:scale-105 hover:shadow-2xl',
        rotate: 'hover:rotate-1 hover:shadow-xl',
        shimmer: 'hover:shadow-2xl hover-shimmer',
      },
      glow: {
        none: '',
        subtle: 'shadow-sm',
        medium: 'shadow-lg',
        intense: 'shadow-2xl animate-pulse-glow',
        rainbow: 'shadow-rainbow animate-rainbow-glow',
        neon: 'shadow-neon-cyan animate-neon-pulse',
      },
      blur: {
        none: 'backdrop-blur-none',
        sm: 'backdrop-blur-sm',
        default: 'backdrop-blur-md',
        lg: 'backdrop-blur-lg',
        xl: 'backdrop-blur-xl',
        '2xl': 'backdrop-blur-2xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        default: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      hover: 'none',
      glow: 'none',
      blur: 'default',
      rounded: 'default',
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  children: React.ReactNode;
  holographic?: boolean;
  animated?: boolean;
  gradient?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ 
    className, 
    variant, 
    size, 
    hover, 
    glow, 
    blur, 
    rounded, 
    children, 
    holographic = false,
    animated = false,
    gradient = false,
    ...props 
  }, ref) => {
    return (
      <div
        className={cn(
          glassCardVariants({ variant, size, hover, glow, blur, rounded }),
          animated && 'animate-float',
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Efeito holográfico */}
        {(holographic || variant === 'blue') && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 -z-10" />
        )}
        
        {/* Efeito de gradiente animado */}
        {(gradient || variant === 'aurora') && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 animate-gradient-shift -z-10" />
        )}
        
        {/* Efeito shimmer para variante neon */}
        {variant === 'neon' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-shimmer -z-10" />
        )}
        
        {children}
      </div>
    );
  }
);
GlassCard.displayName = 'GlassCard';

export { GlassCard, glassCardVariants };
