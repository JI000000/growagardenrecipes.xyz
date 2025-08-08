/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, addUtilities }) {
      // 按钮组件
      addComponents({
        '.btn-primary': {
          background: 'linear-gradient(135deg, #22c55e, #3b82f6)',
          color: 'white',
          padding: '0.875rem 2rem',
          borderRadius: '0.75rem',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          border: 'none',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 20px 40px -12px rgba(34, 197, 94, 0.4)',
          },
          '&:active': {
            transform: 'translateY(0)',
            transition: 'all 100ms ease-out',
          },
        },
        '.btn-secondary': {
          background: 'linear-gradient(135deg, #f97316, #ef4444)',
          color: 'white',
          padding: '0.875rem 2rem',
          borderRadius: '0.75rem',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          border: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 20px 40px -12px rgba(249, 115, 22, 0.4)',
          },
        },
        '.hero-card': {
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '2rem',
          padding: '3rem',
          transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-6px) scale(1.02)',
            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.2)',
          },
        },
        '.card-modern': {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          padding: '2rem',
          transition: 'all 300ms ease',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          },
        },
        '.recipe-card': {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '1.5rem',
          padding: '2rem',
          transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          },
        },
        '.nav-glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 300ms ease',
        },
      });

      // 背景渐变
      addUtilities({
        '.bg-gradient-hero': {
          background:
            'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #fff7ed 100%)',
        },
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #22c55e, #3b82f6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(135deg, #f97316, #ef4444)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-game': {
          background: 'linear-gradient(135deg, #22c55e, #16a34a, #3b82f6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });
    },
  ],
};
