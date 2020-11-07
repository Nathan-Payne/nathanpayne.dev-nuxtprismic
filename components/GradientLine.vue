<template>
  <div>
    <div aria-hidden="true" class="gradient-line" :style="lineLocation"></div>
    <div aria-hidden="true" class="page-line" :style="lineLocation"></div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    location: {
      type: Number,
      default: 80,
    },
  },
  computed: {
    lineLocation() {
      return {
        top: `${this.location}%`,
      }
    },
  },
  mounted() {
    const gradientLineTl = gsap.timeline({ defaults: { ease: 'power1.out' } })
    gradientLineTl
      .fromTo(
        '.gradient-line',
        { xPercent: -100, scaleX: 1, duration: 1 },
        { xPercent: 100, scaleX: 0, autoAlpha: 0, duration: 1.5 },
        0.38
      )
      .from(
        '.page-line',
        { xPercent: -20, scaleX: 0, autoAlpha: 0, duration: 1.2 },
        '<'
      )
      .to('.page-line', { autoAlpha: 0.5, duration: 1 })
  },
}
</script>

<style scoped>
.gradient-line {
  position: absolute;
  top: 80%;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  z-index: 10;
  background: linear-gradient(100deg, var(--dblue), var(--dred));
  transform: scaleX(0.05);
  transform-origin: left;
}
.page-line {
  position: absolute;
  top: 80%;
  right: 0;
  left: 0%;
  bottom: 0;
  width: 100%;
  height: 1px;
  z-index: 9;
  background: var(--llgrey);
  transform-origin: left;
}
</style>
