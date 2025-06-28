import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section - Dark background, light text */}
      <motion.section 
        className="bg-df-black text-white py-20 md:py-32 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Banner Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop"
            alt="Equipe Digital Fusion"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center animate-fade-in"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Sobre a Digital Fusion
            </h1>
            <p className="text-xl text-gray-300">
              Excelência em desenvolvimento digital desde 2015
            </p>
          </motion.div>
        </div>
      </motion.section>

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

      {/* Mission, Vision & Values - Light gray background, dark text */}
      <motion.section 
        className="section-padding bg-df-gray"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title text-df-black">Missão, Visão e Valores</h2>
            <p className="section-subtitle text-gray-700 max-w-2xl mx-auto">
              Nossos princípios fundamentais que guiam cada projeto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Missão',
                description: 'Desenvolver soluções digitais inovadoras que transformam negócios através de design inteligente, código eficiente e estratégias de tráfego que convertem. Nosso compromisso é criar experiências digitais que geram resultados mensuráveis.'
              },
              {
                title: 'Visão',
                description: 'Ser reconhecida como referência nacional em transformação digital, estabelecendo novos padrões de qualidade e inovação no mercado. Queremos ser a escolha natural para empresas que buscam excelência em soluções digitais.'
              },
              {
                title: 'Valores',
                description: 'Inovação constante, excelência técnica, transparência, compromisso com resultados e foco no cliente. Acreditamos que o sucesso dos nossos clientes é o nosso sucesso, e isso se reflete em cada linha de código que escrevemos.'
              }
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

      {/* Our Differentials - Cyan background, white text */}
      <motion.section 
        className="section-padding bg-df-cyan text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Nossos Diferenciais</h2>
            <p className="section-subtitle text-white/80 max-w-2xl mx-auto">
              Por que escolher a Digital Fusion para seu projeto digital
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Equipe Especializada', description: 'Profissionais experientes e apaixonados por tecnologia.' },
              { title: 'Atendimento Personalizado', description: 'Soluções sob medida para cada cliente.' },
              { title: 'Resultados Comprovados', description: 'Projetos entregues com excelência e satisfação dos clientes.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg animate-on-scroll"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - White background, dark text */}
      <motion.section 
        className="section-padding"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="section-title text-df-black">Vamos Trabalhar Juntos?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos prontos para transformar suas ideias em soluções digitais inovadoras
              que impulsionam seu negócio.
            </p>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 24px rgba(0,123,255,0.10)' }}
              className="inline-block"
            >
              <Button asChild className="btn-primary">
                <Link to="/contact">Fale com Nossa Equipe</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default About;
