import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Monitor, Smartphone, Layout, Target, Search, ArrowRight, ChevronDown as ChevronDownIcon, CheckCircle, Clock, Users, Zap, Code, Globe, Lightbulb, Rocket } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import ScrollNavigator from '@/components/modern/ScrollNavigator';
import { GlassCard } from '@/components/modern/GlassCard';
import { NeonButton } from '@/components/modern/NeonButton';
import { Disclosure } from '@headlessui/react';

const Services = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('hero');

  // Hook para detectar seção atual durante scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services-overview', 'process', 'faq'];
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

  // Função para scroll suave entre seções
  const scrollToNextSection = (targetSection?: string) => {
    const sections = ['hero', 'services-overview', 'process', 'faq'];
    
    if (targetSection) {
      // Se uma seção específica foi fornecida, rolar para ela
      const section = document.getElementById(targetSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    
    // Comportamento padrão: ir para a próxima seção
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Se é a última seção, volta ao topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle scroll to anchor when navigating from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Variantes de animação para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.04,
      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 10, transition: { type: 'spring', stiffness: 300 } }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.04, boxShadow: "0 2px 8px rgba(0,123,255,0.10)" }
  };
  
  // Estilos de background baseados no tema com cores da Digital Fusion
  const heroBackground = theme === 'dark' 
    ? 'linear-gradient(135deg, #000000 0%, #001622 50%, #002433 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #E5F2FF 50%, #B8E0FF 100%)';
    
  const servicesBackground = theme === 'dark'
    ? 'radial-gradient(circle at center, rgba(110, 249, 245, 0.08) 0%, rgba(0, 0, 0, 0.95) 70%)'
    : 'radial-gradient(circle at center, rgba(0, 123, 255, 0.08) 0%, rgba(229, 242, 255, 0.9) 70%)';
    
  const processBackground = theme === 'dark'
    ? 'linear-gradient(135deg, rgba(0, 22, 34, 0.98) 0%, rgba(0, 95, 117, 0.95) 100%)'
    : 'linear-gradient(135deg, rgba(229, 242, 255, 0.98) 0%, rgba(0, 123, 255, 0.95) 100%)';

  // Service data with improved descriptions
  const services = [
    {
      id: 'websites',
      title: 'Desenvolvimento de Sites',
      description: 'Sites modernos, responsivos e otimizados para performance. Combinamos design atraente com tecnologia de ponta para criar uma presença digital marcante para sua marca.',
      features: [
        'Design responsivo e personalizado',
        'Arquitetura moderna e escalável',
        'Integração com sistemas de gestão (CMS)',
        'Performance e velocidade de carregamento',
        'Certificado SSL e segurança avançada'
      ],
      icon: <Monitor size={32} />,
      ctaText: 'Solicitar Orçamento para Site',
      image: '/desenvolvimento-de-sites.jpg'
    },
    {
      id: 'webapps',
      title: 'Aplicativos Web',
      description: 'Desenvolvemos aplicações web robustas que automatizam processos e impulsionam a eficiência do seu negócio, com foco em usabilidade e escalabilidade.',
      features: [
        'Arquitetura moderna e escalável',
        'Interfaces intuitivas e responsivas',
        'Integrações com APIs e serviços',
        'Painéis administrativos personalizados',
        'Segurança e proteção de dados'
      ],
      icon: <Layout size={32} />,
      ctaText: 'Solicitar Orçamento para App Web',
      image: '/aplicativos-web.jpg'
    },
    {
      id: 'mobile',
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android que oferecem experiência superior aos usuários, com foco em performance e usabilidade.',
      features: [
        'Desenvolvimento iOS e Android',
        'Experiência de usuário otimizada',
        'Integração com recursos nativos',
        'Push notifications e analytics',
        'Manutenção e atualizações contínuas'
      ],
      icon: <Smartphone size={32} />,
      ctaText: 'Solicitar Orçamento para App Mobile',
      image: '/apps-mobile.jpg'
    },
    {
      id: 'landing',
      title: 'Landing Pages',
      description: 'Páginas web estratégicas com design moderno e responsivo, focadas em apresentar seu produto ou serviço de forma eficiente e profissional.',
      features: [
        'Design moderno e responsivo',
        'Estrutura otimizada para performance',
        'Integração com sistemas existentes',
        'Formulários e automações',
        'Análise de métricas de uso'
      ],
      icon: <Target size={32} />,
      ctaText: 'Solicitar Orçamento para Landing Page',
      image: '/landding-pages.jpg'
    },
    {
      id: 'seo',
      title: 'SEO',
      description: 'Otimização para mecanismos de busca que melhora seu posicionamento orgânico e aumenta sua visibilidade nos resultados de pesquisa.',
      features: [
        'Otimização on-page',
        'Link building estratégico',
        'Análise de palavras-chave',
        'Otimização técnica',
        'Relatórios de performance'
      ],
      icon: <Search size={32} />,
      ctaText: 'Solicitar Consultoria de SEO',
      image: '/SEO.jpg'
    },
  ];

  return (
    <div className="min-h-screen theme-bg theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section 
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: heroBackground }}
      >
        {/* Animated Tech Background - Versão Digital Fusion */}
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
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full ${theme === 'dark' ? 'bg-cyan-500/20' : 'bg-blue-500/20'}`}
          />
          <motion.div
            animate={{
              scale: [1, 2.8, 1],
              opacity: [0.03, 0.12, 0.03]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className={`absolute top-1/4 right-1/4 w-24 h-24 rounded-full ${theme === 'dark' ? 'bg-blue-500/15' : 'bg-indigo-500/15'}`}
          />
          <motion.div
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.04, 0.18, 0.04]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
            className={`absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full ${theme === 'dark' ? 'bg-purple-500/15' : 'bg-blue-500/15'}`}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Título com Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="block mb-2">Nossos</span>
                <span className={`block bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-cyan-400 via-blue-500 to-purple-600' 
                    : 'from-blue-600 via-purple-600 to-indigo-700'
                } bg-clip-text text-transparent font-extrabold`}>
                  Serviços
                </span>
              </h1>
            </motion.div>

            {/* Subtítulo com Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Soluções digitais completas para{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className={`font-semibold ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                  }`}
                >
                  transformar seu negócio
                </motion.span>
              </p>
            </motion.div>

            {/* Botões com NeonButton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <NeonButton
                onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
                className="group"
              >
                <span className="flex items-center gap-2">
                  Explorar Serviços
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </NeonButton>
              
              <NeonButton
                onClick={() => navigate('/contact')}
                variant="outline"
                size="lg"
              >
                Fale Conosco
              </NeonButton>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {[
                { icon: <Monitor className="w-6 h-6" />, label: 'Sites', count: '50+' },
                { icon: <Smartphone className="w-6 h-6" />, label: 'Apps', count: '30+' },
                { icon: <Users className="w-6 h-6" />, label: 'Clientes', count: '100+' },
                { icon: <Clock className="w-6 h-6" />, label: 'Anos', count: '5+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  className={`text-center p-4 rounded-xl backdrop-blur-sm border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-white/20 border-white/30'
                  }`}
                >
                  <div className={`flex justify-center mb-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.count}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Navigator */}
        <ScrollNavigator 
          sections={['hero', 'services-overview', 'process', 'faq']}
          currentSection={currentSection}
          onNavigate={scrollToNextSection}
          isLastSection={currentSection === 'faq'}
        />
      </section>

      {/* Services Overview com Digital Fusion */}
      <section 
        id="services-overview"
        className="py-24 relative overflow-hidden"
        style={{ background: servicesBackground }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className={`absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'
          }`} />
          <div className={`absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-500'
          }`} />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute top-1/3 right-1/4 w-4 h-4 rounded-full ${
              theme === 'dark' ? 'bg-cyan-400/30' : 'bg-blue-400/30'
            }`}
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full ${
              theme === 'dark' ? 'bg-purple-400/20' : 'bg-indigo-400/20'
            }`}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block mb-2">Nossos</span>
              <span className={`bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-cyan-400 via-blue-500 to-purple-600' 
                  : 'from-blue-600 via-purple-600 to-indigo-700'
              } bg-clip-text text-transparent font-extrabold`}>
                Serviços
              </span>
            </motion.h2>
            
            <motion.p 
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Soluções digitais completas para impulsionar seu negócio no mundo digital
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="h-full group"
              >
                <GlassCard
                  className="h-full p-6 lg:p-8 cursor-pointer transition-all duration-500 group-hover:scale-[1.02]"
                  onClick={() => document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20' 
                        : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/20'
                    }`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`text-2xl ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`mb-6 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {service.description.split('.')[0]}.
                  </p>
                  
                  {/* Features Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className={`text-xs px-3 py-1 rounded-full ${
                            theme === 'dark' 
                              ? 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/20' 
                              : 'bg-blue-500/10 text-blue-600 border border-blue-400/20'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <motion.div 
                    className={`flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Individual Service Sections com Digital Fusion */}
      {services.map((service, index) => (
        <motion.section 
          key={index}
          id={service.id}
          className={`py-24 lg:py-32 relative overflow-hidden ${
            index % 2 === 0 
              ? (theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50/50')
              : (theme === 'dark' ? 'bg-black/30' : 'bg-white/50')
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Orbs */}
            <div className={`absolute ${
              index % 2 === 0 ? '-top-1/4 -right-1/4' : '-bottom-1/4 -left-1/4'
            } w-96 h-96 rounded-full blur-3xl opacity-20 ${
              theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'
            }`} />
            <div className={`absolute ${
              index % 2 === 0 ? '-bottom-1/4 -left-1/4' : '-top-1/4 -right-1/4'
            } w-80 h-80 rounded-full blur-3xl opacity-15 ${
              theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-500'
            }`} />
            
            {/* Floating Particles */}
            <motion.div
              animate={{
                y: [-30, 30, -30],
                x: [-20, 20, -20],
                rotate: [0, 360]
              }}
              transition={{
                duration: 25 + index * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute top-1/4 right-1/3 w-3 h-3 rounded-full ${
                theme === 'dark' ? 'bg-cyan-400/40' : 'bg-blue-400/40'
              }`}
            />
            <motion.div
              animate={{
                y: [20, -20, 20],
                x: [30, -30, 30],
                rotate: [360, 0]
              }}
              transition={{
                duration: 20 + index * 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full ${
                theme === 'dark' ? 'bg-purple-400/30' : 'bg-indigo-400/30'
              }`}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div 
                className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 lg:p-10">
                  {/* Icon */}
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30' 
                        : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30'
                    }`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`text-3xl ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h2 
                    className={`text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    {service.title}
                  </motion.h2>
                  
                  {/* Description */}
                  <motion.p 
                    className={`text-lg lg:text-xl mb-8 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Features */}
                  <motion.div 
                    className="mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h3 className={`text-lg font-semibold mb-4 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      Principais recursos:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className={`flex items-center p-3 rounded-lg ${
                            theme === 'dark' 
                              ? 'bg-white/5 border border-white/10' 
                              : 'bg-white/50 border border-gray-200/50'
                          }`}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <motion.div 
                            className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                              theme === 'dark' 
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                                : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                            }`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-3 h-3" />
                          </motion.div>
                          <span className={`text-sm font-medium ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <NeonButton
                      onClick={() => navigate('/contact')}
                      variant="primary"
                      size="lg"
                      className="group"
                    >
                      <span className="flex items-center gap-2">
                        {service.ctaText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </NeonButton>
                  </motion.div>
                </GlassCard>
              </motion.div>
              
              {/* Visual/Demo Section */}
              <motion.div 
                className={`hidden lg:block ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <GlassCard className="p-8 h-full">
                  {/* Service Preview */}
                  <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
                        : 'bg-gradient-to-br from-gray-100 via-white to-gray-50'
                    }`}>
                      {/* Grid Pattern */}
                      <div className={`absolute inset-0 opacity-20 ${
                        theme === 'dark' ? 'bg-cyan-400/10' : 'bg-blue-500/10'
                      }`} style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, ${
                          theme === 'dark' ? 'rgba(6,182,212,0.3)' : 'rgba(37,99,235,0.3)'
                        } 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    
                    {/* Service Icon Large */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className={`w-32 h-32 rounded-3xl flex items-center justify-center ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/30' 
                          : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-2 border-blue-400/30'
                      } backdrop-blur-sm`}>
                        <div className={`text-6xl ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                          {service.icon}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute top-1/4 right-1/4 w-4 h-4 rounded-full ${
                        theme === 'dark' ? 'bg-cyan-400/60' : 'bg-blue-400/60'
                      }`}
                    />
                    <motion.div
                      animate={{
                        y: [15, -15, 15],
                        rotate: [360, 180, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full ${
                        theme === 'dark' ? 'bg-purple-400/50' : 'bg-indigo-400/50'
                      }`}
                    />
                    
                    {/* Corner Accents */}
                    <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg ${
                      theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-500/50'
                    }`} />
                    <div className={`absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 rounded-tr-lg ${
                      theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-500/50'
                    }`} />
                    <div className={`absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 rounded-bl-lg ${
                      theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-500/50'
                    }`} />
                    <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg ${
                      theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-500/50'
                    }`} />
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10' 
                        : 'bg-gradient-to-br from-blue-500/10 to-indigo-600/10'
                    }`} />
                  </div>
                  
                  {/* Service Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { label: 'Projetos', value: '15+' },
                      { label: 'Clientes', value: '25+' },
                      { label: 'Sucesso', value: '98%' }
                    ].map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        className={`text-center p-3 rounded-lg ${
                          theme === 'dark' 
                            ? 'bg-white/5 border border-white/10' 
                            : 'bg-white/50 border border-gray-200/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + statIndex * 0.1, duration: 0.5 }}
                      >
                        <div className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                          {stat.value}
                        </div>
                        <div className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Process Section */}
      <motion.section 
        id="process"
        className="py-24 relative overflow-hidden"
        style={{ background: processBackground }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: theme === 'dark' ? 0.15 : 0.1 }}>
            <defs>
              <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === 'dark' ? '#6EF9F5' : '#007BFF'} stopOpacity="0.9" />
                <stop offset="100%" stopColor={theme === 'dark' ? '#1E40AF' : '#005F73'} stopOpacity="0.5" />
              </linearGradient>
            </defs>
            
            {/* Horizontal Process Line */}
            <motion.line 
              x1="10%" y1="50%" x2="90%" y2="50%" 
              stroke="url(#processGradient)" 
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nosso Processo
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Como trabalhamos para entregar soluções de alta qualidade
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Análise e Planejamento',
                description: 'Compreendemos suas necessidades, analisamos requisitos e criamos um plano detalhado para o projeto.'
              },
              {
                title: 'Design e Prototipagem',
                description: 'Criamos wireframes e protótipos para visualizar a solução antes do desenvolvimento.'
              },
              {
                title: 'Desenvolvimento',
                description: 'Implementamos a solução utilizando as tecnologias mais adequadas, seguindo as melhores práticas.'
              },
              {
                title: 'Testes e Lançamento',
                description: 'Realizamos testes rigorosos e ajustes finais antes de lançar o produto ao público.'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className={`backdrop-blur-md p-8 rounded-xl border relative ${theme === 'dark' 
                  ? 'bg-black/20 border-white/10 text-white' 
                  : 'bg-white/80 border-gray-200/50 text-gray-900'}`}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mb-6 ${theme === 'dark' 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30' 
                    : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600 border border-blue-500/30'}`}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {step.description}
                </p>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className={`hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 ${theme === 'dark' ? 'bg-cyan-500/30' : 'bg-blue-500/30'} translate-x-4`}></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section com Digital Fusion */}
      <motion.section 
        id="faq"
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ 
          background: theme === 'dark' 
            ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
            : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' 
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className={`absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'
          }`} />
          <div className={`absolute bottom-1/4 -right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-500'
          }`} />
          
          {/* Floating Particles */}
          <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.3 : 0.2 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div 
                key={i}
                className={`absolute rounded-full ${
                  theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-400'
                }`}
                style={{
                  width: Math.random() * 6 + 2 + 'px',
                  height: Math.random() * 6 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{
                  y: [0, Math.random() * 40 - 20],
                  x: [0, Math.random() * 20 - 10],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block mb-2">Perguntas</span>
              <span className={`bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-cyan-400 via-blue-500 to-purple-600' 
                  : 'from-blue-600 via-purple-600 to-indigo-700'
              } bg-clip-text text-transparent font-extrabold`}>
                Frequentes
              </span>
            </motion.h2>
            
            <motion.p 
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </motion.p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              {
                question: 'Qual é o prazo médio para desenvolvimento de um projeto?',
                answer: 'O prazo varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto aplicações web mais complexas podem levar de 2 a 6 meses. Fornecemos um cronograma detalhado no início do projeto.',
                icon: <Clock className="w-6 h-6" />
              },
              {
                question: 'Como funciona o processo de pagamento?',
                answer: 'Trabalhamos com um modelo de pagamento em etapas. Geralmente, 30% no início do projeto, 30% na entrega dos protótipos e 40% na conclusão. Para projetos maiores, podemos criar um plano de pagamento personalizado.',
                icon: <Target className="w-6 h-6" />
              },
              {
                question: 'Vocês oferecem suporte após o lançamento?',
                answer: 'Sim, oferecemos planos de suporte e manutenção mensais que incluem atualizações, correções de bugs, backups regulares e pequenas melhorias. Também fornecemos treinamento para que sua equipe possa gerenciar o conteúdo.',
                icon: <Users className="w-6 h-6" />
              },
              {
                question: 'Quais tecnologias vocês utilizam?',
                answer: 'Utilizamos tecnologias modernas e robustas como React, Next.js, Node.js, Python, Django, Laravel, AWS, entre outras. A escolha da tecnologia depende das necessidades específicas do seu projeto para garantir a melhor performance e escalabilidade.',
                icon: <Code className="w-6 h-6" />
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-6"
                variants={itemVariants}
              >
                <GlassCard className="overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center justify-between w-full p-6 lg:p-8 text-left focus:outline-none group">
                          <div className="flex items-center gap-4">
                            {/* Icon */}
                            <motion.div 
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                theme === 'dark' 
                                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30' 
                                  : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30'
                              }`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className={`${
                                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                              }`}>
                                {faq.icon}
                              </div>
                            </motion.div>
                            
                            {/* Question */}
                            <span className={`text-lg lg:text-xl font-semibold ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {faq.question}
                            </span>
                          </div>
                          
                          {/* Chevron */}
                          <motion.div
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 ml-4"
                          >
                            <ChevronDownIcon
                              className={`w-6 h-6 ${
                                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                              }`}
                            />
                          </motion.div>
                        </Disclosure.Button>
                        
                        <Disclosure.Panel className="px-6 lg:px-8 pb-6 lg:pb-8">
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`text-base lg:text-lg leading-relaxed ml-16 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            {faq.answer}
                          </motion.div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className={`text-lg mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Ainda tem dúvidas? Estamos aqui para ajudar!
            </p>
            <NeonButton
              onClick={() => navigate('/contact')}
              variant="primary"
              size="lg"
              className="group"
            >
              <span className="flex items-center gap-2">
                Fale Conosco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </NeonButton>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <ContactCTA />

      {/* Scroll Navigator */}
      <ScrollNavigator 
        sections={['hero', 'services-overview', 'process', 'faq']}
        currentSection={currentSection}
        onNavigate={scrollToNextSection}
        isLastSection={currentSection === 'faq'}
      />
    </div>
  );
};

export default Services;
