/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets:[
    require("@radui/ui/themes/tailwind-presets/default.js") 
  ],
  plugins: [],
}

