<template lang="pug">
div
  section.fullwidth
    v-parallax(src="@/assets/background/Aasee.jpg" height="900")
      //- Another section is necessary to provide the max-width for ultra-wide screens
      section.mb-0 
        v-container
          v-row.pa-md-12.d-flex.text-center
            v-col.col-10.col-md-6(order-md="2")
              h1.display-3.font-weight-thin.mb-12 {{ $t("intro.title") }}
              h3.subtitle.mt-0 {{ $t("intro.subtitle") }}
              ScrollHero.mt-16.pt-16
            v-col.col-10.col-md-6(order-md="1")
              v-card(max-width="400px" elevation="50")
                v-img(alt="Leo Giesen Profil" src="@/assets/about/Snow-Profile.jpg")
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
  
  //- Share Insights, Best Practices, Learnings
  //- Add what tools I have worked with, which positions I fulfilled
  //- What skills I learned and applied
  section
    h1.display-3.font-weight-thin.mb-0#goc Game of Competences
    v-img.ma-10(src="@/assets/projects/GoC.svg" width="80px")
    p We created a web-based simulation platform for public administrations.
    p Unfortunatly, I am not allowed to share the project results of the project seminar, though 
    | it was a lot of fun for the whole project team and considering a grade of 1.3 successful.
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
</template>

<script>
import AnimatedLink from "@/components/playground/hyperlinks/AnimatedLink.vue";
import BackgroundHighlightLink from "@/components/playground/hyperlinks/BackgroundHighlightLink.vue";
import HeroBackgroundGradientGroup from "@/assets/background/HeroBackgroundGradientGroup.vue";
export default {
  name: "Projects",
  components: {
    AnimatedLink,
    BackgroundHighlightLink,
    HeroBackgroundGradientGroup
  },
  i18n: {
    messages: {
      en: {
        intro: {
          title: "Projects",
          subtitle: "- This page is still in development -"
        }
      },
      de: {
        intro: {
          title: "Projekte",
          subtitle: "- Diese Seite ist noch in Entwicklung -"
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
