<template>
  <div>
    <h1 v-if="pageTitle">{{ pageTitle }}</h1>
    <img v-if="pageImage" src="" alt="" />
    <h3 v-if="subtitle">{{ subtitle }}</h3>
    <p v-if="subtitleText">{{ subtitleText }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getByUID('page', 'services')).data
      // const href = (await $prismic.api.getByUID('page', 'services')).href //for testing https://nathanpaynedev.cdn.prismic.io/api/v2/documents/search?ref=X4jepxAAACIAO-OR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X4c5BRAAACMAY9KB%22%29+%5D%5D
      const pageTitle = document.page_title[0].text
      const pageImage = document.page_image
      const subtitle = document.subtitle[0].text
      const subtitleText = document.subtitle_text[0].text

      // const slices = document.body
      return {
        document,
        pageTitle,
        pageImage,
        subtitle,
        subtitleText,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style></style>
