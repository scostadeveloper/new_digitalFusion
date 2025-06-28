import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  // Filter categories
  const categories = ['Todos', 'Sites', 'Aplicativos Web', 'E-commerce', 'Mobile'];
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  // Updated projects data with more detailed descriptions
  const projects = [
    {
      id: 'cardapio-digital',
      title: 'Cardápio Digital - Restaurante Sabor Nordestino',
      category: 'Aplicativos Web',
      description: 'Sistema completo de cardápio digital com painel administrativo para gestão de categorias, produtos e promoções. Inclui integração com WhatsApp para pedidos e sistema de reservas online.',
      imageUrl: '/sabor-nordestino.jpg',
    },
    {
      id: 'landing-marketing',
      title: 'Landing Page - Curso de Marketing Digital',
      category: 'Landing Pages',
      description: 'Página de alta conversão desenvolvida para captação de leads, com elementos persuasivos, depoimentos em vídeo e integração com sistema de pagamentos.',
      imageUrl: '/marketing-digital-lp.jpg',
    },
    {
      id: 'cardapio-digital-simples',
      title: 'Cardápio Digital Simples',
      category: 'Aplicativos Web',
      description: 'Sistema de cardápio digital sem necessidade de banco de dados, com interface moderna e responsiva.',
      imageUrl: '/cardapio-digital-simples.png',
    },
    {
      id: 'construsolve',
      title: 'ConstruSolve - Landing Page Construção Civil',
      category: 'Sites',
      description: 'Landing page institucional para empresa de construção civil, destacando diferenciais, serviços e chamada para orçamento. Design moderno, responsivo e com foco em conversão.',
      imageUrl: '/ConstruSolve.jpg',
      demoUrl: 'https://landingpage-construcao-civil.netlify.app/'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-df-black text-white py-20 md:py-32 relative">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop"
            alt="Portfólio Digital Fusion"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nosso Portfólio
            </h1>
            <p className="text-xl text-gray-300">
              Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-df-gray">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeFilter === category ? 'default' : 'outline'}
                onClick={() => setActiveFilter(category)}
                className={`
                  ${activeFilter === category 
                    ? 'bg-df-blue text-white hover:bg-df-blue/90' 
                    : 'text-df-black hover:text-df-white'}
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-4">Nenhum projeto encontrado nesta categoria</h3>
              <p className="text-gray-600 mb-6">Tente selecionar outra categoria ou entre em contato para discutir seu projeto.</p>
              <Button onClick={() => setActiveFilter('Todos')}>Ver Todos os Projetos</Button>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Cases de Sucesso</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Conheça como nossos projetos transformaram negócios e geraram resultados concretos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Aumento de 150% nas conversões para e-commerce',
                description: 'Redesenhamos completamente a experiência de compra de um e-commerce de moda, resultando em aumento significativo nas conversões e redução na taxa de abandono de carrinho.',
                stats: [
                  { value: '+150%', label: 'em conversões' },
                  { value: '-35%', label: 'abandono de carrinho' },
                  { value: '+89%', label: 'tempo no site' }
                ]
              },
              {
                title: 'Aplicativo que revolucionou logística interna',
                description: 'Desenvolvemos um aplicativo de gestão logística que automatizou processos manuais, economizando tempo e recursos significativos para uma empresa de distribuição.',
                stats: [
                  { value: '-40%', label: 'em custos operacionais' },
                  { value: '+65%', label: 'em eficiência' },
                  { value: '3x', label: 'mais entregas diárias' }
                ]
              }
            ].map((caseStudy, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full animate-on-scroll"
              >
                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-df-blue">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="text-df-blue hover:text-df-cyan mt-auto self-start">
                  Ler caso completo
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Portfolio;
