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
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? `${
                theme === 'dark'
                  ? 'bg-black/80 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-400/10'
                  : 'bg-white/80 backdrop-blur-md border-b border-blue-400/20 shadow-lg shadow-blue-400/10'
              }`
            : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 xl:px-6 2xl:px-8 ultra-wide:px-12 flex justify-between items-center py-4 xl:py-6 2xl:py-8 ultra-wide:py-10">
        {/* Logo - Responsive para telas grandes - Updated */}
        <Link to="/" className="flex items-center z-10 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            {/* Tema LIGHT = logo DARK (contraste), Tema DARK = logo LIGHT (contraste) */}
            <img
              src={
                theme === 'light'
                  ? '/LOGO HORIZONTAL DARK.png'
                  : '/LOGO HORIZONTAL LIGHT.png'
              }
              alt="Digital Fusion"
              className="h-8 md:h-10 xl:h-12 2xl:h-16 ultra-wide:h-20 w-auto object-contain transition-all duration-300"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation - Responsivo para telas grandes */}
        <nav className="hidden md:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10 ultra-wide:space-x-12">
          <NavLinks isActive={isActive} theme={theme} />
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className={`px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 ultra-wide:px-12 ultra-wide:py-6 font-bold rounded-lg xl:rounded-xl 2xl:rounded-2xl transition-all duration-300 text-sm xl:text-base 2xl:text-lg ultra-wide:text-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-400/50'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/50'
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
              ? 'text-cyan-400 hover:text-blue-400'
              : 'text-blue-600 hover:text-blue-700'
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
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
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
  mobile = false,
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
              ${mobile ? 'text-2xl py-2' : 'text-sm xl:text-base 2xl:text-lg ultra-wide:text-xl'}
              ${
                isActive(item.path)
                  ? theme === 'dark'
                    ? 'text-cyan-400'
                    : 'text-blue-600'
                  : theme === 'dark'
                    ? 'text-white hover:text-cyan-400'
                    : 'text-gray-700 hover:text-blue-600'
              }
            `}
          >
            {item.name}
            <span
              className={`
              absolute bottom-0 left-0 h-0.5 transition-all duration-300
              ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'}
              ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}
            `}
            />
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Navbar;
