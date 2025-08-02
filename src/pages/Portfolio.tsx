import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Briefcase, Code, Smartphone, Globe, Filter } from 'lucide-react';
import ScrollNavigator from '@/components/modern/ScrollNavigator';
import ProjectFilter from '@/components/modern/ProjectFilter';
import ProjectGrid from '@/components/modern/ProjectGrid';

const Portfolio = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [currentSection, setCurrentSection] = useState('hero');

  // Navigation sections
  const sections = [
    { id: 'hero', label: 'Início', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projetos', icon: <Code className="w-4 h-4" /> },
    { id: 'contact', label: 'Contato', icon: <Globe className="w-4 h-4" /> },
  ];

  // Filter categories with counts
  const categories = [
    { id: 'todos', name: 'Todos', count: 0 },
    { id: 'sites', name: 'Sites', count: 0 },
    { id: 'aplicativos-web', name: 'Aplicativos Web', count: 0 },
    { id: 'landing-pages', name: 'Landing Pages', count: 0 },
  ];

  // Updated projects data with modern structure
  const projects = [
    {
      id: 'cardapio-digital',
      title: 'Cardápio Digital - Restaurante Sabor Nordestino',
      category: 'aplicativos-web',
      description:
        'Sistema completo de cardápio digital com painel administrativo para gestão de categorias, produtos e promoções. Inclui integração com WhatsApp para pedidos e sistema de reservas online.',
      imageUrl: '/sabor-nordestino.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
      featured: true,
    },
    {
      id: 'landing-marketing',
      title: 'Landing Page - Curso de Marketing Digital',
      category: 'landing-pages',
      description:
        'Página de alta conversão desenvolvida para captação de leads, com elementos persuasivos, depoimentos em vídeo e integração com sistema de pagamentos.',
      imageUrl: '/marketing-digital-lp.jpg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    },
    {
      id: 'cardapio-digital-simples',
      title: 'Cardápio Digital Simples',
      category: 'aplicativos-web',
      description:
        'Sistema de cardápio digital sem necessidade de banco de dados, com interface moderna e responsiva.',
      imageUrl: '/cardapio-digital-simples.png',
      technologies: ['React', 'CSS3', 'JavaScript'],
    },
    {
      id: 'construsolve',
      title: 'ConstruSolve - Landing Page Construção Civil',
      category: 'sites',
      description:
        'Landing page institucional para empresa de construção civil, destacando diferenciais, serviços e chamada para orçamento. Design moderno, responsivo e com foco em conversão.',
      imageUrl: '/ConstruSolve.jpg',
      demoUrl: 'https://landingpage-construcao-civil.netlify.app/',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    },
  ];

  // Update category counts
  const updateCategoryCounts = () => {
    const counts = projects.reduce(
      (acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    categories.forEach(category => {
      if (category.id === 'todos') {
        category.count = projects.length;
      } else {
        category.count = counts[category.id] || 0;
      }
    });
  };

  updateCategoryCounts();

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  // Handle scroll navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight * 0.5) {
        setCurrentSection('hero');
      } else if (scrollPosition < windowHeight * 1.5) {
        setCurrentSection('projects');
      } else {
        setCurrentSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 mb-0 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Scroll Navigator */}
      <ScrollNavigator
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(135deg, #000000 0%, #001622 50%, #002433 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #E5F2FF 50%, #B8E0FF 100%)',
        }}
      >
        {/* Animated Tech Background - Similar à Home */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Grid Animado */}
          <motion.div
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={`absolute inset-0 ${theme === 'dark' ? 'opacity-25' : 'opacity-30'}`}
            style={{
              backgroundImage:
                theme === 'dark'
                  ? 'linear-gradient(rgba(110, 249, 245, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 249, 245, 0.15) 1px, transparent 1px)'
                  : 'linear-gradient(rgba(0, 123, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.25) 1px, transparent 1px)',
              backgroundSize:
                typeof window !== 'undefined' && window.innerWidth < 768
                  ? '40px 40px'
                  : '60px 60px',
            }}
          />

          {/* Circuitos SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ opacity: theme === 'dark' ? 0.6 : 0.7 }}
          >
            <defs>
              <linearGradient
                id="portfolioCircuitGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor={theme === 'dark' ? '#6EF9F5' : '#007BFF'}
                  stopOpacity="0.9"
                >
                  <animate
                    attributeName="stop-opacity"
                    values="0.9;1;0.5;0.9"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="50%"
                  stopColor={theme === 'dark' ? '#3B82F6' : '#00C9FF'}
                  stopOpacity="0.7"
                >
                  <animate
                    attributeName="stop-opacity"
                    values="0.7;0.9;0.4;0.7"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="100%"
                  stopColor={theme === 'dark' ? '#1E40AF' : '#0056B3'}
                  stopOpacity="0.5"
                >
                  <animate
                    attributeName="stop-opacity"
                    values="0.5;0.8;0.3;0.5"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <filter id="portfolioGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.path
              d="M50,50 Q200,100 350,50 T650,50 Q800,100 950,50"
              stroke="url(#portfolioCircuitGradient)"
              strokeWidth="1.5"
              fill="transparent"
              filter="url(#portfolioGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.path
              d="M100,200 L300,200 L300,400 L500,400 L500,200 L700,200"
              stroke="url(#portfolioCircuitGradient)"
              strokeWidth="1.5"
              fill="transparent"
              filter="url(#portfolioGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 3,
              }}
            />
          </svg>

          {/* Efeito Matrix Simplificado */}
          <div
            className={`absolute inset-0 ${theme === 'dark' ? 'opacity-15' : 'opacity-20'}`}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                animate={{
                  y: [
                    -200,
                    typeof window !== 'undefined'
                      ? window.innerHeight + 200
                      : 1000,
                  ],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 2,
                }}
                className={`absolute text-sm font-mono ${
                  theme === 'dark' ? 'text-cyan-400/60' : 'text-blue-600/60'
                }`}
                style={{
                  left: `${10 + i * 15}%`,
                  fontFamily: 'monospace',
                  fontSize:
                    typeof window !== 'undefined' && window.innerWidth < 768
                      ? '10px'
                      : '12px',
                }}
              >
                {Array.from({ length: 20 }, (_, j) => (
                  <div key={j} style={{ opacity: 1 - j * 0.05 }}>
                    {
                      ['01', '10', '{}', '[]', '<>', '/>', 'AI', 'WEB'][
                        Math.floor(Math.random() * 8)
                      ]
                    }
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Pulsos Radiais */}
          <motion.div
            animate={{
              scale: [1, 3, 1],
              opacity: [0.02, 0.12, 0.02],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              theme === 'dark' ? 'border-cyan-400/10' : 'border-blue-500/15'
            }`}
            style={{
              width:
                typeof window !== 'undefined' && window.innerWidth < 768
                  ? '300px'
                  : '500px',
              height:
                typeof window !== 'undefined' && window.innerWidth < 768
                  ? '300px'
                  : '500px',
              background:
                theme === 'dark'
                  ? 'radial-gradient(circle, rgba(110, 249, 245, 0.06) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%)',
            }}
          />

          {/* Overlay para Tema Claro */}
          {theme === 'light' && (
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, rgba(0, 123, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0, 95, 117, 0.25) 0%, transparent 40%)',
                }}
              />
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <motion.div variants={itemVariants} className="mb-6">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                theme === 'dark'
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Portfólio Digital Fusion
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-4xl md:text-6xl font-bold mb-8 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}
          >
            Projetos que resolvem, transformam e engajam
            <br />
            <span className="relative">
              Transformam Ideias
              <motion.div
                className={`absolute -bottom-0 left-0 right-0 h-1 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl mb-8 max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Conheça alguns dos projetos que desenvolvemos com paixão e
            dedicação. Cada projeto é único e criado especialmente para atender
            às necessidades dos nossos clientes.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {[
              {
                icon: <Code className="w-4 h-4" />,
                text: 'Desenvolvimento Web',
              },
              { icon: <Smartphone className="w-4 h-4" />, text: 'Apps Mobile' },
              { icon: <Globe className="w-4 h-4" />, text: 'E-commerce' },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 text-gray-300 border border-gray-700'
                    : 'bg-white/50 text-gray-600 border border-gray-200'
                } backdrop-blur-sm`}
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                theme === 'dark'
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  : 'bg-purple-50 text-purple-600 border border-purple-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              Nossos Projetos
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Explore Nosso Trabalho
            </h2>

            <p
              className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Cada projeto é uma história de sucesso, desenvolvido com
              tecnologias modernas e foco na experiência do usuário.
            </p>
          </motion.div>

          {/* Project Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <ProjectFilter
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants}>
            <ProjectGrid projects={filteredProjects} loading={false} />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
