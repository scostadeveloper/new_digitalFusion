import { useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export interface ThemeStyleConfig {
  light: string;
  dark: string;
}

export interface ComponentThemeStyles {
  background: ThemeStyleConfig;
  text: ThemeStyleConfig;
  border: ThemeStyleConfig;
  accent: ThemeStyleConfig;
}

const defaultStyles: ComponentThemeStyles = {
  background: {
    light: 'bg-white',
    dark: 'bg-gray-800'
  },
  text: {
    light: 'text-gray-900',
    dark: 'text-white'
  },
  border: {
    light: 'border-gray-200',
    dark: 'border-gray-700'
  },
  accent: {
    light: 'text-blue-600',
    dark: 'text-blue-400'
  }
};

const cardStyles: ComponentThemeStyles = {
  background: {
    light: 'bg-white',
    dark: 'bg-gray-800'
  },
  text: {
    light: 'text-gray-900',
    dark: 'text-white'
  },
  border: {
    light: 'border-gray-200',
    dark: 'border-gray-700'
  },
  accent: {
    light: 'text-blue-600 hover:text-blue-700',
    dark: 'text-blue-400 hover:text-blue-300'
  }
};

const buttonStyles: ComponentThemeStyles = {
  background: {
    light: 'bg-blue-600 hover:bg-blue-700',
    dark: 'bg-blue-500 hover:bg-blue-600'
  },
  text: {
    light: 'text-white',
    dark: 'text-white'
  },
  border: {
    light: 'border-blue-600',
    dark: 'border-blue-500'
  },
  accent: {
    light: 'ring-blue-500',
    dark: 'ring-blue-400'
  }
};

const glassStyles: ComponentThemeStyles = {
  background: {
    light: 'bg-white/10 backdrop-blur-md',
    dark: 'bg-gray-900/20 backdrop-blur-md'
  },
  text: {
    light: 'text-gray-900',
    dark: 'text-white'
  },
  border: {
    light: 'border-white/20',
    dark: 'border-white/10'
  },
  accent: {
    light: 'text-blue-600',
    dark: 'text-blue-400'
  }
};

export function useThemeStyles(
  component: 'default' | 'card' | 'button' | 'glass' = 'default',
  customStyles?: Partial<ComponentThemeStyles>
) {
  const { theme } = useTheme();
  
  const baseStyles = useMemo(() => {
    const styleMap = {
      default: defaultStyles,
      card: cardStyles,
      button: buttonStyles,
      glass: glassStyles
    };
    
    return { ...styleMap[component], ...customStyles };
  }, [component, customStyles]);

  return useMemo(() => {
    const isDark = theme === 'dark';
    
    return {
      background: isDark ? baseStyles.background.dark : baseStyles.background.light,
      text: isDark ? baseStyles.text.dark : baseStyles.text.light,
      border: isDark ? baseStyles.border.dark : baseStyles.border.light,
      accent: isDark ? baseStyles.accent.dark : baseStyles.accent.light,
      
      // Utility function to get combined classes
      getClasses: (elements: (keyof ComponentThemeStyles)[], additionalClasses?: string) => {
        const themeClasses = elements.map(element => 
          isDark ? baseStyles[element].dark : baseStyles[element].light
        );
        
        return cn(...themeClasses, additionalClasses);
      },
      
      // Predefined combinations
      cardClasses: cn(
        isDark ? baseStyles.background.dark : baseStyles.background.light,
        isDark ? baseStyles.text.dark : baseStyles.text.light,
        isDark ? baseStyles.border.dark : baseStyles.border.light
      ),
      
      buttonClasses: cn(
        isDark ? baseStyles.background.dark : baseStyles.background.light,
        isDark ? baseStyles.text.dark : baseStyles.text.light
      ),
      
      linkClasses: cn(
        isDark ? baseStyles.accent.dark : baseStyles.accent.light
      )
    };
  }, [theme, baseStyles]);
}

export function useGlassEffect(intensity: 'light' | 'medium' | 'strong' = 'medium') {
  const { theme } = useTheme();
  
  return useMemo(() => {
    const intensityMap = {
      light: {
        light: 'bg-white/5 backdrop-blur-sm',
        dark: 'bg-gray-900/10 backdrop-blur-sm'
      },
      medium: {
        light: 'bg-white/10 backdrop-blur-md',
        dark: 'bg-gray-900/20 backdrop-blur-md'
      },
      strong: {
        light: 'bg-white/20 backdrop-blur-lg',
        dark: 'bg-gray-900/30 backdrop-blur-lg'
      }
    };
    
    const isDark = theme === 'dark';
    return isDark ? intensityMap[intensity].dark : intensityMap[intensity].light;
  }, [theme, intensity]);
}

export default useThemeStyles;