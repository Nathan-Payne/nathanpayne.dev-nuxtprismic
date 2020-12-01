# nathanpayne.dev/

Statically generated Nuxt portfolio integrating the headless CMS @ Prismic.io, GSAP animations, TailwindCSS and @nuxtjs/color-mode.

## Demo

Site is currently live, hosted via vercel: [nathanpayne.dev/](https://nathanpayne.dev/)

## Usage

### Build Setup

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

### Adapting for new prismic repo

To use the site with a different prsimic data source - add prismic API endpoint to nuxt.config.js and ensure new prismic slices match current configuration.

### Adding new project

On adding a new project the project route should be added to the sitemap in nuxt.config.js

## Development

Like the design and want to contribute? Features and fixes are welcome and can be made via:

- Forking the repo
- Creating a new branch (`git checkout -b <feature-name>`)
- Coding your feature, add/change files
- Adding changes and commit (git commit `<Concise description of changes>`)
- Push to the branch (`git push origin <feature-name>`)
- Creating a Pull request

### Features and Fixes

If you do see something in this project which can be improved feel free to open a new issue, document the problem encountered and conditions required to replicate it or request new functionality via a description of expected inputs, outputs and behavior.

## Built With

- HTML / CSS / JavaScript
- Nuxt.js
- TailwindCSS
- GSAP
- email.js
- prismic-dom

## Built By

[Nathan Payne ](https://nathanpayne.dev/)
