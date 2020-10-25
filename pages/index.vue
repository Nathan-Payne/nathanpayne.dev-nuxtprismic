<template>
  <div class="mx-6 flex flex-col justify-center">
    <section
      class="h-screen w-full sm:w-3/4 md:w-2/3 pb-6 flex flex-col justify-center"
    >
      <h5 v-if="smallTitle" class="text-sm dark:text-gray-400">
        {{ smallTitle }}
      </h5>
      <h1 class="font-normal text-dgrey dark:text-white leading-tight">
        {{ mainTitle }}
      </h1>
      <div v-if="ctaLinkUid" class="w-24 mt-6 inline-block text-center">
        <nuxt-link :to="`/${ctaLinkUid}`"> {{ ctaText }} </nuxt-link>
      </div>
    </section>

    <section>
      <prismic-rich-text :field="sectionTitle" />
      <slices-block :slices="slices" class="mt-8" />
    </section>
  </div>
</template>

<script>
import SlicesBlock from '../components/SlicesBlock.vue'

export default {
  name: 'Home',
  components: {
    SlicesBlock,
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('home')).data
      // const href = (await $prismic.api.getSingle('home')).href
      const smallTitle = document.small_title[0].text
      const mainTitle = document.main_title[0].text
      const ctaText = document.cta_text[0].text
      const ctaLinkUid = document.cta_link.uid
      const sectionTitle = document.section_title

      const slices = document.body
      return {
        document,
        smallTitle,
        mainTitle,
        ctaText,
        ctaLinkUid,
        sectionTitle,
        slices,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
