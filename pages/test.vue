<template>
  <main>
    <section
      class="h-screen px-4 sm:px-8 md:px-16 relative flex flex-col justify-center"
    >
      <prismic-rich-text :field="pageTitle" class="w-1/2" />
      <prismic-rich-text :field="subtitle" class="w-1/2" />
      <prismic-rich-text :field="subtitleText" class="w-1/2" />
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
      const subtitle = document.subtitle
      const subtitleText = document.subtitle_text

      const slices = document.body
      return {
        document,
        href,
        pageTitle,
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
