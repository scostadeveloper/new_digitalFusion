import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const SocialProof = () => {
  const { theme } = useTheme();

  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'Tech Startup',
      text: 'A Digital Fusion transformou nossa presença online. O site desenvolvido superou todas as expectativas e nosso tráfego aumentou 300%.',
      rating: 5,
    },
    {
      name: 'Ana Paula',
      company: 'E-commerce Fashion',
      text: 'Profissionais extremamente competentes. O design do nosso e-commerce ficou incrível e as vendas dispararam!',
      rating: 5,
    },
    {
      name: 'Roberto Lima',
      company: 'Clínica Médica',
      text: 'Excelente trabalho no desenvolvimento do nosso sistema de agendamentos. Muito profissionais e cumpriram todos os prazos.',
      rating: 5,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className={`relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-black/20 border-white/10 hover:border-cyan-400/30'
              : 'bg-white/80 border-gray-200/50 hover:border-blue-400/30'
          }`}
        >
          {/* Quote Icon */}
          <div
            className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}
          >
            <Quote className="w-4 h-4 text-white" />
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, starIndex) => (
              <Star
                key={starIndex}
                className={`w-4 h-4 fill-current ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p
            className={`text-sm leading-relaxed mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            "{testimonial.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300'
                  : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600'
              }`}
            >
              {testimonial.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </div>
            <div>
              <div
                className={`font-semibold text-sm ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {testimonial.name}
              </div>
              <div
                className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {testimonial.company}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialProof;
