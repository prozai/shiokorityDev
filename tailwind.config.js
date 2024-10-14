/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can add additional customizations here if needed
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Add the typography plugin here
  ],
}
