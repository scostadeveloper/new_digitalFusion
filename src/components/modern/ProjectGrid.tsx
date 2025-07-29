import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import ModernProjectCard from './ModernProjectCard';

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

interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
  columns?: 1 | 2 | 3 | 4;
  showTechnologies?: boolean;
  emptyMessage?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  loading = false,
  columns = 3,
  showTechnologies = true,
  emptyMessage = 'Nenhum projeto encontrado nesta categoria.',
}) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const getGridClasses = () => {
    const baseClasses = 'grid gap-6 md:gap-8';
    
    switch (columns) {
      case 1:
        return `${baseClasses} grid-cols-1`;
      case 2:
        return `${baseClasses} grid-cols-1 md:grid-cols-2`;
      case 3:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
      case 4:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
      default:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
    }
  };

  // Loading Skeleton Component
  const ProjectSkeleton = ({ index }: { index: number }) => (
    <motion.div
      className={`
        rounded-2xl overflow-hidden backdrop-blur-md border
        ${
          theme === 'dark'
            ? 'bg-gray-900/40 border-gray-700/50'
            : 'bg-white/70 border-gray-200/50'
        }
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Skeleton */}
      <div
        className={`
          h-48 md:h-56 animate-pulse
          ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
          }
        `}
      />
      
      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div
          className={`
            h-6 w-20 rounded-full animate-pulse
            ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
            }
          `}
        />
        
        {/* Title */}
        <div className="space-y-2">
          <div
            className={`
              h-6 w-3/4 rounded animate-pulse
              ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
              }
            `}
          />
          <div
            className={`
              h-6 w-1/2 rounded animate-pulse
              ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
              }
            `}
          />
        </div>
        
        {/* Description */}
        <div className="space-y-2">
          <div
            className={`
              h-4 w-full rounded animate-pulse
              ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
              }
            `}
          />
          <div
            className={`
              h-4 w-4/5 rounded animate-pulse
              ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
              }
            `}
          />
          <div
            className={`
              h-4 w-2/3 rounded animate-pulse
              ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
              }
            `}
          />
        </div>
        
        {/* Technologies */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`
                h-6 w-16 rounded animate-pulse
                ${
                  theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/50'
                }
              `}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Empty State Component
  const EmptyState = () => (
    <motion.div
      className="col-span-full flex flex-col items-center justify-center py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`
          w-24 h-24 rounded-full flex items-center justify-center mb-6
          ${
            theme === 'dark'
              ? 'bg-gray-800/50 text-gray-400'
              : 'bg-gray-100 text-gray-500'
          }
        `}
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      
      <h3
        className={`
          text-xl font-semibold mb-2
          ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }
        `}
      >
        Nenhum projeto encontrado
      </h3>
      
      <p
        className={`
          text-center max-w-md
          ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }
        `}
      >
        {emptyMessage}
      </p>
    </motion.div>
  );

  if (loading) {
    return (
      <div className={getGridClasses()}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectSkeleton key={index} index={index} />
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <motion.div
      className={getGridClasses()}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ModernProjectCard
          key={project.id}
          project={project}
          index={index}
          showTechnologies={showTechnologies}
        />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;