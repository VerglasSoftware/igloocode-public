/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
			},
			colors: {
				"ic-blue": "#00E8FF",
				"ic-pink": "#FF00F7",
				"ic-purple": "#9255ff",
			},
			gridTemplateColumns: {
				sidebar: "300px auto",
			}, 
			gridTemplateRows: {
				header: "64px auto",
			},
			backgroundColor: ['even'],
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'gradient-shift': 'gradientShift 3s ease infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 5px rgba(147, 85, 255, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(147, 85, 255, 0.8), 0 0 30px rgba(147, 85, 255, 0.6)' },
				},
				gradientShift: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			backdropBlur: {
				xs: '2px',
			},
			borderRadius: {
				'xl': '1rem',
				'2xl': '1.5rem',
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
