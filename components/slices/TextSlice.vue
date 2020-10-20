<template>
  <div class="py-20 px-16">
    <prismic-rich-text :field="slice.primary.text" />
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
