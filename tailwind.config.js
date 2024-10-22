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
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

