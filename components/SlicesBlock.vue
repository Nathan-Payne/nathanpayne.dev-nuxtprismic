<template>
  <div>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice component -->
      <template v-if="slice.slice_type === 'text'">
        <text-slice :slice="slice" />
      </template>
      <!-- Icon list slice component -->
      <template v-else-if="slice.slice_type === 'icon_list1'">
        <icon-list-slice :slice="slice" />
      </template>
      <!-- Icon grid slice component -->
      <template v-else-if="slice.slice_type === 'icon_grid'">
        <icon-grid-slice :slice="slice" />
      </template>
      <!-- Feature section slice component -->
      <template v-else-if="slice.slice_type === 'feature_section'">
        <feature-slice :slice="slice" />
      </template>
    </section>
  </div>
</template>

<script>
const TextSlice = () => import('./slices/TextSlice.vue')
const IconListSlice = () => import('./slices/IconListSlice.vue')
const IconGridSlice = () => import('./slices/IconGridSlice.vue')
const FeatureSlice = () => import('./slices/FeatureSlice.vue')
export default {
  name: 'SlicesBlock',
  components: {
    TextSlice,
    IconListSlice,
    IconGridSlice,
    FeatureSlice,
  },
  props: {
    slices: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
