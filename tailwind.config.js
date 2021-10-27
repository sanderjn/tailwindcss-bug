module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  purge: ['**/*.{js,html}'],
}