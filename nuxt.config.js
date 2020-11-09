export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Nathan Payne Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Nathan Payne | UK Web Developer | I aim to deliver high performance, mobile friendly websites with a user experience tailored to business needs',
      },
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;800&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/prismic',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['gsap'], // may need for server side rendering
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  prismic: {
    endpoint: 'https://nathanpaynedev.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  purgeCSS: {
    whitelist: ['dark-mode'],
  },
}
