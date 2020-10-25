<template>
  <nuxt-link :to="`/services`">
    <div
      class="flex flex-col justify-center relative transform group"
      :class="
        imagePosition === 'right'
          ? 'sm:flex-row'
          : 'custom-width sm:flex-row-reverse sm:-translate-x-24'
      "
    >
      <article
        class="w-full sm:px-2 md:px-4 relative flex flex-col justify-center"
        :class="
          imagePosition === 'right' ? 'items-end text-right' : 'items-start'
        "
      >
        <prismic-rich-text
          :field="slice.primary.project_category"
          class="tracking-widest dark:text-gray-400"
        />
        <prismic-rich-text :field="slice.primary.project_title" class="mt-1" />
        <prismic-rich-text
          :field="slice.primary.project_link_text"
          class="w-32 mt-2 sm:mt-8 group-hover:text-transparent bg-clip-text bg-gradient-to-br from-white via-dred to-dblue transition duration-300"
        />
      </article>
      <!-- IMAGE STARTS HERE -->
      <div
        class="max-w-lg md:max-w-2xl xl:max-w-3xl ml-auto mt-8 sm:mt-0 border border-dgrey group-hover:opacity-75 transition duration-300"
      >
        <picture>
          <source
            :srcSet="`${slice.primary.project_image.mobile.url}`"
            :alt="`${slice.primary.project_image.mobile.alt}`"
            media="(max-width: 495px)"
          />
          <source
            :srcSet="`${slice.primary.project_image.tablet.url}`"
            :alt="`${slice.primary.project_image.tablet.alt}`"
            media="(max-width: 990px)"
          />
          <source
            :srcSet="`${slice.primary.project_image.desktop.url}`"
            :alt="`${slice.primary.project_image.desktop.alt}`"
            media="(max-width: 1980px)"
          />
          <img
            :src="`${slice.primary.project_image.url}`"
            :alt="`${slice.primary.project_image.alt}`"
          />
        </picture>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProjectSlice',
  props: {
    slice: {
      type: Object,
      default: () => ({ primary: {} }),
    },
  },
  data() {
    return {
      imagePosition: this.slice.primary.image_placement,
    }
  },
}
</script>

<style scoped>
/* .custom-width compensates for translating image off page */
.custom-width {
  width: 110vw;
}
</style>
