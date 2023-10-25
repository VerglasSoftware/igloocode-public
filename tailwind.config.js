/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
