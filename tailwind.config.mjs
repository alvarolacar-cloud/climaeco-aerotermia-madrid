/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:    '#003a5c',
        accent:     '#ff5b34',
        secondary:  '#0093c9',
        background: '#ffffff',
        text:       '#333333',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        base: '4px',
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.15', fontWeight: '400' }],
        'h2': ['32px', { lineHeight: '1.25', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '29px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
