# 🧩 Componentes Reutilizáveis - Sistema Unificado

## 📌 **OVERVIEW**

Este documento define todos os componentes que serão reutilizados entre as páginas para manter a consistência visual e de código estabelecida na **Home Page**.

---

## 🎨 **COMPONENTES BASE (Core Components)**

### **1. HeroSection Component**
```tsx
// src/components/shared/HeroSection.tsx
interface HeroSectionProps {
  page: 'home' | 'portfolio' | 'about' | 'services' | 'contact';
  title: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundVariant?: 'grid' | 'circuits' | 'matrix' | 'full';
}

// Uso em cada página:
<HeroSection 
  page="portfolio"
  title="Nossos Projetos"
  subtitle="Inovação em cada linha de código"
  description="Explore nossa galeria de projetos e veja como transformamos ideias em realidade digital."
  showCTA={true}
  ctaText="Ver Todos os Projetos"
  backgroundVariant="full"
/>
```

### **2. AnimatedBackground Component**
```tsx
// src/components/shared/AnimatedBackground.tsx
interface AnimatedBackgroundProps {
  variant: 'grid' | 'circuits' | 'matrix' | 'pulses' | 'full';
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}

// Reutilização da Home:
<AnimatedBackground 
  variant="full" 
  intensity="medium" 
  theme="auto" 
  className="absolute inset-0 z-0"
/>
```

### **3. GlassCard Component**
```tsx
// src/components/shared/GlassCard.tsx
interface GlassCardProps {
  variant: 'primary' | 'secondary' | 'accent' | 'neutral';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hoverable?: boolean;
  glowEffect?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Variantes de estilo:
primary: bg-blue-primary + glow #007BFF
secondary: bg-blue-dark + glow #005F75  
accent: bg-cyan-accent + glow #6EF9F5
neutral: bg-glass-light + subtle glow
```

### **4. Button Component Aprimorado**
```tsx
// src/components/shared/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Estados visuais:
primary: bg-#007BFF + hover glow
secondary: bg-#005F75 + hover glow
accent: bg-#6EF9F5 + hover glow
outline: border-only + fill no hover
ghost: transparent + subtle hover
```

---

## 🖼️ **COMPONENTES ESPECÍFICOS POR PÁGINA**

### **PORTFOLIO COMPONENTS**

#### **ProjectFilter**
```tsx
// src/components/portfolio/ProjectFilter.tsx
interface ProjectFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  projectCounts: Record<string, number>;
}

// Features:
- Botões com design DF
- Hover effects com glow
- Contador de projetos por categoria
- Animação de troca de categoria
- Responsivo (horizontal → vertical em mobile)
```

#### **ProjectGrid**
```tsx
// src/components/portfolio/ProjectGrid.tsx
interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
  columns?: 1 | 2 | 3 | 4;
  showFilter?: boolean;
}

// Features:
- Grid responsivo: 1→2→3→4 colunas
- Loading skeleton com cores DF
- Animações escalonadas de entrada
- Lazy loading de imagens
- Fallback para imagens quebradas
```

#### **ProjectCard**
```tsx
// src/components/portfolio/ProjectCard.tsx
interface ProjectCardProps {
  project: Project;
  variant?: 'compact' | 'expanded';
  showTechnologies?: boolean;
  onViewDetails?: (project: Project) => void;
}

// Features:
- Glassmorphism design idêntico à Home
- Hover effects com elevação e glow
- Tecnologias com overlays animados
- Gradientes personalizados por projeto
- CTAs consistentes
- Fallback para imagens ausentes
```

#### **ProjectDetailModal**
```tsx
// src/components/portfolio/ProjectDetailModal.tsx
interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

// Features:
- Modal fullscreen em mobile
- Galeria de imagens com navegação
- Seções: Overview, Tech Stack, Features, Results
- Navegação anterior/próximo projeto
- CTA "Solicitar Projeto Similar"
```

### **ABOUT COMPONENTS**

#### **Timeline**
```tsx
// src/components/about/Timeline.tsx
interface TimelineProps {
  items: TimelineItem[];
  direction?: 'vertical' | 'horizontal';
  animated?: boolean;
}

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

// Features:
- Layout responsivo (horizontal → vertical)
- Animações trigger por scroll
- Cards glassmorphism para cada item
- Linha conectora animada
- Icons personalizados
```

#### **TeamMemberCard**
```tsx
// src/components/about/TeamMemberCard.tsx
interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'compact' | 'detailed';
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// Features:
- Glassmorphism design
- Hover effects com glow #6EF9F5
- Social links com cores DF
- Skills tags animadas
- Avatar com loading placeholder
```

#### **ValueCard**
```tsx
// src/components/about/ValueCard.tsx
interface ValueCardProps {
  value: CompanyValue;
  index: number;
}

interface CompanyValue {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

// Features:
- Icons animados (rotação, pulse, morph)
- Hover effects com transform
- Cores DF baseadas no type
- Entrada animada com delay
```

### **SERVICES COMPONENTS** ✅ **IMPLEMENTADOS**

#### **ServiceCard** ✅
```tsx
// src/components/modern/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

// Features Implementadas:
- ✅ Cards glassmorphism responsivos
- ✅ Animações sequenciais com framer-motion
- ✅ Hover effects modernos
- ✅ Integração com tema dark/light
- ✅ Navegação para páginas de detalhes
- ✅ Ícones lucide-react integrados
```

#### **Timeline** ✅
```tsx
// src/components/modern/Timeline.tsx
interface TimelineProps {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
}

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'current' | 'upcoming';
}

// Features Implementadas:
- ✅ Timeline interativa com animações
- ✅ Estados visuais (completo/atual/próximo)
- ✅ Responsive design
- ✅ Integração com framer-motion
- ✅ Suporte a ícones customizados
```

#### **FAQAccordion** ✅
```tsx
// src/components/modern/FAQAccordion.tsx
interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Features Implementadas:
- ✅ Acordeão expansível moderno
- ✅ Animações suaves de abertura/fechamento
- ✅ Design glassmorphism
- ✅ Múltiplas seções abertas simultaneamente
- ✅ Responsive e acessível
- ✅ Integração com tema dark/light
```

### **CONTACT COMPONENTS**

#### **ContactForm**
```tsx
// src/components/contact/ContactForm.tsx
interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  initialData?: Partial<FormData>;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

// Features:
- Glassmorphism container
- Campos com design DF (borders, focus states)
- Validação em tempo real
- Loading states com cores DF
- Success/error states animados
- Progress indicator visual
```

#### **ContactCard**
```tsx
// src/components/contact/ContactCard.tsx
interface ContactCardProps {
  type: 'email' | 'phone' | 'whatsapp' | 'address' | 'social';
  data: ContactData;
  quickAction?: boolean;
}

interface ContactData {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  description?: string;
}

// Features:
- Glassmorphism com hover glow
- Quick actions (copiar, abrir app)
- Icons animados com cores DF
- Tooltips informativos
```

#### **ContactFAQ**
```tsx
// src/components/contact/ContactFAQ.tsx
interface ContactFAQProps {
  items: FAQItem[];
  searchable?: boolean;
  categories?: string[];
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedLinks?: Array<{
    label: string;
    href: string;
  }>;
}

// Features:
- Accordion com design DF
- Busca integrada com highlight
- Categorização visual
- Links relacionados
- Animações suaves
```

---

## 🎨 **SISTEMA DE CORES PARA COMPONENTES**

### **Mapping de Cores por Variant**
```css
/* Primary Variant */
.variant-primary {
  --bg-color: #007BFF;
  --bg-hover: #0066CC;
  --glow-color: rgba(0, 123, 255, 0.4);
  --text-color: #FFFFFF;
  --border-color: rgba(0, 123, 255, 0.3);
}

/* Secondary Variant */
.variant-secondary {
  --bg-color: #005F75;
  --bg-hover: #004A5C;
  --glow-color: rgba(0, 95, 117, 0.4);
  --text-color: #FFFFFF;
  --border-color: rgba(0, 95, 117, 0.3);
}

/* Accent Variant */
.variant-accent {
  --bg-color: #6EF9F5;
  --bg-hover: #5BE8DE;
  --glow-color: rgba(110, 249, 245, 0.4);
  --text-color: #000000;
  --border-color: rgba(110, 249, 245, 0.3);
}

/* Glassmorphism Base */
.glass-base {
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

/* Theme Adaptations */
.dark .glass-base {
  background: rgba(0, 0, 0, 0.1);
  border-color: rgba(110, 249, 245, 0.2);
}

.light .glass-base {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 123, 255, 0.2);
}
```

---

## 📱 **RESPONSIVIDADE DOS COMPONENTES**

### **Breakpoints Padrão**
```tsx
// Hook personalizado para responsividade
const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState('md');
  
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint('sm');
      else if (width < 768) setBreakpoint('md');
      else if (width < 1024) setBreakpoint('lg');
      else if (width < 1280) setBreakpoint('xl');
      else if (width < 1536) setBreakpoint('2xl');
      else setBreakpoint('4xl');
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);
  
  return breakpoint;
};
```

### **Grid Responsive Pattern**
```tsx
// Para uso em todos os grids
const getGridColumns = (breakpoint: string, maxColumns: number) => {
  const columnMap = {
    'sm': 1,
    'md': Math.min(2, maxColumns),
    'lg': Math.min(3, maxColumns),
    'xl': Math.min(4, maxColumns),
    '2xl': Math.min(4, maxColumns),
    '4xl': maxColumns,
  };
  
  return columnMap[breakpoint] || maxColumns;
};

// Classes Tailwind responsivas
const gridClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
};
```

---

## ⚡ **ANIMAÇÕES PADRÃO**

### **Entrada de Componentes**
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide In Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### **Hover Effects**
```css
/* Glow Effect */
.glow-effect {
  transition: all 0.3s ease-out;
}

.glow-effect:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 40px rgba(0, 123, 255, 0.3),
    0 0 30px rgba(110, 249, 245, 0.2);
}

/* Card Elevation */
.card-hover {
  transition: all 0.3s ease-out;
}

.card-hover:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}
```

---

## 🛠️ **UTILS E HELPERS**

### **Theme Utilities**
```tsx
// src/utils/theme.ts
export const getThemeColors = (theme: 'light' | 'dark') => ({
  primary: theme === 'dark' ? '#6EF9F5' : '#007BFF',
  secondary: '#005F75',
  accent: '#6EF9F5',
  background: theme === 'dark' ? '#000000' : '#FFFFFF',
  surface: theme === 'dark' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
});

export const getGlowColor = (variant: string, theme: 'light' | 'dark') => {
  const colors = {
    primary: theme === 'dark' ? '#6EF9F5' : '#007BFF',
    secondary: '#005F75',
    accent: '#6EF9F5',
  };
  return colors[variant] || colors.primary;
};
```

### **Animation Utilities**
```tsx
// src/utils/animations.ts
export const staggerChildren = (delay: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay,
    },
  },
});

export const fadeInUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  },
});

export const scaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { delay, duration: 0.4, ease: 'easeOut' }
  },
});
```

### **Responsive Utilities**
```tsx
// src/utils/responsive.ts
export const getResponsiveValue = <T>(
  values: Record<string, T>,
  breakpoint: string
): T => {
  const fallbackOrder = ['4xl', '2xl', 'xl', 'lg', 'md', 'sm'];
  
  if (values[breakpoint]) return values[breakpoint];
  
  for (const fallback of fallbackOrder) {
    if (values[fallback]) return values[fallback];
  }
  
  return Object.values(values)[0];
};

export const getGridColumnClass = (columns: number) => {
  const classes = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };
  return classes[columns] || classes[4];
};
```

---

## 📦 **ESTRUTURA DE ARQUIVOS**

```
src/
├── components/
│   ├── shared/           # Componentes base reutilizáveis
│   │   ├── HeroSection.tsx
│   │   ├── AnimatedBackground.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Button.tsx
│   │   └── LoadingSpinner.tsx
│   │
│   ├── portfolio/        # Componentes específicos do Portfolio
│   │   ├── ProjectFilter.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectDetailModal.tsx
│   │
│   ├── about/           # Componentes específicos do About
│   │   ├── Timeline.tsx
│   │   ├── TeamMemberCard.tsx
│   │   ├── ValueCard.tsx
│   │   └── TechSkill.tsx
│   │
│   ├── services/        # Componentes específicos dos Serviços
│   │   ├── ServiceCard.tsx
│   │   ├── ProcessStep.tsx
│   │   └── PricingCard.tsx
│   │
│   ├── contact/         # Componentes específicos do Contato
│   │   ├── ContactForm.tsx
│   │   ├── ContactCard.tsx
│   │   ├── ContactFAQ.tsx
│   │   └── LocationMap.tsx
│   │
│   └── ui/              # Componentes UI existentes (mantidos)
│       └── ...
│
├── utils/               # Utilities
│   ├── theme.ts
│   ├── animations.ts
│   ├── responsive.ts
│   └── constants.ts
│
└── hooks/               # Custom hooks
    ├── useResponsive.ts
    ├── useAnimation.ts
    └── useTheme.ts
```

---

**Status: 📋 DOCUMENTAÇÃO COMPLETA**
**Próximo Passo: 🔧 IMPLEMENTAR COMPONENTES BASE**
