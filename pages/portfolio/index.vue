<template>
  <div class="px-4 sm:px-8 md:px-16 mt-24">
    <div v-if="mainTitle[0].text !== 'Portfolio'">
      <prismic-rich-text :field="mainTitle" />
      <gradient-box />
    </div>
    <div v-else class="w-full md:w-2/5 relative overflow-hidden">
      <h1 class="font-thin text-dgrey dark:text-white leading-tight">
        Portfolio
      </h1>
      <gradient-box />
    </div>
    <gradient-line :location="45" />
    <slices-block
      :slices="slices"
      class="mt-48 flex flex-col space-y-16 sm:space-y-20 md:space-y-32 lg:space-y-48"
    />
  </div>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'
import { portfolioTimeline } from '~/plugins/animations/pageAnimations'

export default {
  name: 'Portfolio',
  components: { SlicesBlock, GradientBox, GradientLine },
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
  mounted() {
    portfolioTimeline()
  },
}
</script>
