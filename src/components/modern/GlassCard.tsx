import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const glassCardVariants = cva(
  "backdrop-blur-glass border rounded-lg transition-all duration-300 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-glass-white border-white/20 shadow-glass",
        dark: "bg-glass-dark border-white/10 shadow-glass",
        blue: "bg-glass-blue border-blue-500/30 shadow-neon-blue",
        purple: "bg-plasma-purple/10 border-plasma-purple/30 shadow-neon-purple",
        cyan: "bg-df-cyan/10 border-df-cyan/30",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        none: "",
        tilt: "hover-tilt hover:shadow-2xl",
        float: "hover:-translate-y-2 hover:shadow-2xl",
        glow: "hover:shadow-neon-blue hover:border-electric-blue/50 hover-glow",
        magnetic: "hover-magnetic",
      },
      glow: {
        none: "",
        subtle: "shadow-sm",
        medium: "shadow-lg",
        intense: "shadow-2xl animate-pulse-glow",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "none",
      glow: "none",
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  children: React.ReactNode
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, hover, glow, children, ...props }, ref) => {
    return (
      <div
        className={cn(glassCardVariants({ variant, size, hover, glow, className }))}
        ref={ref}
        {...props}
      >
        {/* Efeito holográfico opcional */}
        {variant === "blue" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue/10 to-transparent animate-hologram -z-10" />
        )}
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard, glassCardVariants }
