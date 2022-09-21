/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			dark: '#0f172a',
			grey: '#64748b',
			youtube: '#ff0000',
			facebook: '#3b5998',
			instagram: '#e4405f',
			whatsapp: '#4fce5d',
			linkedin: '#0e76a8',
		},
	},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["autumn"],
  },
}
