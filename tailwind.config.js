module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '411px',
      sm: '540px',
      smd: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        "food-truck": ['food-truck', 'sans-serif'],
        "trade-gothic": ['trade-gothic', 'sans-serif'],
        "trade-gothic-bold": ['trade-gothic-bold', 'sans-serif'],
      },
      colors: {
        primary: '#304E6B',
        secondary: '#F7BE32',
        "highlight-1": '#243746',
        "highlight-2": '#65947E',
        "highlight-3": '#7BAED4',
      },
      gridTemplateRows: {
        '9': 'repeat(9, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '26': 'repeat(26, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '0px 1rem',
          '@screen xs': {
            maxWidth: 'auto',
            margin: '0px auto',
          },
          '@screen sm': {
            maxWidth: '462px',
            margin: '0px auto',
          },

          '@screen smd': {
            maxWidth: '462px',
            margin: '0px auto',
          },
          '@screen md': {
            maxWidth: '750px',
            margin: '0px auto',
            padding: '0px auto',
          },
          '@screen lg': {
            maxWidth: '970px',
            margin: '0px auto',
          },
          '@screen xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },

          '@screen 2xl': {
            maxWidth: '1250px',
            margin: '0px auto',
          },

          '@screen 3xl': {
            maxWidth: '1396px',
            margin: '0px auto',
          },
        },
      });
    },
  ],
}
