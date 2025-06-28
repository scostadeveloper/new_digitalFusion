import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  variant?: 'default' | 'dark' | 'gradient' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  enableAnimations?: boolean;
  backgroundPattern?: boolean;
}

export function SectionWrapper({
  children,
  className = '',
  id,
  title,
  subtitle,
  description,
  variant = 'default',
  padding = 'lg',
  enableAnimations = true,
  backgroundPattern = false
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  };

  const variantClasses = {
    default: 'bg-transparent',
    dark: 'bg-black/20',
    gradient: 'bg-gradient-to-br from-cyber-purple/10 via-transparent to-neon-cyan/10',
    glass: 'glass-section backdrop-blur-sm'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'relative overflow-hidden',
        paddingClasses[padding],
        variantClasses[variant],
        className
      )}
    >
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {enableAnimations ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            {/* Section Header */}
            {(title || subtitle || description) && (
              <motion.div variants={itemVariants} className="text-center mb-12">
                {subtitle && (
                  <span className="text-neon-cyan text-sm font-semibold uppercase tracking-wider mb-2 block">
                    {subtitle}
                  </span>
                )}
                {title && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    {description}
                  </p>
                )}
              </motion.div>
            )}

            {/* Section Content */}
            <motion.div variants={itemVariants}>
              {children}
            </motion.div>
          </motion.div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            {(title || subtitle || description) && (
              <div className="text-center mb-12">
                {subtitle && (
                  <span className="text-neon-cyan text-sm font-semibold uppercase tracking-wider mb-2 block">
                    {subtitle}
                  </span>
                )}
                {title && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Section Content */}
            <div>{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}

// Specialized section components
export function ServicesSection({ children, ...props }: Omit<SectionWrapperProps, 'variant' | 'title'>) {
  return (
    <SectionWrapper
      title="Nossos Serviços"
      subtitle="Soluções Digitais"
      description="Oferecemos uma gama completa de serviços digitais para transformar sua presença online"
      variant="gradient"
      backgroundPattern
      {...props}
    >
      {children}
    </SectionWrapper>
  );
}

export function PortfolioSection({ children, ...props }: Omit<SectionWrapperProps, 'variant' | 'title'>) {
  return (
    <SectionWrapper
      title="Nosso Portfólio"
      subtitle="Projetos Realizados"
      description="Conheça alguns dos projetos que desenvolvemos e os resultados alcançados"
      variant="dark"
      {...props}
    >
      {children}
    </SectionWrapper>
  );
}

export function AboutSection({ children, ...props }: Omit<SectionWrapperProps, 'variant' | 'title'>) {
  return (
    <SectionWrapper
      title="Sobre Nós"
      subtitle="Digital Fusion"
      description="Somos uma equipe apaixonada por tecnologia e inovação, dedicada a criar soluções digitais excepcionais"
      variant="glass"
      {...props}
    >
      {children}
    </SectionWrapper>
  );
}

export function ContactSection({ children, ...props }: Omit<SectionWrapperProps, 'variant' | 'title'>) {
  return (
    <SectionWrapper
      title="Entre em Contato"
      subtitle="Vamos Conversar"
      description="Pronto para dar vida ao seu projeto? Entre em contato conosco e vamos criar algo incrível juntos"
      variant="gradient"
      backgroundPattern
      {...props}
    >
      {children}
    </SectionWrapper>
  );
}

export default SectionWrapper;
