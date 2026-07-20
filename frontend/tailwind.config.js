/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core Artelle palette — keep consistent everywhere
        background: '#F6F2EF',
        paper: '#FCFAF7',
        accent: '#CC7A5B',
        blush: '#EFD9D7',
        ink: '#2F2A28',
        border: '#E9E0D8',
      },
      fontFamily: {
        logo: ['"Arizonia"', 'cursive'],
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(47, 42, 40, 0.12)',
        card: '0 6px 20px -6px rgba(47, 42, 40, 0.10)',
        lift: '0 20px 40px -15px rgba(47, 42, 40, 0.22)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flutter: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        flutter: 'flutter 3s ease-in-out infinite',
        sway: 'sway 5s ease-in-out infinite',
      },
      borderRadius: {
        paper: '2px 10px 2px 10px',
      },
    },
  },
  plugins: [],
};
