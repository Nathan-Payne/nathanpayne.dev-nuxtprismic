import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function homeProjectTimeline() {
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
      '.project-image-background',
      {
        transformOrigin: 'left',
        xPercent: 50,
        yPercent: 4,
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      },
      '<'
    )
    .from(
      '.project-link',
      { y: 100, duration: 0.8, ease: 'power4.out' },
      '<0.1'
    )
}

export function homeAboutTimeline() {
  const paragraphs = gsap.utils.toArray('.gsap-about p')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.gsap-about',
        start: 'top 70%',
      },
      defaults: {
        xPercent: 3,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
      },
    })
    .from('.gsap-about h2', {})
    .from(paragraphs[0], {}, '<')
    .from(paragraphs[1], {}, '<')
    .from(paragraphs[2], {}, '<0.15')
    .from(paragraphs[3], {}, '<0.15')
    .from(paragraphs[4], {}, '<0.15')

  // ALTERNATE: ADD SCROLL TRIGGER TO EACH INDIVIDUAL PARAGRAPH
  // paragraphs.forEach((para) => {
  //   gsap.from(para, {
  //     scrollTrigger: {
  //       trigger: para,
  //       start: 'top 72%',
  //     },
  //     xPercent: 3,
  //     autoAlpha: 0,
  //     delay: 0.2,
  //     duration: 0.8,
  //     ease: 'power2.out',
  //   })
  // })
}

export function portfolioTimeline() {
  const containers = gsap.utils.toArray('.project-container')
  containers.forEach((container, index) => {
    const title = container.querySelector('.project-title')
    const category = container.querySelector('.project-category')
    const link = container.querySelector('.project-link')
    const image = container.querySelector('.project-image')
    const imageBackground = container.querySelector('.project-image-background')
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
      .from(
        category,
        {
          x: 200,
          duration: 0.8,
          ease: 'power4.out',
        },
        '<'
      )
      .from(
        title,
        {
          x: -200,
          duration: 1.2,
          ease: 'power4.out',
        },
        '<'
      )
      .from(
        link,
        {
          y: 100,
          duration: 0.5,
          ease: 'power4.out',
        },
        '<'
      )
      .from(
        image,
        {
          x: index % 2 ? 200 : -200,
          transformOrigin: index % 2 ? 'right' : 'left',
          scaleX: 0.7,
          opacity: 0,
          duration: 1.2,
          ease: 'back.out(1)',
        },
        '<'
      )
      .from(
        imageBackground,
        {
          transformOrigin: 'left',
          xPercent: index % 2 ? -50 : 50,
          opacity: 0,
          duration: 2.4,
          ease: 'power4.out',
        },
        '<'
      )
  })
}

export function servicesTitleAnimation() {
  return gsap.from('.gsap-services-title', {
    xPercent: 8,
    autoAlpha: 0,
    stagger: 0.15,
    duration: 1.2,
    delay: 0.5,
    ease: 'power2.out',
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
      x: 55,
      autoAlpha: 0,
      duration: 1.2,
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
      x: 30,
      autoAlpha: 0,
      stagger: 0.08,
      duration: 2,
      ease: 'power4.out',
    })
    .from(
      '.gsap-project-image',
      {
        scale: 0,
        transformOrigin: 'center',
        autoAlpha: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      },
      '<0.5'
    )
}

export function nuxtFooterTimeline() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: '.gsap-footer-section',
        start: 'top 68%',
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
        duration: 0.6,
        stagger: 0.14,
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

export function runMenuTween() {
  return gsap.from('.gsap-menu-links *', {
    xPercent: 8,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: 'back.out(1)',
    delay: 0.8,
  })
}
export function runLogoTween() {
  return gsap.from('.gsap-logo', {
    yPercent: -10,
    autoAlpha: 0,
    duration: 3,
    ease: 'power2.out',
    delay: 1.1,
  })
}

export function runColormodeTween() {
  return gsap.from('.gsap-colormode', {
    autoAlpha: 0,
    duration: 3,
    delay: 1,
    ease: 'power3.out',
  })
}

export function runScrollIndicatorEntry() {
  return gsap.from('.scroll-indicator', {
    autoAlpha: 0,
    yPercent: -35,
    duration: 1.2,
    delay: 1.6,
    ease: 'back.out(3)',
  })
}

export function runScrollIndicatorExit() {
  return gsap.to('.scroll-indicator', {
    scrollTrigger: {
      trigger: '.scroll-indicator',
      start: 'top 75%',
    },
    autoAlpha: 0,
    yPercent: 80,
    duration: 0.4,
    ease: 'power3.out',
  })
}
