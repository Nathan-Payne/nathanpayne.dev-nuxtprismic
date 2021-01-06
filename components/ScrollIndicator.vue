<template>
  <div class="scroll-indicator text-dgrey dark:text-white">
    <svg
      viewBox="0 0 24 24"
      stroke-width="0.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="7" y="4" width="10" height="16" rx="4" />
      <line
        class="scroll-indicator-line"
        stroke-width="2"
        x1="12"
        y1="7"
        x2="12"
        y2="10"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ScrollIndicator',
}
</script>

<style>
.scroll-indicator {
  position: absolute;
  z-index: 49;
  width: 52px;
  height: 60px;
  top: 90vh;
  left: 47%;
  opacity: 0.45;
}
</style>
