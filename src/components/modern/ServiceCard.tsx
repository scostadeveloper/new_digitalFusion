import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { BaseCard } from '@/components/ui/BaseCard';
import { NeonButton } from './NeonButton';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  ctaText: string;
  image?: string;
  onClick?: () => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  features,
  icon,
  ctaText,
  image,
  onClick,
  className = '',
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`h-full group ${className}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <BaseCard
        size="lg"
        hover="lift"
        className="h-full p-6 lg:p-8 cursor-pointer transition-all duration-500 group-hover:scale-[1.02] overflow-hidden"
        onClick={onClick}
      >
        {/* Background Glow Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-cyan-500/5 to-blue-600/5'
              : 'bg-gradient-to-br from-blue-500/5 to-indigo-600/5'
          }`}
        />

        {/* Corner Decorations */}
        <div
          className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 ${
            theme === 'dark' ? 'border-cyan-400' : 'border-blue-500'
          }`}
        />
        <div
          className={`absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 rounded-tr-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 ${
            theme === 'dark' ? 'border-cyan-400' : 'border-blue-500'
          }`}
        />
        <div
          className={`absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 rounded-bl-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 ${
            theme === 'dark' ? 'border-cyan-400' : 'border-blue-500'
          }`}
        />
        <div
          className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 ${
            theme === 'dark' ? 'border-cyan-400' : 'border-blue-500'
          }`}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30'
                : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30'
            }`}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
          >
            <div
              className={`text-2xl ${
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
              }`}
            >
              {icon}
            </div>
          </motion.div>

          {/* Content */}
          <h3
            className={`text-xl lg:text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 ${
              theme === 'dark'
                ? 'text-white group-hover:from-cyan-400 group-hover:to-blue-500'
                : 'text-gray-900 group-hover:from-blue-600 group-hover:to-indigo-700'
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-base mb-6 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {description}
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <CheckCircle
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
                  }`}
                />
                <span
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {feature}
                </span>
              </motion.div>
            ))}

            {features.length > 3 && (
              <motion.div
                className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                viewport={{ once: true }}
              >
                +{features.length - 3} recursos adicionais
              </motion.div>
            )}
          </div>

          {/* Service Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Projetos', value: '15+' },
              { label: 'Clientes', value: '25+' },
              { label: 'Sucesso', value: '98%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <NeonButton
            variant={theme === 'dark' ? 'electric' : 'default'}
            size="lg"
            className="w-full group/btn"
            onClick={onClick}
          >
            <span className="flex items-center justify-center gap-2">
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </NeonButton>
        </div>
      </BaseCard>
    </motion.div>
  );
};
