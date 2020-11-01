<template>
  <div class="mx-6 flex flex-col justify-center">
    <section
      class="h-screen w-full sm:w-3/4 md:w-2/3 pb-6 flex flex-col justify-center"
    >
      <h5 v-if="smallTitle" class="text-sm dark:text-gray-400">
        {{ smallTitle }}
      </h5>
      <h1
        class="relative z-20 font-normal text-dgrey dark:text-white leading-tight animated"
      >
        {{ mainTitle }}
      </h1>
      <div v-if="ctaLinkUid" class="w-24 mt-6 inline-block text-center">
        <nuxt-link :to="`/${ctaLinkUid}`"> {{ ctaText }} </nuxt-link>
      </div>
    </section>

    <section>
      <prismic-rich-text :field="sectionTitle" />
      <slices-block :slices="slices" class="mt-8" />
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import SlicesBlock from '../components/SlicesBlock.vue'
import { CSSRulePlugin } from '~/assets/CSSRulePlugin.js'

gsap.registerPlugin(CSSRulePlugin)

export default {
  name: 'Home',
  components: {
    SlicesBlock,
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('home')).data
      // const href = (await $prismic.api.getSingle('home')).href
      return {
        document,
        smallTitle: document.small_title[0].text,
        mainTitle: document.main_title[0].text,
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
    this.gsapAnimate()
  },
  methods: {
    gsapAnimate() {
      const ruleAfter = CSSRulePlugin.getRule('.animated:after')
      const ruleBefore = CSSRulePlugin.getRule('.animated:before')
      const tl = gsap.timeline()
      tl.to('.animated', { opacity: 1, duration: 0.1 })
        .from(
          ruleAfter,
          {
            cssRule: {
              x: '-4rem',
              scaleX: 0,
              ease: 'none',
            },
            duration: 0.1,
          },
          '<'
        )
        .from(ruleBefore, { cssRule: { x: '-4rem', ease: 'none' } }, '<')
        .to(ruleAfter, {
          cssRule: {
            x: '50%',
            scaleX: 0.15,
            ease: 'none',
          },
          duration: 0.5,
        })
        .to(
          ruleBefore,
          {
            cssRule: {
              x: '50%',
              ease: 'none',
            },
            duration: 0.5,
          },
          '<'
        )
        .to(
          ruleAfter,
          {
            cssRule: {
              x: '100%',
              scaleX: 0,
              ease: 'none',
            },
            duration: 0.5,
          },
          'ruleAfter-=0.32'
        )
        .to(
          ruleBefore,
          {
            cssRule: {
              x: '100%',
              ease: 'none',
            },
            duration: 0.5,
          },
          '<'
        )
        .set(ruleAfter, { cssRule: { x: '0%', scaleX: 0 } })
        .set(ruleBefore, { cssRule: { x: '0%', scaleX: 0 } })
    },
  },
}
</script>

<style>
.animated {
  opacity: 0;
  overflow: hidden;
}
.animated:after {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff1d00, #4206c2);
  transform: scaleX(0) scaleY(1);
  transform-origin: left;
  z-index: 25;
}
.animated:before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #1e1f1f 2%, #1e1f1f 100%);
  transform-origin: left;
}
</style>
