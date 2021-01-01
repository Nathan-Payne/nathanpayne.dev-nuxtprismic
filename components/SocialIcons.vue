<template>
  <div class="flex justify-center items-center mt-8">
    <!-- Github icon -->
    <a
      href="https://github.com/Nathan-Payne"
      rel="noopener noreferrer"
      target="_blank"
      class="dark:text-white text-dgrey dark-hover:text-dred hover:text-dblue transition-colors duration-300 ease-in-out cursor-pointer"
      aria-label="link to Github"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        class="w-10 h-10 gsap-social-icon"
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
            rel="noopener noreferrer"
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
      rel="noopener noreferrer"
      target="_blank"
      class="ml-3 dark:text-white text-dgrey dark-hover:text-dred hover:text-dblue transition-colors duration-300 ease-in-out cursor-pointer"
      aria-label="link to LinkedIn"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        class="w-10 h-10 gsap-social-icon"
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
    <nuxt-link
      to="/cv"
      class="dark:text-white text-dgrey dark-hover:text-dred hover:text-dblue transition-colors duration-300 ease-in-out cursor-pointer"
      aria-label="Link to CV"
    >
      <div class="flex ml-2">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          class="w-6 h-10 gsap-social-icon"
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
          class="w-6 h-10 transform -translate-x-2 gsap-social-icon"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 4l6 16l6 -16" />
        </svg>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
