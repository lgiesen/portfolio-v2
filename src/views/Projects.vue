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
