import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '../hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '../lib/analytics-events';

const Contact = () => {
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  
  const handleSubmit = async (e: React.FormEvent) => {
    // Não previne o comportamento padrão para permitir o envio do formulário
    toast({
      title: "Enviando mensagem...",
      description: "Por favor, aguarde enquanto processamos sua mensagem.",
      duration: 3000,
    });

    // Rastreia o envio do formulário
    trackEvent({
      action: ANALYTICS_EVENTS.CONTACT.SUBMIT,
      category: 'Contact Form',
      label: 'Form Submit'
    });
  };

  const handleSocialClick = (platform: string) => {
    trackEvent({
      action: ANALYTICS_EVENTS.NAVIGATION.EXTERNAL_LINK,
      category: 'Social Media',
      label: platform
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-df-black text-white py-20 md:py-32 relative">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1920&auto=format&fit=crop"
            alt="Contato Digital Fusion"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vamos Criar Algo Incrível Juntos?
            </h1>
            <p className="text-xl text-gray-300">
              Nossa equipe está pronta para transformar suas ideias em realidade digital
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 animate-on-scroll">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
                <form
                  action="https://formsubmit.co/contato@digitalfusion.com.br"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_next" value="https://digitalfusion.com.br/contact" />
                  <input type="hidden" name="_subject" value="Novo contato pelo site" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Assunto da mensagem"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="bg-df-blue text-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:contato@digitalfusion.com.br" className="hover:text-df-cyan transition-colors">
                        contato@digitalfusion.com.br
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">WhatsApp</h3>
                      <a href="tel:+5521976958970" className="hover:text-df-cyan transition-colors">
                        (21) 9 7695-8970
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Horário de Atendimento</h3>
                      <p>Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Redes Sociais</h2>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://wa.me/5521976958970"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-df-blue hover:text-df-cyan transition-all duration-300 transform hover:scale-110"
                    title="Fale conosco no WhatsApp"
                    onClick={() => handleSocialClick('WhatsApp')}
                  >
                    <Icon icon="logos:whatsapp-icon" width="32" height="32" />
                  </a>
                  <a 
                    href="https://www.instagram.com/somosdigitalfusion/?utm_source=ig_web_button_share_sheet"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-df-blue hover:text-df-cyan transition-all duration-300 transform hover:scale-110"
                    title="Siga-nos no Instagram"
                    onClick={() => handleSocialClick('Instagram')}
                  >
                    <Icon icon="skill-icons:instagram" width="32" height="32" />
                  </a>
                  <a 
                    href="https://www.facebook.com/somosdigitalfusion"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-df-blue hover:text-df-cyan transition-all duration-300 transform hover:scale-110"
                    title="Curta nossa página no Facebook"
                    onClick={() => handleSocialClick('Facebook')}
                  >
                    <Icon icon="logos:facebook" width="32" height="32" />
                  </a>
                  <a 
                    href="https://youtube.com/digitalfusion_oficial"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-df-blue hover:text-df-cyan transition-all duration-300 transform hover:scale-110"
                    title="Inscreva-se no nosso canal"
                    onClick={() => handleSocialClick('YouTube')}
                  >
                    <Icon icon="logos:youtube-icon" width="32" height="32" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="section-padding bg-df-gray">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre como trabalhar conosco
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Como iniciar um projeto com a Digital Fusion?',
                answer: 'Entre em contato conosco pelo formulário, email ou telefone. Agendaremos uma reunião para entender suas necessidades e elaborar uma proposta personalizada.'
              },
              {
                question: 'Quanto tempo leva para receber um orçamento?',
                answer: 'Normalmente, enviamos uma proposta inicial em até 48 horas após nossa primeira conversa, dependendo da complexidade do projeto.'
              },
              {
                question: 'Vocês atendem projetos fora do Rio de Janeiro?',
                answer: 'Sim! Atendemos clientes em todo o Brasil e também no exterior. Todas as reuniões podem ser realizadas remotamente.'
              },
              {
                question: 'Como funciona o suporte técnico após a entrega?',
                answer: 'Oferecemos planos de suporte e manutenção mensal que incluem atualizações, correções e pequenas melhorias para manter seu projeto sempre atualizado.'
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg animate-on-scroll"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-primary animate-on-scroll">
              <a href="#top" className="flex items-center">
                <span className="mr-2">Fale Conosco Agora</span>
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
