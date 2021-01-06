<template>
  <div>
    <HeaderPrismic />
    <ColorMode class="mt-4 mr-4 absolute top-0 right-0 z-50" />
    <main class="overflow-hidden relative">
      <Nuxt />
    </main>
    <NuxtFooter />
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
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
  mounted() {
    this.emailJsInit()
  },
  methods: {
    emailJsInit() {
      emailjs.init('user_3ZA63LlJVcLX4yKvKnU8Y')
    },
  },
}
</script>

<style>
:root {
  touch-action: manipulation;
}

html {
  font-family: 'Nunito Sans', sans-serif; /* 200, 400, 600, 800 weights available */
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
  font-size: clamp(2.2rem, 4.1vw, 4rem);
  font-weight: 800;
  line-height: 3rem;
}
h2 {
  font-size: clamp(2rem, 3.2vw, 3.2rem);
  font-weight: 600;
  line-height: 2.8rem;
}
h3 {
  font-size: clamp(1.6rem, 2.8vw, 2.8rem);
  font-weight: 600;
}
h4 {
  font-size: clamp(1.5rem, 2.6vw, 2.5rem);
  font-weight: 600;
}
h5 {
  font-size: clamp(1.3rem, 2.3vw, 2.2rem);
  font-weight: 600;
}
h6 {
  font-size: clamp(1.15rem, 2vw, 1.8rem);
  font-weight: 600;
}

p,
a,
li,
label {
  font-size: clamp(0.9rem, 1.4vw, 1.35rem);
  font-weight: 400;
}

section {
  width: 100%;
}

.text-shadow {
  text-shadow: 1px 1px 4px rgba(50, 50, 50, 0.5);
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
