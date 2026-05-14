/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        black: '#030305',
        'deep-black': '#08080f',
        purple: {
          900: '#0d0520',
          800: '#1a0a3d',
          700: '#2d0f5e',
          600: '#4a1b8a',
          500: '#6b2fb5',
          400: '#8b45d4',
          300: '#a855f7',
          200: '#c084fc',
          100: '#e9d5ff',
        },
        blue: {
          900: '#020818',
          800: '#051a38',
          700: '#0a2f5e',
          600: '#1045a0',
          500: '#1a5fd4',
          400: '#3b82f6',
          300: '#60a5fa',
          200: '#93c5fd',
          electric: '#00d4ff',
        },
        gold: '#f5c842',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #030305 0%, #0d0520 40%, #051a38 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(107,47,181,0.15) 0%, rgba(26,95,212,0.15) 100%)',
        'cta-gradient': 'linear-gradient(90deg, #6b2fb5, #1a5fd4, #6b2fb5)',
        'text-gradient': 'linear-gradient(135deg, #a855f7 0%, #60a5fa 50%, #00d4ff 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'text-shimmer': 'textShimmer 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(107,47,181,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(107,47,181,0.8), 0 0 100px rgba(26,95,212,0.4)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(107,47,181,0.5)',
        'glow-blue': '0 0 30px rgba(26,95,212,0.5)',
        'glow-electric': '0 0 30px rgba(0,212,255,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
