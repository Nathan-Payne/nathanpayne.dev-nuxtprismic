<template>
  <main>
    <section
      class="min-h-screen px-4 sm:px-8 md:px-16 mt-24 md:mt-0 relative z-20 md:grid grid-cols-11 place-items-center"
    >
      <article class="md:mb-32 col-start-1 col-end-8 justify-self-start">
        <prismic-rich-text :field="projectName" class="gsap-project-title" />
        <prismic-rich-text
          :field="clientType"
          class="mt-1 tracking-wider gsap-project-title"
        />
        <prismic-rich-text
          :field="projectRole"
          class="mt-2 uppercase tracking-wide leading-3 gsap-project-title"
        />
        <div
          class="mt-8 md:mt-16 flex space-x-4 sm:space-x-8 md:space-x-16 tracking-wider transition duration-300"
        >
          <prismic-link
            :field="mainLink"
            class="py-2 px-6 dark:bg-lgrey shadow-md rounded border-l-4 border-dred font-semibold focus:outline-none dark-hover:bg-dred transform hover:scale-105 hover:shadow-lg transition duration-300 gsap-project-button"
            >{{ mainLinkText }}</prismic-link
          >
          <prismic-link
            v-if="secondLink && secondLinkText"
            :field="secondLink"
            class="py-2 px-6 dark:bg-lgrey shadow-md rounded border-l-4 border-dred font-semibold focus:outline-none dark-hover:bg-dred transform hover:scale-105 hover:shadow-lg transition duration-300 gsap-project-button"
            >{{ secondLinkText }}</prismic-link
          >
        </div>
      </article>
      <responsive-picture
        :field="mainImage"
        class="image-perspective image-float mt-24 md:mt-48 absolute z-10 col-start-5 col-end-12"
      />
    </section>

    <section
      class="min-h-screen px-4 sm:px-8 md:px-16 sm:mt-12 flex flex-col md:flex-row"
    >
      <article class="w-full md:w-3/5">
        <prismic-rich-text
          :field="projectDescription"
          class="flex flex-col gsap-project-desc"
        />
      </article>
      <responsive-picture
        v-if="secondImage.url"
        :field="secondImage"
        class="w-1/2 md:w-1/5 mx-auto mt-12 md:mt-0 flex items-center gsap-project-image"
      />
    </section>
    <slices-block :slices="slices" class="mt-20" />
  </main>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import ResponsivePicture from '~/components/ResponsivePicture'
import {
  projectTitleTimeline,
  projectDescTimeline,
} from '~/plugins/animations/pageAnimations'

export default {
  components: { SlicesBlock, ResponsivePicture },
  async asyncData({ params, $prismic, error }) {
    try {
      const project = (await $prismic.api.getByUID('project', params.uid)).data
      return {
        project,
        projectName: project.project_name,
        clientType: project.client_type,
        projectRole: project.project_role,
        mainLinkText: project.main_link_text[0].text,
        mainLink: project.main_link,
        secondLinkText: project.second_link_text[0].text,
        secondLink: project.second_link,
        mainImage: project.main_image,
        projectDescription: project.project_description,
        secondImage: project.second_image,
        slices: project.body,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  mounted() {
    projectTitleTimeline()
    projectDescTimeline()
  },
}
</script>

<style>
.image-perspective {
  transform-style: preserve-3d;
}

.image-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translate3d(0px, -20px, 0px) rotateX(46deg) rotateZ(-45deg);
    box-shadow: 0px 0px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      54px 54px 28px -10px rgba(34, 33, 81, 0.15);
  }
  50% {
    transform: translate3d(0px, -5px, 0px) rotateX(46deg) rotateZ(-45deg);
    box-shadow: 0px 0px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  }
  100% {
    transform: translate3d(0px, -20px, 0px) rotateX(46deg) rotateZ(-45deg);
    box-shadow: 0px 0px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      54px 54px 28px -10px rgba(34, 33, 81, 0.15);
  }
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
/* colors lines where selected in prismic */
.color-line {
  color: var(--dred);
  font-weight: 400;
  font-size: clamp(1.3rem, 2.3vw, 1.6rem);
}
/* adds margin above inside rich text elements in prismic editor */
.margin-above {
  display: block;
  margin-top: 1rem;
}
</style>
