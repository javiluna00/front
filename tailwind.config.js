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
        'floodplain': ['Floodplain', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
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
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

