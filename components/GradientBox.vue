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

<style>
.gradient-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(100deg, var(--dred), var(--dblue));
  transform: scaleX(0);
  transform-origin: left;
  z-index: 35;
  opacity: 0.9;
}
</style>
