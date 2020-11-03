<template>
  <header class="mt-4">
    <p v-if="$store.state.menu === 'Please create a menu document'">
      {{ $store.state.menu }}
    </p>

    <nuxt-link
      to="/"
      class="ml-4 font-black text-lg text-dgrey dark:text-gray-300"
      >{{ $store.state.menu.site_name }}</nuxt-link
    >

    <nav class="mt-12 mr-2 absolute top-0 right-0 z-30 text-right">
      <ul
        class="flex flex-col space-y-1 overflow-hidden text-lg tracking-wider text-dgrey dark:text-gray-300"
      >
        <li
          v-for="(navItem, index) in $store.state.menu.header_nav_items"
          :key="navItem.id"
          class="px-2 relative bg-clip-text dark-hover:text-dgrey hover:text-white text-shadow transition-all duration-300 ease-out"
          @mouseover="menuHover(index)"
          @mouseleave="stopHover(index)"
        >
          <prismic-link :field="navItem.link" class="relative z-20">{{
            navItem.text
          }}</prismic-link>
          <div
            aria-hidden="true"
            class="w-full h-full mx-1 absolute z-10 top-0 left-0 bg-gradient-to-br from-dred to-dblue transform -translate-x-full blur"
            :class="`menu-hover${index}`"
          ></div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { runMenuHover, stopMenuHover } from '~/plugins/animations.js'
export default {
  name: 'HeaderPrismic',
  computed: {
    wordSplit() {
      const splitWord = []
      this.mainWord.split('').forEach((word) => {
        splitWord.push(word)
      })
      return splitWord
    },
  },
  methods: {
    menuHover(index) {
      runMenuHover(index)
    },
    stopHover(index) {
      stopMenuHover(index)
    },
  },
}
</script>

<style>
.blur {
  filter: blur(1px);
}
</style>
