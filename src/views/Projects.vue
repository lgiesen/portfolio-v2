<template lang="pug">
v-container
  section.text-center
    h1.display-3.font-weight-thin Projects
    h3.subtitle.mt-0 - This page is still in development -
  //- section 
    h1.display-3.font-weight-thin Playground
    v-card.pa-10
      v-card-title Special Link animation
      v-card-text
        p This is a paragraph - 
          a.link(href='#') 
            span(data-content='ipsum') ipsum
          |  etc.
        p Component: 
          AnimatedLink(href="#" linkText="Prop")
        p Ressource: https://codepen.io/markmead/pen/drORWG:
          span This is a link with 
            BackgroundHighlightLink(href="#" linkText="background highlight" target="_self")
            | .
  section
    h2.display-3.font-weight-thin Portfolio v1
    p This is the previous version of my profile. You can find the source code 
      AnimatedLink(href="https://github.com/lgiesen/portfolio-v1" linkText="here" target="_blank")
      | .
    //- embed(src="https://www.leogiesen.com" width="400" height="900")
  section
    h1.display-3.font-weight-thin.mb-0#watchtrainer watchtrainer
    v-img.ma-10(src="@/assets/projects/watchtrianer_logo.svg" width="80px")
    p This project is not live yet, though a draft of the homepage can be observed here: 
      AnimatedLink(href="https://watchtrainer.arz.berlin/" linkText="Visit Homepage" target="_blank")
  section
    h1.display-3.font-weight-thin.mb-0#goc Game of Competences
    v-img.ma-10(src="@/assets/projects/GoC.svg" width="80px")
    p We created a web-based simulation platform for public administrations.
    p Unfortunatly, I am not allowed to share the project results of the project seminar, though 
    | it was a lot of fun for the whole project team and considering a grade of 1.3 successful.
</template>

<script>
import AnimatedLink from "@/components/playground/hyperlinks/AnimatedLink.vue";
import BackgroundHighlightLink from "@/components/playground/hyperlinks/BackgroundHighlightLink.vue";
export default {
  name: "Projects",
  components: { AnimatedLink, BackgroundHighlightLink }
};
</script>

<style lang="scss" scoped></style>
