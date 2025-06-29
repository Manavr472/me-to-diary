/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#0F0F0F',
        'dark-surface': '#1A1A1A',
        'dark-text': '#FFFFFF',
        'dark-text-secondary': '#B3B3B3',
        
        // Light theme colors
        'light-bg': '#FAFAFA',
        'light-surface': '#FFFFFF',
        'light-text': '#1A1A1A',
        'light-text-secondary': '#666666',
        
        // Accent colors for both themes
        'accent-purple': '#8B5FBF',
        'accent-pink': '#E91E63',
        'accent-blue': '#2196F3',
        'accent-green': '#4CAF50',
        'accent-orange': '#FF9800',
        'accent-cyan': '#00BCD4',
        
        // Hypnotic gradient colors
        'gradient-1': '#FF6B6B',
        'gradient-2': '#4ECDC4',
        'gradient-3': '#45B7D1',
        'gradient-4': '#96CEB4',
        'gradient-5': '#FECA57',
        'gradient-6': '#FF9FF3',
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-crimson)', 'Georgia', 'serif'],
        'handwritten': ['var(--font-dancing)', 'cursive'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'morph': 'morph 6s ease-in-out infinite',
        'hypnotic': 'hypnotic 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        morph: {
          '0%, 100%': { 
            'border-radius': '50% 50% 50% 50%',
            'transform': 'scale(1) rotate(0deg)'
          },
          '25%': { 
            'border-radius': '50% 30% 70% 40%',
            'transform': 'scale(1.1) rotate(90deg)'
          },
          '50%': { 
            'border-radius': '30% 70% 50% 50%',
            'transform': 'scale(0.9) rotate(180deg)'
          },
          '75%': { 
            'border-radius': '70% 50% 30% 60%',
            'transform': 'scale(1.05) rotate(270deg)'
          },
        },
        hypnotic: {
          '0%': { 
            'transform': 'rotate(0deg) scale(1)',
            'opacity': '0.3'
          },
          '50%': { 
            'transform': 'rotate(180deg) scale(1.2)',
            'opacity': '0.7'
          },
          '100%': { 
            'transform': 'rotate(360deg) scale(1)',
            'opacity': '0.3'
          },
        },
      },
    },
  },
  plugins: [],
}
