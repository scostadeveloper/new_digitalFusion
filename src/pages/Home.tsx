import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Palette, Globe, Users, Calendar, TrendingUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import SocialProof from '@/components/modern/SocialProof';
import ScrollNavigator from '@/components/modern/ScrollNavigator';

const Home = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('hero');

  // Hook para detectar seção atual durante scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'recent-projects', 'stats', 'contact', 'footer'];
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Se está no topo
      if (currentScrollY < windowHeight * 0.5) {
        setCurrentSection('hero');
        return;
      }
      
      // Verifica cada seção
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (currentScrollY >= sectionTop - windowHeight * 0.4 && 
              currentScrollY < sectionBottom - windowHeight * 0.4) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executar uma vez no carregamento
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave entre seções (navegação sequencial)
  const scrollToNextSection = () => {
    const sections = ['hero', 'services', 'recent-projects', 'stats', 'contact', 'footer'];
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Se está no topo (seção hero), vai para services
    if (currentScrollY < windowHeight * 0.5) {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        return;
      }
    }
    
    // Encontra a próxima seção baseada na posição atual
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Se estamos dentro desta seção, vai para a próxima
        if (currentScrollY >= sectionTop - windowHeight * 0.3 && 
            currentScrollY < sectionBottom - windowHeight * 0.3) {
          const nextSectionIndex = i + 1;
          
          // Se há uma próxima seção
          if (nextSectionIndex < sections.length) {
            const nextSection = document.getElementById(sections[nextSectionIndex]);
            if (nextSection) {
              nextSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
              return;
            }
          } else {
            // Se é a última seção (footer), volta ao topo
            window.scrollTo({ 
              top: 0, 
              behavior: 'smooth' 
            });
            return;
          }
        }
      }
    }
    
    // Fallback: se não detectou posição, vai para services
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

  // Estilos de background baseados no tema com cores da Digital Fusion
  const heroBackground = theme === 'dark' 
    ? 'linear-gradient(135deg, #000000 0%, #001622 50%, #002433 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #E5F2FF 50%, #B8E0FF 100%)';
    
  const servicesBackground = theme === 'dark'
    ? 'radial-gradient(circle at center, rgba(110, 249, 245, 0.08) 0%, rgba(0, 0, 0, 0.95) 70%)'
    : 'radial-gradient(circle at center, rgba(0, 123, 255, 0.08) 0%, rgba(229, 242, 255, 0.9) 70%)';
    
  const ctaBackground = theme === 'dark'
    ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 22, 34, 0.95) 50%, rgba(0, 95, 117, 0.1) 100%)'
    : 'linear-gradient(135deg, rgba(229, 242, 255, 0.98) 0%, rgba(184, 224, 255, 0.95) 50%, rgba(0, 123, 255, 0.1) 100%)';

  return (
    <div className="min-h-screen theme-bg theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: heroBackground }}
      >
        {/* Animated Tech Background - Versão Avançada */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Grid Animado com movimento */}
          <motion.div 
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute inset-0 ${theme === 'dark' ? 'opacity-25' : 'opacity-30'}`}
            style={{
              backgroundImage: theme === 'dark' 
                ? 'linear-gradient(rgba(110, 249, 245, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 249, 245, 0.15) 1px, transparent 1px)'
                : 'linear-gradient(rgba(0, 123, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.25) 1px, transparent 1px)',
              backgroundSize: window.innerWidth < 768 ? '40px 40px' : '60px 60px',
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
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>
            </defs>
            
            {/* Linhas Horizontais Dinâmicas */}
            <motion.line 
              x1="0" y1="15%" x2="100%" y2="20%" 
              stroke="url(#circuitGradient)" 
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line 
              x1="0" y1="45%" x2="100%" y2="40%" 
              stroke="url(#circuitGradient)" 
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.line 
              x1="0" y1="75%" x2="100%" y2="80%" 
              stroke="url(#circuitGradient)" 
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
            
            {/* Linhas Verticais */}
            <motion.line 
              x1="20%" y1="0" x2="25%" y2="100%" 
              stroke="url(#circuitGradient)" 
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.line 
              x1="70%" y1="0" x2="75%" y2="100%" 
              stroke="url(#circuitGradient)" 
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />

            {/* Circuitos Curvos Complexos */}
            <motion.path
              d="M 0 30 Q 25 10 50 35 T 100 25"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="transparent"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            />
            <motion.path
              d="M 0 70 Q 35 50 70 75 T 100 65"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="transparent"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            />
          </svg>

          {/* Efeito Matrix Avançado */}
          <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-20' : 'opacity-25'}`}>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                animate={{
                  y: [-200, window.innerHeight + 200],
                }}
                transition={{
                  duration: 12 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 3
                }}
                className={`absolute text-sm font-mono ${
                  theme === 'dark' ? 'text-cyan-400/70' : 'text-blue-600/70'
                }`}
                style={{
                  left: `${5 + i * 10}%`,
                  fontFamily: 'monospace',
                  fontSize: window.innerWidth < 768 ? '12px' : '14px'
                }}
              >
                {Array.from({ length: 30 }, (_, j) => (
                  <div key={j} style={{ opacity: 1 - (j * 0.035) }}>
                    {['01', '10', '11', '00', '</', '/>', '{}', '[]', '()', '&&', '||', '==', '!=', '=>', '++', '--', 'AI', 'ML', 'API', 'SQL'][Math.floor(Math.random() * 20)]}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Pulsos Radiais Múltiplos */}
          <motion.div
            animate={{
              scale: [1, 3.5, 1],
              opacity: [0.02, 0.15, 0.02]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              theme === 'dark' 
                ? 'border-cyan-400/10' 
                : 'border-blue-500/15'
            }`}
            style={{
              width: window.innerWidth < 768 ? '400px' : '600px',
              height: window.innerWidth < 768 ? '400px' : '600px',
              background: theme === 'dark' 
                ? 'radial-gradient(circle, rgba(110, 249, 245, 0.08) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0, 123, 255, 0.12) 0%, transparent 70%)'
            }}
          />

          <motion.div
            animate={{
              scale: [1, 2.8, 1],
              opacity: [0.03, 0.2, 0.03]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              theme === 'dark' 
                ? 'border-blue-400/15' 
                : 'border-cyan-500/20'
            }`}
            style={{
              width: window.innerWidth < 768 ? '300px' : '450px',
              height: window.innerWidth < 768 ? '300px' : '450px',
              background: theme === 'dark' 
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 60%)'
                : 'radial-gradient(circle, rgba(0, 201, 255, 0.1) 0%, transparent 60%)'
            }}
          />

          {/* Overlay Avançado para Tema Claro */}
          {theme === 'light' && (
            <div className="absolute inset-0 opacity-15">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(0, 123, 255, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(0, 95, 117, 0.35) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 200, 255, 0.3) 0%, transparent 70%)',
                }}
              />
            </div>
          )}
        </div>
        
        {/* Content Container - Responsivo */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Badge - Responsivo */}
              {/* Título Principal - Digital Fusion */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`font-bold leading-tight font-heading text-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
                }`}
                style={{
                  fontSize: window.innerWidth < 640 ? '2.5rem' : 
                           window.innerWidth < 768 ? '3rem' :
                           window.innerWidth < 1024 ? '4rem' : '5rem',
                  lineHeight: window.innerWidth < 640 ? '3.2rem' : 
                             window.innerWidth < 768 ? '3.8rem' :
                             window.innerWidth < 1024 ? '4.8rem' : '6rem'
                }}
              >
                Digital
                <span className={`ml-2 sm:ml-3 md:ml-4 lg:ml-5 ${
                  theme === 'dark' 
                    ? 'text-cyan-400 drop-shadow-[0_0_20px_rgba(110,249,245,0.5)]' 
                    : 'text-blue-600'
                }`}>
                  Fusion
                </span>
              </motion.h1>

              {/* Slogan da Digital Fusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center max-w-3xl mx-auto space-y-2 px-4 sm:px-0"
              >
                <p className={`text-lg sm:text-xl md:text-2xl font-medium font-heading ${
                  theme === 'dark' 
                    ? 'text-white' 
                    : 'text-black'
                }`}>
                  Design inteligente.
                  Código eficiente.
                  Resultados que impactam.
                </p>
              </motion.div>

              {/* Descrição Principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center max-w-4xl mx-auto px-4 sm:px-6"
              >
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed font-body ${
                  theme === 'dark' 
                    ? 'text-gray-300' 
                    : 'text-gray-700'
                }`}>
                  Transformamos ideias em experiências digitais de alto impacto, impulsionando o crescimento do seu negócio.
                </p>
              </motion.div>

              {/* CTAs com cores da Digital Fusion - Totalmente responsivos */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center relative z-20 pt-4 px-4 sm:px-0"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToNextSection}
                  className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_30px_rgba(110,249,245,0.5)]'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    Explorar Projetos
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 transition-all duration-300 backdrop-blur-md ${
                    theme === 'dark'
                      ? 'border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400'
                      : 'border-blue-500/50 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(0,123,255,0.3)]'
                  }`}
                >
                  Falar Conosco
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Melhorada responsividade */}
      <section 
        id="services"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: servicesBackground }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-heading ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent'
            }`}>
              Nossos Serviços
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Soluções digitais completas para transformar sua presença online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Desenvolvimento Web",
                description: "Sites responsivos, landing pages e e-commerce com tecnologias modernas como React, Next.js e Node.js",
                color: theme === 'dark' ? 'cyan' : 'blue'
              },
              {
                icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "UI/UX Design",
                description: "Design de interfaces intuitivas, protótipos interativos e experiências centradas no usuário",
                color: theme === 'dark' ? 'blue' : 'cyan'
              },
              {
                icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Marketing Digital",
                description: "SEO, gestão de redes sociais, campanhas de tráfego pago e automação de marketing",
                color: theme === 'dark' ? 'blue-dark' : 'blue-dark'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-md border transition-all duration-300 group ${
                  theme === 'dark'
                    ? 'bg-black/20 border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(110,249,245,0.2)]'
                    : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.15)]'
                }`}
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                    : 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15'
                }`}>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={service.color === 'cyan' 
                      ? (theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600')
                      : service.color === 'blue' 
                      ? (theme === 'dark' ? 'text-blue-400' : 'text-blue-600')
                      : (theme === 'dark' ? 'text-blue-300' : 'text-blue-700')
                    }
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm sm:text-base lg:text-lg leading-relaxed font-body ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {service.description}
                </p>

                {/* Hover effect com cores da Digital Fusion */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5'
                    : 'bg-gradient-to-r from-blue-500/5 to-cyan-500/5'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Recentes Section */}
      <section 
        id="recent-projects"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: servicesBackground }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-heading ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent'
            }`}>
              Projetos Recentes
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Conheça nossos trabalhos mais recentes e veja como transformamos ideias em soluções digitais inovadoras
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                id: "sabor-nordestino",
                title: "Cardápio Digital - Sabor Nordestino",
                description: "Sistema completo de cardápio digital com painel administrativo para gestão de categorias, produtos e promoções. Inclui integração com WhatsApp para pedidos.",
                imageUrl: "/sabor-nordestino.jpg",
                category: "Aplicativos Web",
                technologies: ["React", "Node.js", "WhatsApp API"],
                year: "2024",
                gradient: theme === 'dark' 
                  ? 'from-cyan-500/20 via-blue-500/20 to-purple-500/20'
                  : 'from-blue-500/20 via-cyan-500/20 to-indigo-500/20'
              },
              {
                id: "marketing-digital-lp",
                title: "Landing Page - Marketing Digital",
                description: "Página de alta conversão desenvolvida para captação de leads, com elementos persuasivos, depoimentos em vídeo e integração com sistema de pagamentos.",
                imageUrl: "/marketing-digital-lp.jpg",
                category: "Landing Pages",
                technologies: ["React", "Stripe", "Analytics"],
                year: "2024",
                gradient: theme === 'dark'
                  ? 'from-blue-500/20 via-purple-500/20 to-pink-500/20'
                  : 'from-indigo-500/20 via-purple-500/20 to-blue-500/20'
              },
              {
                id: "cardapio-digital-simples",
                title: "Cardápio Digital Simples",
                description: "Sistema de cardápio digital sem necessidade de banco de dados, com interface moderna e responsiva para estabelecimentos que precisam de uma solução rápida.",
                imageUrl: "/cardapio-digital-simples.png",
                category: "Aplicativos Web",
                technologies: ["HTML5", "CSS3", "JavaScript"],
                year: "2024",
                gradient: theme === 'dark'
                  ? 'from-green-500/20 via-cyan-500/20 to-blue-500/20'
                  : 'from-cyan-500/20 via-blue-500/20 to-green-500/20'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-md border transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-black/20 border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(110,249,245,0.2)]'
                    : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.15)]'
                }`}
              >
                {/* Imagem Real do Projeto */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback para gradiente se imagem não carregar
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback gradient (escondido por padrão) */}
                  <div className={`hidden w-full h-full bg-gradient-to-br ${project.gradient} items-center justify-center relative`}>
                    <div className={`text-6xl sm:text-7xl lg:text-8xl opacity-40 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
                    }`}>
                      🌐
                    </div>
                  </div>
                    
                  {/* Overlay com tecnologias - visível no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-2 py-1 text-xs rounded-full backdrop-blur-sm ${
                            techIndex % 3 === 0 ? 'bg-cyan-400/20 text-cyan-300' :
                            techIndex % 3 === 1 ? 'bg-blue-400/20 text-blue-300' :
                            'bg-purple-400/20 text-purple-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Badge da categoria */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                        theme === 'dark'
                          ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                          : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do Projeto */}
                <div className="p-6 sm:p-8">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-heading ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed font-body mb-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm font-medium ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      Concluído em {project.year}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/portfolio/${project.id}`)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400/30 border border-cyan-400/30'
                          : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 border border-blue-500/30'
                      }`}
                    >
                      Ver Detalhes
                    </motion.button>
                  </div>
                </div>

                {/* Hover effect com cores da Digital Fusion */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5'
                    : 'bg-gradient-to-r from-blue-500/5 to-cyan-500/5'
                }`} />
              </motion.div>
            ))}
          </div>

          {/* CTA para ver todos os projetos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/portfolio')}
              className={`group px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 cursor-pointer flex items-center gap-3 mx-auto ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_30px_rgba(110,249,245,0.5)]'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]'
              }`}
            >
              Ver Todos os Projetos
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section com cores da Digital Fusion */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-black/30 to-gray-900/20' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-heading ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent'
            }`}>
              O que Nossos Clientes Dizem
            </h2>
            <p className={`text-xl max-w-3xl mx-auto font-body ${
              theme === 'dark' 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Depoimentos reais de clientes que transformaram seus negócios conosco
            </p>
          </motion.div>

          <SocialProof />
        </div>
      </section>

      {/* Stats Section com cores da Digital Fusion - Melhorada responsividade */}
      <section id="stats" className={`py-16 sm:py-20 lg:py-24 ${theme === 'dark' ? 'bg-gray-900/30' : 'bg-blue-50/40'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, number: "50+", label: "Clientes Atendidos" },
              { icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />, number: "120+", label: "Projetos Desenvolvidos" },
              { icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />, number: "3+", label: "Anos de Mercado" },
              { icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />, number: "95%", label: "Satisfação do Cliente" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                    : 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15'
                }`}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-xs sm:text-sm lg:text-base font-body ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Melhorada responsividade */}
      <section 
        id="contact"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: ctaBackground }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-heading ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent'
            }`}>
              Pronto para Inovar?
            </h2>
            
            <p className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Pronto para levar seu negócio ao próximo nível? Nossa equipe está preparada para transformar suas ideias em soluções digitais de alta performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_30px_rgba(110,249,245,0.5)]'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]'
                }`}
              >
                <span className="flex items-center gap-3 justify-center">
                  Iniciar Projeto
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </span>
              </motion.button>

              <motion.a
                href="https://wa.me/5585999999999?text=Olá! Gostaria de conhecer os serviços da Digital Fusion."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold text-base sm:text-lg border-2 transition-all duration-300 backdrop-blur-md ${
                  theme === 'dark'
                    ? 'border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400'
                    : 'border-blue-500/50 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(0,123,255,0.3)]'
                }`}
              >
                💬 WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegador de Scroll Global */}
      <ScrollNavigator 
        onClick={scrollToNextSection}
        isLastSection={currentSection === 'footer'}
      />
    </div>
  );
};

export default Home;