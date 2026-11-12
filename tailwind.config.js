/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'didone': ['"Antic Didone"', 'serif'],
      },
      colors: {
        'brand-black': '#010101',
        'body-text': '#5c5c5c',
        'body-dark': '#404040',
        'surface-light': '#f5f5f5',
        'input-bg': '#dedede',
        'input-text': '#615e54',
        'footer-bg': 'rgba(243, 243, 243, 0.9)',
        'footer-border': '#c1c1c1',
        'whatsapp': '#25D366',
        'whatsapp-dark': '#1ebe5d',
      },
      borderRadius: {
        'button': '10px',
        'icon': '16px',
        'input': '17px',
        'card': '20px',
      },
      keyframes: {
        'float-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'bounce-subtle': 'float-bounce 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
