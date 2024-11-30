/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite-react/tailwind'
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'floodplain': ['Floodplain', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'platypi': ['Platypi', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      colors: {
        titulo: '#5A3A22',
        fondo: "#F4F0E5",
        detalles: '#A7A384',
        contraste: '#FFF8E7',
        boton: {
          100: '#F3E6DB',
          200: '#E6D3C1',
          300: '#D9BFA7',
          400: '#C9A17F',
          500: '#B18E6D'
        }
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

