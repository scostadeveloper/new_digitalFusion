import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { BaseCard } from '@/components/ui/BaseCard';

interface ProcessStepProps {
  step: {
    number: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
    duration?: string;
    deliverables?: string[];
  };
  index: number;
  isLast?: boolean;
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  index,
  isLast = false,
  className = '',
}) => {
  const { theme } = useTheme();

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <BaseCard
        size="lg"
        hover="lift"
        className="h-full p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-300"
      >
        {/* Background Glow Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-cyan-500/5 to-blue-600/5'
              : 'bg-gradient-to-br from-blue-500/5 to-indigo-600/5'
          }`}
        />

        <div className="relative z-10">
          {/* Step Number */}
          <motion.div
            className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 border-2 border-cyan-500/30'
                : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600 border-2 border-blue-500/30'
            }`}
            whileHover={{
              scale: 1.15,
              rotate: 8,
              boxShadow:
                theme === 'dark'
                  ? '0 0 30px rgba(110, 249, 245, 0.4)'
                  : '0 0 30px rgba(0, 123, 255, 0.4)',
            }}
            transition={{ duration: 0.3 }}
          >
            {step.icon || step.number}
          </motion.div>

          {/* Duration Badge */}
          {step.duration && (
            <motion.div
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                theme === 'dark'
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              viewport={{ once: true }}
            >
              {step.duration}
            </motion.div>
          )}

          {/* Title */}
          <motion.h3
            className={`text-xl lg:text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 ${
              theme === 'dark'
                ? 'text-white group-hover:from-cyan-400 group-hover:to-blue-500'
                : 'text-gray-900 group-hover:from-blue-600 group-hover:to-indigo-700'
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {step.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className={`text-base leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {step.description}
          </motion.p>

          {/* Deliverables */}
          {step.deliverables && step.deliverables.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h4
                className={`text-sm font-semibold mb-3 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}
              >
                Entregas:
              </h4>
              <ul className="space-y-2">
                {step.deliverables.map((deliverable, idx) => (
                  <motion.li
                    key={idx}
                    className={`text-sm flex items-start gap-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-500'
                      }`}
                    />
                    {deliverable}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Connector Line */}
        {!isLast && (
          <motion.div
            className={`hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 ${
              theme === 'dark' ? 'bg-cyan-500/30' : 'bg-blue-500/30'
            }`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          />
        )}

        {/* Animated Dots */}
        {!isLast && (
          <motion.div
            className={`hidden lg:block absolute top-1/2 -right-2 w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-500'
            }`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        )}
      </BaseCard>
    </motion.div>
  );
};
