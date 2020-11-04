<template>
  <div class="mx-6 flex flex-col justify-center">
    <section
      class="h-screen w-full sm:w-3/4 md:w-2/3 pb-6 flex flex-col justify-center"
    >
      <h5 v-if="smallTitle" class="text-sm dark:text-gray-400">
        {{ smallTitle }}
      </h5>
      <div class="relative overflow-hidden">
        <h1
          class="relative z-20 font-normal text-dgrey dark:text-white leading-tight"
        >
          {{ mainTitle }}
        </h1>
        <gradient-box />
      </div>
      <div v-if="ctaLinkUid" class="w-24 mt-6 inline-block text-center">
        <nuxt-link :to="`/${ctaLinkUid}`"> {{ ctaText }} </nuxt-link>
      </div>
    </section>

    <section id="selected-project">
      <prismic-rich-text :field="sectionTitle" />
      <slices-block :slices="slices" class="mt-8" />
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SlicesBlock from '~/components/SlicesBlock.vue'
import GradientBox from '~/components/GradientBox'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  components: {
    SlicesBlock,
    GradientBox,
  },
  // transition: {
  //   enter() {
  //     if (this.gradientBoxTl) {
  //       this.gradientBoxTl.tl.restart()
  //     }
  //   },
  //   leave() {},
  // },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('home')).data
      // const href = (await $prismic.api.getSingle('home')).href
      return {
        document,
        smallTitle: document.small_title[0].text,
        mainTitle: document.main_title[0].text,
        ctaText: document.cta_text[0].text,
        ctaLinkUid: document.cta_link.uid,
        sectionTitle: document.section_title,
        slices: document.body,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  mounted() {
    gsap.from('#selected-project', {
      scrollTrigger: {
        trigger: '#selected-project',
        start: 'top 65%',
        // markers: true,
      },
      opacity: 0,
      x: 300,
      duration: 1,
    })
  },
}
</script>
