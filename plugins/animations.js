import { gsap } from 'gsap/all'

export function runGradientBox() {
  const gradientBox = '.gradient-box'
  const tl = gsap.timeline({ defaults: { ease: 'none' } })
  // set commands set initial position correctly, required to work with nuxt links/transitions
  // main animation of after pseudo classes for animated elements
  tl.addLabel('start', 0)
    .set('.text-reveal', { xPercent: 0 })
    .set(gradientBox, { xPercent: 0, scaleX: 0 })
    .from('.text-reveal', { x: '-4rem', duration: 0.1 })
    .to('.text-reveal', { xPercent: 50, duration: 0.4 })
    .to('.text-reveal', { xPercent: 100, duration: 0.3 }, '-=0.15')
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
        duration: 0.5,
      },
      'start+=0.1'
    )
    .to(
      gradientBox,
      {
        xPercent: 110,
        scaleX: 0.0,
        opacity: 0.2,
        ease: 'none',
        duration: 0.3,
      },
      '-=0.3'
    )

  return tl
}

export function runCursorBlink(className) {
  const cursorBlinkTween = gsap.to(className, {
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1,
    duration: 1.3,
  })
  return cursorBlinkTween
}

export function runLetterRotate() {
  // 3d staggered letter entry, give parent .animation-perspective, wrap each letter in span.letter-rotate
  gsap.set('.animation-perspective', { perspective: 400 })
  const letterRotateTween = gsap.from(
    '.letter-rotate',
    {
      duration: 0.7,
      opacity: 0,
      scale: 0,
      y: 40,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.02,
    },
    'start+=0.2'
  )
  return letterRotateTween
}

export function runMenuHover(index) {
  const menuHoverTween = gsap.to(`.menu-hover${index}`, {
    xPercent: 100,
    scaleX: 1,
    duration: 0.3,
    ease: 'power2.out',
  })
  return menuHoverTween
}
export function stopMenuHover(index) {
  const menuHoverTween = gsap.to(`.menu-hover${index}`, {
    xPercent: '-100',
    scaleX: 0,
    duration: 0.3,
    ease: 'back.in',
  })
  return menuHoverTween
}

export function runProjectHover(imagePos, projectTitle) {
  const projectHoverTween = gsap.to(`.project-link-${projectTitle}`, {
    x: imagePos === 'right' ? -0.5 : 0.5,
    color: 'transparent',
    scaleX: 1.05,
    transformOrigin: imagePos === 'right' ? 'right' : 'left',
    duration: 0.3,
    ease: 'power2.out',
  })
  return projectHoverTween
}
export function stopProjectHover(imagePos, projectTitle) {
  const projectHoverTween = gsap.to(`.project-link-${projectTitle}`, {
    x: 0,
    color: 'white',
    scaleX: 1,
    transformOrigin: imagePos === 'right' ? 'right' : 'left',
    duration: 0.3,
    ease: 'power2.out',
  })
  return projectHoverTween
}
