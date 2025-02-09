module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Keep your custom font
        openSans: ['OpenSans', 'sans-serif'], // Keep your custom font
      },
      screens: {
        xs: '336px', // Custom breakpoint for extra-small screens
        sm: '640px', // Default sm size
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.2s ease-out',
      },
    },
  },
  plugins: [],
};
