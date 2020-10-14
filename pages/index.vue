<template>
  <div class="h-screen w-1/2 mx-6 flex justify-center flex-col">
    <h5 class="text-sm dark:text-gray-100">{{ smallTitle }}</h5>
    <h1 class="text-5xl font-normal text-dgrey dark:text-white leading-snug">
      {{ mainTitle }}
    </h1>
    <div
      class="w-24 px-4 py-2 mt-6 inline-block text-center rounded-md border border-dgrey dark:border-white"
    >
      <nuxt-link :to="`/${ctaLinkUid}`"> {{ ctaText }} </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = await $prismic.api.getSingle('home')
      const data = document.data
      const smallTitle = data.small_title[0].text
      const mainTitle = data.main_title[0].text
      const ctaText = data.cta_text[0].text
      const ctaLinkUid = data.cta_link.uid
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

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
