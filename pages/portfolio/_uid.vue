<template>
  <main>
    <section
      class="min-h-screen px-4 sm:px-8 md:px-16 mt-24 md:mt-0 relative z-20 md:grid grid-cols-11 place-items-center"
    >
      <article class="md:mb-32 col-start-1 col-end-8 justify-self-start">
        <prismic-rich-text :field="projectName" />
        <prismic-rich-text :field="clientType" class="mt-1 tracking-wider" />
        <prismic-rich-text
          :field="projectRole"
          class="mt-2 uppercase tracking-wide leading-3"
        />
        <div class="mt-8 md:mt-16 flex space-x-8 md:space-x-16 tracking-wider">
          <prismic-link :field="mainLink">{{ mainLinkText }}</prismic-link>
          <prismic-link :field="secondLink">{{ secondLinkText }}</prismic-link>
        </div>
      </article>
      <picture
        class="image-perspective mt-16 md:mt-32 absolute z-10 col-start-5 col-end-12"
      >
        <source
          :srcSet="`${mainImage.mobile.url}`"
          :alt="`${mainImage.mobile.alt}`"
          media="(max-width: 495px)"
        />
        <source
          :srcSet="`${mainImage.tablet.url}`"
          :alt="`${mainImage.tablet.alt}`"
          media="(max-width: 990px)"
        />
        <source
          :srcSet="`${mainImage.desktop.url}`"
          :alt="`${mainImage.desktop.alt}`"
          media="(max-width: 1980px)"
        />
        <img :src="`${mainImage.url}`" :alt="`${mainImage.alt}`" />
      </picture>
    </section>

    <section>
      <article>
        <prismic-rich-text :field="projectDescription" />
      </article>
      <picture></picture>
    </section>
    <slices-block :slices="slices" />
  </main>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
export default {
  components: SlicesBlock,
  async asyncData({ params, $prismic, error }) {
    try {
      const project = (await $prismic.api.getByUID('project', params.uid)).data
      const projectName = project.project_name
      const clientType = project.client_type
      const projectRole = project.project_role
      const mainLinkText = project.main_link_text[0].text
      const mainLink = project.main_link
      const secondLinkText = project.second_link_text[0].text
      const secondLink = project.second_link
      const mainImage = project.main_image
      const projectDescription = project.project_description
      const secondImage = project.second_image

      const slices = project.body

      return {
        project,
        projectName,
        clientType,
        projectRole,
        mainLinkText,
        mainLink,
        secondLinkText,
        secondLink,
        mainImage,
        projectDescription,
        secondImage,
        slices,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style>
.image-perspective {
  transform: rotateX(46deg) rotateZ(-45deg);
  transform-style: preserve-3d;
  box-shadow: 0px 0px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  transition: 0.4s ease-in-out transform, 0.4s ease-in-out box-shadow;
}
.image-perspective:hover {
  transform: translate3d(0px, -20px, 0px) rotateX(46deg) rotateZ(-45deg);
  box-shadow: 0px 0px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    54px 54px 28px -10px rgba(34, 33, 81, 0.15);
}

/* labels from prismic: applies to h2 in second rich text */
.thin {
  font-weight: 400;
  font-size: clamp(1.3rem, 2.3vw, 1.6rem);
}
/* applies to h3 in third rich text */
.thinner {
  font-weight: 400;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}
.color-line {
  color: var(--dred);
  font-weight: 400;
  font-size: clamp(1.3rem, 2.3vw, 1.6rem);
}
</style>
