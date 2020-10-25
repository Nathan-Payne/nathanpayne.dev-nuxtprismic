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
    <nav class="mt-12 mr-4 absolute top-0 right-0 z-30 text-right">
      <ul
        class="flex flex-col space-y-1 text-lg tracking-wider text-dgrey dark:text-gray-300"
      >
        <li
          v-for="navItem in $store.state.menu.header_nav_items"
          :key="navItem.id"
        >
          <prismic-link :field="navItem.link">{{ navItem.text }}</prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPrismic',
}
</script>
