/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
          'features-bg': "url('./src/assets/pexels-scottwebb-2824173.jpg')",
          'hiw-bg': "url('./src/assets/pexels-scottwebb-2824173.jpg')",
          'faq-bg': "url('./src/assets/pexels-scottwebb-2824173.jpg')" // Update with the correct path to your image
        },
      },
    },
  plugins: [],
}

