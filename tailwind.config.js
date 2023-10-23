/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'mmd': '992px',
      'lg': '1140px',
    },
    extend: {
     
      container : {
        center : true,
      },
      fontFamily : {
        primary : ['Inter', 'sans-serif'],
      },
      colors : {
        primary : "#FF3811",
        muted : "#737373",
        title : "#151515",
        subTitle : "#444",
      }
    },
  },
  plugins: [],
}

