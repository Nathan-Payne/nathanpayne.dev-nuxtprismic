<template>
  <div class="px-4 sm:px-8 md:px-16 grid gap-4 grid-cols-1 md:grid-cols-2">
    <div v-for="(img, index) in slice.items" :key="'img_grid' + index">
      <responsive-picture :field="img.repeatable_image" />
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
}
</script>
