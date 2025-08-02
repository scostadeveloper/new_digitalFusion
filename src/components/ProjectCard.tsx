import React from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '../lib/analytics-events';
import { BaseCard } from '@/components/ui/BaseCard';
import { useThemeStyles } from '@/hooks/useThemeStyles';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ProjectCard = ({
  id,
  title,
  category,
  description,
  imageUrl,
  index,
}: ProjectCardProps) => {
  const { trackEvent } = useAnalytics();
  const { accent } = useThemeStyles('card');

  const handleClick = () => {
    trackEvent({
      action: ANALYTICS_EVENTS.PROJECT.CLICK,
      category: 'Project',
      label: title,
    });
  };

  return (
    <Link
      to={`/portfolio/${id}`}
      className="group"
      onClick={handleClick}
    >
      <BaseCard
        hover="lift"
        animationDelay={index * 0.1}
        className="overflow-hidden h-full p-0"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-medium">Ver Projeto</span>
          </div>
        </div>
        <div className="p-6">
          <div className="text-sm text-df-blue font-medium mb-2">
            {category}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-df-blue transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
        </div>
      </BaseCard>
    </Link>
  );
};

export default ProjectCard;
