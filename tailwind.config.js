/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: '1135px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      md: {
        max: '1135px'
      },
      ml: {
        max: '767px'
      },
      mp: {
        max: '639px'
      },
      xs: {
        max: '474px'
      }
    },
    container: {
      center: true
    },
    extend: {

    },
  },
  plugins: [
      require("@tailwindcss/typography"),
  ],
};
