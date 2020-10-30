<template>
  <main>
    <prismic-rich-text :field="mainTitle" />
    <slices-block :slices="slices" class="mt-8" />
  </main>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'Portfolio',
  components: { SlicesBlock },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('projects_home')).data
      return {
        document,
        mainTitle: document.main_title,
        slices: document.body,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
