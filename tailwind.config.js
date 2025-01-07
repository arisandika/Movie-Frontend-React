/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary: '#1D1D21',
        light: '#F8F8F8',
        secondary: '#C6C8C8',
        tertiary: '#191A27',
        theme: '#3623A5',
        color: '#E50914',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

