import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BaseCard } from '@/components/ui/BaseCard';
import { useThemeStyles } from '@/hooks/useThemeStyles';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

/**
 * Componente de card de serviço
 * @param title - Título do serviço
 * @param description - Descrição detalhada do serviço
 * @param icon - Ícone representativo do serviço
 * @param link - Link para página de detalhes do serviço
 * @param index - Índice para controlar a animação sequencial
 */
const ServiceCard = ({
  title,
  description,
  icon,
  link,
  index,
}: ServiceCardProps) => {
  const { accent } = useThemeStyles('card');

  return (
    <BaseCard
      size="lg"
      hover="lift"
      animationDelay={index * 0.1}
      className="flex flex-col h-full"
    >
      {/* Ícone do serviço */}
      <div className="text-df-blue mb-4 w-16 h-16 flex items-center justify-center bg-df-blue/10 rounded-lg">
        {icon}
      </div>

      {/* Título e descrição */}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>

      {/* Botão de ação com link */}
      <Button
        asChild
        variant="ghost"
        className="group p-0 h-auto text-df-blue hover:text-df-cyan hover:bg-transparent justify-start"
      >
        <Link to={link} className="flex items-center">
          <span className="mr-2">Saiba mais</span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </Button>
    </BaseCard>
  );
};

export default ServiceCard;
