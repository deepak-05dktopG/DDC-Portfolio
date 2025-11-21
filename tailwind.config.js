/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: '#0a0a0a', // Deep Black
				foreground: '#f8fafc', // Off-white
				card: {
					DEFAULT: '#111827', // Dark Blue-Grey
					foreground: '#f8fafc'
				},
				popover: {
					DEFAULT: '#0f172a',
					foreground: '#f8fafc'
				},
				primary: {
					DEFAULT: '#00f3ff', // Neon Cyan
					foreground: '#000000'
				},
				secondary: {
					DEFAULT: '#bc13fe', // Neon Purple
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#1e293b',
					foreground: '#94a3b8'
				},
				accent: {
					DEFAULT: '#ff0055', // Hot Pink
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				border: '#1e293b',
				input: '#1e293b',
				ring: '#00f3ff', // Cyan ring
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Orbitron', 'sans-serif'],
			},
			animation: {
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				shine: 'shine var(--duration) infinite linear',
				'background-position-spin': 'background-position-spin 3000ms infinite alternate',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glitch': 'glitch 1s linear infinite',
				'glitch-1': 'glitch-1 2s infinite linear alternate-reverse',
				'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
			},
			keyframes: {
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				},
				'background-position-spin': {
					'0%': {
						backgroundPosition: 'top center'
					},
					'100%': {
						backgroundPosition: 'bottom center'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				glitch: {
					'2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
					'4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
					'62%': { transform: 'translate(0,0) skew(5deg)' },
				},
				'glitch-1': {
					'0%': { clipPath: 'inset(20% 0 80% 0)' },
					'20%': { clipPath: 'inset(60% 0 1% 0)' },
					'40%': { clipPath: 'inset(40% 0 50% 0)' },
					'60%': { clipPath: 'inset(80% 0 5% 0)' },
					'80%': { clipPath: 'inset(10% 0 70% 0)' },
					'100%': { clipPath: 'inset(30% 0 20% 0)' },
				},
				'glitch-2': {
					'0%': { clipPath: 'inset(10% 0 60% 0)' },
					'20%': { clipPath: 'inset(30% 0 20% 0)' },
					'40%': { clipPath: 'inset(10% 0 80% 0)' },
					'60%': { clipPath: 'inset(70% 0 10% 0)' },
					'80%': { clipPath: 'inset(50% 0 30% 0)' },
					'100%': { clipPath: 'inset(20% 0 50% 0)' },
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}


// module.exports = {
//   purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
