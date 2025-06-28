import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Zap, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative bg-black border-t border-neon-cyan/20 mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 via-black to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="grid-pattern animate-pulse-slow" />
        </div>
      </div>

      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Zap className="w-8 h-8 text-neon-cyan" />
                  <div className="absolute inset-0 blur-sm bg-neon-cyan opacity-50" />
                </div>
                <h3 className="text-2xl font-bold font-orbitron">
                  <span className="text-neon-cyan">Digital</span>
                  <span className="text-cyber-purple">Fusion</span>
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
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
              <h4 className="text-lg font-semibold mb-6 text-neon-cyan font-rajdhani">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">Sobre Nós</FooterLink>
                <FooterLink to="/services">Serviços</FooterLink>
                <FooterLink to="/portfolio">Portfólio</FooterLink>
                <FooterLink to="/contact">Contato</FooterLink>
              </ul>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-neon-cyan font-rajdhani">
                Serviços
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/services#websites">Desenvolvimento de Sites</FooterLink>
                <FooterLink to="/services#webapps">Aplicativos Web</FooterLink>
                <FooterLink to="/services#landing">Landing Pages</FooterLink>
                <FooterLink to="/services#traffic">SEO & Marketing</FooterLink>
              </ul>
            </motion.div>
          
            
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-neon-cyan font-rajdhani">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <Mail size={20} className="mr-3 mt-1 text-cyber-purple group-hover:text-neon-cyan transition-colors duration-300" />
                  <a 
                    href="mailto:contato@digitalfusion.com.br"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    contato@digitalfusion.com.br
                  </a>
                </li>
                <li className="flex items-start group">
                  <Phone size={20} className="mr-3 mt-1 text-cyber-purple group-hover:text-neon-cyan transition-colors duration-300" />
                  <a 
                    href="tel:+5521976958970"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +55 (21) 9 7695-8970
                  </a>
                </li>
                <li className="flex items-start group">
                  <MapPin size={20} className="mr-3 mt-1 text-cyber-purple group-hover:text-neon-cyan transition-colors duration-300" />
                  <span className="text-gray-300">
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
            <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-gradient-to-r from-cyber-purple/10 to-neon-cyan/10 backdrop-blur-sm border border-neon-cyan/20">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold text-white mb-2 font-orbitron">
                  Fique por dentro das novidades
                </h4>
                <p className="text-gray-300">
                  Receba dicas, trends e insights sobre tecnologia e marketing digital
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-cyber-purple text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
                >
                  Inscrever
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Glassmorphism Divider */}
          <div className="lg:col-span-4 my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
          </div>
          
          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Digital Fusion. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link 
                  to="/privacy" 
                  className="hover:text-neon-cyan transition-colors duration-300"
                >
                  Política de Privacidade
                </Link>
                <Link 
                  to="/terms-of-use" 
                  className="hover:text-neon-cyan transition-colors duration-300"
                >
                  Termos de Uso
                </Link>
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-cyan/20 to-cyber-purple/20 backdrop-blur-sm border border-neon-cyan/30 flex items-center justify-center hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
                aria-label="Voltar ao topo"
              >
                <ArrowUp size={20} className="text-neon-cyan" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social links
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="group relative h-12 w-12 rounded-full bg-gradient-to-r from-cyber-purple/20 to-neon-cyan/20 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-300 hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30"
    aria-label={label}
  >
    <div className="text-gray-400 group-hover:text-neon-cyan transition-colors duration-300">
      {icon}
    </div>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.a>
);

// Helper component for footer links
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <motion.li
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <Link 
      to={to} 
      className="group relative text-gray-400 hover:text-white transition-colors duration-300"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </motion.li>
);

export default Footer;
