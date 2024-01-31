/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-gray": "#15171c",
        "primary-ligth-gray": "#1e2027",
        "primary-blue": "#333195",
        "primary-light-blue": "#e2dff8",
        "primary-light-red": "#fceded",
        "primary-green": "#1b7f49",
        "primary-orange": "#a3662d",
      },
      colors: {
        "primary-gray":"#4B465C",
        "primary-red":"#EA5455",
        "primary-light-gray":"#1A1D2A",
        "primary-blue": "#7367F0",
      },
    },
  },
  plugins: [],
};
