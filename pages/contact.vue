<template>
  <section
    id="contact"
    role="form"
    class="px-4 sm:px-8 md:px-16 mt-24"
    aria-label="Contact Information"
  >
    <gradient-line :location="44" />

    <div class="w-full md:w-2/5 relative overflow-hidden">
      <h1 class="font-thin text-dgrey dark:text-white leading-tight">
        Contact
      </h1>
      <gradient-box />
    </div>
    <div class="sm:px-4 md:px-12 lg:px-32">
      <div class="mt-32">
        <p class="py-8 sm:px-4 lg:w-2/3">
          Get in touch for a free introductory meeting.
        </p>
      </div>
      <form id="contact-form" class="flex flex-wrap" aria-label="Contact Form">
        <div class="w-full sm:w-1/2 mt-6 sm:px-4">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            autocomplete="given-name"
            class="w-full px-4 py-2 mt-1 bg-transparent border border-dgrey dark:border-gray-600 focus:outline-none"
            type="text"
            required
          />
        </div>
        <div class="w-full sm:w-1/2 mt-6 sm:px-4">
          <label for="email">E-mail</label>
          <input
            id="email"
            name="email"
            autocomplete="email"
            class="w-full px-4 py-2 mt-1 bg-transparent border border-dgrey dark:border-gray-600 focus:outline-none"
            type="email"
            required
          />
        </div>
        <div class="w-full mt-6 sm:px-4">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            autocomplete="off"
            class="w-full h-48 px-4 py-2 mt-1 bg-transparent border border-dgrey dark:border-gray-600 focus:outline-none resize-none block"
            placeholder=""
            required
          ></textarea>
        </div>
        <div
          id="success-msg"
          class="p-4 mt-4 bg-white text-noshadow border border-gray-200 transition duration-200 ease-in-out hidden"
        >
          Looking forward to working with you! I aim to respond within a couple
          of days but feel free to contact me on Linkedin if you haven't heard
          anything.
        </div>
        <div class="p-2 mt-6 md:mt-10 w-full">
          <button
            type="submit"
            class="mx-auto py-2 px-6 flex uppercase font-black lg:text-xl tracking-widest dark:bg-lgrey shadow-md rounded border-l-4 border-dblue dark:border-dred focus:outline-none dark-hover:bg-dred hover:bg-dblue hover:text-white transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            send
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'

export default {
  name: 'Contact',
  components: {
    GradientBox,
    GradientLine,
  },
}
</script>
