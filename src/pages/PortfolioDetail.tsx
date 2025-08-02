import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';
import { useAnalytics } from '../hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '../lib/analytics-events';

// Dados dos projetos
const projectsData = {
  'cardapio-digital': {
    title: 'Cardápio Digital - Restaurante Sabor Nordestino',
    category: 'Aplicativos Web',
    description:
      'Sistema completo de cardápio digital com painel administrativo para gestão de categorias, produtos e promoções. Inclui integração com WhatsApp para pedidos e sistema de reservas online.',
    fullDescription: `
Projeto: Cardápio Online Sabor Nordestino

Funcionalidades:
- Cardápio digital interativo com pratos típicos do Nordeste.
- Sistema de reservas online para facilitar o agendamento de mesas.
- Interface responsiva, adaptável a dispositivos móveis e desktops.
- Design moderno e intuitivo, com foco na experiência do usuário.
- Sistema de Login: Permite que os usuários acessem suas contas, visualizem histórico de pedidos e reservas, e gerenciem suas preferências.

Benefícios para o Cliente:
- Facilidade de Uso: Os clientes podem visualizar o cardápio e fazer reservas de forma rápida e simples, sem necessidade de ligações ou visitas presenciais.
- Aumento de Vendas: A presença online atrai mais clientes, aumentando a visibilidade do restaurante e, consequentemente, as vendas.
- Redução de Custos: Diminuição de erros em pedidos e otimização do processo de reservas, reduzindo custos operacionais.
- Satisfação do Cliente: Experiência agradável e moderna, aumentando a satisfação e fidelidade dos clientes.
- Facilidade na Interação com Dados: Os usuários podem acessar e gerenciar suas informações de forma rápida e segura, garantindo uma experiência personalizada.
`,
    challenges: `
Desafios do Projeto:
- Integração de Dados: Garantir que o cardápio e as reservas fossem atualizados em tempo real, sem erros.
- Responsividade: Adaptar o design para diferentes dispositivos, mantendo a usabilidade e estética.
- Acessibilidade: Garantir que a aplicação fosse acessível para todos os usuários, incluindo pessoas com deficiência.
- Segurança do Sistema de Login: Implementar um sistema de autenticação seguro e confiável.
`,
    solution: `
Nossa Solução:
Desenvolvemos uma aplicação web moderna e robusta, utilizando tecnologias avançadas para garantir performance, segurança e facilidade de uso. Implementamos um sistema de gerenciamento de conteúdo que permite atualizações rápidas do cardápio e das reservas, além de um design responsivo e acessível, garantindo uma experiência de usuário excepcional. O sistema de login foi desenvolvido com foco em segurança e usabilidade, permitindo que os usuários acessem suas informações de forma rápida e segura.
`,
    imageUrl: '/sabor-nordestino.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://sabor-nordestino.netlify.app/',
  },
  'landing-marketing': {
    title: 'Landing Page - Curso de Marketing Digital',
    category: 'Landing Pages',
    description:
      'Página de alta conversão desenvolvida para captação de leads, com elementos persuasivos, depoimentos em vídeo e integração com sistema de pagamentos.',
    fullDescription: `
Landing Page de Alta Conversão para Marketing Digital
Desenvolvemos uma página web estratégica com um único e poderoso objetivo: converter visitantes interessados em clientes pagantes para um curso de marketing digital. Esta não é apenas uma página bonita; é uma ferramenta de vendas digital otimizada para guiar o usuário por uma jornada persuasiva, destacando os benefícios do curso e removendo barreiras à inscrição. É a solução ideal para empresas e empreendedores que desejam lançar ou impulsionar a venda de produtos digitais, cursos, e-books ou serviços online. 
`,
    challenges: `
No mundo digital de hoje, destacar-se e, mais importante, transformar o interesse em vendas, é um grande desafio. Muitos negócios investem em tráfego (anúncios online), mas perdem potenciais clientes porque suas páginas de destino são lentas, confusas, não se adaptam bem a diferentes dispositivos (celular, tablet), ou não convencem o visitante a tomar a ação desejada (como comprar ou se inscrever). Além disso, entender o que realmente funciona e otimizar o investimento em marketing sem dados claros é como navegar no escuro.
`,
    solution: `
Criamos uma landing page de alta performance que resolve esses problemas. Utilizamos tecnologia de ponta para garantir que a página carregue rapidamente e funcione perfeitamente em qualquer dispositivo (celulares, tablets e computadores). A estrutura e o design são cuidadosamente planejados para serem extremamente persuasivos, focando nos benefícios claros para o potencial cliente.
Implementamos funcionalidades avançadas como:
Otimização para Buscadores (SEO): Para que sua página apareça mais no Google e atraia tráfego orgânico qualificado.
Testes Inteligentes (A/B Testing): Testamos diferentes versões de elementos chave (como títulos ou botões de compra) para descobrir o que gera mais vendas, garantindo que você sempre use a versão mais eficaz.
Análise Detalhada (Analytics): Integramos ferramentas para que você saiba exatamente de onde vêm seus visitantes, como eles interagem com a página e quais ações eles tomam, permitindo otimizar seus investimentos em marketing.
Carregamento Rápido: Utilizamos técnicas para que imagens e vídeos só carreguem quando são visíveis para o usuário, tornando a experiência fluida mesmo em conexões mais lentas.
Acessibilidade: Garantimos que a página seja fácil de usar para todas as pessoas, incluindo aquelas com deficiência, ampliando seu alcance de público.
Com esta solução, entregamos não apenas uma landing page, mas uma máquina de conversão digital projetada para maximizar seus resultados e o retorno sobre seu investimento em marketing.
`,
    imageUrl: '/marketing-digital-lp.jpg',
    technologies: [
      'React',
      'Next.js',
      'Stripe',
      'Google Analytics',
      'Facebook Pixel',
    ],
    demoUrl: 'https://marketingdigitalcourse.netlify.app/',
  },
  'cardapio-digital-simples': {
    title: 'Cardápio Digital',
    category: 'Aplicativos Web',
    description:
      'Sistema de cardápio digital sem necessidade de banco de dados, com interface moderna e responsiva.',
    fullDescription: `
Cardápio Digital - Transforme a Experiência do Seu Restaurante

Imagine oferecer aos seus clientes uma experiência moderna e sofisticada para visualizar e pedir seus produtos, tudo isso através de um cardápio digital elegante e intuitivo. Este é exatamente o que nosso Cardápio Digital oferece!

Por que seu restaurante precisa deste cardápio digital?

Benefícios Principais:

1. Experiência Premium para seus Clientes
   - Interface moderna e elegante
   - Fácil navegação entre categorias
   - Visualização de produtos com fotos e descrições detalhadas

2. Praticidade na Gestão
   - Atualização instantânea de preços e produtos
   - Controle total sobre seu cardápio
   - Sem custos com impressão de cardápios físicos

3. Vendas Otimizadas
   - Sistema de pedidos integrado ao WhatsApp
   - Múltiplas formas de pagamento (Dinheiro, Cartão, PIX)
   - Carrinho de compras intuitivo

4. Diferencial Competitivo
   - Design moderno e profissional
   - Funciona perfeitamente em celulares e computadores
   - Experiência única para seus clientes

Recursos Exclusivos:
- Busca rápida de produtos
- Categorização inteligente
- Integração direta com WhatsApp
- Sistema de pedidos automatizado
- Interface adaptável a qualquer dispositivo

Por que escolher nossa solução?

Desenvolvemos uma solução completa que vai além de um simples cardápio digital. É uma ferramenta de vendas que:
- Aumenta a satisfação dos clientes
- Reduz erros nos pedidos
- Facilita a gestão do seu negócio
- Moderniza a imagem do seu restaurante

Transforme a forma como seus clientes interagem com seu cardápio e aumente suas vendas com uma solução moderna, profissional e eficiente.

---

Um cardápio digital moderno e responsivo desenvolvido com React, TypeScript e Chakra UI.

Funcionalidades:
- Interface responsiva
- Busca de produtos
- Carrinho de compras
- Múltiplas formas de pagamento
- Integração com WhatsApp
- Design moderno e intuitivo
`,
    challenges:
      'O principal desafio foi criar um sistema que funcionasse sem um banco de dados, mantendo a facilidade de uso e a performance.',
    solution:
      'Desenvolvemos uma solução que utiliza apenas armazenamento local para gerenciar os dados do cardápio, garantindo uma experiência fluida, eficiente e totalmente independente de servidores ou integrações externas.',
    imageUrl: '/cardapio-digital-simples.png',
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'LocalStorage',
    ],
    demoUrl: 'https://cardapiosemdb.netlify.app/',
  },
  construsolve: {
    title: 'ConstruSolve - Landing Page Construção Civil',
    category: 'Sites',
    description:
      'Landing page institucional para empresa de construção civil, destacando diferenciais, serviços e chamada para orçamento. Design moderno, responsivo e com foco em conversão.',
    fullDescription: `
Projeto: ConstruSolve - Landing Page Construção Civil

Funcionalidades:
- Apresentação institucional da empresa de construção civil.
- Destaque para diferenciais competitivos: Profissionais Certificados, Projetos Inovadores, Engenharia de Precisão.
- Seção de serviços oferecidos.
- Chamada para ação (Solicitar Orçamento e Nossos Serviços).
- Design moderno, responsivo e com foco em conversão.
- Navegação intuitiva e experiência otimizada para dispositivos móveis e desktops.

Benefícios para o Cliente:
- Facilidade de contato e solicitação de orçamento.
- Comunicação clara dos diferenciais e serviços.
- Aumento da credibilidade e presença digital da empresa.
- Interface agradável e moderna, alinhada ao segmento de construção civil.
`,
    challenges: `
Desafios do Projeto:
- Criar uma identidade visual forte e alinhada ao segmento de construção civil.
- Garantir responsividade e boa experiência em todos os dispositivos.
- Destacar diferenciais competitivos de forma visual e objetiva.
- Otimizar a navegação para conversão de leads.
`,
    solution: `
Nossa Solução:
Desenvolvemos uma landing page moderna, com layout limpo e elementos visuais que remetem à construção civil. Utilizamos cores sóbrias e detalhes em laranja para transmitir confiança e inovação. O site foi estruturado para facilitar a navegação, destacar os diferenciais e incentivar o contato, garantindo performance, responsividade e conversão.
`,
    imageUrl: '/ConstruSolve.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://landingpage-construcao-civil.netlify.app/',
  },
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (project) {
      trackEvent({
        action: ANALYTICS_EVENTS.PROJECT.VIEW,
        category: 'Project',
        label: project.title,
      });
    }
  }, [project, trackEvent]);

  const handleDemoClick = () => {
    trackEvent({
      action: ANALYTICS_EVENTS.PROJECT.CLICK,
      category: 'Project Demo',
      label: project?.title,
    });
  };

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Projeto não encontrado
          </h1>
          <Button asChild>
            <Link to="/portfolio">Voltar para o Portfólio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-df-black text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-df-blue font-medium mb-4">{project.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300">{project.description}</p>
            {project.demoUrl && (
              <Button asChild className="mt-8" onClick={handleDemoClick}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-xl">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-[500px]"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                {/* Texto sobreposto */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <span className="text-white text-xl md:text-2xl font-bold text-center drop-shadow-lg">
                    Clique aqui para visualizar o projeto
                  </span>
                </div>
              </a>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-df-black">
                Sobre o Projeto
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-df-black">
                  Desafios
                </h3>
                <p className="text-gray-700">{project.challenges}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-df-black">
                  Nossa Solução
                </h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-df-black">
                  Tecnologias Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-df-blue/10 text-df-blue px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-df-black">
                  Interessado em um projeto similar?
                </h3>
                <Button asChild className="w-full">
                  <Link to="/contact">Fale com Nossa Equipe</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default PortfolioDetail;
