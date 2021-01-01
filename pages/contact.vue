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

    <section class="mt-64 lg:flex justify-start lg:items-start">
      <!-- RIGHT SIDE OF CONTACT PAGE -->
      <div class="lg:w-full mb-12 pt-5 lg:pr-16 lg:order-2 text-right">
        <h2 class="tracking-wider leading-tight gsap-contact-info">
          Have a project in mind?
        </h2>
        <h5 class="mt-6 md:mt-8 relative font-thin gsap-contact-info">
          Get in touch for a free introductory meeting.
        </h5>
        <p class="mt-4 md:mt-6 gsap-contact-info">
          If you have some ideas tell me about your future website:
        </p>
        <ul class="gsap-contact-info">
          <li class="mt-2">What are your goals and expectations?</li>
          <li class="mt-2">What challenges do you need to solve?</li>
          <li class="mt-2">Do you need custom assets?</li>
          <li class="mt-2">Are you working to a specific deadline?</li>
        </ul>
      </div>

      <!-- LEFT SIDE OF CONTACT PAGE -->
      <div class="lg:w-3/4 max-w-3xl">
        <form
          id="contact-form"
          ref="contactForm"
          class="flex flex-wrap gsap-contact-form"
          aria-label="Contact Form"
          @submit.prevent="sendEmail"
        >
          <div class="w-full">
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
          <div class="w-full mt-8">
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
          <div class="w-full mt-8">
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
          <div class="p-2 mt-8 md:mt-10 w-full">
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
          Looking forward to working with you! I aim to respond within a couple
          of days but feel free to contact me on Linkedin if you haven't heard
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
  </section>
</template>

<script>
import emailjs from 'emailjs-com'
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'
import {
  refreshScrollTrigger,
  contactFormTimeline,
} from '~/assets/js/animations/pageAnimations'

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
  mounted() {
    contactFormTimeline()
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

<style scoped>
#contact h5:before {
  content: '';
  width: 92%;
  height: 25%;
  position: absolute;
  top: 70%;
  left: 17%;
  background: linear-gradient(
    135deg,
    transparent 4%,
    var(--dred),
    var(--dblue),
    transparent 99%
  );
  opacity: 0.5;
}

#contact h2 {
  font-size: clamp(2.5rem, 3.4vw, 4.5rem);
  font-weight: 800;
}

@media (max-width: 441px) {
  #contact h5:before {
    top: 96%;
    height: 15%;
  }
}
</style>
