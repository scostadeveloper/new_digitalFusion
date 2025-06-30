import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Zap, ArrowUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer 
      id="footer"
      className={`relative border-t mt-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800 border-cyan-400/20' 
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 border-blue-400/30'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent'
            : 'bg-gradient-to-b from-blue-500/5 via-transparent to-transparent'
        }`} />
        <div className={`absolute inset-0 opacity-30 ${
          theme === 'dark' ? 'opacity-20' : 'opacity-10'
        }`}>
          <div className="grid-pattern animate-pulse-slow" />
        </div>
      </div>

      <div className="relative z-10 pt-16 xl:pt-20 2xl:pt-24 ultra-wide:pt-32 pb-8">
        <div className="container mx-auto px-4 xl:px-6 2xl:px-8 ultra-wide:px-12">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 2xl:gap-12 ultra-wide:gap-16 mb-16">
            {/* Company Info com Logo Vertical */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex flex-col items-center text-center">
                {/* Usando apenas LOGO VERTICAL DARK em ambos os temas */}
                <img 
                  src="/LOGO VERTICAL DARK.png"
                  alt="Digital Fusion"
                  className="h-20 md:h-24 xl:h-28 2xl:h-32 ultra-wide:h-40 w-auto object-contain mb-4"
                />
              </div>
              
              <p className={`leading-relaxed text-center xl:text-lg 2xl:text-xl ultra-wide:text-2xl transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Design inteligente. Código eficiente. Tráfego que converte.
              </p>
              
              <div className="flex space-x-4">
                <SocialLink 
                  href="https://www.facebook.com/somosdigitalfusion" 
                  icon={<Facebook size={20} />} 
                  label="Facebook" 
                />
                <SocialLink 
                  href="https://www.instagram.com/somosdigitalfusion/?utm_source=ig_web_button_share_sheet" 
                  icon={<Instagram size={20} />} 
                  label="Instagram" 
                />
                <SocialLink 
                  href="https://linkedin.com" 
                  icon={<Linkedin size={20} />} 
                  label="LinkedIn" 
                />
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg xl:text-xl 2xl:text-2xl ultra-wide:text-3xl font-semibold mb-6 font-heading transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/" theme={theme}>Home</FooterLink>
                <FooterLink to="/about" theme={theme}>Sobre Nós</FooterLink>
                <FooterLink to="/services" theme={theme}>Serviços</FooterLink>
                <FooterLink to="/portfolio" theme={theme}>Portfólio</FooterLink>
                <FooterLink to="/contact" theme={theme}>Contato</FooterLink>
              </ul>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg xl:text-xl 2xl:text-2xl ultra-wide:text-3xl font-semibold mb-6 font-heading transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Serviços
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/services#websites" theme={theme}>Desenvolvimento de Sites</FooterLink>
                <FooterLink to="/services#webapps" theme={theme}>Aplicativos Web</FooterLink>
                <FooterLink to="/services#landing" theme={theme}>Landing Pages</FooterLink>
                <FooterLink to="/services#traffic" theme={theme}>SEO & Marketing</FooterLink>
              </ul>
            </motion.div>
          
            
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg xl:text-xl 2xl:text-2xl ultra-wide:text-3xl font-semibold mb-6 font-heading transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <Mail size={20} className={`mr-3 mt-1 transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-cyan-400 group-hover:text-cyan-300' 
                      : 'text-blue-600 group-hover:text-blue-500'
                  }`} />
                  <a 
                    href="mailto:contato@digitalfusion.com.br"
                    className={`transition-colors duration-300 xl:text-lg 2xl:text-xl ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    contato@digitalfusion.com.br
                  </a>
                </li>
                <li className="flex items-start group">
                  <Phone size={20} className={`mr-3 mt-1 transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-cyan-400 group-hover:text-cyan-300' 
                      : 'text-blue-600 group-hover:text-blue-500'
                  }`} />
                  <a 
                    href="tel:+5521976958970"
                    className={`transition-colors duration-300 xl:text-lg 2xl:text-xl ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    +55 (21) 9 7695-8970
                  </a>
                </li>
                <li className="flex items-start group">
                  <MapPin size={20} className={`mr-3 mt-1 transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-cyan-400 group-hover:text-cyan-300' 
                      : 'text-blue-600 group-hover:text-blue-500'
                  }`} />
                  <span className={`xl:text-lg 2xl:text-xl transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Brasil
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4 mt-8"
          >
            <div className={`flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 rounded-xl backdrop-blur-sm border transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-400/20'
                : 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-400/20'
            }`}>
              <div className="mb-4 md:mb-0 md:mr-6">
                <h4 className={`text-xl font-bold mb-2 font-heading transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Fique por dentro das novidades
                </h4>
                <p className={`font-body transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Receba dicas, trends e insights sobre tecnologia e marketing digital
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className={`px-4 py-3 border rounded-lg text-sm font-body transition-colors duration-300 focus:outline-none focus:ring-2 min-w-[250px] ${
                    theme === 'dark'
                      ? 'bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 whitespace-nowrap ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-400/50'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
                  }`}
                >
                  Inscrever
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Glassmorphism Divider */}
          <div className="lg:col-span-4 my-12">
            <div className={`h-px bg-gradient-to-r transition-colors duration-300 ${
              theme === 'dark'
                ? 'from-transparent via-cyan-400/50 to-transparent'
                : 'from-transparent via-blue-500/50 to-transparent'
            }`}></div>
          </div>
          
          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col md:flex-row justify-between items-center"
          >
            <p className={`text-sm mb-4 md:mb-0 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              &copy; {currentYear} Digital Fusion. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                <Link 
                  to="/privacy" 
                  className={`transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-cyan-400' 
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  Política de Privacidade
                </Link>
                <Link 
                  to="/terms-of-use" 
                  className={`transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-cyan-400' 
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  Termos de Uso
                </Link>
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-10 w-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border-cyan-400/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30'
                    : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
                }`}
                aria-label="Voltar ao topo"
              >
                <ArrowUp size={20} className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social links
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  const { theme } = useTheme();
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`group relative h-12 w-12 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30'
          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-gray-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
      }`}
      aria-label={label}
    >
      <div className={`transition-colors duration-300 ${
        theme === 'dark' 
          ? 'text-gray-400 group-hover:text-cyan-400' 
          : 'text-gray-600 group-hover:text-blue-600'
      }`}>
        {icon}
      </div>
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-cyan-400/10 to-blue-500/10'
          : 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10'
      }`} />
    </motion.a>
  );
};

// Helper component for footer links
const FooterLink = ({ to, children, theme }: { to: string; children: React.ReactNode; theme: string }) => (
  <motion.li
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <Link 
      to={to} 
      className={`group relative transition-colors duration-300 xl:text-lg 2xl:text-xl ultra-wide:text-2xl ${
        theme === 'dark' 
          ? 'text-gray-400 hover:text-cyan-400' 
          : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
        theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'
      }`}></span>
    </Link>
  </motion.li>
);

export default Footer;
