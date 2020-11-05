import { gsap } from 'gsap/all'

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
