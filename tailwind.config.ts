
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom Digital Fusion colors (mantidas)
				df: {
					'black': '#000000',
					'white': '#FFFFFF',
					'blue': '#007BFF',
					'gray': '#F0F0F0',
					'cyan': '#005F73',
				},
				// Novas cores neon e futurísticas
				'electric-blue': '#00F5FF',
				'plasma-purple': '#8A2BE2',
				'matrix-green': '#39FF14',
				'cyber-pink': '#FF1493',
				// Cores glassmorphism
				'glass-white': 'rgba(255, 255, 255, 0.1)',
				'glass-blue': 'rgba(0, 123, 255, 0.15)',
				'glass-dark': 'rgba(0, 0, 0, 0.2)',
				'glass-cyan': 'rgba(0, 95, 115, 0.15)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				// Novas animações futurísticas
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px currentColor' },
					'50%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink-caret': {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: '#00F5FF' }
				},
				'glitch': {
					'0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'translate(0)' },
					'15%, 49%': { transform: 'translate(-2px, -2px)' },
					'50%, 99%': { transform: 'translate(2px, 2px)' }
				},
				'hologram': {
					'0%': { backgroundPosition: '-200% -200%' },
					'50%': { backgroundPosition: '200% 200%' },
					'100%': { backgroundPosition: '-200% -200%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				// Novas animações
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
				'glitch': 'glitch 0.5s infinite',
				'hologram': 'hologram 3s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
				// Novas fontes futurísticas
				heading: ['Orbitron', 'Rajdhani', 'sans-serif'],
				cyber: ['Orbitron', 'monospace'],
				modern: ['Rajdhani', 'sans-serif'],
				code: ['Fira Code', 'JetBrains Mono', 'monospace']
			},
			boxShadow: {
				// Shadows glass e neon
				'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
				'neon-blue': '0 0 20px rgba(0, 245, 255, 0.5)',
				'neon-purple': '0 0 20px rgba(138, 43, 226, 0.5)',
				'neon-green': '0 0 20px rgba(57, 255, 20, 0.5)',
				'neon-pink': '0 0 20px rgba(255, 20, 147, 0.5)'
			},
			backdropBlur: {
				'xs': '2px',
				'glass': '20px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
