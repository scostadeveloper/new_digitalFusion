import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface ScrollNavigatorProps {
  onClick?: () => void;
  onNavigate?: (section: string) => void;
  className?: string;
  isLastSection?: boolean;
  sections?: string[];
  currentSection?: string;
}

const ScrollNavigator: React.FC<ScrollNavigatorProps> = ({
  onClick,
  onNavigate,
  className = '',
  isLastSection = false,
  sections = [],
  currentSection = '',
}) => {
  const { theme } = useTheme();

  // Determinar se estamos na última seção
  const isLast =
    isLastSection ||
    (sections.length > 0 && currentSection === sections[sections.length - 1]);

  // Função para lidar com o clique no navegador
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (onNavigate && sections.length > 0) {
      const currentIndex = sections.indexOf(currentSection);
      if (isLast) {
        // Se for a última seção, navegar para o topo (primeira seção)
        onNavigate(sections[0]);
      } else if (currentIndex >= 0 && currentIndex < sections.length - 1) {
        // Navegar para a próxima seção
        onNavigate(sections[currentIndex + 1]);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden sm:block cursor-pointer group ${className}`}
      onClick={handleClick}
      title={isLast ? 'Voltar ao topo' : 'Próxima seção'}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`w-6 h-10 rounded-full border-2 flex justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
          theme === 'dark'
            ? 'border-cyan-400/50 group-hover:border-cyan-400 group-hover:shadow-cyan-400/25'
            : 'border-blue-500/50 group-hover:border-blue-500 group-hover:shadow-blue-500/25'
        }`}
      >
        {isLast ? (
          // Bolinha animada para cima (voltar ao topo)
          <motion.div
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-2 rounded-full mt-2 transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-cyan-400 group-hover:bg-cyan-300'
                : 'bg-blue-500 group-hover:bg-blue-600'
            }`}
          />
        ) : (
          // Bolinha animada para baixo (próxima seção)
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-2 rounded-full mt-2 transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-cyan-400 group-hover:bg-cyan-300'
                : 'bg-blue-500 group-hover:bg-blue-600'
            }`}
          />
        )}
      </motion.div>

      {/* Tooltip */}
      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
          theme === 'dark'
            ? 'bg-gray-800 text-gray-200 border border-cyan-400/20'
            : 'bg-gray-900 text-gray-100 border border-blue-500/20'
        }`}
      >
        {isLast ? 'Voltar ao topo' : 'Próxima seção'}
      </div>
    </motion.div>
  );
};

export default ScrollNavigator;
