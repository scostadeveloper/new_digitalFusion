import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import ScrollNavigator from '@/components/modern/ScrollNavigator';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';

const Contact = () => {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentSection, setCurrentSection] = useState('hero');

  // Detectar seção atual baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'contact-form'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar posição inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Estilos de background baseados no tema
  const heroBackground =
    theme === 'dark'
      ? 'linear-gradient(135deg, #000000 0%, #001622 50%, #002433 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #E5F2FF 50%, #B8E0FF 100%)';

  const sectionBackground =
    theme === 'dark'
      ? 'radial-gradient(circle at center, rgba(110, 249, 245, 0.08) 0%, rgba(0, 0, 0, 0.95) 70%)'
      : 'radial-gradient(circle at center, rgba(0, 123, 255, 0.08) 0%, rgba(229, 242, 255, 0.9) 70%)';

  return (
    <div className="min-h-screen theme-bg theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: heroBackground }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
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
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
              }`}
            >
              Entre em Contato
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-body ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Pronto para transformar suas ideias em soluções digitais inovadoras?
              Nossa equipe está aqui para ajudar você a alcançar seus objetivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section 
        id="contact-form"
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: sectionBackground }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-black/20 border-white/10'
                    : 'bg-white/40 border-blue-200/30'
                }`}
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold mb-6 font-heading ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Envie uma mensagem
                </h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Mensagem enviada com sucesso!</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Erro ao enviar mensagem. Tente novamente.</span>
                  </motion.div>
                )}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-1 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium mb-1 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="phone" 
                      className={`block text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="subject" 
                      className={`block text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Assunto da mensagem"
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      required
                      className="w-full text-gray-700"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-[0_0_30px_rgba(110,249,245,0.5)]'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-6 font-heading ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Informações de Contato
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-blue-500/20 text-blue-600'
                        }`}
                      >
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold mb-1 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Email
                        </h4>
                        <p
                          className={`${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          contato@digitalfusion.com.br
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-blue-500/20 text-blue-600'
                        }`}
                      >
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold mb-1 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Telefone
                        </h4>
                        <p
                          className={`${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          (21) 97695-8970
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-blue-500/20 text-blue-600'
                        }`}
                      >
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold mb-1 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Localização
                        </h4>
                        <p
                          className={`${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          Rio de Janeiro, RJ, Brasil
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-blue-500/20 text-blue-600'
                        }`}
                      >
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold mb-1 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Horário de Atendimento
                        </h4>
                        <p
                          className={`${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          Segunda a Sexta: 8h às 18h
                        </p>
                      </div>
                    </div>

                    {/* Redes Sociais */}
                    <div className="pt-6 border-t border-gray-200/20">
                      <h4
                        className={`font-semibold mb-4 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Siga-nos nas Redes Sociais
                      </h4>
                      <div className="flex gap-4">
                        <motion.a
                          href="https://www.instagram.com/somosdigitalfusion?utm_source=ig_web_button_share_sheet&igsh=dTQ0NXphNzUzcmJn"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30'
                              : 'bg-pink-500/20 text-pink-600 hover:bg-pink-500/30'
                          }`}
                        >
                          <Instagram className="w-5 h-5" />
                        </motion.a>
                        
                        <motion.a
                          href="https://www.facebook.com/somosdigitalfusion"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                              : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30'
                          }`}
                        >
                          <Facebook className="w-5 h-5" />
                        </motion.a>
                        
                        <motion.a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30'
                              : 'bg-blue-600/20 text-blue-700 hover:bg-blue-600/30'
                          }`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-2xl backdrop-blur-md border cursor-pointer transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20'
                      : 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20'
                  }`}
                  onClick={() => window.open('https://wa.me/5521976958970?text=Olá! Gostaria de conhecer os serviços da Digital Fusion.', '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-1">
                        WhatsApp
                      </h4>
                      <p className="text-sm text-green-300">
                        Fale conosco agora mesmo!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Navigator */}
      <ScrollNavigator
        sections={['hero', 'contact-form']}
        currentSection={currentSection}
        onNavigate={(section) => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
};

export default Contact;
