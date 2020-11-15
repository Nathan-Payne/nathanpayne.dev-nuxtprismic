<template>
  <div class="px-4 sm:px-8 md:px-16 lg:pt-32 flex flex-col md:flex-row">
    <div class="w-full md:w-3/5 mt-4 lg:-mt-40 px-10 flex flex-col space-y-16">
      <div
        v-for="(img, index) in leftImages"
        :key="'img_grid' + index"
        class="shadow-lg"
      >
        <responsive-picture
          v-if="img.repeatable_image.url"
          :field="img.repeatable_image"
        />
      </div>
    </div>
    <div class="w-full md:w-1/2 mt-16 md:mt-4 px-10 flex flex-col space-y-16">
      <div
        v-for="(img, index) in rightImages"
        :key="'img_grid' + index"
        class="shadow-lg"
      >
        <responsive-picture
          v-if="img.repeatable_image.url"
          :field="img.repeatable_image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResponsivePicture from '../ResponsivePicture'

export default {
  name: 'RepeatableImage',
  components: { ResponsivePicture },
  props: {
    slice: {
      type: Object,
      default: () => ({ primary: {} }),
    },
  },
  data() {
    return {
      leftImages: [],
      rightImages: [],
    }
  },
  mounted() {
    this.slice.items.forEach((img, index) => {
      if (index % 2 === 0) {
        this.leftImages.push(img)
      } else {
        this.rightImages.push(img)
      }
    })
  },
}
</script>
