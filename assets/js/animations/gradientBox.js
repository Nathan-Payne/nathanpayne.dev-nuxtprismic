import { gsap } from 'gsap/all'

export function runGradientBox(className) {
  const gradientBox = `.${className}`
  const textReveal = `.text-reveal-${className}`
  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: 'none' },
  })
  // set commands initialise position correctly, required to work with nuxt links/transitions
  // main animation of after pseudo classes for animated elements
  tl.addLabel('start', 0)
    .set(textReveal, { xPercent: 0 })
    .set(gradientBox, { xPercent: 0, scaleX: 0 })
    .from(textReveal, { x: '-4rem', scaleX: 1.2, duration: 0.1 })
    .to(textReveal, { xPercent: 50, scaleX: 1, duration: 0.55 })
    .to(textReveal, { xPercent: 101, duration: 0.35 }, '-=0.15')
  tl.from(
    gradientBox,
    {
      scaleX: 0,
      duration: 0.15,
    },
    'start'
  )
    .to(
      gradientBox,
      {
        xPercent: 40,
        scaleX: 0.3,
        opacity: 0.8,
        duration: 0.6,
      },
      'start+=0.1'
    )
    .to(
      gradientBox,
      {
        xPercent: 110,
        scaleX: 0.0,
        opacity: 0.2,
        duration: 0.35,
      },
      '-=0.3'
    )

  return tl
}
