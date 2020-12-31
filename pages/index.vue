<template>
  <div class="px-4 sm:px-8 md:px-16 flex flex-col justify-center">
    <div
      class="w-full h-full absolute inset-0 z-50 bg-dgrey gsap-init-overlay"
    ></div>
    <section
      class="h-screen w-full sm:w-3/4 lg:w-3/5 pb-20 flex flex-col justify-center"
    >
      <h5 v-if="smallTitle" class="text-sm dark:text-gray-400">
        {{ smallTitle }}
      </h5>
      <div class="relative overflow-hidden">
        <h1
          class="relative z-20 font-thin text-dgrey dark:text-white leading-tight"
        >
          {{ mainTitle }}
        </h1>
        <gradient-box :box-name="'first-box'" :delay="0" />
      </div>
      <div class="relative overflow-hidden">
        <h1
          class="relative z-20 font-thin text-dgrey dark:text-white leading-tight"
        >
          {{ mainTitleSecondLine }}
        </h1>
        <gradient-box :box-name="'second-box'" :delay="450" />
      </div>
      <div v-if="ctaLinkUid" class="w-24 mt-6 inline-block text-center">
        <nuxt-link :to="`/${ctaLinkUid}`"> {{ ctaText }} </nuxt-link>
      </div>
    </section>

    <gradient-line :location="80" />
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
import {
  runInitOverlayReveal,
  runScrollIndicatorEntry,
  runScrollIndicatorExit,
  homeProjectTimeline,
  homeAboutTimeline,
  refreshScrollTrigger,
} from '~/plugins/animations/pageAnimations'

export default {
  name: 'Home',
  components: {
    SlicesBlock,
    GradientBox,
    GradientLine,
    ScrollIndicator,
  },
  transition(to, from) {
    refreshScrollTrigger()
    // eslint-disable-next-line no-console
    console.log('refreshed')
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
  mounted() {
    runInitOverlayReveal()
    const scrollEntryTween = runScrollIndicatorEntry()
    scrollEntryTween.eventCallback('onComplete', runScrollIndicatorExit)

    homeProjectTimeline()
    setTimeout(() => {
      homeAboutTimeline()
    }, 0.15)
  },
}
</script>

<style>
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

@media (min-width: 1024px) {
  .space-above {
    width: 60%;
  }
}
</style>
