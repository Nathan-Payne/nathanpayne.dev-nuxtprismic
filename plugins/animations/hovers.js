import { gsap } from 'gsap/all'

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
  const projectHoverTween = gsap
    .timeline()
    .to(`.project-link-${projectTitle}`, {
      x: imagePos === 'right' ? -0.5 : 0.5,
      color: 'transparent',
      scaleX: 1.05,
      transformOrigin: imagePos === 'right' ? 'right' : 'left',
      duration: 0.3,
      ease: 'power2.out',
    })
    .to(
      `.gsap-background-${projectTitle}`,
      {
        x: '0.5rem',
        y: '0.5rem',
        duration: 0.15,
        ease: 'power2.inOut',
      },
      '<'
    )
  return projectHoverTween
}
export function stopProjectHover(imagePos, projectTitle) {
  const projectHoverTween = gsap
    .timeline()
    .to(`.project-link-${projectTitle}`, {
      x: 0,
      color: 'inherit',
      scaleX: 1,
      transformOrigin: imagePos === 'right' ? 'right' : 'left',
      duration: 0.3,
      ease: 'power2.out',
    })
    .to(
      `.gsap-background-${projectTitle}`,
      {
        x: 0,
        y: 0,
        duration: 0.15,
        ease: 'power2.inOut',
      },
      '<'
    )
  return projectHoverTween
}
