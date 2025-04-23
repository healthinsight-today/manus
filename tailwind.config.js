/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93C5FD', // lighter blue
          DEFAULT: '#3B82F6', // blue-500
          dark: '#1D4ED8', // darker blue
        },
        secondary: {
          light: '#A7F3D0', // lighter green
          DEFAULT: '#10B981', // emerald-500
          dark: '#047857', // darker green
        },
        error: {
          light: '#FCA5A5', // lighter red
          DEFAULT: '#EF4444', // red-500
          dark: '#B91C1C', // darker red
        },
        warning: {
          light: '#FDE68A', // lighter yellow
          DEFAULT: '#F59E0B', // amber-500
          dark: '#B45309', // darker yellow
        },
        success: {
          light: '#A7F3D0', // lighter green
          DEFAULT: '#10B981', // emerald-500
          dark: '#047857', // darker green
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 5px 0 rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
