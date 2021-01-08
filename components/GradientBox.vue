<template>
  <div>
    <div aria-hidden="true" class="gradient-box" :class="boxName"></div>
    <div
      aria-hidden="true"
      class="w-full bg-white dark:bg-dgrey absolute inset-0 z-20"
      :class="`text-reveal-${boxName}`"
    ></div>
  </div>
</template>

<script>
import { runGradientBox } from '~/assets/js/animations/gradientBox'

export default {
  props: {
    boxName: { type: String, default: 'gradient-box' },
    delay: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    const tl = runGradientBox(this.boxName)
    setTimeout(() => {
      tl.play()
    }, this.delay)
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
