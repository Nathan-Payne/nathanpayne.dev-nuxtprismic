module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        dgrey: 'var(--dgrey)',
        ddgrey: 'var(--ddgrey)',
        lgrey: 'var(--lgrey)',
        llgrey: 'var(--llgrey)',
        dred: 'var(--dred)',
        dblue: 'var(--dblue)',
        lblue: 'var(--lblue)',
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive',
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive',
    ],
    textColor: [
      'dark',
      'dark-hover',
      'dark-active',
      'hover',
      'responsive',
      'group-hover',
    ],
    translate: ['group-hover', 'responsive'],
    scale: ['group-hover', 'hover'],
  },
}
