<template lang="pug">
div
  //- Hero Area
  section
    //- https://github.com/johndatserakis/vue-video-section
    //- Video by Michal Marek from Pexels
    vue-video-section(
      :elementId="'coast'" :desktopHeight="750" :mobileHeight="680"
      :mp4Source="require('../assets/background/video/coast.mp4')"
      :posterSource="require('../assets/background/nature.jpg')")
      v-container(slot="overlay-content")
        v-row.text-center.pa-12(align="center" justify="center" fill-height fluid)
          v-col.white--text(cols="12")
            h1.display-2.mb-4.font-weight-thin - Portfolio of Leo Giesen -
            h1.subtitle-1 Passionate about Business and Computer Science
            div.mt-10
              v-btn.pa-6.gradient-btn.ma-10(
                @click="$router.push('/about')") For Businesses
              v-btn.pa-6(outlined color="secondary"
                @click="$router.push('/playground')") Other Visitors
        v-row.text-center(align="center" justify="center" fill-height fluid)
          v-col(cols="12")
            ScrollHero

  section#scroll
    v-container
      h2.display-2.font-weight-thin.text-center.mb-12 Title  
      v-row.d-flex.flex-wrap.justify-space-between
        v-col.col-12.col-sm-6(v-for="i in 9" :key="i")
          v-card.mb-9
            v-card-title Card {{ i }}
            v-card-text Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
              | do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
              | nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
              | voluptate elit amet.
  
  section.d-flex.flex-wrap.justify-space-between
    v-img(v-for="(image, index) in associations" :key="index" 
      :src="associations[index]" max-height="10vh" width="15vw" contain)
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
      require("@/assets/workExperience/ERCIS.png"),
      require("@/assets/workExperience/move.png"),
      require("@/assets/workExperience/SEPAone.png"),
      require("@/assets/workExperience/BRL.png"),
      // education
      require("@/assets/workExperience/WWU.png")
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
