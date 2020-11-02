<template>
  <div>
    <HeaderPrismic />
    <ColorMode class="mt-4 mr-4 absolute top-0 right-0 z-50" />
    <main>
      <Nuxt />
    </main>
    <NuxtFooter />
  </div>
</template>

<script>
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import NuxtFooter from '~/components/NuxtFooter.vue'

export default {
  components: {
    HeaderPrismic,
    NuxtFooter,
  },
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  },
}
</script>

<style>
:root {
  /* scroll-behavior: smooth; */
  overflow-x: hidden;
  touch-action: manipulation;
}

html {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.dark-mode {
  @apply text-white bg-dgrey transition-colors duration-500 ease-in-out;
}

.light-mode {
  @apply text-dgrey bg-white transition-colors duration-500 ease-in-out;
}

h1 {
  font-size: clamp(2.2rem, 4.4vw, 3.6rem);
  font-weight: 900;
  line-height: 3rem;
}
h2 {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 600;
  line-height: 2.8rem;
}
h3 {
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  font-weight: 600;
}
h4 {
  font-size: clamp(1.5rem, 2.75vw, 2.25rem);
  font-weight: 600;
}
h5 {
  font-size: clamp(1.3rem, 2.4vw, 2rem);
  font-weight: 600;
}
h6 {
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  font-weight: 600;
}
p {
  font-size: clamp(0.9rem, 1.6vw, 1.08rem);
  font-weight: 400;
}
section {
  width: 100%;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.1s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}

.animated {
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); */
  overflow: hidden;
}
.animated:after {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff1d00, #4206c2);
  transform: scaleX(0);
  transform-origin: left;
  z-index: 25;
}
.animated:before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #1e1f1f 2%, #1e1f1f 100%);
  transform-origin: left;
  /* border: 1px solid black; */
}

/* STYLING HIGHLIGHT AND SCROLLBAR IN WEBKIT SUPPORTED BROWSERS */
::selection {
  background: #ff1d00;
}
::-moz-selection {
  background: #ff1d00;
}

::-webkit-scrollbar {
  width: 11px;
}
::-webkit-scrollbar-track {
  background: #1e1f1f;
}
::-webkit-scrollbar-thumb {
  background: #1e1f1f;
  border-radius: 6px;
  border: 1px solid #555;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    140deg,
    #1e1f1f77,
    rgba(85, 85, 85, 0.5),
    #1e1f1f77
  );
}
</style>
