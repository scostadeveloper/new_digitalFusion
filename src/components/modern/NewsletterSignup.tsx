import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const NewsletterSignup = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simular envio (implementar com EmailJS ou API real posteriormente)
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setMessage('Obrigado! Você receberá nossas novidades em breve.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Por favor, insira um email válido.');
      }

      // Reset após 3 segundos
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-black/20 border-white/10'
          : 'bg-white/80 border-gray-200/50'
      }`}
    >
      <div className="text-center mb-6">
        <div
          className={`inline-flex p-3 rounded-full mb-4 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
              : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
          }`}
        >
          <Mail
            className={`w-6 h-6 ${
              theme === 'dark' ? 'text-neon-cyan' : 'text-blue-600'
            }`}
          />
        </div>

        <h3
          className={`text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Fique por Dentro
        </h3>

        <p
          className={`text-base ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Receba dicas, trends e novidades do mundo digital
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="seu@email.com"
            disabled={status === 'loading'}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
              theme === 'dark'
                ? 'bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:ring-cyan-400/50 focus:border-cyan-400'
                : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-400/50 focus:border-blue-400'
            } ${status === 'error' ? 'border-red-400' : ''} ${status === 'success' ? 'border-green-400' : ''}`}
          />

          {status === 'loading' && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className={`w-5 h-5 border-2 border-t-transparent rounded-full ${
                  theme === 'dark' ? 'border-cyan-400' : 'border-blue-400'
                }`}
              />
            </div>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading' || !email}
          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black hover:shadow-lg hover:shadow-cyan-400/25'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-400/25'
          }`}
        >
          {status === 'loading' ? 'Enviando...' : 'Inscrever-se'}
        </motion.button>
      </form>

      {/* Status Message */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
            status === 'success'
              ? theme === 'dark'
                ? 'bg-green-500/20 text-green-300'
                : 'bg-green-100 text-green-800'
              : status === 'error'
                ? theme === 'dark'
                  ? 'bg-red-500/20 text-red-300'
                  : 'bg-red-100 text-red-800'
                : ''
          }`}
        >
          {status === 'success' ? (
            <Check className="w-4 h-4" />
          ) : status === 'error' ? (
            <AlertCircle className="w-4 h-4" />
          ) : null}
          {message}
        </motion.div>
      )}
    </motion.div>
  );
};

export default NewsletterSignup;
