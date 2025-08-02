import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, Check, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '@/lib/analytics-events';
import { BaseCard } from '@/components/ui/BaseCard';

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

  const getTypeColor = () => {
    switch (type) {
      case 'email': return 'blue';
      case 'phone': return 'green';
      case 'whatsapp': return 'green';
      case 'address': return 'purple';
      case 'social': return 'pink';
      case 'hours': return 'orange';
      default: return 'gray';
    }
  };

  const typeColor = getTypeColor();

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
      <BaseCard
        size="md"
        hover="tilt"
        className={`cursor-pointer transform-gpu bg-gradient-to-br from-${typeColor}-500/20 to-${typeColor}-400/20 border-${typeColor}-500/30 ${className}`}
        onClick={handleClick}
      >
        <div className="flex flex-col h-full">
          {/* Header com Ícone */}
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-black/20 text-${typeColor}-400 backdrop-blur-sm`}>
              {data.icon}
            </div>
            
            {/* Quick Actions */}
            {quickAction && (
              <div className="flex gap-2">
                {data.copyable && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy();
                    }}
                    className="p-2 rounded-lg bg-black/20 text-gray-400 hover:text-white transition-colors backdrop-blur-sm"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
                
                {data.external && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick();
                    }}
                    className="p-2 rounded-lg bg-black/20 text-gray-400 hover:text-white transition-colors backdrop-blur-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-2">
              {data.label}
            </h3>
            
            <p className="text-gray-300 dark:text-gray-300 font-medium mb-2 break-all">
              {data.value}
            </p>
            
            {data.description && (
              <p className="text-sm text-gray-400 dark:text-gray-400 leading-relaxed">
                {data.description}
              </p>
            )}
          </div>

          {/* Hover Indicator */}
          {data.href && (
            <div className="mt-4 flex items-center text-sm text-gray-400 dark:text-gray-500">
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
            </div>
          )}
          
          {data.copyable && !data.href && (
            <div className="mt-4 flex items-center text-sm text-gray-400 dark:text-gray-500">
              <Copy className="w-3 h-3 mr-1" />
              Clique para copiar
            </div>
          )}
        </div>
      </BaseCard>
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