import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full border border-gray-600/30 backdrop-blur-md transition-all duration-300 hover:scale-110 group"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(30, 30, 30, 0.3))'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(240, 240, 240, 0.3))'
      }}
      whileHover={{ 
        boxShadow: theme === 'dark' 
          ? '0 0 30px rgba(0, 245, 255, 0.4)' 
          : '0 0 30px rgba(255, 193, 7, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-50"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(0, 245, 255, 0.3), transparent)'
            : 'radial-gradient(circle, rgba(255, 193, 7, 0.3), transparent)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Icon container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {theme === 'dark' ? (
          // Moon Icon (Dark Mode)
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.svg
              className="w-6 h-6 text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
            </motion.svg>
            
            {/* Stars around moon */}
            <motion.div
              className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            />
          </motion.div>
        ) : (
          // Sun Icon (Light Mode)
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.svg
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
            </motion.svg>
            
            {/* Rays animation */}
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-2 bg-yellow-500/60 rounded-full"
                  style={{
                    top: '10%',
                    left: '50%',
                    transformOrigin: '50% 250%',
                    transform: `rotate(${i * 45}deg) translateX(-50%)`
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleY: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
