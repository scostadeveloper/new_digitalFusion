import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import ThemeToggle from './modern/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

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
          ? `${theme === 'dark' 
              ? 'bg-black/80 backdrop-blur-md border-b border-neon-cyan/20 shadow-lg shadow-neon-cyan/10' 
              : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-gray-500/10'
            }` 
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
              <Zap className={`w-8 h-8 transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-neon-cyan group-hover:text-cyber-purple' 
                  : 'text-blue-600 group-hover:text-purple-600'
              }`} />
              <div className={`absolute inset-0 blur-sm opacity-50 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-neon-cyan group-hover:bg-cyber-purple'
                  : 'bg-blue-600 group-hover:bg-purple-600'
              }`} />
            </div>
            <span className="text-2xl font-bold font-orbitron">
              <span className={`transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-neon-cyan group-hover:text-white'
                  : 'text-blue-600 group-hover:text-gray-800'
              }`}>Digital</span>
              <span className={`transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-cyber-purple group-hover:text-neon-cyan'
                  : 'text-purple-600 group-hover:text-blue-600'
              }`}>Fusion</span>
            </span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks isActive={isActive} theme={theme} />
          <ThemeToggle />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact"
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-neon-cyan to-cyber-purple text-black hover:shadow-lg hover:shadow-neon-cyan/50'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
              }`}
            >
              Contato
            </Link>
          </motion.div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`md:hidden z-10 transition-colors duration-300 ${
            theme === 'dark'
              ? 'text-neon-cyan hover:text-cyber-purple'
              : 'text-blue-600 hover:text-purple-600'
          }`}
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
              className={`fixed inset-0 z-0 flex flex-col items-center justify-center backdrop-blur-md ${
                theme === 'dark' ? 'bg-black/95' : 'bg-white/95'
              }`}
            >
              <nav className="flex flex-col items-center space-y-8">
                <NavLinks isActive={isActive} theme={theme} mobile />
                <ThemeToggle />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className={`px-8 py-4 font-bold rounded-lg ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-neon-cyan to-cyber-purple text-black'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}
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
const NavLinks = ({ 
  isActive, 
  theme, 
  mobile = false 
}: { 
  isActive: (path: string) => boolean; 
  theme: 'light' | 'dark';
  mobile?: boolean; 
}) => {
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
                ? (theme === 'dark' ? 'text-neon-cyan' : 'text-blue-600')
                : (theme === 'dark' 
                    ? 'text-white hover:text-neon-cyan' 
                    : 'text-gray-700 hover:text-blue-600'
                  )
              }
            `}
          >
            {item.name}
            <span className={`
              absolute bottom-0 left-0 h-0.5 transition-all duration-300
              ${theme === 'dark' ? 'bg-neon-cyan' : 'bg-blue-600'}
              ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}
            `} />
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Navbar;
