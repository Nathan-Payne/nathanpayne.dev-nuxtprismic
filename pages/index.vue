<template>
  <div class="px-4 sm:px-8 md:px-16 flex flex-col justify-center">
    <div
      class="w-full h-full absolute inset-0 z-50 bg-dgrey gsap-init-overlay"
    ></div>
    <section
      class="h-screen w-full sm:w-3/4 lg:w-3/5 pb-20 relative flex flex-col justify-center"
    >
      <h5 v-if="smallTitle" class="text-sm dark:text-gray-400">
        {{ smallTitle }}
      </h5>
      <div
        class="p-4 relative z-30 dark:bg-transparent bg-white bg-opacity-25 backdrop-filter transition-colors duration-300 ease-in-out"
      >
        <div class="relative z-20 overflow-hidden">
          <h1 class="font-thin text-dgrey dark:text-white leading-tight">
            {{ mainTitle }}
          </h1>
          <gradient-box :box-name="'first-box'" :delay="0" />
        </div>
        <div class="relative z-20 overflow-hidden">
          <h1 class="font-thin text-dgrey dark:text-white leading-tight">
            {{ mainTitleSecondLine }}
          </h1>
          <gradient-box :box-name="'second-box'" :delay="450" />
        </div>
      </div>
      <div v-if="ctaLinkUid" class="w-24 mt-6 inline-block text-center">
        <nuxt-link :to="`/${ctaLinkUid}`"> {{ ctaText }} </nuxt-link>
      </div>
    </section>

    <div
      class="h-screen w-full absolute inset-0 z-10 opacity-0 bg-dgrey canvas-overlay"
    ></div>
    <div v-if="renderThree" class="render-wrapper">
      <LandingRender />
    </div>

    <div class="social-icon-position">
      <SocialIcons />
    </div>
    <gradient-line :location="37" />
    <scroll-indicator />

    <section>
      <prismic-rich-text id="section-title" :field="sectionTitle" />
      <slices-block :slices="slices" class="mt-12" />
    </section>
  </div>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import GradientBox from '~/components/GradientBox'
import GradientLine from '~/components/GradientLine'
import ScrollIndicator from '~/components/ScrollIndicator'
import SocialIcons from '~/components/SocialIcons'
import LandingRender from '~/components/LandingRender'
import {
  runInitOverlayReveal,
  runSocialTween,
  runLandingRenderIntro,
  runScrollIndicatorEntry,
  runScrollIndicatorExit,
  homeProjectTimeline,
  homeAboutTimeline,
  refreshScrollTrigger,
} from '~/assets/js/animations/pageAnimations'

export default {
  name: 'Home',
  components: {
    SlicesBlock,
    GradientBox,
    GradientLine,
    ScrollIndicator,
    SocialIcons,
    LandingRender,
  },
  transition: {
    afterEnter() {
      refreshScrollTrigger()
    },
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('home')).data
      // const href = (await $prismic.api.getSingle('home')).href
      return {
        document,
        smallTitle: document.small_title[0].text,
        mainTitle: document.main_title[0].text,
        mainTitleSecondLine: document.main_title_second_line[0].text,
        ctaText: document.cta_text[0].text,
        ctaLinkUid: document.cta_link.uid,
        sectionTitle: document.section_title,
        slices: document.body,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    renderThree() {
      return this.$store.state.showRender
    },
  },
  watch: {
    renderThree() {
      runLandingRenderIntro()
    },
  },
  mounted() {
    runInitOverlayReveal() // covers initial flash of page
    runSocialTween()
    runScrollIndicatorEntry().eventCallback(
      'onComplete',
      runScrollIndicatorExit
    )

    setTimeout(() => {
      homeProjectTimeline()
    }, 0.05)
    setTimeout(() => {
      homeAboutTimeline()
    }, 0.1)
  },
}
</script>

<style>
.backdrop-filter {
  width: fit-content;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 10px;
}

.space-above {
  display: block;
  margin-top: 2rem;
  width: 100%;
}
/* apply em (italicise) in prismic rich text to add colored highlight */
.space-above em {
  font-style: normal;
  position: relative;
}
.space-above em::before {
  content: '';
  width: 92%;
  height: 25%;
  position: absolute;
  top: 65%;
  left: 10%;
  background: linear-gradient(135deg, var(--dred), var(--dblue));
  opacity: 0.6;
}

strong a {
  font-weight: 800;
  text-decoration: underline;
}
strong a:hover {
  color: var(--dred);
}

.social-icon-position {
  position: absolute;
  right: 2px;
  top: 69vh;
}

@media (min-width: 767px) {
  .social-icon-position {
    top: 71vh;
  }
}

@media (min-width: 1024px) {
  .space-above {
    width: 60%;
  }
}
</style>
