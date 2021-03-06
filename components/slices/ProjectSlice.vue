<template>
  <prismic-link :field="slice.primary.project_link">
    <div
      class="flex flex-col justify-center transform project-container"
      :class="
        imagePosition === 'right'
          ? 'sm:flex-row'
          : 'sm:flex-row-reverse custom-width sm:-translate-x-2'
      "
      @mouseover="projectHover(imagePosition, singleWordProjectTitle)"
      @mouseleave="stopHover(imagePosition, singleWordProjectTitle)"
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
          class="tracking-widest dark:text-gray-500 project-category"
        />
        <prismic-rich-text
          :field="slice.primary.project_title"
          class="mt-1 project-title"
        />
        <prismic-rich-text
          :field="slice.primary.project_link_text"
          class="w-32 mt-2 sm:mt-8 transform bg-clip-text bg-gradient-to-br from-white via-dred to-dblue project-link"
          :class="`project-link-${singleWordProjectTitle}`"
        />
      </article>
      <!-- IMAGE STARTS HERE -->
      <div
        class="max-w-lg md:max-w-2xl xl:max-w-3xl ml-auto mt-8 sm:mt-0 relative flex shadow-md project-image"
      >
        <responsive-picture
          :field="slice.primary.project_image"
          class="relative z-20"
          :class="`gsap-img-${singleWordProjectTitle}`"
        />
        <div
          class="w-full h-full absolute z-10 inset-0 shadow-lg project-image-background"
          :class="`gsap-background-${singleWordProjectTitle}`"
          :style="{ backgroundColor: backgroundColor }"
        ></div>
      </div>
    </div>
  </prismic-link>
</template>

<script>
import ResponsivePicture from '../ResponsivePicture'
import {
  runProjectHover,
  stopProjectHover,
} from '~/assets/js/animations/hovers'

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
  computed: {
    singleWordProjectTitle() {
      return this.slice.primary.project_title[0].text.replace(/[\s&]/g, '') // removes spaces and & from titles
    },
    backgroundColor() {
      return this.slice.primary.background_hover_color
        ? this.slice.primary.background_hover_color
        : '#ff1d00'
    },
  },
  methods: {
    projectHover(imagePosition, projectTitle) {
      runProjectHover(imagePosition, projectTitle)
    },
    stopHover(imagePosition, projectTitle) {
      stopProjectHover(imagePosition, projectTitle)
    },
  },
}
</script>

<style scoped>
/* .custom-width compensates for translating image off page */
.custom-width {
  width: 110vw;
}
</style>
