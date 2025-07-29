import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { ExternalLink, Eye, Code, Palette } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '@/lib/analytics-events';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
  demoUrl?: string;
  featured?: boolean;
}

interface ModernProjectCardProps {
  project: Project;
  index: number;
  variant?: 'compact' | 'expanded';
  showTechnologies?: boolean;
}

const ModernProjectCard: React.FC<ModernProjectCardProps> = ({
  project,
  index,
  variant = 'expanded',
  showTechnologies = true,
}) => {
  const { theme } = useTheme();
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent({
      action: ANALYTICS_EVENTS.PROJECT.CLICK,
      category: 'Project',
      label: project.title,
    });
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
      trackEvent({
        action: 'demo_click',
        category: 'Project',
        label: project.title,
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group h-full"
    >
      <Link
        to={`/portfolio/${project.id}`}
        onClick={handleClick}
        className="block h-full"
      >
        <div
          className={`
            relative h-full rounded-2xl overflow-hidden
            backdrop-blur-md border transition-all duration-500
            hover:scale-[1.02] hover:shadow-2xl
            ${
              theme === 'dark'
                ? 'bg-gray-900/40 border-gray-700/50 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
                : 'bg-white/70 border-gray-200/50 hover:border-blue-400/50 hover:shadow-blue-400/20'
            }
          `}
        >
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-20">
              <div
                className={`
                  px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm
                  ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                  }
                `}
              >
                Destaque
              </div>
            </div>
          )}

          {/* Demo Link Button */}
          {project.demoUrl && (
            <div className="absolute top-4 right-4 z-20">
              <motion.button
                onClick={handleDemoClick}
                className={`
                  p-2 rounded-full backdrop-blur-sm transition-all duration-300
                  ${
                    theme === 'dark'
                      ? 'bg-gray-800/80 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400'
                      : 'bg-white/80 text-gray-600 hover:bg-blue-400/20 hover:text-blue-600'
                  }
                  opacity-0 group-hover:opacity-100
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          )}

          {/* Image Container */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              variants={imageVariants}
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <motion.div
              className={`
                absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                flex items-end justify-center p-6
              `}
              variants={overlayVariants}
              initial="hidden"
            >
              <div className="flex items-center gap-3 text-white">
                <Eye className="w-5 h-5" />
                <span className="font-medium">Ver Projeto</span>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <div
              className={`
                inline-block px-3 py-1 rounded-full text-xs font-medium mb-3
                ${
                  theme === 'dark'
                    ? 'bg-cyan-400/20 text-cyan-400'
                    : 'bg-blue-100 text-blue-600'
                }
              `}
            >
              {project.category}
            </div>

            {/* Title */}
            <h3
              className={`
                text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300
                ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-gray-900 group-hover:text-blue-600'
                }
              `}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className={`
                text-sm line-clamp-3 mb-4
                ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }
              `}
            >
              {project.description}
            </p>

            {/* Technologies */}
            {showTechnologies && project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`
                      px-2 py-1 rounded-md text-xs font-medium
                      ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 text-gray-400'
                          : 'bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span
                    className={`
                      px-2 py-1 rounded-md text-xs font-medium
                      ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 text-gray-400'
                          : 'bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Glow Effect */}
          <motion.div
            className={`
              absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
              pointer-events-none transition-opacity duration-500
              ${
                theme === 'dark'
                  ? 'shadow-2xl shadow-cyan-400/10'
                  : 'shadow-2xl shadow-blue-400/10'
              }
            `}
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, rgba(103, 232, 249, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default ModernProjectCard;