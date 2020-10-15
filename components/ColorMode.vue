<template>
  <div>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round" @click="changeMode"></span>
    </label>
    <!-- <button
      class="px-3 py-1 rounded-md focus:outline-none border border-dgrey dark:border-white hover:bg-dblue hover:text-white"
      @click="changeMode"
    >
      {{ btnLabel }}
    </button> -->
  </div>
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

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 16px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 0px;
  bottom: 0px;
  background-color: #5e5f5f;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2e2f2f;
}

input:checked + .slider:before {
  -webkit-transform: translateX(23px);
  -ms-transform: translateX(23px);
  transform: translateX(23px);
  background-color: #5e5f5f;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
