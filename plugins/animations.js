import { gsap, CSSPlugin } from 'gsap/all'
import { CSSRulePlugin } from '~/plugins/CSSRulePlugin.js'
gsap.registerPlugin(CSSPlugin)
gsap.registerPlugin(CSSRulePlugin)

export function runAnimated() {
  const gradientBox = CSSRulePlugin.getRule('.animated:after')
  const textCover = CSSRulePlugin.getRule('.animated:before')
  const tl = gsap.timeline()
  // sets initial position correctly, required to work with nuxt links/transitions
  tl.set(gradientBox, { cssRule: { xPercent: 0, scaleX: 0 } })
  tl.set(textCover, { cssRule: { xPercent: 0, scaleX: 1 } })
  // main animation of before/after pseudo classes for animated elements
  tl.from('.animated', { opacity: 0, duration: 0.1 })
    .from(
      gradientBox,
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
    .from(textCover, { cssRule: { x: '-4rem', ease: 'none' } }, '<')
    .to(gradientBox, {
      cssRule: {
        xPercent: 50,
        scaleX: 0.15,
        ease: 'none',
      },
      duration: 0.5,
    })
    .to(
      textCover,
      {
        cssRule: {
          xPercent: 50,
          ease: 'none',
        },
        duration: 0.5,
      },
      '<'
    )
    .to(
      gradientBox,
      {
        cssRule: {
          xPercent: 110,
          scaleX: 0,
          ease: 'none',
        },
        duration: 0.5,
      },
      'gradientBox-=0.32'
    )
    .to(
      textCover,
      {
        cssRule: {
          xPercent: 110,
          ease: 'none',
        },
        duration: 0.5,
      },
      '<'
    )

  return { tl, gradientBox, textCover }
}

export function resetAnimated({ tl, gradientBox, textCover }) {
  tl.set(gradientBox, { cssRule: { xPercent: 0, scaleX: 0 } })
  tl.set(textCover, { cssRule: { xPercent: 0, scaleX: 1 } })
}
