<template>
  <div class="mt-40 bg-gray-200 dark:bg-ddgrey">
    <section class="px-4 sm:px-8 py-16 border-b-2 border-gray-800">
      <h3 class="font-normal tracking-wider">
        Get in touch<span
          class="cursorAnimate text-5xl font-semibold text-dblue dark:text-dred"
          >_</span
        >
      </h3>
    </section>
    <section>
      <div class="px-4 sm:px-8 py-16 flex justify-between items-center">
        <div class="w-1/2 relative group">
          <h2 class="font-bold relative z-20">Nathan Payne</h2>
          <span
            class="absolute inset-0 bg-gradient-to-br from-dred to-dblue transform -translate-x-full group-hover:-translate-x-32 transition duration-300"
          ></span>
        </div>
        <ul
          class="flex flex-col sm:flex-row items-start sm:items-center sm:justify-start sm:space-x-5 space-y-2 sm:space-y-0 tracking-wider text-dgrey dark:text-gray-300"
        >
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
          <li><nuxt-link to="/services">Services</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </div>
    </section>
    <section>
      <div class="px-4 sm:px-8 py-8 flex flex-wrap md:flex-no-wrap">
        <div class="flex flex-wrap justify-start">
          <p class="w-full">
            Short on time? Send me your email and I'll get back to you:
          </p>
          <div class="mt-8 text-dgrey dark:text-white">
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
            <p class="text-gray-600 mt-4 md:mt-8 text-sm xl:text-base">
              Or leave a more detailed question on the contact page.
            </p>
          </div>
        </div>

        <!-- ICONS -->
        <span
          class="w-full sm:w-auto mt-8 md:ml-auto inline-flex justify-center sm:justify-start md:items-center"
        >
          <!-- Github icon -->
          <a
            href="https://github.com/Nathan-Payne"
            target="_blank"
            class="dark:text-white text-dgrey dark-hover:text-dred hover:text-dblue transition-colors duration-300 ease-in-out cursor-pointer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              class="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              />
            </svg>
          </a>

          <!-- Facebook Icon -->
          <!-- <a
              class="dark:text-white text-dgrey dark-hover:text-dred hover:text-dblue transition-colors duration-300 ease-in-out cursor-pointer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a> -->
          <!-- Linkdin Icon -->
          <a
            href="https://www.linkedin.com/in/nathanpayne-dev"
            target="_blank"
            class="ml-3 dark:text-white text-dgrey dark-hover:text-dred hover:text-dblue transition-colors duration-300 ease-in-out cursor-pointer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              class="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a
            class="dark:text-white text-dgrey dark-hover:text-dred hover:text-dblue transition-colors duration-300 ease-in-out cursor-pointer"
          >
            <div class="flex ml-2">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                class="w-6 h-10"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5"
                />
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                class="w-6 h-10 transform -translate-x-2"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4l6 16l6 -16" />
              </svg>
            </div>
          </a>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'NuxtFooter',
  mounted() {
    gsap.to('.cursorAnimate', {
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1,
      duration: 1.3,
    })
  },
}
</script>

<style scoped></style>
