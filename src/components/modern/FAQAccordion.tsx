import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Disclosure } from '@headlessui/react';
import { GlassCard } from './GlassCard';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
}) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={`space-y-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((faq, index) => (
        <motion.div key={index} variants={itemVariants} className="group">
          <GlassCard
            variant={theme === 'dark' ? 'dark' : 'default'}
            className="overflow-hidden transition-all duration-300 group-hover:scale-[1.01]"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full p-6 lg:p-8 text-left focus:outline-none group/button">
                    {/* Left Content */}
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <motion.div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30'
                            : 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30'
                        }`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={`text-lg ${
                            theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                          }`}
                        >
                          {faq.icon || <HelpCircle className="w-5 h-5" />}
                        </div>
                      </motion.div>

                      {/* Question */}
                      <div className="flex-1">
                        {faq.category && (
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                              theme === 'dark'
                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                            }`}
                          >
                            {faq.category}
                          </div>
                        )}
                        <h3
                          className={`text-lg lg:text-xl font-semibold group-hover/button:text-transparent group-hover/button:bg-clip-text group-hover/button:bg-gradient-to-r transition-all duration-300 ${
                            theme === 'dark'
                              ? 'text-white group-hover/button:from-cyan-400 group-hover/button:to-blue-500'
                              : 'text-gray-900 group-hover/button:from-blue-600 group-hover/button:to-indigo-700'
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`ml-4 p-2 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-white/5 group-hover/button:bg-cyan-500/10'
                          : 'bg-gray-100/50 group-hover/button:bg-blue-500/10'
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors duration-300 ${
                          theme === 'dark'
                            ? 'text-gray-400 group-hover/button:text-cyan-400'
                            : 'text-gray-600 group-hover/button:text-blue-600'
                        }`}
                      />
                    </motion.div>
                  </Disclosure.Button>

                  <AnimatePresence>
                    {open && (
                      <Disclosure.Panel
                        as={motion.div}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="px-6 lg:px-8 pb-6 lg:pb-8"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {/* Separator Line */}
                          <div
                            className={`w-full h-px mb-6 ${
                              theme === 'dark'
                                ? 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent'
                                : 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent'
                            }`}
                          />

                          {/* Answer */}
                          <div className="ml-16">
                            <p
                              className={`text-base leading-relaxed ${
                                theme === 'dark'
                                  ? 'text-gray-300'
                                  : 'text-gray-600'
                              }`}
                            >
                              {faq.answer}
                            </p>

                            {/* Additional Info */}
                            <motion.div
                              className={`mt-4 p-4 rounded-lg ${
                                theme === 'dark'
                                  ? 'bg-cyan-500/5 border border-cyan-500/10'
                                  : 'bg-blue-500/5 border border-blue-500/10'
                              }`}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.3 }}
                            >
                              <p
                                className={`text-sm ${
                                  theme === 'dark'
                                    ? 'text-cyan-400'
                                    : 'text-blue-600'
                                }`}
                              >
                                💡 <strong>Dica:</strong> Ainda tem dúvidas?
                                Entre em contato conosco para uma consulta
                                personalizada!
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
};
