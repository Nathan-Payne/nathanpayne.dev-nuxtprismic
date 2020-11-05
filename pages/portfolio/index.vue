<template>
  <div class="px-4 sm:px-8 md:px-16 mt-24">
    <div v-if="mainTitle[0].text !== 'Portfolio'">
      <prismic-rich-text :field="mainTitle" />
      <gradient-box />
    </div>
    <div v-else class="w-full md:w-2/5 relative overflow-hidden">
      <h1 class="font-normal text-dgrey dark:text-white leading-tight">
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SlicesBlock from '~/components/SlicesBlock.vue'
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'

gsap.registerPlugin(ScrollTrigger)

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
    const containers = gsap.utils.toArray('.project-container')
    containers.forEach((container, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 60%',
          },
        })
        .from(container, {
          opacity: 0,
          duration: 0.6,
          ease: 'power4.out',
        })
    })
    const categroies = gsap.utils.toArray('.project-category')
    categroies.forEach((category, index) => {
      gsap.from(category, {
        scrollTrigger: {
          trigger: category,
          start: 'top 78%',
        },
        x: 200,
        duration: 0.8,
        ease: 'power4.out',
      })
    })
    const titles = gsap.utils.toArray('.project-title')
    titles.forEach((title, index) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 82%',
        },
        x: -200,
        duration: 1.2,
        ease: 'power4.out',
      })
    })
    const links = gsap.utils.toArray('.project-link')
    links.forEach((link, index) => {
      gsap.from(link, {
        scrollTrigger: {
          trigger: link,
          start: 'top 108%',
        },
        y: 100,
        duration: 0.5,
        ease: 'power4.out',
      })
    })
    const images = gsap.utils.toArray('.project-image')
    images.forEach((image, index) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: 'top 60%',
        },
        x: index % 2 ? 200 : -200,
        transformOrigin: index % 2 ? 'right' : 'left',
        scaleX: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1)',
      })
    })
  },
}
</script>
