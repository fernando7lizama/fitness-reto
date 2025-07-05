/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      /* ─── Animación “exercise” para el monito ─── */
      keyframes: {
        exercise: {
          '0%, 100%': { transform: 'translateY(0)'    },
          '50%':      { transform: 'translateY(-20%)' },
        },
      },
      animation: {
        /* duración 0.6 s, ease‑out; úsala con className="animate-exercise" */
        exercise: 'exercise 0.6s ease-out',
      },
    },
  },

  plugins: [],
};
