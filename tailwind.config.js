/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'RobotoRegular': ['Roboto-Regular', 'system-ui'],
      'RobotoBold': ['Roboto-Bold', 'system-ui'],
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

