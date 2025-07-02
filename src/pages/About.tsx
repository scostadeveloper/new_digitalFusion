import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Target, Zap, Code, Lightbulb, Award, ArrowRight, 
  Calendar, Rocket, Heart, Star, Globe, Cpu, 
  CheckCircle, TrendingUp, Coffee, Smile
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import ScrollNavigator from '@/components/modern/ScrollNavigator';

// Componente GlassCard customizado para esta página
const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default', 
  glow = 'none' 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'purple' | 'accent' | 'cyan';
  glow?: 'none' | 'subtle' | 'medium' | 'strong';
}) => {
  const variantClasses = {
    default: 'bg-white/10 border-white/20',
    blue: 'bg-blue-500/10 border-blue-500/30',
    purple: 'bg-purple-500/10 border-purple-500/30',
    accent: 'bg-cyan-500/10 border-cyan-500/30',
    cyan: 'bg-cyan-400/10 border-cyan-400/30'
  };

  const glowClasses = {
    none: '',
    subtle: 'shadow-lg',
    medium: 'shadow-xl',
    strong: 'shadow-2xl'
  };

  return (
    <div className={`backdrop-blur-lg border rounded-xl transition-all duration-300 ${variantClasses[variant]} ${glowClasses[glow]} ${className}`}>
      {children}
    </div>
  );
};

// Componente NeonButton customizado
const NeonButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  [key: string]: any;
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]',
    secondary: 'border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const About = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('hero');

  // Hook para detectar seção atual durante scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story', 'team', 'values', 'tech-stack', 'achievements', 'contact'];
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (currentScrollY < windowHeight * 0.5) {
        setCurrentSection('hero');
        return;
      }
      
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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave entre seções
  const scrollToNextSection = () => {
    const sections = ['hero', 'story', 'team', 'values', 'tech-stack', 'achievements', 'contact'];
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (currentScrollY < windowHeight * 0.5) {
      const storySection = document.getElementById('story');
      if (storySection) {
        storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (currentScrollY >= sectionTop - windowHeight * 0.3 && 
            currentScrollY < sectionBottom - windowHeight * 0.3) {
          const nextSectionIndex = i + 1;
          
          if (nextSectionIndex < sections.length) {
            const nextSection = document.getElementById(sections[nextSectionIndex]);
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              return;
            }
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }
        }
      }
    }
  };

  // Estilos de background baseados no tema com cores da Digital Fusion
  const heroBackground = theme === 'dark' 
    ? 'linear-gradient(135deg, #000000 0%, #001622 50%, #002433 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #E5F2FF 50%, #B8E0FF 100%)';
    
  const sectionBackground = theme === 'dark'
    ? 'radial-gradient(circle at center, rgba(110, 249, 245, 0.08) 0%, rgba(0, 0, 0, 0.95) 70%)'
    : 'radial-gradient(circle at center, rgba(0, 123, 255, 0.08) 0%, rgba(229, 242, 255, 0.9) 70%)';

  return (
    <div className="min-h-screen theme-bg theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section 
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: heroBackground }}
      >
        {/* Animated Tech Background - Igual à Home */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Grid Animado */}
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

          {/* Circuitos SVG */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: theme === 'dark' ? 0.6 : 0.7 }}>
            <defs>
              <linearGradient id="aboutCircuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
              
              <filter id="aboutGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>
            </defs>
            
            <motion.line 
              x1="0" y1="25%" x2="100%" y2="30%" 
              stroke="url(#aboutCircuitGradient)" 
              strokeWidth="2"
              filter="url(#aboutGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line 
              x1="30%" y1="0" x2="35%" y2="100%" 
              stroke="url(#aboutCircuitGradient)" 
              strokeWidth="1.5"
              filter="url(#aboutGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </svg>

          {/* Pulso Radial */}
          <motion.div
            animate={{
              scale: [1, 3, 1],
              opacity: [0.02, 0.1, 0.02]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              theme === 'dark' ? 'border-cyan-400/10' : 'border-blue-500/15'
            }`}
            style={{
              width: window.innerWidth < 768 ? '300px' : '500px',
              height: window.innerWidth < 768 ? '300px' : '500px',
              background: theme === 'dark' 
                ? 'radial-gradient(circle, rgba(110, 249, 245, 0.06) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%)'
            }}
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30'
                    : 'bg-blue-500/10 text-blue-600 border-blue-500/30'
                }`}>
                  🚀 Nossa História
                </span>
              </motion.div>
              
              {/* Título Principal */}
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
                Sobre a
                <span className={`ml-2 sm:ml-3 md:ml-4 lg:ml-5 ${
                  theme === 'dark' 
                    ? 'text-cyan-400 drop-shadow-[0_0_20px_rgba(110,249,245,0.5)]' 
                    : 'text-blue-600'
                }`}>
                  Digital Fusion
                </span>
              </motion.h1>

              {/* Slogan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center max-w-3xl mx-auto space-y-2 px-4 sm:px-0"
              >
                <p className={`text-lg sm:text-xl md:text-2xl font-medium font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Transformando ideias em realidade digital
                </p>
              </motion.div>

              {/* Descrição */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center max-w-4xl mx-auto px-4 sm:px-6"
              >
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed font-body ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Somos uma equipe apaixonada por tecnologia e inovação, dedicada a criar soluções digitais que fazem a diferença no mundo dos negócios.
                </p>
              </motion.div>

              {/* Stats Rápidas */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 max-w-4xl mx-auto"
              >
                {[
                  { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, number: "50+", label: "Clientes" },
                  { icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />, number: "120+", label: "Projetos" },
                  { icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />, number: "3+", label: "Anos" },
                  { icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />, number: "95%", label: "Satisfação" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                    className={`text-center p-4 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-black/20 border-white/10 hover:border-cyan-400/30'
                        : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50'
                    }`}
                  >
                    <div className={`inline-flex p-2 rounded-lg mb-2 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400'
                        : 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-blue-600'
                    }`}>
                      {stat.icon}
                    </div>
                    <div className={`text-lg sm:text-xl font-bold font-heading ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-xs sm:text-sm font-body ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section 
        id="story"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: sectionBackground }}
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
              Nossa Jornada
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Uma história de paixão pela tecnologia e compromisso com a excelência
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <div className="relative">
              {/* Linha Central - Responsiva */}
              <div className={`absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full ${
                theme === 'dark' 
                  ? 'bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400' 
                  : 'bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500'
              }`} />
              
              {[
                {
                  year: "2019",
                  title: "Fundação",
                  description: "A Digital Fusion nasce com a missão de transformar ideias em soluções digitais inovadoras.",
                  icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
                  side: "left"
                },
                {
                  year: "2020",
                  title: "Primeiros Sucessos",
                  description: "Entregamos nossos primeiros projetos web, estabelecendo nossa reputação no mercado digital.",
                  icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
                  side: "right"
                },
                {
                  year: "2021",
                  title: "Expansão de Serviços",
                  description: "Adicionamos marketing digital e desenvolvimento mobile ao nosso portfólio de soluções.",
                  icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
                  side: "left"
                },
                {
                  year: "2022",
                  title: "50+ Clientes",
                  description: "Alcançamos a marca de 50 clientes atendidos com excelência e 95% de satisfação.",
                  icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
                  side: "right"
                },
                {
                  year: "2023",
                  title: "Inovação Contínua",
                  description: "Implementamos IA e automação em nossos processos, sempre na vanguarda da tecnologia.",
                  icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
                  side: "left"
                },
                {
                  year: "2024",
                  title: "Futuro Digital",
                  description: "Continuamos evoluindo e criando soluções que definem o futuro dos negócios digitais.",
                  icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
                  side: "right"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-8 sm:mb-12 ${
                    // Mobile: sempre alinhado à esquerda | Desktop: alternado
                    'sm:justify-start lg:justify-start' + (item.side === 'left' ? '' : ' lg:justify-end')
                  } pl-12 sm:pl-0`}
                >
                  {/* Marcador Central - Responsivo */}
                  <div className={`absolute left-2 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
                    theme === 'dark'
                      ? 'bg-black border-cyan-400'
                      : 'bg-white border-blue-500'
                  }`} />
                  
                  {/* Conteúdo */}
                  <div className={`w-full max-w-sm sm:max-w-md lg:w-5/12 ${
                    item.side === 'right' ? 'lg:text-right' : 'text-left'
                  }`}>
                    <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-black/20 border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(110,249,245,0.1)]'
                        : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.1)]'
                    }`}>
                      <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400'
                          : 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-blue-600'
                      }`}>
                        {item.icon}
                      </div>
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 font-heading ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs sm:text-sm lg:text-base font-medium mb-2 sm:mb-3 ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                      }`}>
                        {item.year}
                      </p>
                      <p className={`text-sm sm:text-base leading-relaxed font-body ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section 
        id="team"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: sectionBackground }}
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
              Nossa Equipe
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Profissionais apaixonados por tecnologia e dedicados ao seu sucesso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Membro 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-black/20 border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(110,249,245,0.2)]'
                  : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.15)]'
              }`}
            >
              <div className="text-center">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30'
                    : 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/30'
                }`}>
                  👨‍💻
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Sérgio Santos
                </h3>
                <p className={`text-sm sm:text-base font-medium mb-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  Co-Fundador & CTO
                </p>
                <p className={`text-sm sm:text-base leading-relaxed font-body mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Especialista em desenvolvimento full-stack com mais de 5 anos de experiência. Apaixonado por criar soluções escaláveis e inovadoras.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['React', 'Node.js', 'TypeScript', 'AWS'].map((skill, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full ${
                        theme === 'dark'
                          ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                          : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Membro 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-black/20 border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(110,249,245,0.2)]'
                  : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.15)]'
              }`}
            >
              <div className="text-center">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30'
                    : 'bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/30'
                }`}>
                  👩‍🎨
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Ana Silva
                </h3>
                <p className={`text-sm sm:text-base font-medium mb-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  Co-Fundadora & Design Lead
                </p>
                <p className={`text-sm sm:text-base leading-relaxed font-body mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Designer UX/UI com expertise em criar experiências digitais memoráveis. Foco em design centrado no usuário e conversões.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Figma', 'UI/UX', 'Branding', 'Prototyping'].map((skill, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full ${
                        theme === 'dark'
                          ? 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                          : 'bg-purple-500/20 text-purple-600 border border-purple-500/30'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section 
        id="values"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: sectionBackground }}
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
              Nossos Valores
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Paixão",
                description: "Amamos o que fazemos e isso se reflete em cada projeto entregue com dedicação e cuidado.",
                color: "red"
              },
              {
                icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Foco no Cliente",
                description: "Seu sucesso é nosso sucesso. Trabalhamos incansavelmente para superar suas expectativas.",
                color: "blue"
              },
              {
                icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Inovação",
                description: "Sempre em busca das tecnologias mais avançadas para entregar soluções de vanguarda.",
                color: "yellow"
              },
              {
                icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Qualidade",
                description: "Comprometidos com a excelência em cada linha de código e pixel do design.",
                color: "green"
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Colaboração",
                description: "Trabalhamos em parceria com nossos clientes, construindo soluções juntos.",
                color: "purple"
              },
              {
                icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Crescimento",
                description: "Evoluímos constantemente para oferecer sempre o melhor em soluções digitais.",
                color: "cyan"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-md border transition-all duration-300 ${
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
                    className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}
                  >
                    {value.icon}
                  </motion.div>
                </div>
                
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h3>
                
                <p className={`text-sm sm:text-base lg:text-lg leading-relaxed font-body ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section 
        id="tech-stack"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: sectionBackground }}
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
              Tecnologias
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Utilizamos as melhores ferramentas para criar soluções de alta qualidade
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { name: "React", icon: "⚛️", level: 95 },
              { name: "Node.js", icon: "🟢", level: 90 },
              { name: "TypeScript", icon: "🔷", level: 88 },
              { name: "Next.js", icon: "▲", level: 85 },
              { name: "Python", icon: "🐍", level: 80 },
              { name: "AWS", icon: "☁️", level: 75 },
              { name: "Figma", icon: "🎨", level: 92 },
              { name: "Docker", icon: "🐳", level: 78 }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`group relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 text-center ${
                  theme === 'dark'
                    ? 'bg-black/20 border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(110,249,245,0.1)]'
                    : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.1)]'
                }`}
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className={`text-lg font-bold mb-3 font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {tech.name}
                </h3>
                
                {/* Progress bar */}
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                    }`}
                  />
                </div>
                <span className={`text-xs mt-2 block ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {tech.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conquistas Section */}
      <section 
        id="achievements"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: sectionBackground }}
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
              Conquistas
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Números que demonstram nosso compromisso com a excelência
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { icon: <Users className="w-8 h-8" />, number: "50+", label: "Clientes Satisfeitos", description: "Empresas que confiam em nosso trabalho" },
              { icon: <Code className="w-8 h-8" />, number: "120+", label: "Projetos Entregues", description: "Soluções digitais desenvolvidas" },
              { icon: <Coffee className="w-8 h-8" />, number: "2000+", label: "Horas de Código", description: "Dedicadas ao desenvolvimento" },
              { icon: <Smile className="w-8 h-8" />, number: "95%", label: "Taxa de Satisfação", description: "Clientes que recomendam nosso trabalho" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-black/20 border-white/10 hover:border-cyan-400/30'
                    : 'bg-white/40 border-blue-200/30 hover:border-blue-400/50'
                }`}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${
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
                <div className={`text-3xl sm:text-4xl font-bold mb-2 font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-lg font-medium mb-2 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  {stat.label}
                </div>
                <div className={`text-sm font-body ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: sectionBackground }}
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
              Vamos Trabalhar Juntos?
            </h2>
            
            <p className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto font-body px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Estamos prontos para transformar suas ideias em soluções digitais extraordinárias. Entre em contato e vamos criar algo incrível juntos!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className={`w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_30px_rgba(110,249,245,0.5)]'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]'
                }`}
              >
                <span className="flex items-center gap-3 justify-center">
                  Falar Conosco
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
                className={`w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold text-base sm:text-lg border-2 transition-all duration-300 backdrop-blur-md ${
                  theme === 'dark'
                    ? 'border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400'
                    : 'border-blue-500/50 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(0,123,255,0.3)]'
                }`}
              >
                Ver Nossos Projetos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegador de Scroll */}
      <ScrollNavigator 
        onClick={scrollToNextSection}
        isLastSection={currentSection === 'contact'}
      />
    </div>
  );
};

export default About;
