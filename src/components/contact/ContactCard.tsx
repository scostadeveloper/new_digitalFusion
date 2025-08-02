import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, Check, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '@/lib/analytics-events';
import { GlassCard } from '@/components/modern/GlassCard';

interface ContactData {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  description?: string;
  copyable?: boolean;
  external?: boolean;
}

interface ContactCardProps {
  type: 'email' | 'phone' | 'whatsapp' | 'address' | 'social' | 'hours';
  data: ContactData;
  quickAction?: boolean;
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  type, 
  data, 
  quickAction = true, 
  className = '' 
}) => {
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    if (!data.copyable) return;
    
    try {
      await navigator.clipboard.writeText(data.value);
      setCopied(true);
      
      toast({
        title: 'Copiado!',
        description: `${data.label} copiado para a área de transferência.`,
        duration: 2000,
      });
      
      trackEvent({
        action: 'copy_contact',
        category: 'Contact',
        label: `${type}_copy`,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível copiar. Tente novamente.',
        variant: 'destructive',
      });
    }
  };

  const handleClick = () => {
    if (data.href) {
      if (data.external) {
        window.open(data.href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = data.href;
      }
      
      trackEvent({
        action: ANALYTICS_EVENTS.NAVIGATION.EXTERNAL_LINK,
        category: 'Contact',
        label: `${type}_click`,
      });
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'email':
        return {
          gradient: 'from-blue-500/20 to-cyan-500/20',
          border: 'border-blue-500/30',
          glow: 'shadow-blue-500/20',
          icon: 'text-blue-400'
        };
      case 'phone':
        return {
          gradient: 'from-green-500/20 to-emerald-500/20',
          border: 'border-green-500/30',
          glow: 'shadow-green-500/20',
          icon: 'text-green-400'
        };
      case 'whatsapp':
        return {
          gradient: 'from-green-500/20 to-green-400/20',
          border: 'border-green-500/30',
          glow: 'shadow-green-500/20',
          icon: 'text-green-400'
        };
      case 'address':
        return {
          gradient: 'from-purple-500/20 to-pink-500/20',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/20',
          icon: 'text-purple-400'
        };
      case 'social':
        return {
          gradient: 'from-pink-500/20 to-rose-500/20',
          border: 'border-pink-500/30',
          glow: 'shadow-pink-500/20',
          icon: 'text-pink-400'
        };
      case 'hours':
        return {
          gradient: 'from-orange-500/20 to-yellow-500/20',
          border: 'border-orange-500/30',
          glow: 'shadow-orange-500/20',
          icon: 'text-orange-400'
        };
      default:
        return {
          gradient: 'from-gray-500/20 to-gray-400/20',
          border: 'border-gray-500/30',
          glow: 'shadow-gray-500/20',
          icon: 'text-gray-400'
        };
    }
  };

  const styles = getTypeStyles();

  const cardVariants = {
    initial: {
      scale: 1,
      rotateY: 0,
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: 10,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: {
      boxShadow: `0 0 0 ${styles.glow}`,
    },
    hover: {
      boxShadow: `0 0 30px ${styles.glow}`,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`perspective-1000 ${className}`}
    >
      <motion.div
        variants={glowVariants}
        className={`relative group cursor-pointer transform-gpu`}
        onClick={handleClick}
      >
        <GlassCard 
          className={`p-6 h-full bg-gradient-to-br ${styles.gradient} border ${styles.border} transition-all duration-300 hover:border-opacity-60`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            {/* Header com Ícone */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                variants={iconVariants}
                className={`p-3 rounded-xl bg-black/20 ${styles.icon} backdrop-blur-sm`}
              >
                {data.icon}
              </motion.div>
              
              {/* Quick Actions */}
              {quickAction && (
                <div className="flex gap-2">
                  {data.copyable && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy();
                      }}
                      className="p-2 rounded-lg bg-black/20 text-gray-400 hover:text-white transition-colors backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  )}
                  
                  {data.external && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                      }}
                      className="p-2 rounded-lg bg-black/20 text-gray-400 hover:text-white transition-colors backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                {data.label}
              </h3>
              
              <p className="text-gray-300 font-medium mb-2 break-all">
                {data.value}
              </p>
              
              {data.description && (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {data.description}
                </p>
              )}
            </div>

            {/* Hover Indicator */}
            <motion.div
              className="mt-4 flex items-center text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 10 
              }}
              transition={{ duration: 0.2 }}
            >
              {data.href && (
                <>
                  {data.external ? (
                    <>
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Abrir em nova aba
                    </>
                  ) : (
                    <>
                      <Phone className="w-3 h-3 mr-1" />
                      Clique para {type === 'email' ? 'enviar email' : 'ligar'}
                    </>
                  )}
                </>
              )}
              
              {data.copyable && !data.href && (
                <>
                  <Copy className="w-3 h-3 mr-1" />
                  Clique para copiar
                </>
              )}
            </motion.div>
          </div>

          {/* Animated Border */}
          <motion.div
            className={`absolute inset-0 rounded-xl border-2 ${styles.border} opacity-0`}
            animate={{
              opacity: isHovered ? 0.6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

// Componentes pré-configurados para facilitar o uso
export const EmailCard: React.FC<Omit<ContactCardProps, 'type' | 'data'> & { email: string; description?: string }> = ({ 
  email, 
  description = "Entre em contato conosco", 
  ...props 
}) => (
  <ContactCard
    type="email"
    data={{
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      description,
      copyable: true,
      external: false
    }}
    {...props}
  />
);

export const PhoneCard: React.FC<Omit<ContactCardProps, 'type' | 'data'> & { phone: string; description?: string }> = ({ 
  phone, 
  description = "Ligue para nós", 
  ...props 
}) => (
  <ContactCard
    type="phone"
    data={{
      icon: <Phone className="w-6 h-6" />,
      label: "Telefone",
      value: phone,
      href: `tel:${phone}`,
      description,
      copyable: true,
      external: false
    }}
    {...props}
  />
);

export const WhatsAppCard: React.FC<Omit<ContactCardProps, 'type' | 'data'> & { phone: string; message?: string; description?: string }> = ({ 
  phone, 
  message = "Olá! Gostaria de saber mais sobre os serviços da Digital Fusion.", 
  description = "Converse conosco no WhatsApp", 
  ...props 
}) => {
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  
  return (
    <ContactCard
      type="whatsapp"
      data={{
        icon: <Icon icon="mdi:whatsapp" className="w-6 h-6" />,
        label: "WhatsApp",
        value: phone,
        href: whatsappUrl,
        description,
        copyable: true,
        external: true
      }}
      {...props}
    />
  );
};

export const AddressCard: React.FC<Omit<ContactCardProps, 'type' | 'data'> & { address: string; description?: string }> = ({ 
  address, 
  description = "Nossa localização", 
  ...props 
}) => (
  <ContactCard
    type="address"
    data={{
      icon: <MapPin className="w-6 h-6" />,
      label: "Endereço",
      value: address,
      description,
      copyable: true,
      external: false
    }}
    {...props}
  />
);

export const HoursCard: React.FC<Omit<ContactCardProps, 'type' | 'data'> & { hours: string; description?: string }> = ({ 
  hours, 
  description = "Horário de atendimento", 
  ...props 
}) => (
  <ContactCard
    type="hours"
    data={{
      icon: <Clock className="w-6 h-6" />,
      label: "Horário",
      value: hours,
      description,
      copyable: false,
      external: false
    }}
    {...props}
  />
);

export default ContactCard;