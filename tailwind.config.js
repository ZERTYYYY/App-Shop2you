/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F1',
        paper: '#FFFFFF',
        ink: '#211D1A',
        'ink-soft': '#3A332D',
        muted: '#8A8078',
        border: '#E7DFD3',
        accent: {
          DEFAULT: '#C1552E',
          dark: '#9C3F1F',
          light: '#F3DDCB',
        },
        success: {
          DEFAULT: '#3F7D58',
          light: '#E1EEE4',
        },
        warning: {
          DEFAULT: '#B8862E',
          light: '#F5E9D3',
        },
        danger: {
          DEFAULT: '#B5453A',
          light: '#F5DEDA',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(33,29,26,0.04), 0 8px 24px rgba(33,29,26,0.06)',
        glass: '0 8px 32px rgba(80,50,20,0.14), inset 0 1px 0 rgba(255,255,255,0.35)',
        'glass-lg': '0 16px 48px rgba(80,50,20,0.18), inset 0 1px 0 rgba(255,255,255,0.4)',
      },
    },
  },
  plugins: [],
};
