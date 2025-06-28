import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Layout, Search } from 'lucide-react';
import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { GlassCard } from '@/components/modern/GlassCard';
import { NeonButton } from '@/components/modern/NeonButton';
import { GlowEffect, TiltCard } from '@/components/effects/VisualEffects';
import { CounterAnimation } from '@/components/effects/CounterAnimation';
import { cn } from '@/lib/utils';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  stats?: {
    label: string;
    value: number;
    suffix?: string;
  };
  features?: string[];
}

interface ModernServicesProps {
  services: ServiceData[];
  className?: string;
}

export function ModernServices({ services, className = '' }: ModernServicesProps) {
  return (
    <SectionWrapper
      title="Nossos Serviços"
      subtitle="Soluções Digitais"
      description="Oferecemos uma gama completa de serviços digitais para transformar sua presença online e impulsionar seus resultados"
      variant="gradient"
      backgroundPattern
      className={className}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="group"
    >
      <TiltCard maxTilt={8} glare>
        <GlowEffect 
          color={isEven ? 'cyan' : 'purple'} 
          intensity="medium" 
          hover
        >
          <GlassCard className="h-full p-8 border-glass hover:border-neon-cyan/50 transition-all duration-500">
            <div className="space-y-6">
              {/* Icon and Title */}
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-cyber-purple/20 border border-neon-cyan/30 flex items-center justify-center"
                >
                  <div className="text-neon-cyan text-2xl">
                    {service.icon}
                  </div>
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {service.title}
                  </h3>
                  {service.stats && (
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-400">{service.stats.label}:</span>
                      <CounterAnimation
                        value={service.stats.value}
                        suffix={service.stats.suffix}
                        className="text-neon-cyan font-bold"
                        enableScrollTrigger
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              {service.features && (
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-4">
                <NeonButton
                  asChild
                  variant="glass"
                  size="sm"
                  className="w-full group/btn"
                >
                  <Link to={service.link} className="flex items-center justify-center space-x-2">
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </NeonButton>
              </div>
            </div>
          </GlassCard>
        </GlowEffect>
      </TiltCard>
    </motion.div>
  );
}

// Default services data for Digital Fusion
export const defaultServices: ServiceData[] = [
  {
    id: 'websites',
    title: 'Websites',
    description: 'Criamos sites responsivos, rápidos e otimizados para conversão, alinhados à identidade da sua marca com tecnologia de ponta.',
    icon: <Monitor />,
    link: '/services#websites',
    stats: {
      label: 'Projetos',
      value: 80,
      suffix: '+'
    },
    features: [
      'Design responsivo',
      'Otimização SEO',
      'Performance máxima',
      'Integração com CMS'
    ]
  },
  {
    id: 'webapps',
    title: 'Aplicativos Web',
    description: 'Desenvolvemos aplicações web robustas que automatizam processos e impulsionam a eficiência do seu negócio.',
    icon: <Layout />,
    link: '/services#webapps',
    stats: {
      label: 'Apps',
      value: 45,
      suffix: '+'
    },
    features: [
      'Arquitetura escalável',
      'APIs personalizadas',
      'Dashboard intuitivo',
      'Segurança avançada'
    ]
  },
  {
    id: 'mobile',
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android que oferecem experiência superior aos usuários.',
    icon: <Smartphone />,
    link: '/services#mobile',
    stats: {
      label: 'Downloads',
      value: 50000,
      suffix: '+'
    },
    features: [
      'Desenvolvimento nativo',
      'UX otimizada',
      'Push notifications',
      'Offline support'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Marketing',
    description: 'Otimização para mecanismos de busca e estratégias de marketing digital para maximizar sua visibilidade online.',
    icon: <Search />,
    link: '/services#seo',
    stats: {
      label: 'ROI Médio',
      value: 300,
      suffix: '%'
    },
    features: [
      'Auditoria completa',
      'Estratégia de conteúdo',
      'Link building',
      'Analytics avançado'
    ]
  }
];

export default ModernServices;
