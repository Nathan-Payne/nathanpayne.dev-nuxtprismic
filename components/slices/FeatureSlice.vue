<template>
  <div class="flex">
    <article class="md:w-1/2 flex flex-col justify-center">
      <prismic-rich-text :field="slice.primary.section_title" />
      <prismic-rich-text :field="slice.primary.section_description" />
      <p>{{ imagePosition }}</p>
    </article>
    <div class="md:w-1/2 flex items-center">
      <template v-if="slice.items.length > 1">
        <div
          v-for="(item, index) in slice.items"
          :key="slice.slice_type + index"
          class=""
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
}
</script>
