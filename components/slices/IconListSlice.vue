<template>
  <div
    class="xl:w-5/6 py-8 px-4 sm:px-8 md:px-16 ml-0 md:ml-8 lg:ml-16 md:mr-24 lg:mr-32 xl:mr-40"
  >
    <div class="gsap-in">
      <prismic-rich-text :field="slice.primary.section_title" class="gsap-in" />
      <prismic-rich-text
        :field="slice.primary.intro_paragraph"
        class="mt-6 gsap-in"
      />
    </div>
    <div v-for="(item, index) in slice.items" :key="slice.slice_type + index">
      <div
        class="w-full mt-12 md:mt-16 flex flex-col md:flex-row items-center gsap-in"
      >
        <div
          aria-hidden="true"
          class="w-full md:w-1/5 grid place-items-start md:place-items-center"
        >
          <!-- <prismic-rich-text :field="item.icon" class="w-16" /> -->
          <div
            class="w-full xl:flex xl:justify-center"
            v-html="item.icon[0].text"
          ></div>
        </div>
        <prismic-rich-text
          :field="item.icon_text"
          class="w-full md:w-4/5 mt-2 md:mt-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconListSlice',
  props: {
    slice: {
      type: Object,
      default: () => ({ primary: {} }),
    },
  },
}
</script>
