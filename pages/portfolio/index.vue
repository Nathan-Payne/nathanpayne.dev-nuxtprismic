<template>
  <div class="px-4 sm:px-8 md:px-16 mt-24">
    <div v-if="mainTitle[0].text !== 'Portfolio'">
      <prismic-rich-text :field="mainTitle" />
    </div>
    <div v-else class="w-full md:w-2/5 relative overflow-hidden">
      <h1 class="font-normal text-dgrey dark:text-white leading-tight">
        Portfolio
      </h1>
      <div aria-hidden="true" class="gradient-box"></div>
      <div
        aria-hidden="true"
        class="text-reveal w-full bg-white dark:bg-dgrey absolute inset-0 z-30"
      ></div>
    </div>
    <slices-block
      :slices="slices"
      class="mt-32 flex flex-col space-y-16 sm:space-y-20 md:space-y-32 lg:space-y-48"
    />
  </div>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import { runGradientBox } from '~/plugins/animations.js'

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
      portfolioTl: null,
    }
  },
  mounted() {
    this.portfolioTl = runGradientBox()
  },
}
</script>
