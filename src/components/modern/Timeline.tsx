import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { ProcessStep } from './ProcessStep';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  duration?: string;
  deliverables?: string[];
}

interface TimelineProps {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

export const Timeline: React.FC<TimelineProps> = ({
  steps,
  title = 'Nosso Processo',
  subtitle = 'Como trabalhamos para entregar soluções de alta qualidade',
  className = '',
  variant = 'horizontal',
}) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className={`py-24 lg:py-32 relative overflow-hidden ${className}`}
      style={{
        background:
          theme === 'dark'
            ? 'linear-gradient(135deg, rgba(0, 22, 34, 0.98) 0%, rgba(0, 95, 117, 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(229, 242, 255, 0.98) 0%, rgba(0, 123, 255, 0.95) 100%)',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="processGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor={theme === 'dark' ? '#6EF9F5' : '#007BFF'}
                stopOpacity="0.3"
              />
              <stop
                offset="50%"
                stopColor={theme === 'dark' ? '#007BFF' : '#6EF9F5'}
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor={theme === 'dark' ? '#005F75' : '#005F75'}
                stopOpacity="0.1"
              />
            </linearGradient>
          </defs>

          {/* Animated Path */}
          <motion.path
            d="M0,400 Q300,200 600,400 T1200,400"
            fill="none"
            stroke="url(#processGradient)"
            strokeWidth="3"
            strokeDasharray="10,5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* Floating Particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + i * 160}
              cy={400}
              r="4"
              fill={theme === 'dark' ? '#6EF9F5' : '#007BFF'}
              opacity="0.6"
              animate={{
                cy: [400, 380, 400],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* Gradient Orbs */}
        <div
          className={`absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-500'
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="block mb-2">{title.split(' ')[0]}</span>
            <span
              className={`bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-cyan-400 via-blue-500 to-purple-600'
                  : 'from-blue-600 via-purple-600 to-indigo-700'
              } bg-clip-text text-transparent font-extrabold`}
            >
              {title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h2>

          <motion.p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Timeline Steps */}
        {variant === 'horizontal' ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className={`absolute left-8 top-20 w-0.5 h-16 ${
                      theme === 'dark' ? 'bg-cyan-500/30' : 'bg-blue-500/30'
                    }`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                )}

                <ProcessStep
                  step={step}
                  index={index}
                  isLast={index === steps.length - 1}
                  className="pl-20"
                />
              </div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p
            className={`text-lg mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Pronto para começar seu projeto?
          </p>

          <motion.button
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:shadow-lg hover:shadow-cyan-400/25'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-400/25'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Projeto
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
