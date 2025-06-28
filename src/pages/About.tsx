import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Code, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/modern/GlassCard';
import { NeonButton } from '@/components/modern/NeonButton';
import CounterAnimation from '@/components/effects/CounterAnimation';
import FloatingElements from '@/components/effects/FloatingElements';
import TechBackground from '@/components/effects/TechBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <TechBackground />
        <FloatingElements elements={[
          {
            id: 'shape1',
            content: <div className="w-6 h-6 bg-neon-cyan/20 rounded-full blur-sm" />,
            position: { x: 20, y: 20 }
          },
          {
            id: 'shape2',
            content: <div className="w-4 h-4 bg-cyber-purple/20 rotate-45 blur-sm" />,
            position: { x: 80, y: 60 }
          },
          {
            id: 'shape3',
            content: <div className="w-5 h-5 bg-neon-cyan/20 rounded-full blur-sm" />,
            position: { x: 60, y: 30 }
          }
        ]} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-black to-neon-cyan/20" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
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
                🚀 Nossa História
              </span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron"
            >
              <span className="block bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent animate-gradient-x">
                Sobre a Digital
              </span>
              <span className="block bg-gradient-to-r from-cyber-purple via-neon-cyan to-cyber-purple bg-clip-text text-transparent animate-gradient-x">
                Fusion
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Transformamos <span className="text-neon-cyan font-bold">ideias inovadoras</span> em 
              <span className="text-cyber-purple font-bold"> soluções digitais extraordinárias</span> desde 2019
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto"
            >
              {[
                { icon: <Code className="w-8 h-8" />, value: 150, suffix: "+", label: "Projetos Entregues" },
                { icon: <Users className="w-8 h-8" />, value: 80, suffix: "+", label: "Clientes Satisfeitos" },
                { icon: <Award className="w-8 h-8" />, value: 5, suffix: "+", label: "Anos de Experiência" },
                { icon: <Zap className="w-8 h-8" />, value: 99, suffix: "%", label: "Taxa de Sucesso" }
              ].map((stat, index) => (
                <GlassCard
                  key={index}
                  className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                  variant="cyan"
                  glow="medium"
                >
                  <div className="flex justify-center mb-3 text-neon-cyan group-hover:text-cyber-purple transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    <CounterAnimation 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2}
                      delay={1.5 + (index * 0.2)}
                    />
                  </div>
                  <div className="text-sm text-gray-400 font-rajdhani">{stat.label}</div>
                </GlassCard>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nossa Equipe Section */}
      <motion.section 
        className="section-padding bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title text-df-black">Nossa Equipe</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A Digital Fusion nasceu da união de dois profissionais apaixonados por tecnologia e inovação. Nossa história começou com um propósito claro: transformar ideias em soluções digitais extraordinárias que geram resultados tangíveis para nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg animate-on-scroll flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
            >
              <h3 className="text-2xl font-bold mb-2 text-df-blue">Sergio Costa</h3>
              <p className="text-gray-700 mb-2 text-center">
                Desenvolvedor web formado pela Universidade Pitágoras Anhanguera Unopar, com mais de 3 anos de experiência em desenvolvimento de aplicações web. Sua trajetória inclui atuação em empresas multinacionais como a Ternium, onde aperfeiçoou suas habilidades em desenvolvimento de soluções escaláveis e robustas.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg animate-on-scroll flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
            >
              <h3 className="text-2xl font-bold mb-2 text-df-blue">Rebeca Costa</h3>
              <p className="text-gray-700 mb-2 text-center">
                Arquiteta formada pela Universidade Federal Fluminense (UFF) e Engenheira de Software pela Universidade Descomplica Faculdade. Sua formação multidisciplinar e vasta experiência em design gráfico e desenvolvimento web trazem uma perspectiva única para nossos projetos, unindo estética e funcionalidade.
              </p>
            </motion.div>
          </div>
          <motion.div 
            className="max-w-3xl mx-auto mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-lg text-gray-700 mb-2">
              Nossa combinação única de expertise técnica e visão criativa nos permite desenvolver soluções que não apenas funcionam perfeitamente, mas também impressionam visualmente.
            </p>
            <p className="text-lg text-gray-700">
              Ao longo dos anos, consolidamos nossa posição como referência em desenvolvimento digital, atendendo mais de 100 clientes em diversos segmentos.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section - White background, dark text */}
      <motion.section 
        className="section-padding"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title text-df-black">Nossa História</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Conheça a trajetória da Digital Fusion e como nos tornamos referência em soluções digitais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Fundação', description: 'A Digital Fusion nasceu em 2015 com o objetivo de transformar negócios por meio da tecnologia.' },
              { title: 'Crescimento', description: 'Expandimos nossa equipe e portfólio, atendendo clientes de diversos setores.' },
              { title: 'Inovação', description: 'Estamos sempre em busca de novas soluções e tendências para entregar o melhor resultado.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg animate-on-scroll"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
              >
                <div className="w-12 h-12 rounded-full bg-df-blue text-white flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-df-black">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Missão e Visão Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent">
                Nossa Missão
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Democratizar a inovação digital, tornando tecnologias avançadas acessíveis para empresas de todos os portes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full" variant="blue" glow="subtle">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-neon-cyan mr-4" />
                  <h3 className="text-2xl font-bold text-white font-orbitron">Missão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Transformar ideias inovadoras em soluções digitais extraordinárias, 
                  impulsionando o crescimento e sucesso dos nossos clientes através de 
                  tecnologia de ponta e design excepcional.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full" variant="purple" glow="subtle">
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-cyber-purple mr-4" />
                  <h3 className="text-2xl font-bold text-white font-orbitron">Visão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Ser reconhecida como a principal referência em inovação digital, 
                  criando um futuro onde a tecnologia potencializa o potencial humano 
                  e empresarial de forma sustentável e inclusiva.
                </p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-cyber-purple via-neon-cyan to-cyber-purple bg-clip-text text-transparent">
                Nossos Valores
              </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Inovação",
                description: "Buscamos constantemente novas tecnologias e abordagens para criar soluções que superem expectativas."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Colaboração",
                description: "Trabalhamos em parceria com nossos clientes, construindo soluções que refletem suas necessidades únicas."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excelência",
                description: "Comprometemo-nos com a mais alta qualidade em cada projeto, garantindo resultados excepcionais."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center group hover:scale-105 transition-all duration-300" variant="cyan" glow="subtle">
                  <div className="flex justify-center mb-4 text-neon-cyan group-hover:text-cyber-purple transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 font-orbitron">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent">
                Nossa Equipe
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Profissionais apaixonados por tecnologia e inovação, unidos pela missão de criar soluções extraordinárias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sérgio Silva",
                role: "CEO & Founder",
                specialties: ["Estratégia Digital", "Liderança", "Inovação"],
                description: "Visionário em tecnologia com mais de 8 anos transformando ideias em realidade digital."
              },
              {
                name: "Ana Costa",
                role: "CTO",
                specialties: ["Arquitetura", "Cloud", "DevOps"],
                description: "Especialista em arquiteturas escaláveis e tecnologias de ponta para máxima performance."
              },
              {
                name: "Rafael Santos",
                role: "Lead Developer",
                specialties: ["React", "Node.js", "TypeScript"],
                description: "Desenvolvedor fullstack apaixonado por criar experiências web incríveis e funcionais."
              },
              {
                name: "Marina Lopez",
                role: "UI/UX Designer",
                specialties: ["Design Systems", "Figma", "Prototipagem"],
                description: "Criadora de interfaces intuitivas que encantam usuários e maximizam conversões."
              },
              {
                name: "Carlos Mendes",
                role: "DevOps Engineer",
                specialties: ["AWS", "Docker", "CI/CD"],
                description: "Especialista em infraestrutura moderna para aplicações robustas e escaláveis."
              },
              {
                name: "Juliana Rocha",
                role: "Digital Marketing",
                specialties: ["SEO", "Analytics", "Growth"],
                description: "Estrategista digital focada em gerar resultados reais e crescimento sustentável."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 group hover:scale-105 transition-all duration-300" variant="blue" glow="subtle">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan to-cyber-purple p-0.5 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-2xl font-bold text-white font-orbitron">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-1 font-orbitron text-center">{member.name}</h4>
                  <p className="text-neon-cyan text-sm font-bold mb-3 text-center">{member.role}</p>
                  
                  {/* Especialidades */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyber-purple/20 border border-cyber-purple/30 rounded text-xs text-cyber-purple"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 text-sm text-center leading-relaxed">{member.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <GlassCard className="p-12" variant="purple" glow="medium">
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-6">
                <span className="bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan bg-clip-text text-transparent">
                  Pronto para Transformar seu Negócio?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos acelerar seu crescimento digital 
                com soluções inovadoras e personalizadas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton
                  variant="electric"
                  glow="subtle"
                  className="px-8 py-4"
                  onClick={() => window.location.href = '/contact'}
                >
                  <span className="flex items-center gap-2">
                    Fale com Nossa Equipe
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </NeonButton>
                
                <NeonButton
                  variant="plasma"
                  glow="subtle"
                  className="px-8 py-4"
                  onClick={() => window.location.href = '/portfolio'}
                >
                  Ver Nosso Portfolio
                </NeonButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
