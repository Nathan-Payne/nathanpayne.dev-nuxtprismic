<template>
  <div class="mx-6 flex flex-col justify-center">
    <section
      class="h-screen w-full sm:w-3/4 md:w-2/3 pb-20 flex flex-col justify-center"
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

    <gradient-line :location="80" />

    <section>
      <prismic-rich-text id="section-title" :field="sectionTitle" />
      <slices-block :slices="slices" class="mt-12" />
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SlicesBlock from '~/components/SlicesBlock.vue'
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  components: {
    SlicesBlock,
    GradientBox,
    GradientLine,
  },
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
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#section-title',
          start: 'top 65%',
        },
      })
      .from('#section-title', {
        opacity: 0,
        x: 200,
        duration: 0.6,
        ease: 'power4.out',
      })
      .from(
        '.project-container',
        {
          opacity: 0,
          duration: 0.6,
          ease: 'power4.out',
        },
        '<0.2'
      )
      .from(
        '.project-title',
        { x: -100, duration: 1.2, ease: 'power4.out' },
        '<'
      )
      .from(
        '.project-category',
        { x: 100, duration: 0.8, ease: 'power4.out' },
        '<'
      )
      .from(
        '.project-image',
        {
          x: 200,
          transformOrigin: 'right',
          scaleX: 0.7,
          opacity: 0,
          duration: 1.2,
          ease: 'back.out(1)',
        },
        '<'
      )
      .from(
        '.project-link',
        { y: 100, duration: 0.8, ease: 'power4.out' },
        '<0.1'
      )
  },
}
</script>
