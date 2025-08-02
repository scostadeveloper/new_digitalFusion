import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const baseCardVariants = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
        glass: 'bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border border-white/20',
        gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900',
        neon: 'bg-gray-900 border border-cyan-500/30'
      },
      size: {
        sm: 'p-4 rounded-lg',
        md: 'p-6 rounded-xl',
        lg: 'p-8 rounded-2xl'
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-2 hover:shadow-xl',
        glow: 'hover:shadow-2xl hover:shadow-blue-500/20',
        scale: 'hover:scale-105'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      hover: 'lift'
    }
  }
);

export interface BaseCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof baseCardVariants> {
  children: React.ReactNode;
  animationDelay?: number;
  enableAnimation?: boolean;
  holographic?: boolean;
}

export function BaseCard({
  className,
  variant,
  size,
  hover,
  children,
  animationDelay = 0,
  enableAnimation = true,
  holographic = false,
  ...props
}: BaseCardProps) {
  const cardContent = (
    <div
      className={cn(
        baseCardVariants({ variant, size, hover }),
        holographic && 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (!enableAnimation) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {cardContent}
    </motion.div>
  );
}

export default BaseCard;