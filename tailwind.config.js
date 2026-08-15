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
          DEFAULT: '#E8541F',
          dark: '#B33710',
          light: '#FFD9BE',
        },
        pop: {
          DEFAULT: '#8B5CF6',
          dark: '#6D3FDB',
          light: '#E4D9FF',
        },
        success: {
          DEFAULT: '#1FA365',
          light: '#C9F2DE',
        },
        warning: {
          DEFAULT: '#E8A317',
          light: '#FCE8B8',
        },
        danger: {
          DEFAULT: '#E23B3B',
          light: '#FCD2D2',
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
      backgroundSize: {
        '200': '200% 200%',
      },
      keyframes: {
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bump: {
          '0%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.35)' },
          '60%': { transform: 'scale(0.95)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-2%, 3%) scale(1.05)' },
        },
      },
      animation: {
        gradientPan: 'gradientPan 16s ease-in-out infinite alternate',
        fadeInUp: 'fadeInUp 0.45s cubic-bezier(0.16,1,0.3,1) both',
        bump: 'bump 0.4s ease-out',
        floatSlow: 'floatSlow 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
