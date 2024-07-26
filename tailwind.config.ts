import { type Config } from 'tailwindcss';

export default {
  content: [
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    purge: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    extend: {
      fontFamily: {
        Elaine: ['Elaine Sans', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(58, 0, 229)',
        'primary-dark': 'rgb(48, 0, 188)',
        secondary: 'rgb(34, 197, 94)',
        'secondary-dark': 'rgb(24, 167, 75)',
        'red-600': 'rgb(220, 38, 38)',
        'red-700': 'rgb(185, 28, 28)',
        'green-600': 'rgb(34, 197, 94)',
        'green-700': 'rgb(22, 163, 74)',
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
} satisfies Config;
