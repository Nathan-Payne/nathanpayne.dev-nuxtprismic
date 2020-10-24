<template>
  <header class="">
    <p v-if="$store.state.menu === 'Please create a menu document'">
      {{ $store.state.menu }}
    </p>
    <nuxt-link to="/">{{ $store.state.menu.site_name }}</nuxt-link>
    <nav class="">
      <ul>
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
