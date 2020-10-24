<template>
  <div class="relative">
    <section
      class="h-screen px-4 sm:px-8 md:px-16 relative flex flex-col justify-center z-20"
    >
      <prismic-rich-text :field="pageTitle" class="w-full md:w-3/4" />
      <prismic-rich-text
        v-if="subtitle"
        :field="subtitle"
        class="w-full max-w-2xl md:w-5/6 mt-32 sm:mt-40 md:mt-48 ml-0 md:ml-8 lg:ml-16"
      />
      <prismic-rich-text
        v-if="subtitleText"
        :field="subtitleText"
        class="w-full max-w-2xl sm:w-2/3 md:w-3/4 ml-0 md:ml-8 lg:ml-16 mt-2"
      />
    </section>
    <!-- OPTIONAL BACKGROUND IMAGE - fullpage darkened/lightened depending on dark mode setting -->
    <div
      v-if="Object.keys(pageImage).length !== 0"
      class="h-screen min-w-full absolute inset-0 bg-white dark:bg-black"
    >
      <prismic-image
        :field="pageImage"
        class="h-screen min-w-full object-cover absolute inset-0 z-10 opacity-25 dark:opacity-50"
      />
    </div>

    <slices-block :slices="slices" />
  </div>
</template>

<script>
import SlicesBlock from '../components/SlicesBlock.vue'

export default {
  name: 'Services',
  components: {
    SlicesBlock,
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getByUID('page', 'services')).data
      // const href = (await $prismic.api.getByUID('page', 'services')).href //for testing https://nathanpaynedev.cdn.prismic.io/api/v2/documents/search?ref=X4jepxAAACIAO-OR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X4c5BRAAACMAY9KB%22%29+%5D%5D
      const pageTitle = document.page_title
      const pageImage = document.page_image
      const subtitle = document.subtitle
      const subtitleText = document.subtitle_text

      const slices = document.body
      return {
        document,
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

<style></style>
