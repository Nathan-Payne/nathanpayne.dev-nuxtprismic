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

# Adapting for new prismic repo

Add prismic API endpoint to nuxt.config.js

# Adding new project

Need to add new project route to sitemap in nuxt.config.js

# TODO

- overlap image next to about me
- check \$prismic parsing tools (e.g. asText(document.title), asHtml()) documentations to use with nuxt
- social media icons on landing? more stuff in general on landing.. perhaps animation/texture?
- add blog (e.g. reflecting on web dev bootcamp.. etc)
- google analytics via gtag data stream
  [https://www.carlcassar.com/articles/add-google-analytics-to-a-nuxt-js-app/](here)
- services pricing
- mobile menu overlay if needed
