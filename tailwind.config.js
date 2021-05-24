module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
   
    fontFamily: {
      'sofia': ['Sofia Pro']
    },
    extend: {
      backgroundImage: theme => ({
        'home-bg': "url('/media/home-back.png')",
        'home1-bg': "url('/media/home1.svg')",
        'home-rocket': "url('/media/new-rocket.png')"
      }),
    },
  },
  variants: {},
  plugins: [],
};
