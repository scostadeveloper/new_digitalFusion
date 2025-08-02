import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const neonButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group font-cyber uppercase tracking-wider',
  {
    variants: {
      variant: {
        default:
          'bg-df-blue text-white hover:bg-df-blue/90 shadow-neon-blue hover:shadow-neon-blue/80',
        electric:
          'bg-electric-blue/20 text-electric-blue border border-electric-blue hover:bg-electric-blue hover:text-black shadow-neon-blue hover:shadow-neon-blue/100',
        plasma:
          'bg-plasma-purple/20 text-plasma-purple border border-plasma-purple hover:bg-plasma-purple hover:text-white shadow-neon-purple hover:shadow-neon-purple/100',
        matrix:
          'bg-matrix-green/20 text-matrix-green border border-matrix-green hover:bg-matrix-green hover:text-black shadow-neon-green hover:shadow-neon-green/100',
        cyber:
          'bg-cyber-pink/20 text-cyber-pink border border-cyber-pink hover:bg-cyber-pink hover:text-white shadow-neon-pink hover:shadow-neon-pink/100',
        ghost:
          'text-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue border border-electric-blue/30',
        hologram:
          'bg-gradient-to-r from-electric-blue/20 to-plasma-purple/20 text-white border border-electric-blue/50 hover:from-electric-blue/40 hover:to-plasma-purple/40',
        glass: 'glass-card text-white hover:bg-white/20',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-14 rounded-lg px-10 text-lg',
        icon: 'h-10 w-10',
      },
      glow: {
        none: '',
        subtle: 'hover:animate-pulse-glow',
        intense: 'animate-pulse-glow hover:scale-105',
      },
      effect: {
        none: '',
        scan: 'relative',
        ripple: 'relative',
        magnetic: 'hover-magnetic',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      glow: 'none',
      effect: 'none',
    },
  }
);

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  (
    {
      className,
      variant,
      size,
      glow,
      effect,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          neonButtonVariants({ variant, size, glow, effect, className })
        )}
        ref={ref}
        {...props}
      >
        {/* Efeito de scan holográfico */}
        {effect === 'scan' && (
          <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:top-full transition-all duration-1000" />
        )}

        {/* Efeito ripple */}
        {effect === 'ripple' && (
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        )}

        <span className="relative z-10">{children}</span>
      </Comp>
    );
  }
);
NeonButton.displayName = 'NeonButton';

export { NeonButton, neonButtonVariants };
