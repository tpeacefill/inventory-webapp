import { Poppins } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      colors: {
        'custom-gray': 'rgba(80, 80, 80, 0.17)',
      },
      backdropBlur: {
        'custom': '1.5px',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        typing: 'typing 2s steps(10, end) forwards',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ['var(--poppins)'],
      },
    },
  },
  plugins: [],
};

export default config;