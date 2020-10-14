<template>
  <button
    class="px-3 py-1 rounded-md focus:outline-none border border-dgrey dark:border-white hover:bg-dblue hover:text-white"
    @click="changeMode"
  >
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
