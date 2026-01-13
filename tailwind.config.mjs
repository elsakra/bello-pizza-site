/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        'brand-red': '#E53E3E',
        'warm-gray': '#F7F5F3'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out'
      }
    },
  },
  plugins: [],
}