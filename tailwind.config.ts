
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
				}
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'flyAcross1': {
					'0%': {
						transform: 'translate(-100px, 20vh) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '0.8'
					},
					'25%': {
						transform: 'translate(30vw, 40vh) rotate(-15deg)'
					},
					'50%': {
						transform: 'translate(70vw, 25vh) rotate(10deg)'
					},
					'75%': {
						transform: 'translate(90vw, 60vh) rotate(-5deg)'
					},
					'90%': {
						opacity: '0.8'
					},
					'100%': {
						transform: 'translate(calc(100vw + 100px), 80vh) rotate(5deg)',
						opacity: '0'
					}
				},
				'flyAcross2': {
					'0%': {
						transform: 'translate(calc(100vw + 100px), 70vh) rotate(180deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '0.6'
					},
					'25%': {
						transform: 'translate(80vw, 30vh) rotate(165deg)'
					},
					'50%': {
						transform: 'translate(40vw, 50vh) rotate(190deg)'
					},
					'75%': {
						transform: 'translate(20vw, 20vh) rotate(175deg)'
					},
					'90%': {
						opacity: '0.6'
					},
					'100%': {
						transform: 'translate(-100px, 40vh) rotate(180deg)',
						opacity: '0'
					}
				},
				'flyAcross3': {
					'0%': {
						transform: 'translate(-100px, 60vh) rotate(45deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '0.7'
					},
					'30%': {
						transform: 'translate(25vw, 30vh) rotate(30deg)'
					},
					'60%': {
						transform: 'translate(60vw, 70vh) rotate(60deg)'
					},
					'80%': {
						transform: 'translate(85vw, 40vh) rotate(45deg)'
					},
					'90%': {
						opacity: '0.7'
					},
					'100%': {
						transform: 'translate(calc(100vw + 100px), 15vh) rotate(45deg)',
						opacity: '0'
					}
				},
				'flyAcross4': {
					'0%': {
						transform: 'translate(calc(100vw + 100px), 30vh) rotate(-135deg)',
						opacity: '0'
					},
					'15%': {
						opacity: '0.9'
					},
					'35%': {
						transform: 'translate(70vw, 60vh) rotate(-120deg)'
					},
					'65%': {
						transform: 'translate(35vw, 25vh) rotate(-150deg)'
					},
					'85%': {
						transform: 'translate(10vw, 75vh) rotate(-135deg)'
					},
					'95%': {
						opacity: '0.9'
					},
					'100%': {
						transform: 'translate(-100px, 50vh) rotate(-135deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'flyAcross1': 'flyAcross1 18s linear infinite',
				'flyAcross2': 'flyAcross2 22s linear infinite 5s',
				'flyAcross3': 'flyAcross3 20s linear infinite 10s',
				'flyAcross4': 'flyAcross4 16s linear infinite 3s'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
