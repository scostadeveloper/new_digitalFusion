import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const HomeTest = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {/* Badge */}
            <div className="relative inline-block">
              <span className="px-6 py-3 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg text-sm font-bold tracking-widest uppercase text-cyan-400">
                ✨ Inovação Digital
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              <span className="block text-cyan-400">
                Digital
              </span>
              <span className="block text-purple-400">
                Fusion
              </span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
                Transformamos ideias em
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">
                soluções digitais inovadoras
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg">
                Vamos Começar
              </button>
              
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-bold rounded-lg">
                Ver Portfolio
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="flex justify-center text-cyan-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Projetos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center text-cyan-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">80+</div>
                <div className="text-sm text-gray-400">Clientes</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center text-cyan-400">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Anos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Soluções digitais completas para transformar seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900/50 border border-gray-700/50 rounded-xl">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Desenvolvimento Web</h3>
              <p className="text-gray-300">Sites modernos, responsivos e otimizados para conversão</p>
            </div>
            
            <div className="p-8 bg-gray-900/50 border border-gray-700/50 rounded-xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Aplicativos Mobile</h3>
              <p className="text-gray-300">Apps nativos e híbridos para iOS e Android</p>
            </div>
            
            <div className="p-8 bg-gray-900/50 border border-gray-700/50 rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Marketing Digital</h3>
              <p className="text-gray-300">Estratégias integradas que realmente convertem</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTest;
