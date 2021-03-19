<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero.text-center(:src="themeSpecificHeroImage")
      v-row(align="center" justify="center")
        v-col(cols="12")
          h1.display-2.mb-4.font-weight-thin Passionate about Business and Computer Science
          h3.subtitle-1 - Portfolio of Leo Giesen -
          div.mt-10
            v-btn.pa-6.gradient-btn.ma-10(
              @click="$router.push('/experience')"
              ) For Businesses
            v-btn.pa-6(outlined color="secondary"
              @click="$router.push('/projects')"
              ) Other Visitors
      ScrollHero
  
  section
    //- https://github.com/johndatserakis/vue-video-section
    //- Video by Michal Marek from Pexels
    vue-video-section(
      :elementId="'coast'" :desktopHeight="800"
      :mp4Source="require('../assets/background/video/coast.mp4')"
      :posterSource="require('../assets/background/nature.jpg')")
      v-container(fill-height fluid slot="overlay-content")
        v-row.text-center.pa-12(align="center" justify="center" fill-height fluid)
          v-col.white--text(cols="12")
            h1.display-2.mb-4.font-weight-thin Passionate about Business and Computer Science
            h3 - Portfolio of Leo Giesen -
            div.mt-10
              v-btn.pa-6.gradient-btn.ma-10(
                @click="$router.push('/about')") For Businesses
              v-btn.pa-6(outlined color="secondary"
                @click="$router.push('/playground')" ) Other Visitors
        v-row.text-center(align="center" justify="center" fill-height fluid)
          v-col(cols="12")
            ScrollHero

  section#scroll
    v-container
      h2.display-2.font-weight-thin.text-center.mb-12 Title  
      div.d-flex.flex-wrap.justify-space-between
        v-card.mb-9(v-for="i in 9" :key="i" width="33vw")
          v-card-title Card {{ i }}
          v-card-text Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
            | do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
            | nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
            | voluptate elit amet.
  
  section.d-flex.flex-wrap.justify-space-between
    v-img(v-for="(image, index) in associations" :key="index" 
      :src="image.imageSrc" max-height="10vh" width="15vw" contain
      )
</template>

<script>
import { mapGetters } from "vuex";
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "Home",
  components: {
    ScrollHero
  },
  data: () => ({
    associations: [
      // employers
      {
        imageSrc: require("@/assets/employmentAndEducation/ERCIS.png")
      },
      {
        imageSrc: require("@/assets/employmentAndEducation/move.png")
      },
      {
        imageSrc: require("@/assets/employmentAndEducation/SEPAone.png")
      },
      {
        imageSrc: require("@/assets/employmentAndEducation/BRL.png")
      },
      // education
      {
        imageSrc: require("@/assets/employmentAndEducation/WWU.png")
      },
      {
        imageSrc: require("@/assets/employmentAndEducation/ESG.png")
      }
    ]
  }),
  computed: {
    ...mapGetters(["isDarkTheme"]),
    themeSpecificHeroImage() {
      if (this.isDarkTheme)
        return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80";
      // else return require("@/assets/background/nature.jpg");
      else
        return "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80";
    }
  }
};
</script>

<style lang="scss" scoped></style>
