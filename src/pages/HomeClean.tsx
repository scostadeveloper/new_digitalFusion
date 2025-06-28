import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            />
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-400/10 blur-xl"
            />
            <motion.div
              animate={{ 
                x: [0, -120, 0],
                y: [0, 80, 0]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-purple-400/10 blur-xl"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-75 blur-sm animate-pulse" />
              <span className="relative px-6 py-3 bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-sm font-bold tracking-widest uppercase text-cyan-400">
                ✨ Inovação Digital
              </span>
            </motion.div>
            
            {/* Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold font-mono"
              >
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Fusion
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-2"
              >
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
                  Transformamos ideias em
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">
                  soluções digitais inovadoras
                </p>
              </motion.div>
            </div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold rounded-lg overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Vamos Começar
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Ver Portfolio
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
            >
              {[
                { icon: <Sparkles className="w-6 h-6" />, value: "150+", label: "Projetos" },
                { icon: <Zap className="w-6 h-6" />, value: "80+", label: "Clientes" },
                { icon: <ArrowRight className="w-6 h-6" />, value: "5+", label: "Anos" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center space-y-2"
                >
                  <div className="flex justify-center text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nossos Serviços
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Soluções digitais completas para transformar seu negócio
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Desenvolvimento Web", 
                desc: "Sites modernos, responsivos e otimizados para conversão",
                icon: "🌐"
              },
              { 
                title: "Aplicativos Mobile", 
                desc: "Apps nativos e híbridos para iOS e Android",
                icon: "📱"
              },
              { 
                title: "Marketing Digital", 
                desc: "Estratégias integradas que realmente convertem",
                icon: "🚀"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4">
                    <button className="text-cyan-400 hover:text-white transition-colors duration-300 font-semibold group-hover:underline">
                      Saiba mais →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-purple-900/10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pronto para Transformar
              </span>
              <br />
              <span className="text-white">seu Negócio?</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Vamos criar algo incrível juntos. Entre em contato e descubra como podemos levar sua empresa para o próximo nível.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold rounded-lg overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Começar Projeto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                📞 (85) 9 9999-9999
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
