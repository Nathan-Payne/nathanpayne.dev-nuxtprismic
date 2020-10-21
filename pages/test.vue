<template>
  <main>
    <section
      class="h-screen px-4 sm:px-8 md:px-16 flex flex-col justify-center"
    >
      <prismic-rich-text :field="pageTitle" />
      <prismic-image :field="pageImage" class="w-20 h-20 rounded-full" />
      <prismic-rich-text :field="subtitle" />
      <prismic-rich-text :field="subtitleText" />
      <!-- <p>{{ href }}</p> -->
    </section>
    <slices-block :slices="slices" />
  </main>
</template>

<script>
import SlicesBlock from '../components/SlicesBlock.vue'
export default {
  name: 'Test',
  components: {
    SlicesBlock,
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getByUID('page', 'test')).data
      const href = (await $prismic.api.getByUID('page', 'test')).href
      const pageTitle = document.page_title
      const pageImage = document.page_image
      const subtitle = document.subtitle
      const subtitleText = document.subtitle_text

      const slices = document.body
      return {
        document,
        href,
        pageTitle,
        pageImage,
        subtitle,
        subtitleText,
        slices,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
