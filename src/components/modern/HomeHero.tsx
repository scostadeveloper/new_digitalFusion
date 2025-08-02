import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface HomeHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ title, subtitle, badge, titleClassName = '', subtitleClassName = '', badgeClassName = '' }) => {
  const { theme } = useTheme();

  // Estilos de background baseados no tema
  const heroBackground =
    theme === 'dark'
      ? 'linear-gradient(135deg, #000000 0%, #001622 50%, #002433 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #E5F2FF 50%, #B8E0FF 100%)';

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: heroBackground }}
    >
      {/* Animated Tech Background - Versão Avançada */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Grid Animado com movimento */}
        <motion.div
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`absolute inset-0 ${theme === 'dark' ? 'opacity-25' : 'opacity-30'}`}
          style={{
            backgroundImage:
              theme === 'dark'
                ? 'linear-gradient(rgba(110, 249, 245, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 249, 245, 0.15) 1px, transparent 1px)'
                : 'linear-gradient(rgba(0, 123, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.25) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Circuitos SVG Avançados com Gradientes */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: theme === 'dark' ? 0.6 : 0.7 }}>
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? '#6EF9F5' : '#007BFF'} stopOpacity="0.9">
                <animate attributeName="stop-opacity" values="0.9;1;0.5;0.9" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor={theme === 'dark' ? '#3B82F6' : '#00C9FF'} stopOpacity="0.7">
                <animate attributeName="stop-opacity" values="0.7;0.3;1;0.7" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor={theme === 'dark' ? '#1E40AF' : '#005F73'} stopOpacity="0.5">
                <animate attributeName="stop-opacity" values="0.5;0.9;0.3;0.5" dur="5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Linhas Horizontais Dinâmicas */}
          <motion.line x1="0" y1="15%" x2="100%" y2="20%" stroke="url(#circuitGradient)" strokeWidth="3" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.line x1="0" y1="45%" x2="100%" y2="40%" stroke="url(#circuitGradient)" strokeWidth="2" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
          <motion.line x1="0" y1="75%" x2="100%" y2="80%" stroke="url(#circuitGradient)" strokeWidth="1.5" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }} />
          {/* Linhas Verticais */}
          <motion.line x1="20%" y1="0" x2="25%" y2="100%" stroke="url(#circuitGradient)" strokeWidth="2" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
          <motion.line x1="70%" y1="0" x2="75%" y2="100%" stroke="url(#circuitGradient)" strokeWidth="1.5" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
          {/* Circuitos Curvos Complexos */}
          <motion.path d="M 0 30 Q 25 10 50 35 T 100 25" stroke="url(#circuitGradient)" strokeWidth="2" fill="transparent" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }} />
          <motion.path d="M 0 70 Q 35 50 70 75 T 100 65" stroke="url(#circuitGradient)" strokeWidth="1.5" fill="transparent" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }} />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {badge && (
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-df-cyan/10 text-df-cyan font-semibold text-sm mb-4 animate-fade-in shadow-md shadow-df-cyan/10 ${badgeClassName}`}
          >
            {badge}
          </span>
        )}
        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-df-blue via-df-cyan to-df-purple leading-tight drop-shadow-xl animate-fade-in ${titleClassName}`}
        >
          {title}
        </h1>
        <p
          className={`text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto animate-fade-in ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      </motion.div>
      {/* Efeito visual decorativo grid-pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="grid-pattern w-full h-full" />
      </div>
    </section>
  );
};

export default HomeHero;
