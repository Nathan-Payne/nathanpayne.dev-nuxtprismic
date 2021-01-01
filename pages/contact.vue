<template>
  <section
    id="contact"
    role="form"
    class="px-4 sm:px-8 md:px-16 mt-32 md:mt-40 lg:mt-48 xl:mt-56 relative"
    aria-label="Contact Information"
  >
    <gradient-line :location="20" />

    <div class="w-full md:w-2/5 mt-40 sm:mt-0 relative overflow-hidden">
      <h1 class="font-thin text-dgrey dark:text-white leading-tight">
        Contact
      </h1>
      <gradient-box />
    </div>
    <div class="max-w-6xl sm:px-4 md:px-12 lg:px-32 mt-16 sm:mt-6 mx-auto">
      <div class="mt-32">
        <p class="py-8 sm:px-4 lg:w-2/3">
          Get in touch for a free introductory meeting.
        </p>
      </div>
      <form
        id="contact-form"
        ref="contactForm"
        class="flex flex-wrap"
        aria-label="Contact Form"
        @submit.prevent="sendEmail"
      >
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
        <div class="p-2 mt-6 md:mt-10 w-full">
          <button
            type="submit"
            class="mx-auto py-2 px-6 flex uppercase font-black lg:text-xl tracking-widest dark:bg-lgrey shadow-md rounded border-l-4 border-dblue dark:border-dred focus:outline-none dark-hover:bg-dred hover:bg-dblue hover:text-white transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            send
          </button>
        </div>
      </form>
      <div
        v-if="emailSent"
        id="success-msg"
        class="p-4 mt-6 font-extrabold bg-green-400 dark:bg-green-600 rounded shadow-lg transition duration-200 ease-in-out"
      >
        Looking forward to working with you! I aim to respond within a couple of
        days but feel free to contact me on Linkedin if you haven't heard
        anything.
      </div>
      <div
        v-if="emailNotSent"
        id="err-msg"
        class="p-4 mt-6 font-extrabold bg-dred rounded shadow-lg transition duration-200 ease-in-out"
      >
        There was an error sending your email: {{ emailError }}
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'
import { refreshScrollTrigger } from '~/assets/js/animations/pageAnimations'

export default {
  name: 'Contact',
  components: {
    GradientBox,
    GradientLine,
  },
  transition: {
    afterEnter() {
      refreshScrollTrigger()
    },
  },
  data() {
    return {
      emailRes: null,
      emailSent: false,
      emailError: null,
      emailNotSent: false,
    }
  },
  computed: {
    emailResult() {
      return this.emailRes
    },
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          'gmail',
          'nathanpayne_dev',
          e.target,
          'user_3ZA63LlJVcLX4yKvKnU8Y'
        )
        this.emailSent = true
        this.resetForm()
      } catch (error) {
        this.emailError = error
        this.emailNotSent = true
      }
    },
    resetForm() {
      this.$refs.contactForm.reset()
    },
  },
  head: {
    title: 'Contact | Nathan Payne web developer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Get in touch with Nathan Payne a UK Web Developer delivering high performance, mobile friendly websites with a user experience tailored to business needs',
      },
    ],
  },
}
</script>
