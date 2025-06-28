
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

/**
 * Componente CTA (Call to Action) de contato
 * Usado para incentivar o visitante a entrar em contato ou explorar o portfólio
 */
const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-df-blue to-df-cyan text-white py-16 md:py-20">
      <div className="container-custom text-center px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          Pronto para transformar suas ideias em realidade digital?
        </h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Vamos trabalhar juntos para criar soluções digitais que impulsionam o crescimento do seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          {/* Botão primário de contato - com cor branca para contraste */}
          <Button asChild size="lg" className="bg-white text-df-blue hover:bg-gray-100 transition-colors shadow-md">
            <Link to="/contact">Fale Conosco</Link>
          </Button>
          
          {/* Botão secundário para portfólio - com borda branca */}
          <Button asChild size="lg" className="bg-white text-df-blue hover:bg-gray-100 transition-colors shadow-md">
            <Link to="/portfolio">Ver Nosso Portfólio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
