import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-df-black text-white py-20 md:py-32 relative">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1920&auto=format&fit=crop"
            alt="Política de Privacidade Digital Fusion"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-300">
              Seu direito à privacidade é nossa prioridade
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2>Introdução</h2>
              <p>
                A Digital Fusion está comprometida em proteger a privacidade e
                os dados pessoais de nossos usuários. Esta Política de
                Privacidade descreve como coletamos, usamos, armazenamos e
                protegemos suas informações ao utilizar nosso site e serviços.
              </p>
            </div>

            <div className="mb-12">
              <h2>Coleta de Dados</h2>
              <p>Coletamos informações quando você:</p>
              <ul>
                <li>Preenche formulários em nosso site</li>
                <li>Se inscreve em nossa newsletter</li>
                <li>Entra em contato conosco</li>
                <li>Utiliza nossos serviços</li>
              </ul>
              <p>As informações coletadas podem incluir:</p>
              <ul>
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Informações da empresa (quando aplicável)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>Uso dos Dados</h2>
              <p>Utilizamos suas informações para:</p>
              <ul>
                <li>Fornecer nossos serviços</li>
                <li>Responder a suas solicitações</li>
                <li>Enviar comunicações relevantes</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>Cookies e Tecnologias Similares</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência em nosso site. Você pode controlar o uso de cookies
                através das configurações do seu navegador.
              </p>
            </div>

            <div className="mb-12">
              <h2>Compartilhamento de Dados</h2>
              <p>
                Não compartilhamos suas informações pessoais com terceiros,
                exceto:
              </p>
              <ul>
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>
                  Com parceiros de confiança que nos auxiliam na prestação de
                  serviços
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais
                para proteger suas informações contra:
              </p>
              <ul>
                <li>Acesso não autorizado</li>
                <li>Alteração indevida</li>
                <li>Divulgação ou destruição não autorizada</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>Seus Direitos</h2>
              <p>Você tem direito a:</p>
              <ul>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar seu consentimento</li>
                <li>Receber seus dados em formato estruturado</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta
                Política de Privacidade, entre em contato:
              </p>
              <ul>
                <li>E-mail: privacidade@digitalfusion.com.br</li>
                <li>Telefone: (21) 9 7695-8970</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2>Atualizações da Política</h2>
              <p>
                Esta política pode ser atualizada periodicamente. Recomendamos
                que você revise esta página regularmente para se manter
                informado sobre nossas práticas de privacidade.
              </p>
              <p>Última atualização: Janeiro de 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-df-gray">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="section-title">Ainda tem dúvidas?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe está pronta para esclarecer qualquer questão sobre
              privacidade e proteção de dados.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default PrivacyPolicy;
