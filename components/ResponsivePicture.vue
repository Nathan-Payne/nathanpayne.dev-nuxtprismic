<template>
  <picture>
    <source
      :srcSet="`${field.mobile.url}`"
      :alt="`${field.mobile.alt}`"
      media="(max-width: 495px)"
    />
    <source
      :srcSet="`${field.tablet.url}`"
      :alt="`${field.tablet.alt}`"
      media="(max-width: 990px)"
    />
    <source
      :srcSet="`${field.desktop.url}`"
      :alt="`${field.desktop.alt}`"
      media="(max-width: 1980px)"
    />
    <img :src="`${field.url}`" :alt="`${field.alt}`" />
  </picture>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
