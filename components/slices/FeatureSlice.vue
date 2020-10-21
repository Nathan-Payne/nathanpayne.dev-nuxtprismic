<template>
  <div
    class="h-screen flex flex-col justify-center"
    :class="imagePosition === 'right' ? 'sm:flex-row' : 'sm:flex-row-reverse'"
  >
    <article
      class="sm:w-1/2 px-4 sm:px-8 md:px-16 md:pb-48 mb-8 flex flex-col justify-center"
    >
      <prismic-rich-text :field="slice.primary.section_title" />
      <prismic-rich-text
        :field="slice.primary.section_description"
        class="mt-8"
      />
    </article>

    <div
      class="max-w-sm md:max-w-lg xl:max-w-xl sm:w-1/2 mx-auto"
      :class="imageCount"
    >
      <template v-if="slice.items.length > 1">
        <div
          v-for="(item, index) in slice.items"
          :key="slice.slice_type + index"
          class="col-span-5 row-span-5 relative rounded-lg shadow-md overflow-hidden"
          :class="{
            'row-start-1 col-start-3 z-10 transform translate-x-4': index == 0,
            'row-start-2 col-start-7 z-20': index == 1,
            'row-start-5 sm:row-start-3 col-start-2 z-10 transform translate-x-4':
              index == 2,
          }"
        >
          <picture>
            <source
              :srcSet="`${item.section_images.mobile.url}`"
              :alt="`${item.section_images.mobile.alt}`"
              media="(max-width: 495px)"
            />
            <source
              :srcSet="`${item.section_images.tablet.url}`"
              :alt="`${item.section_images.tablet.alt}`"
              media="(max-width: 990px)"
            />
            <source
              :srcSet="`${item.section_images.desktop.url}`"
              :alt="`${item.section_images.desktop.alt}`"
              media="(max-width: 1980px)"
            />
            <img
              :src="`${item.section_images.url}`"
              :alt="`${item.section_images.alt}`"
            />
          </picture>
        </div>
      </template>
      <template v-else>
        <div
          v-for="(item, index) in slice.items"
          :key="slice.slice_type + index"
        >
          <picture>
            <source
              :srcSet="`${item.section_images.mobile.url}`"
              :alt="`${item.section_images.mobile.alt}`"
              media="(max-width: 495px)"
            />
            <source
              :srcSet="`${item.section_images.tablet.url}`"
              :alt="`${item.section_images.tablet.alt}`"
              media="(max-width: 990px)"
            />
            <source
              :srcSet="`${item.section_images.desktop.url}`"
              :alt="`${item.section_images.desktop.alt}`"
              media="(max-width: 1980px)"
            />
            <img
              :src="`${item.section_images.url}`"
              :alt="`${item.section_images.alt}`"
            />
          </picture>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureSlice',
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
    imageCount() {
      return {
        'grid grid-cols-12 grid-rows-12 place-items-center':
          this.slice.items.length > 1,
        'flex flex-col sm:flex-row justify-center items-center':
          this.slice.items.length === 1,
      }
    },
  },
}
</script>

<style>
/* label added from prismic - wraps span around text with "space-above" class */
.space-above {
  display: block;
  margin-top: 0.4rem;
}
</style>
