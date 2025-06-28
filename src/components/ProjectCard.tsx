import React from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '../lib/analytics-events';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ProjectCard = ({ id, title, category, description, imageUrl, index }: ProjectCardProps) => {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent({
      action: ANALYTICS_EVENTS.PROJECT.CLICK,
      category: 'Project',
      label: title
    });
  };

  return (
    <Link
      to={`/portfolio/${id}`}
      className="group fade-in-element"
      style={{ 
        animationDelay: `${index * 0.1}s`, 
      }}
      onClick={handleClick}
    >
      <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl h-full">
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
          <div className="text-sm text-df-blue font-medium mb-2">{category}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-df-blue transition-colors">{title}</h3>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
