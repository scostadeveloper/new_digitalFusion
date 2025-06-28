import React from 'react';
import { motion } from 'framer-motion';

export function SimpleModernHero() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-black to-neon-cyan/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent">
            Digital Fusion
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Transformamos ideias em soluções digitais inovadoras
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-cyber-purple text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
          >
            Vamos Começar
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
