<template>
  <div>
    <div aria-hidden="true" class="gradient-box"></div>
    <div
      aria-hidden="true"
      class="text-reveal w-full bg-white dark:bg-dgrey absolute inset-0 z-30"
    ></div>
  </div>
</template>

<script>
import { runGradientBox } from '~/plugins/animations.js'
export default {
  data() {
    return {
      gradientBoxTimeline: null,
    }
  },
  mounted() {
    this.gradientBoxTimeline = runGradientBox()
  },
}
</script>
