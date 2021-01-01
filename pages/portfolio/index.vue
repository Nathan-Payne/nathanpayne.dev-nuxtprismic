<template>
  <div class="px-4 sm:px-8 md:px-16 mt-40 lg:mt-48 xl:mt-56">
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
    <div class="w-screen mt-24 -ml-6 sm:-ml-12 md:-ml-16 relative">
      <gradient-line :location="55" />
    </div>
    <slices-block
      :slices="slices"
      class="mt-56 pb-6 flex flex-col space-y-16 sm:space-y-20 md:space-y-32 lg:space-y-48"
    />
  </div>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'
import {
  portfolioTimeline,
  refreshScrollTrigger,
} from '~/assets/js/animations/pageAnimations'

export default {
  name: 'Portfolio',
  components: { SlicesBlock, GradientBox, GradientLine },
  transition: {
    afterEnter() {
      refreshScrollTrigger()
    },
  },
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
  head: {
    title: 'Portfolio | Nathan Payne development projects',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Portfolio | Nathan Payne UK web developer portfolio | Showcasing some of my work in website design and development',
      },
    ],
  },
}
</script>
