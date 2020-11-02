<template>
  <div class="px-4 sm:px-8 md:px-16 mt-24">
    <div v-if="mainTitle[0].text !== 'Portfolio'">
      <prismic-rich-text :field="mainTitle" />
    </div>
    <div v-else>
      <h1 class="font-normal text-dgrey dark:text-white leading-tight">
        Portfolio
      </h1>
    </div>
    <slices-block
      :slices="slices"
      class="mt-32 flex flex-col space-y-16 sm:space-y-20 md:space-y-32 lg:space-y-48"
    />
  </div>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import { runAnimated } from '~/plugins/animations.js'

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
  data() {
    return {
      landingTl: null,
    }
  },
  mounted() {
    this.landingTl = runAnimated()
  },
}
</script>
