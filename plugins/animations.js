import { gsap } from 'gsap/all'

export function runAnimated() {
  const gradientBox = '.gradient-box'
  const tl = gsap.timeline({ defaults: { ease: 'none' } })
  // set commands set initial position correctly, required to work with nuxt links/transitions
  // main animation of after pseudo classes for animated elements
  tl.addLabel('start', 0)
    .set('.text-reveal', { xPercent: 0 })
    .set(gradientBox, { xPercent: 0, scaleX: 0 })
    .from('.text-reveal', { x: '-4rem', duration: 0.1 })
    .to('.text-reveal', { xPercent: 50, duration: 0.5 })
    .to('.text-reveal', { xPercent: 100, duration: 0.4 }, '-=0.15')
  tl.from(
    gradientBox,
    {
      scaleX: 0,
      ease: 'none',
      duration: 0.15,
    },
    'start'
  )
    .to(
      gradientBox,
      {
        xPercent: 50,
        scaleX: 0.25,
        opacity: 0.9,
        ease: 'none',
        duration: 0.6,
      },
      'start+=0.1'
    )
    .to(
      gradientBox,
      {
        xPercent: 110,
        scaleX: 0.0,
        opacity: 0.8,
        ease: 'none',
        duration: 0.4,
      },
      '-=0.32'
    )

  tl.from(
    'h1>span',
    {
      x: 6,
      ease: 'back.out(1.7)',
      duration: 2.2,
    },
    'start+=0.2'
  )

  return { tl, gradientBox }
}

export function resetAnimated({ tl, gradientBox }) {
  tl.set(gradientBox, { xPercent: 0, scaleX: 0 })
}
