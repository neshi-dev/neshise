/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#111216',
        pearl: '#fbfaf7',
        mist: '#eef3f8',
        gold: {
          pale: '#f8edc4',
          light: '#ecd889',
          DEFAULT: '#caa54a',
          deep: '#8b6c24'
        },
        hologram: {
          cyan: '#6ee7f9',
          blue: '#7aa7ff',
          violet: '#b794ff',
          rose: '#ff9de2'
        }
      },
      boxShadow: {
        soft: '0 22px 70px rgba(17, 18, 22, 0.08)',
        holo: '0 24px 80px rgba(110, 231, 249, 0.24), 0 12px 48px rgba(183, 148, 255, 0.18)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' }
        }
      },
      animation: {
        shimmer: 'shimmer 5s ease infinite',
        float: 'float 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
