import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';

const TermsOfUse = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-df-black text-white py-20 md:py-32 relative">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
            alt="Termos de Uso Digital Fusion"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-300">
              Condições gerais para uso de nossos serviços
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site e os serviços da Digital Fusion,
                você concorda com estes Termos de Uso e todas as condições aqui
                estabelecidas. Se você não concordar com algum aspecto destes
                termos, recomendamos que não utilize nossos serviços.
              </p>
            </div>

            <div className="mb-12">
              <h2>2. Serviços Oferecidos</h2>
              <p>
                A Digital Fusion oferece serviços de desenvolvimento web,
                incluindo:
              </p>
              <ul>
                <li>Desenvolvimento de sites e aplicações web</li>
                <li>Criação de landing pages</li>
                <li>Desenvolvimento de aplicativos mobile</li>
                <li>Consultoria em SEO</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>3. Uso do Site</h2>
              <p>Ao utilizar nosso site, você concorda em:</p>
              <ul>
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>
                  Não utilizar o site para fins ilegais ou não autorizados
                </li>
                <li>Não interferir no funcionamento do site</li>
                <li>Respeitar todos os direitos de propriedade intelectual</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo presente no site da Digital Fusion, incluindo
                mas não se limitando a textos, imagens, logos, códigos, layouts
                e design, são de propriedade exclusiva da empresa ou de seus
                licenciadores. É proibida a reprodução, distribuição ou
                modificação sem autorização prévia.
              </p>
            </div>

            <div className="mb-12">
              <h2>5. Responsabilidades</h2>
              <p>A Digital Fusion se compromete a:</p>
              <ul>
                <li>Fornecer serviços com qualidade e profissionalismo</li>
                <li>Manter a confidencialidade das informações dos clientes</li>
                <li>Cumprir os prazos acordados em contrato</li>
                <li>
                  Oferecer suporte técnico conforme estabelecido em contrato
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>6. Limitação de Responsabilidade</h2>
              <p>A Digital Fusion não se responsabiliza por:</p>
              <ul>
                <li>Uso indevido dos serviços por parte do cliente</li>
                <li>Problemas técnicos fora de nosso controle</li>
                <li>Conteúdo inserido pelo cliente em suas plataformas</li>
                <li>
                  Perdas ou danos indiretos decorrentes do uso dos serviços
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>7. Pagamentos e Reembolsos</h2>
              <p>
                As condições de pagamento e política de reembolso serão
                estabelecidas em contrato específico para cada projeto ou
                serviço contratado. Em geral:
              </p>
              <ul>
                <li>
                  Os pagamentos devem ser realizados conforme cronograma
                  acordado
                </li>
                <li>
                  Reembolsos serão avaliados caso a caso, conforme política
                  específica
                </li>
                <li>
                  Atrasos nos pagamentos podem resultar em suspensão dos
                  serviços
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>8. Cancelamento de Serviços</h2>
              <p>
                O cancelamento de serviços deve seguir as condições
                estabelecidas em contrato, observando:
              </p>
              <ul>
                <li>Prazos de notificação prévia</li>
                <li>Conclusão de etapas em andamento</li>
                <li>Quitação de valores pendentes</li>
                <li>Entrega de materiais e documentação</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>9. Alterações nos Termos</h2>
              <p>
                A Digital Fusion se reserva o direito de modificar estes termos
                a qualquer momento. Alterações significativas serão comunicadas
                aos usuários através de nossos canais oficiais.
              </p>
            </div>

            <div className="mb-12">
              <h2>10. Contato</h2>
              <p>
                Para esclarecimentos sobre estes Termos de Uso, entre em
                contato:
              </p>
              <ul>
                <li>E-mail: contato@digitalfusion.com.br</li>
                <li>Telefone: (21) 9 7695-8970</li>
              </ul>
            </div>

            <div className="mb-12">
              <p className="text-sm text-gray-600">
                Última atualização: Janeiro de 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-df-gray">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="section-title">Precisa de Ajuda?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe está disponível para esclarecer qualquer dúvida sobre
              nossos termos e condições.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/contact">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default TermsOfUse;
