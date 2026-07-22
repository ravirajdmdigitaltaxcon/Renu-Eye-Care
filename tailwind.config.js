
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#008B8B',
          light: '#00B8A9',
        },
        brand: {
          primary: '#008B8B',
          secondary: '#00B8A9',
          dark: '#1F2937',
          bg: '#F8FAFC',
          section: '#E6F7F8',
          sky: '#7DD3FC',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        btn: ['Poppins', 'sans-serif'],
        num: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        btn: '12px',
        input: '14px',
        img: '24px',
      },
      boxShadow: {
        glass: '0 20px 50px rgba(0,0,0,0.08)',
        float: '0 10px 30px rgba(0,139,139,0.15)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

