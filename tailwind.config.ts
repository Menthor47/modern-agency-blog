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
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['Poppins', 'serif'],
				'body': ['Roboto', 'system-ui', 'sans-serif'],
				'sans': ['Roboto', 'system-ui', 'sans-serif'],
				'serif': ['Poppins', 'serif'],
			},
			colors: {
				background: {
					light: '#f9fafb',
					dark: '#18181b',
				},
				surface: {
					light: '#ffffff',
					dark: '#23272f',
				},
				primary: {
					light: '#6366f1',
					dark: '#818cf8',
				},
				accent: {
					light: '#f59e42',
					dark: '#fbbf24',
				},
				text: {
					light: '#18181b',
					dark: '#f9fafb',
				},
				muted: {
					light: '#6b7280',
					dark: '#d1d5db',
				},
				border: {
					light: '#e5e7eb',
					dark: '#374151',
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				'accent-red': {
					DEFAULT: 'hsl(var(--accent-red))',
					glow: 'hsl(var(--accent-red-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
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
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-hero-alt': 'var(--gradient-hero-alt)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-subtle': 'var(--gradient-subtle)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'floating': 'var(--shadow-floating)',
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out',
				'scale-in': 'scaleIn 0.4s ease-out',
				'slide-in-left': 'slideInLeft 0.6s ease-out',
				'slide-in-right': 'slideInRight 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
				'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
				'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
				'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
				'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.015em' }],
				'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
				'8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.045em' }],
				'9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fadeInUp': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scaleIn': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slideInLeft': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slideInRight': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(2deg)'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(-2deg)'
					}
				}
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
