/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-aerial': "url('/photos/frankie-lopez-t3wdraaj72Q-unsplash.jpg')",
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          DEFAULT: '#576681',
          foreground: '#ffffff',
          hover: '#48566d',
          deep: '#2e3544',
          'deep-border': '#3a4152',
          'deep-surface': '#353c4d',
          'deep-surface-hover': '#414958',
        },
      },
      maxWidth: {
        prose: '65ch',
      },
      boxShadow: {
        card:
          '0 2px 8px -2px rgb(28 25 23 / 0.06), 0 16px 40px -12px rgb(28 25 23 / 0.1)',
        ambient:
          '0 2px 12px -4px rgb(28 25 23 / 0.05), 0 24px 48px -20px rgb(28 25 23 / 0.08)',
        nav: '0 8px 32px -8px rgb(28 25 23 / 0.1), 0 2px 8px -4px rgb(28 25 23 / 0.04)',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};
