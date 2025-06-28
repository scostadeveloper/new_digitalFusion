import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, Palette, Globe, Users, Calendar, TrendingUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  // Função para scroll suave para próxima seção
  const scrollToNextSection = () => {
    const sections = ['services', 'stats', 'contact'];
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Encontra a próxima seção baseada na posição atual
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        // Se a seção está abaixo da posição atual + uma margem, rola para ela
        if (sectionTop > currentScrollY + windowHeight * 0.1) {
          section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          return;
        }
      }
    }
    
    // Se não encontrou nenhuma seção, rola para services (padrão)
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Função para scroll direto para contato
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Estilos de background baseados no tema
  const heroBackground = theme === 'dark' 
    ? 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #e6f3ff 100%)';
    
  const servicesBackground = theme === 'dark'
    ? 'radial-gradient(circle at center, rgba(0, 245, 255, 0.1) 0%, rgba(0, 0, 0, 0.9) 70%)'
    : 'radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, rgba(248, 250, 252, 0.9) 70%)';
    
  const ctaBackground = theme === 'dark'
    ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(22, 33, 62, 0.95) 100%)'
    : 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(240, 248, 255, 0.9) 50%, rgba(230, 243, 255, 0.95) 100%)';

  return (
    <div className="min-h-screen theme-bg theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: heroBackground }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-20' : 'opacity-25'}`}>
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: theme === 'dark' 
                  ? 'linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)'
                  : 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            />
          </div>
          
          {/* Additional Pattern Overlay for Light Mode */}
          {theme === 'light' && (
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
                  animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse'
                }}
              />
            </div>
          )}
          
          {/* Floating Orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className={`absolute w-4 h-4 rounded-full ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple shadow-neon' 
                  : (i % 3 === 0 ? 'light-neon-orb-blue' : i % 3 === 1 ? 'light-neon-orb-purple' : 'light-neon-orb-cyan')
              }`}
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
                boxShadow: theme === 'dark' 
                  ? '0 0 20px rgba(0, 245, 255, 0.5)' 
                  : (i % 3 === 0 
                      ? '0 0 15px rgba(96, 165, 250, 0.4), 0 0 30px rgba(96, 165, 250, 0.2)'
                      : i % 3 === 1 
                      ? '0 0 15px rgba(167, 139, 250, 0.4), 0 0 30px rgba(167, 139, 250, 0.2)'
                      : '0 0 15px rgba(34, 211, 238, 0.4), 0 0 30px rgba(34, 211, 238, 0.2)')
              }}
            />
          ))}
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-24">
          {/* Main Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
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
                <div className={`relative px-6 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${
                  theme === 'dark' 
                    ? 'bg-black/30 border-cyan-400/30 text-cyan-300' 
                    : 'bg-white/30 border-blue-400/30 text-blue-700'
                }`}>
                  ✨ Inovação em Tecnologia Digital
                </div>
              </motion.div>

              {/* Título Principal */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent'
                }`}
              >
                Digital
                <br />
                <span className={`${
                  theme === 'dark' 
                    ? 'text-neon-cyan drop-shadow-neon' 
                    : 'text-blue-600'
                }`}>
                  Fusion
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto ${
                  theme === 'dark' 
                    ? 'text-gray-300' 
                    : 'text-gray-700'
                }`}
              >
                Transformamos ideias em realidade digital com
                <span className={`font-semibold ${
                  theme === 'dark' 
                    ? 'text-neon-cyan' 
                    : 'text-blue-600'
                }`}> design ultra-moderno</span>,
                <span className={`font-semibold ${
                  theme === 'dark' 
                    ? 'text-neon-purple' 
                    : 'text-purple-600'
                }`}> tecnologia avançada</span> e
                <span className={`font-semibold ${
                  theme === 'dark' 
                    ? 'text-cyan-300' 
                    : 'text-indigo-600'
                }`}> experiências imersivas</span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center relative z-20 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToNextSection}
                  className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black hover:shadow-neon'
                      : 'light-neon-button-blue text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explorar Projetos
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 transition-all duration-300 backdrop-blur-md ${
                    theme === 'dark'
                      ? 'border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400'
                      : 'light-neon-border-blue text-blue-600 hover:light-shadow-neon-blue'
                  }`}
                >
                  Falar Conosco
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Sempre na base absoluta do Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-5 hidden sm:block cursor-pointer group"
            onClick={scrollToNextSection}
            title="Clique para rolar para a próxima seção"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-10 rounded-full border-2 flex justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                theme === 'dark' 
                  ? 'border-cyan-400/50 group-hover:border-cyan-400 group-hover:shadow-cyan-400/25' 
                  : 'light-neon-border-blue group-hover:light-shadow-neon-blue'
              }`}
            >
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-1 h-2 rounded-full mt-2 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-cyan-400 group-hover:bg-cyan-300' 
                    : 'bg-blue-500 group-hover:bg-blue-600'
                }`}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        className="py-20 relative overflow-hidden"
        style={{ background: servicesBackground }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent' 
                : 'text-gray-900'
            }`}>
              Nossos Serviços
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' 
                ? 'text-gray-400' 
                : 'text-gray-600'
            }`}>
              Soluções digitais completas para transformar sua presença online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Desenvolvimento Web",
                description: "Sites modernos e responsivos com as mais recentes tecnologias",
                color: theme === 'dark' ? 'cyan' : 'blue'
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Interfaces intuitivas e experiências memoráveis para seus usuários",
                color: theme === 'dark' ? 'purple' : 'purple'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Marketing Digital",
                description: "Estratégias digitais para aumentar sua presença online",
                color: theme === 'dark' ? 'cyan' : 'indigo'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 group ${
                  theme === 'dark'
                    ? 'bg-black/20 border-white/10 hover:border-cyan-400/30'
                    : 'light-glass-neon hover:light-shadow-neon-blue'
                }`}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                    : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                }`}>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={service.color === 'cyan' 
                      ? (theme === 'dark' ? 'text-neon-cyan' : 'text-blue-500')
                      : service.color === 'purple' 
                      ? (theme === 'dark' ? 'text-neon-purple' : 'text-purple-500')
                      : (theme === 'dark' ? 'text-cyan-300' : 'text-indigo-500')
                    }
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {service.description}
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/5 to-purple-500/5'
                    : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className={`py-20 ${theme === 'dark' ? 'bg-black/50' : 'bg-gray-50/50'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, number: "100+", label: "Clientes Satisfeitos" },
              { icon: <Code className="w-8 h-8" />, number: "250+", label: "Projetos Entregues" },
              { icon: <Calendar className="w-8 h-8" />, number: "5+", label: "Anos de Experiência" },
              { icon: <TrendingUp className="w-8 h-8" />, number: "98%", label: "Taxa de Sucesso" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                    : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                }`}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={theme === 'dark' ? 'text-neon-cyan' : 'text-blue-600'}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <div className={`text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-lg ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{ background: ctaBackground }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent' 
                : 'text-gray-900'
            }`}>
              Pronto para Inovar?
            </h2>
            
            <p className={`text-xl mb-12 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Vamos criar algo extraordinário juntos. Entre em contato e transforme sua visão em realidade digital.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black hover:shadow-neon'
                  : 'light-neon-button-purple text-white'
              }`}
            >
              <span className="flex items-center gap-3">
                Iniciar Projeto
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;