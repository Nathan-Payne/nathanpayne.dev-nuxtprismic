<template>
  <prismic-link :field="slice.primary.project_link">
    <div
      class="flex flex-col justify-center transform group"
      :class="
        imagePosition === 'right'
          ? 'sm:flex-row'
          : 'sm:flex-row-reverse custom-width sm:-translate-x-24'
      "
    >
      <article
        class="w-full sm:px-2 md:px-4 relative flex flex-col justify-center"
        :class="
          imagePosition === 'right'
            ? 'sm:items-end sm:text-right'
            : 'items-start'
        "
      >
        <prismic-rich-text
          :field="slice.primary.project_category"
          class="tracking-widest dark:text-gray-500"
        />
        <prismic-rich-text :field="slice.primary.project_title" class="mt-1" />
        <prismic-rich-text
          :field="slice.primary.project_link_text"
          class="w-32 mt-2 sm:mt-8 group-hover:text-transparent transform group-hover:scale-105 bg-clip-text bg-gradient-to-br from-white via-dred to-dblue transition duration-300"
          :class="
            imagePosition === 'right'
              ? 'group-hover:-translate-x-2'
              : 'group-hover:translate-x-2'
          "
        />
      </article>
      <!-- IMAGE STARTS HERE -->
      <div
        class="max-w-lg md:max-w-2xl xl:max-w-3xl ml-auto mt-8 sm:mt-0 border border-dgrey group-hover:opacity-75 transition duration-300"
      >
        <responsive-picture :field="slice.primary.project_image" />
      </div>
    </div>
  </prismic-link>
</template>

<script>
import ResponsivePicture from '../ResponsivePicture'
export default {
  name: 'ProjectSlice',
  components: { ResponsivePicture },
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
