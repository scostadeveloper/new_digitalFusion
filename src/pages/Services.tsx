import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';
import { Monitor, Smartphone, Layout, Target, Share2, Search, LineChart, ArrowRight, ChevronDown as ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import ScrollNavigator from '@/components/modern/ScrollNavigator';
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
        {/* Animated Tech Background */}
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

          {/* Linhas Animadas */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: theme === 'dark' ? 0.6 : 0.7 }}>
            <defs>
              <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
              stroke="url(#serviceGradient)" 
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line 
              x1="0" y1="45%" x2="100%" y2="40%" 
              stroke="url(#serviceGradient)" 
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.line 
              x1="0" y1="75%" x2="100%" y2="80%" 
              stroke="url(#serviceGradient)" 
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
          </svg>

          {/* Pulsos Radiais */}
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
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Nossos Serviços
            </motion.h1>
            <motion.p 
              className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Soluções digitais completas para transformar seu negócio
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]'}`}
              >
                Explorar Serviços
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${theme === 'dark' 
                  ? 'border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400' 
                  : 'border-2 border-blue-500/50 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500'}`}
              >
                Fale Conosco
              </motion.button>
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

      {/* Services Overview com animações */}
      <section 
        id="services-overview"
        className="py-20 relative overflow-hidden"
        style={{ background: servicesBackground }}
      >
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nossos Serviços
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Soluções digitais completas para impulsionar seu negócio no mundo digital
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <motion.a 
                  href={`#${service.id}`}
                  className={`block h-full p-6 md:p-8 rounded-xl backdrop-blur-md border transition-all duration-300 ${theme === 'dark' 
                    ? 'bg-black/20 border-white/10 hover:border-cyan-400/30 text-white' 
                    : 'bg-white/80 border-gray-200/50 hover:border-blue-400/30 text-gray-900'}`}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${theme === 'dark' 
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400' 
                      : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600'}`}
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {service.description.split('.')[0]}.
                  </p>
                  <div className="flex items-center mt-auto text-sm font-medium">
                    <span className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Individual Service Sections com animações */}
      {services.map((service, index) => (
        <motion.section 
          key={index}
          id={service.id}
          className={`py-24 relative overflow-hidden ${index % 2 === 0 ? 'theme-bg' : theme === 'dark' ? 'bg-black/40' : 'bg-gray-50'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Background Elements */}
          {index % 2 === 0 && (
            <div className="absolute inset-0 overflow-hidden">
              {/* Gradient Orbs */}
              <div className={`absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'}`} />
              <div className={`absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full blur-3xl opacity-10 ${theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-500'}`} />
            </div>
          )}

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className={`${index % 2 !== 0 ? 'order-2' : ''}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${theme === 'dark' 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400' 
                    : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600'}`}
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h2>
                <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {service.description}
                </p>
                <motion.ul 
                  className="space-y-4 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                      variants={itemVariants}
                    >
                      <motion.div 
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${theme === 'dark' 
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                          : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'}`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div 
                  className="rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.a
                    href="/contact"
                    className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${theme === 'dark' 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]'}`}
                  >
                    {service.ctaText}
                  </motion.a>
                </motion.div>
              </motion.div>
              
              {/* Imagem com efeito de glassmorphism */}
              <motion.div 
                className={`hidden lg:block ${index % 2 !== 0 ? 'order-1' : ''}`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className={`relative rounded-xl overflow-hidden ${theme === 'dark' ? 'shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'shadow-[0_0_30px_rgba(37,99,235,0.15)]'}`}>
                  {/* Glassmorphism border */}
                  <div className={`absolute inset-0 rounded-xl border ${theme === 'dark' ? 'border-white/10' : 'border-blue-500/10'} backdrop-blur-sm z-10`}></div>
                  
                  {/* Image */}
                  <motion.div 
                    className="w-full h-[450px] relative rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      variants={imageVariants}
                      whileHover="hover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 opacity-30 ${theme === 'dark' 
                      ? 'bg-gradient-to-tr from-cyan-900/50 to-transparent' 
                      : 'bg-gradient-to-tr from-blue-900/30 to-transparent'}`}>
                    </div>
                  </motion.div>
                </div>
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

      {/* FAQ Section */}
      <motion.section 
        id="faq"
        className="py-24 relative overflow-hidden"
        style={{ 
          background: theme === 'dark' 
            ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
            : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' 
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Dots */}
          <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.2 : 0.1 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={i}
                className={`absolute rounded-full ${theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'}`}
                style={{
                  width: Math.random() * 8 + 2 + 'px',
                  height: Math.random() * 8 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.5 + 0.3
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            ))}
          </div>
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
              Perguntas Frequentes
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              {
                question: 'Qual é o prazo médio para desenvolvimento de um projeto?',
                answer: 'O prazo varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto aplicações web mais complexas podem levar de 2 a 6 meses. Fornecemos um cronograma detalhado no início do projeto.'
              },
              {
                question: 'Como funciona o processo de pagamento?',
                answer: 'Trabalhamos com um modelo de pagamento em etapas. Geralmente, 30% no início do projeto, 30% na entrega dos protótipos e 40% na conclusão. Para projetos maiores, podemos criar um plano de pagamento personalizado.'
              },
              {
                question: 'Vocês oferecem suporte após o lançamento?',
                answer: 'Sim, oferecemos planos de suporte e manutenção mensais que incluem atualizações, correções de bugs, backups regulares e pequenas melhorias. Também fornecemos treinamento para que sua equipe possa gerenciar o conteúdo.'
              },
              {
                question: 'Quais tecnologias vocês utilizam?',
                answer: 'Utilizamos tecnologias modernas e robustas como React, Next.js, Node.js, Python, Django, Laravel, AWS, entre outras. A escolha da tecnologia depende das necessidades específicas do seu projeto para garantir a melhor performance e escalabilidade.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-6"
                variants={itemVariants}
              >
                <motion.div 
                  className={`border rounded-xl overflow-hidden ${theme === 'dark' 
                    ? 'border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm' 
                    : 'border-gray-200 bg-white/80 backdrop-blur-sm'}`}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button 
                          className={`flex justify-between w-full px-6 py-5 text-left text-lg font-medium focus:outline-none ${theme === 'dark' 
                            ? 'text-white hover:bg-white/5' 
                            : 'text-gray-900 hover:bg-gray-50'}`}
                        >
                          <span>{faq.question}</span>
                          <motion.div
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon
                              className={`w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}
                            />
                          </motion.div>
                        </Disclosure.Button>
                        <Disclosure.Panel 
                          className={`px-6 py-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                          static
                        >
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {faq.answer}
                          </motion.div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </motion.div>
              </motion.div>
            ))}
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
