/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add paths to all of your project's component files here
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        principal: '#C0392B', // --cor-principal (Vermelho urgente)
        'acao-suave': '#E74C3C', // Vermelho mais suave da seção #acao
        'texto-claro': '#333333', // --cor-texto
        'destaque-link': '#2980B9', // --cor-destaque (Azul)
        'impacto-fundo': '#FEF3F3', // Fundo item impacto
      },
      // Configuração para fonte Helvetica Neue/Arial
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
