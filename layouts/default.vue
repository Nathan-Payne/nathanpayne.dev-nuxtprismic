<template>
  <div>
    <ColorMode class="mt-4 mr-4 absolute top-0 right-0" />
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
</style>
