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
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

