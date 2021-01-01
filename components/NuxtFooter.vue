<template>
  <div class="mt-40 relative bg-gray-200 dark:bg-ddgrey gsap-footer-section">
    <section class="px-4 sm:px-8 py-16">
      <div>
        <nuxt-link to="/contact"
          ><h3 class="font-normal tracking-wider inline-block">Get in touch</h3>
          <span
            class="cursorAnimate text-5xl font-semibold text-dblue dark:text-dred"
            >_</span
          ></nuxt-link
        >
      </div>
    </section>
    <section class="border-t border-llgrey">
      <nav class="px-4 sm:px-8 py-16 flex justify-between items-center">
        <div class="w-1/2 relative">
          <h2 class="font-bold relative z-20 gsap-footer-logo">Nathan Payne</h2>
        </div>
        <ul
          class="flex flex-col sm:flex-row items-start sm:items-center sm:justify-start sm:space-x-5 space-y-2 sm:space-y-0 tracking-wider text-dgrey dark:text-gray-300"
        >
          <li
            v-for="(navItem, index) in $store.state.menu.header_nav_items"
            :key="navItem.id"
            class="px-2 pr-3 relative overflow-hidden hover:text-white transition-all duration-300 ease-out gsap-footer-link"
            @mouseover="menuHover(index)"
            @mouseleave="stopHover(index)"
          >
            <prismic-link
              :field="navItem.link"
              class="relative z-20 focus:outline-none"
              >{{ navItem.text }}</prismic-link
            >
            <div
              aria-hidden="true"
              class="w-full h-full mx-1 absolute z-10 top-0 left-0 bg-gradient-to-br from-dred to-dblue -translate-more"
              :class="`menu-hover${index}`"
            ></div>
          </li>
        </ul>
      </nav>
    </section>
    <section>
      <div class="px-4 sm:px-8 py-8 flex flex-wrap md:flex-no-wrap">
        <div class="w-full flex flex-wrap justify-between">
          <p class="w-full gsap-footer-email">
            Short on time? Send me your email and I'll get back to you:
          </p>
          <form
            id="quick-contact-form"
            ref="quickContactForm"
            class="mt-8 text-dgrey dark:text-white gsap-footer-email"
            @submit.prevent="sendQuickEmail"
          >
            <label for="email">
              Email:
              <input
                class="w-40 sm:w-64 py-2 px-4 sm:mx-4 mx-1 bg-gray-200 dark:bg-dgrey border border-gray-300 dark:border-gray-800 focus:outline-none shadow-md focus:shadow-lg rounded"
                placeholder="name@email.com"
                type="email"
                name="email"
              />
              <button
                class="py-2 px-6 inline-flex shadow-md hover:shadow-lg border-0 rounded dark:bg-dgrey font-black tracking-wider focus:outline-none dark-hover:bg-dred hover:bg-dblue hover:text-white transition duration-300"
              >
                SEND
              </button>
            </label>
            <p
              class="text-gray-600 mt-4 md:mt-8 text-sm xl:text-base gsap-footer-email"
            >
              Or leave a more detailed question on the contact page.
            </p>
          </form>

          <!-- ICONS -->
          <div class="w-full sm:w-auto mt-6 sm:mt-0 pb-2">
            <SocialIcons />
          </div>
        </div>
      </div>
      <div
        v-if="quickEmailSent"
        class="p-4 mt-6 block font-extrabold bg-green-400 dark:bg-green-600 shadow-lg transition duration-200 ease-in-out"
      >
        Looking forward to working with you! I aim to respond within a couple of
        days but feel free to contact me on Linkedin if you haven't heard
        anything.
      </div>
      <div
        v-if="quickEmailNotSent"
        id="err-msg"
        class="p-4 mt-6 font-extrabold bg-dred shadow-lg transition duration-200 ease-in-out"
      >
        There was an error sending your email: {{ quickEmailError }}
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { runCursorBlink } from '~/assets/js/animations/miscAnimations'
import { runMenuHover, stopMenuHover } from '~/assets/js/animations/hovers'
import { nuxtFooterTimeline } from '~/assets/js/animations/pageAnimations'
import SocialIcons from '~/components/SocialIcons'

export default {
  name: 'NuxtFooter',
  components: {
    SocialIcons,
  },
  data() {
    return {
      quickEmailSent: false,
      quickEmailError: null,
      quickEmailNotSent: false,
    }
  },
  mounted() {
    runCursorBlink('.cursorAnimate')
    nuxtFooterTimeline()
  },
  methods: {
    menuHover(index) {
      runMenuHover(index)
    },
    stopHover(index) {
      stopMenuHover(index)
    },
    sendQuickEmail(e) {
      try {
        emailjs.sendForm(
          'gmail',
          'nathanpayne_dev',
          e.target,
          'user_3ZA63LlJVcLX4yKvKnU8Y'
        )
        this.quickEmailSent = true
        this.resetForm()
      } catch (error) {
        this.quickEmailError = error
        this.quickEmailNotSent = true
      }
    },
    resetForm() {
      this.$refs.quickContactForm.reset()
    },
  },
}
</script>
