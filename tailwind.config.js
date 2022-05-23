module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#1d4d8b',
        demo: '#4981f2',
      },
      colors: {
        freeTrial: '#4981f2',
      },
      backgroundImage: {
        'hero-img':
          "url('https://i.pinimg.com/originals/17/2c/7c/172c7c48a00cc47e6fbb3970fb0ba1d4.jpg')",
      },
      letterSpacing: {
        widest: '0.4em',
        wider: '0.2em',
      },
    },
  },
  plugins: [],
};
