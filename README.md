# 2020-nathanpayne.dev-prismic-nuxt

Statically generated Nuxt portfolio integrating the headless CMS @ Prismic.io, GSAP animations, TailwindCSS and @nuxtjs/color-mode.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how nuxt works, check out [Nuxt.js docs](https://nuxtjs.org).
For what prismic is/does, check out [Prismic.io](https://prismic.io/)

# TODO

- \_uid.vue - wide screens reduce margin above image gallery (offset left column up using -translate-y), increase gap between images
- default color mode position of switch is wrong so first click doesn't work when loading white screen

- homepage - cta on larger screens
- color behind project images in project slice, set on prismic, animate out on fade in then again on hover
- overlap image (tracebitmap face png) next to about me
- host + domain - update sitemap url in nuxt.config.js
- look into changing default propeeties of elements on initial page load so they dont show (loader?)
- google analytics via gtag data stream
  [https://www.carlcassar.com/articles/add-google-analytics-to-a-nuxt-js-app/](here)
- services
- mobile menu
