import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ProjectFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map(category => {
        const isActive = activeCategory === category.id;

        return (
          <motion.button
            key={category.id}
            variants={itemVariants}
            onClick={() => onCategoryChange(category.id)}
            className={`
              relative px-6 py-3 rounded-full font-medium text-sm md:text-base
              transition-all duration-300 group overflow-hidden
              ${
                isActive
                  ? theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                  : theme === 'dark'
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 shadow-sm'
              }
              backdrop-blur-sm
              hover:scale-105 hover:shadow-xl
              ${
                isActive
                  ? theme === 'dark'
                    ? 'hover:shadow-cyan-400/30'
                    : 'hover:shadow-blue-500/30'
                  : theme === 'dark'
                    ? 'hover:shadow-gray-700/50'
                    : 'hover:shadow-gray-300/50'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect for active button */}
            {isActive && (
              <motion.div
                className={`
                  absolute inset-0 rounded-full opacity-50
                  ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700'
                  }
                `}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: 'blur(8px)',
                  zIndex: -1,
                }}
              />
            )}

            {/* Hover glow effect */}
            <motion.div
              className={`
                absolute inset-0 rounded-full opacity-0 group-hover:opacity-30
                ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700'
                }
              `}
              style={{
                filter: 'blur(6px)',
                zIndex: -1,
              }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10 flex items-center gap-2">
              {category.name}
              {category.count > 0 && (
                <span
                  className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : theme === 'dark'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                    }
                  `}
                >
                  {category.count}
                </span>
              )}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ProjectFilter;
