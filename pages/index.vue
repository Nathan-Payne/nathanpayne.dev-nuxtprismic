<template>
  <div class="mx-6 flex flex-col justify-center">
    <section
      class="h-screen w-full sm:w-3/4 md:w-1/2 pb-6 flex flex-col justify-center"
    >
      <h5 v-if="smallTitle" class="text-sm dark:text-gray-100">
        {{ smallTitle }}
      </h5>
      <h1
        class="text-2xl sm:text-4xl md:text-5xl font-normal text-dgrey dark:text-white leading-tight"
      >
        {{ mainTitle }}
      </h1>
      <!-- <div class="w-24 mt-6 inline-block text-center">
        <nuxt-link :to="`/${ctaLinkUid}`"> {{ ctaText }} </nuxt-link>
      </div> -->
    </section>

    <section class="h-screen">
      <h2>Selected Work</h2>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('home')).data
      const smallTitle = document.small_title[0].text
      const mainTitle = document.main_title[0].text
      const ctaText = document.cta_text[0].text
      const ctaLinkUid = document.cta_link.uid
      return {
        document,
        smallTitle,
        mainTitle,
        ctaText,
        ctaLinkUid,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
