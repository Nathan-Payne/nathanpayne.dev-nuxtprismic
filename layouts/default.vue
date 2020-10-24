<template>
  <div>
    <ColorMode class="mt-4 mr-4 absolute top-0 right-0 z-50" />
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;900&display=swap');
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
  font-size: 3rem;
  font-weight: 900;
  line-height: 3rem;
}
h2 {
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 2.8rem;
}
h3 {
  font-size: 1.875rem;
  font-weight: 600;
}
h4 {
  font-size: 1.5rem;
  font-weight: 600;
}
h5 {
  font-size: 1.25rem;
  font-weight: 600;
}
h6 {
  font-size: 1.125rem;
  font-weight: 600;
  /* margin-bottom: 0.35rem; */
}
section {
  width: 100%;
}
</style>
