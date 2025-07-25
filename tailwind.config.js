/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF7E6',
          100: '#FFE9B3',
          200: '#FFDB80',
          300: '#FFCD4D',
          400: '#F2B42D', // Main accent color
          500: '#E6A61A',
          600: '#CC9317',
          700: '#B38014',
          800: '#996D11',
          900: '#805A0E',
        },
        dark: {
          50: '#E6E6FF',
          100: '#B3B3FF',
          200: '#8080FF',
          300: '#4D4DFF',
          400: '#3333FF',
          500: '#1A1AFF',
          600: '#0000E6',
          700: '#0000CC',
          800: '#0000B3',
          900: '#00002E', // Main background color
          950: '#000029',
        },
        success: {
          50: '#E8F5E9',
          500: '#4CAF50',
          900: '#1B5E20',
        },
        warning: {
          50: '#FFF8E1',
          500: '#FFC107',
          900: '#FF6F00',
        },
        error: {
          50: '#FFEBEE',
          500: '#F44336',
          900: '#B71C1C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '8': '2rem',
        '16': '4rem',
        '32': '8rem',
        '64': '16rem',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 8px 16px rgba(0, 0, 0, 0.12)',
        'lg': '0 16px 32px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};