import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  actions?: React.ReactNode;
  backgroundElement?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'centered' | 'split';
  overlay?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  actions,
  backgroundElement,
  className = '',
  variant = 'default',
  overlay = true
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'centered':
        return 'text-center items-center';
      case 'split':
        return 'grid lg:grid-cols-2 gap-12 items-center';
      default:
        return 'text-left';
    }
  };

  return (
    <section className={cn('relative min-h-screen flex items-center py-20', className)}>
      {/* Background Element */}
      {backgroundElement && (
        <div className="absolute inset-0 -z-10">
          {backgroundElement}
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/30 -z-5" />
      )}

      {/* Content */}
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={cn('max-w-6xl mx-auto', getVariantClasses())}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            {typeof title === 'string' ? (
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {title}
              </h1>
            ) : (
              title
            )}
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.div variants={itemVariants} className="mb-6">
              {typeof subtitle === 'string' ? (
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                  {subtitle}
                </h2>
              ) : (
                subtitle
              )}
            </motion.div>
          )}

          {/* Description */}
          {description && (
            <motion.div variants={itemVariants} className="mb-8">
              {typeof description === 'string' ? (
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
                  {description}
                </p>
              ) : (
                description
              )}
            </motion.div>
          )}

          {/* Actions */}
          {actions && (
            <motion.div variants={itemVariants}>
              {actions}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
