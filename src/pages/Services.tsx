import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';
import { Monitor, Smartphone, Layout, Target, Share2, Search, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
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
    <div className="pt-16">
      {/* Hero Section com animação */}
      <section className="bg-df-black text-white py-20 md:py-32 relative overflow-hidden">
        {/* Banner Image com animação */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
            alt="Serviços Digital Fusion"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-1xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-300">
              Soluções digitais completas para transformar seu negócio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview com animações */}
      <section className="py-12 bg-df-gray">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.a 
                key={index}
                href={`#${service.id}`}
                className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.06, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
              >
                <motion.div 
                  className="text-df-blue mb-3"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-sm font-medium">{service.title}</h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Individual Service Sections com animações */}
      {services.map((service, index) => (
        <motion.section 
          key={index}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-df-gray'}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className={`${index % 2 !== 0 ? 'order-2' : ''}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-df-blue mb-6"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <h2 className="section-title">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">
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
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-df-blue text-white flex items-center justify-center mr-3 mt-0.5"
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
                <div className="rounded-lg overflow-hidden">
                  <Button asChild className="btn-primary rounded-lg w-full">
                    <motion.a
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap={{ scale: 0.97 }}
                      href="/contact"
                    >
                      {service.ctaText}
                    </motion.a>
                  </Button>
                </div>
              </motion.div>
              {/* Imagem oculta em mobile */}
              <motion.div 
                className={`hidden lg:block ${index % 2 !== 0 ? 'order-1' : ''}`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <div className="w-full h-[400px] relative rounded-lg shadow-xl overflow-hidden">
                  <motion.img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Process Section */}
      <motion.section 
        className="section-padding bg-df-cyan text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Nosso Processo</h2>
            <p className="section-subtitle text-white/80 max-w-2xl mx-auto">
              Como trabalhamos para entregar soluções de alta qualidade
            </p>
          </div>
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
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg relative animate-on-scroll"
                variants={itemVariants}
                whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-white text-df-cyan flex items-center justify-center font-bold mb-6"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-white/30 translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="section-padding"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              {
                question: 'Qual é o prazo médio para desenvolvimento de um site?',
                answer: 'O prazo varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 3 a 4 semanas, enquanto projetos mais complexos podem levar 2 meses ou mais. Sempre definimos prazos realistas no início do projeto.'
              },
              {
                question: 'Como funciona o processo de pagamento?',
                answer: 'Trabalhamos com um modelo de pagamento em etapas. Geralmente, 40% no início do projeto, 30% na aprovação do design e 30% na entrega final. Para projetos maiores, podemos estabelecer um cronograma de pagamentos mais detalhado.'
              },
              {
                question: 'Vocês oferecem suporte após a conclusão do projeto?',
                answer: 'Sim! Oferecemos planos de manutenção e suporte contínuo para todos os nossos projetos. Isso inclui atualizações, correções, segurança e pequenas alterações, garantindo que sua solução continue funcionando perfeitamente.'
              },
              {
                question: 'Quais tecnologias vocês utilizam nos projetos?',
                answer: 'Utilizamos as tecnologias mais modernas e adequadas para cada projeto. Para desenvolvimento web, trabalhamos com React, Vue, Node.js, PHP entre outros. Para mobile, utilizamos React Native, Flutter ou desenvolvimento nativo quando necessário.'
              },
              {
                question: 'É possível atualizar o conteúdo do site sem conhecimento técnico?',
                answer: 'Sim! Implementamos sistemas de gerenciamento de conteúdo (CMS) que permitem que você atualize textos, imagens e outros conteúdos facilmente, sem necessidade de conhecimentos técnicos.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-6 border-b border-gray-200 pb-6 animate-on-scroll"
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f4f8fb" }}
              >
                <h3 className="text-xl font-bold mb-3 text-df-blue">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Services;
