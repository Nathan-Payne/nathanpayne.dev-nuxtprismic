import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function homeTimeline() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: '#section-title',
        start: 'top 65%',
      },
    })
    .from('#section-title', {
      opacity: 0,
      x: 200,
      duration: 0.6,
      ease: 'power4.out',
    })
    .from(
      '.project-container',
      {
        opacity: 0,
        duration: 0.6,
        ease: 'power4.out',
      },
      '<0.2'
    )
    .from('.project-title', { x: -100, duration: 1.2, ease: 'power4.out' }, '<')
    .from(
      '.project-category',
      { x: 100, duration: 0.8, ease: 'power4.out' },
      '<'
    )
    .from(
      '.project-image',
      {
        x: 200,
        transformOrigin: 'right',
        scaleX: 0.8,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'back.out(1)',
      },
      '<'
    )
    .from(
      '.project-link',
      { y: 100, duration: 0.8, ease: 'power4.out' },
      '<0.1'
    )
}

export function portfolioTimeline() {
  const containers = gsap.utils.toArray('.project-container')
  containers.forEach((container, index) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 60%',
        },
      })
      .from(container, {
        opacity: 0,
        duration: 0.6,
        ease: 'power4.out',
      })
  })
  const categroies = gsap.utils.toArray('.project-category')
  categroies.forEach((category, index) => {
    gsap.from(category, {
      scrollTrigger: {
        trigger: category,
        start: 'top 78%',
      },
      x: 200,
      duration: 0.8,
      ease: 'power4.out',
    })
  })
  const titles = gsap.utils.toArray('.project-title')
  titles.forEach((title, index) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 82%',
      },
      x: -200,
      duration: 1.2,
      ease: 'power4.out',
    })
  })
  const links = gsap.utils.toArray('.project-link')
  links.forEach((link, index) => {
    gsap.from(link, {
      scrollTrigger: {
        trigger: link,
        start: 'top 108%',
      },
      y: 100,
      duration: 0.5,
      ease: 'power4.out',
    })
  })
  const images = gsap.utils.toArray('.project-image')
  images.forEach((image, index) => {
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: 'top 60%',
      },
      x: index % 2 ? 200 : -200,
      transformOrigin: index % 2 ? 'right' : 'left',
      scaleX: 0.7,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(1)',
    })
  })
}

export function servicesScrollAnimation() {
  const animatedElement = gsap.utils.toArray('.gsap-in')
  animatedElement.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 76%',
        toggleActions: 'play none none reset',
      },
      stagger: 0.2,
      x: 60,
      autoAlpha: 0,
      duration: 1.4,
      ease: 'power4.out',
    })
  })
}

export function projectTitleTimeline() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: '.gsap-project-title',
        start: 'top 65%',
      },
    })
    .from('.gsap-project-title', {
      autoAlpha: 0,
      x: -120,
      duration: 1.3,
      stagger: 0.12,
      ease: 'power2.out',
    })
    .from(
      '.gsap-project-button',
      {
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: 'power2.out',
      },
      '<0.3'
    )
}

export function projectDescTimeline() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: '.gsap-project-desc',
        start: 'top 65%',
      },
    })
    .from('.gsap-project-desc *', {
      x: 35,
      autoAlpha: 0,
      stagger: 0.04,
      duration: 2.2,
      ease: 'power4.out',
    })
    .from(
      '.gsap-project-image',
      {
        scale: 0,
        transformOrigin: 'center',
        autoAlpha: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '<0.4'
    )
}

export function nuxtFooterTimeline() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: '.gsap-footer-section',
        start: 'top 65%',
      },
    })
    .from('.gsap-footer-logo', {
      autoAlpha: 0,
      x: -120,
      duration: 1.3,
      ease: 'back.out(1.7)',
    })
    .from(
      '.gsap-footer-link',
      {
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      },
      '<0.2'
    )
    .from(
      '.gsap-footer-email',
      {
        xPercent: -10,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
      },
      '<0.2'
    )
    .from(
      '.gsap-footer-icon',
      {
        xPercent: -10,
        autoAlpha: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: 'power2.out',
      },
      '<0.2'
    )
}
