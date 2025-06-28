import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Check if the current path matches the nav item
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-neon-cyan/20 shadow-lg shadow-neon-cyan/10' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <Zap className="w-8 h-8 text-neon-cyan group-hover:text-cyber-purple transition-colors duration-300" />
              <div className="absolute inset-0 blur-sm bg-neon-cyan group-hover:bg-cyber-purple opacity-50 transition-all duration-300" />
            </div>
            <span className="text-2xl font-bold font-orbitron">
              <span className="text-neon-cyan group-hover:text-white transition-colors duration-300">Digital</span>
              <span className="text-cyber-purple group-hover:text-neon-cyan transition-colors duration-300">Fusion</span>
            </span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isActive={isActive} />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-cyber-purple text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
            >
              Contato
            </Link>
          </motion.div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden z-10 text-neon-cyan hover:text-cyber-purple transition-colors duration-300"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-0 flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col items-center space-y-8">
                <NavLinks isActive={isActive} mobile />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-cyber-purple text-black font-bold rounded-lg"
                  >
                    Contato
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// NavLinks Component
const NavLinks = ({ isActive, mobile = false }: { isActive: (path: string) => boolean; mobile?: boolean }) => {
  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <motion.div
          key={item.path}
          initial={{ opacity: 0, y: mobile ? 20 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: mobile ? index * 0.1 : 0 }}
        >
          <Link
            to={item.path}
            className={`
              relative font-medium transition-all duration-300 group
              ${mobile ? 'text-2xl py-2' : 'text-base'}
              ${isActive(item.path) 
                ? 'text-neon-cyan' 
                : 'text-white hover:text-neon-cyan'
              }
            `}
          >
            {item.name}
            <span className={`
              absolute bottom-0 left-0 h-0.5 bg-neon-cyan transition-all duration-300
              ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}
            `} />
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Navbar;
