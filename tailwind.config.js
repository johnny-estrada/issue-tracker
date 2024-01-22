/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

const shapeRendering = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.shape-auto': {
      'shape-rendering': 'auto',
    },
    '.shape-optimize-speed': {
      'shape-rendering': 'optimizeSpeed',
    },
    '.shape-crisp-edges': {
      'shape-rendering': 'crispEdges',
    },
    '.shape-geometric-precision': {
      'shape-rendering': 'geometricPrecision',
    },
  }

  addUtilities(newUtilities)
})

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      custom: ['Poppins', 'sans-serif']
    },
    screens: {
      'lg': '992px'
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), shapeRendering]
}