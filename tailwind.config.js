module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        795: '795px',
        534: '534px',
      },
      height: {
        600: '600px',
      },
      backgroundColor: {
        'main-bg': '#010207',
        demo: '#4981f2',
      },
      colors: {
        freeTrial: '#4981f2',
      },
      backgroundImage: {
        'hero-img':
          "url('https://i.pinimg.com/originals/17/2c/7c/172c7c48a00cc47e6fbb3970fb0ba1d4.jpg')",
        primary:
          'linear-gradient(90deg, rgba(89,85,150,1) 0%, rgba(72,72,213,1) 0%, rgba(21,1,29,1) 93%)',
        footer:
          'linear-gradient(90deg, rgba(89,85,150,1) 0%, rgba(72,72,213,1) 62%, rgba(21,1,29,1) 93%)',
      },
      letterSpacing: {
        widest: '0.4em',
        wider: '0.2em',
      },
    },
  },
  plugins: [],
};
