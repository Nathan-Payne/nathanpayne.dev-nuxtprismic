<template>
  <button class="px-4 py-2 border border-white capitalize" @click="changeMode">
    {{ btnLabel }}
  </button>
</template>

<script>
export default {
  computed: {
    btnLabel() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style></style>
