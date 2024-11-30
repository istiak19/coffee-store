/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-bg': "url('/src/assets/more/15.jpg')",
        'banner-bg': "url('/src/assets/more/15.jpg')",
        'card-bg': "url('/src/assets/more/1.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

