<template lang="pug">
v-container
  section.text-center
    h1.display-3.font-weight-thin Projects
  section 
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
    h1.display-3.font-weight-thin#watchtrainer Watchtrainer Project
    p not live yet, though the homepage can be observed here:
    a(href="https://watchtrainer.arz.berlin/") Homepage
  section
    h1.display-3.font-weight-thin#goc Game of Competences
    p Web-based simulation platform for public administrations
    p I am not allowed to share the project results of the project seminar, though
    p it was successful as it recieved a grade of 1.3 (explain grading system quickly)
    a(href="https://watchtrainer.arz.berlin/") Homepage
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
