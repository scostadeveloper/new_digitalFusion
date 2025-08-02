import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechBackground } from '@/components/effects/TechBackground';
import {
  TypingAnimation,
  HeroTyping,
  SubtitleTyping,
} from '@/components/effects/TypingAnimation';
import { NeonButton } from '@/components/modern/NeonButton';
import { GlassCard } from '@/components/modern/GlassCard';
import {
  TechFloatingSymbols,
  FloatingShapes,
} from '@/components/effects/FloatingElements';
import { StatsCard } from '@/components/effects/CounterAnimation';
import {
  GlowEffect,
  ParallaxElement,
  MagneticButton,
} from '@/components/effects/VisualEffects';

export function ModernHero() {
  const heroTexts = [
    'Design Inteligente.',
    'Código Eficiente.',
    'Resultados que Impactam.',
  ];

  const stats = [
    {
      title: 'Projetos',
      value: 150,
      suffix: '+',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'Clientes',
      value: 80,
      suffix: '+',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Anos',
      value: 5,
      suffix: '+',
      icon: <ArrowRight className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <TechBackground intensity="medium" />
        <TechFloatingSymbols />
        <FloatingShapes />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-cyber-purple to-neon-cyan opacity-75 blur-sm animate-pulse-glow" />
              <span className="relative px-6 py-3 bg-black/80 backdrop-blur-sm border border-neon-cyan/30 rounded-lg text-sm font-bold tracking-widest uppercase text-neon-cyan">
                Inovação Digital
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <HeroTyping
                text={heroTexts}
                className="block text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              />
            </div>

            {/* Subtitle */}
            <SubtitleTyping
              text="Transformamos ideias em experiências digitais extraordinárias, impulsionando o crescimento exponencial do seu negócio através da tecnologia de ponta."
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <MagneticButton magnetStrength={0.2}>
                <NeonButton
                  asChild
                  variant="electric"
                  size="lg"
                  className="group"
                >
                  <Link to="/contact" className="flex items-center gap-3">
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </NeonButton>
              </MagneticButton>

              <MagneticButton magnetStrength={0.2}>
                <NeonButton asChild variant="ghost" size="lg">
                  <Link to="/portfolio">Conheça Nosso Trabalho</Link>
                </NeonButton>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right side - Interactive showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Interactive preview card */}
            <ParallaxElement speed={0.3}>
              <GlowEffect color="cyan" intensity="high" hover>
                <GlassCard className="p-8 border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-500 group">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-2 bg-gradient-to-r from-neon-cyan to-cyber-purple rounded-full animate-pulse-glow" />
                      <div className="h-2 bg-gray-700 rounded-full w-3/4" />
                      <div className="h-2 bg-gray-700 rounded-full w-1/2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-gradient-to-br from-cyber-purple/20 to-neon-cyan/20 rounded-lg border border-gray-700 flex items-center justify-center">
                        <TypingAnimation
                          text="&lt;/&gt;"
                          className="text-neon-cyan font-mono text-lg"
                          duration={100}
                          infinite
                        />
                      </div>
                      <div className="h-20 bg-gradient-to-br from-neon-green/20 to-neon-pink/20 rounded-lg border border-gray-700 flex items-center justify-center">
                        <TypingAnimation
                          text="{ }"
                          className="text-neon-green font-mono text-lg"
                          duration={150}
                          infinite
                          delay={500}
                        />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </GlowEffect>
            </ParallaxElement>

            {/* Stats cards */}
            <ParallaxElement speed={0.2} direction="up">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
                  >
                    <StatsCard
                      title={stat.title}
                      value={stat.value}
                      suffix={stat.suffix}
                      icon={stat.icon}
                      variant="glass"
                      className="text-center"
                    />
                  </motion.div>
                ))}
              </div>
            </ParallaxElement>

            {/* Technology badges */}
            <ParallaxElement speed={0.1}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {['React', 'Node.js', 'TypeScript', 'Next.js', 'AI'].map(
                  (tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3.2 + index * 0.1, type: 'spring' }}
                    >
                      <GlowEffect color="purple" intensity="low">
                        <div className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-cyber-purple/40 rounded-full text-sm font-medium text-cyber-purple hover:text-white hover:border-cyber-purple transition-all duration-300">
                          {tech}
                        </div>
                      </GlowEffect>
                    </motion.div>
                  )
                )}
              </motion.div>
            </ParallaxElement>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ModernHero;
