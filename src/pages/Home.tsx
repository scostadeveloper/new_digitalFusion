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
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-black to-neon-cyan/20" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid-pattern animate-pulse-slow" />
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
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-cyan/10 blur-xl"
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
              className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-cyber-purple/10 blur-xl"
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
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan opacity-75 blur-sm animate-pulse-glow" />
              <span className="relative px-6 py-3 bg-black/80 backdrop-blur-sm border border-neon-cyan/30 rounded-lg text-sm font-bold tracking-widest uppercase text-neon-cyan">
                ✨ Inovação Digital
              </span>
            </motion.div>
            
            {/* Title with Typing Effect */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold font-orbitron"
              >
                <span className="block bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent animate-gradient-x">
                  Digital
                </span>
                <span className="block bg-gradient-to-r from-cyber-purple via-neon-cyan to-cyber-purple bg-clip-text text-transparent animate-gradient-x">
                  Fusion
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-2"
              >
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-rajdhani">
                  Transformamos ideias em
                </p>
                <motion.p 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-neon-cyan"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #00f5ff",
                      "0 0 20px #00f5ff", 
                      "0 0 10px #00f5ff"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  soluções digitais inovadoras
                </motion.p>
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
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-cyber-purple text-black font-bold rounded-lg overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Vamos Começar
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 transition-all duration-300"
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
                  <div className="flex justify-center text-neon-cyan">
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
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyber-purple/5 to-black" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-4">
              <span className="bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent">
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
                icon: "🌐",
                gradient: "from-neon-cyan/20 to-cyber-purple/20"
              },
              { 
                title: "Aplicativos Mobile", 
                desc: "Apps nativos e híbridos para iOS e Android",
                icon: "📱",
                gradient: "from-cyber-purple/20 to-neon-cyan/20"
              },
              { 
                title: "Marketing Digital", 
                desc: "Estratégias integradas que realmente convertem",
                icon: "🚀",
                gradient: "from-neon-cyan/20 to-cyber-purple/20"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className={`
                  relative overflow-hidden rounded-xl p-8 h-full
                  bg-gradient-to-br ${service.gradient}
                  backdrop-blur-sm border border-gray-700/50
                  hover:border-neon-cyan/50 transition-all duration-500
                  hover:shadow-lg hover:shadow-neon-cyan/20
                `}>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-neon-cyan group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.desc}
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="pt-4"
                    >
                      <button className="text-neon-cyan hover:text-white transition-colors duration-300 font-semibold group-hover:underline">
                        Saiba mais →
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/10 via-transparent to-cyber-purple/10" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent">
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
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-cyber-purple text-black font-bold rounded-lg overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  💬 Vamos Conversar
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 transition-all duration-300"
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
