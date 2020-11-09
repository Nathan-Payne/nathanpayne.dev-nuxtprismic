<template>
  <div class="mt-32 py-16 px-4 sm:px-8 md:px-16">
    <prismic-rich-text :field="slice.primary.text" class="gsap-about" />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: {
    slice: {
      type: Object,
      default: () => ({ primary: {} }),
    },
  },
}
</script>
