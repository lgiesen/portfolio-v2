<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero.text-center(:src="themeSpecificHeroImage")
      v-row(align="center" justify="center")
        v-col(cols="12")
          h1.display-1.mb-4.font-weight-thin Passionate about Business and Computer Science
          h3 - Portfolio of Leo Giesen -
          div.mt-10
            v-btn.pa-6.gradient-btn.ma-10(
              @click="$router.push('/about')"
              ) For Businesses
            v-btn.pa-6(outlined color="secondary"
              @click="$router.push('/playground')"
              ) Other Visitors
      ScrollHero
  section#scroll
    //- https://github.com/johndatserakis/vue-video-section
    //- Video by Michal Marek from Pexels
    vue-video-section(
      :elementId="'coast'" :desktopHeight="800"
      :mp4Source="require('../assets/background/video/coast.mp4')"
      :posterSource="require('../assets/background/nature.jpg')")
      v-row.pa-12(slot="overlay-content")
        v-col.white--text.text-center(cols="12")
          h1.display-1.mb-4.font-weight-thin Passionate about Business and Computer Science
          h3 - Portfolio of Leo Giesen -
          div.mt-10
            v-btn.pa-6.gradient-btn.ma-10(
              @click="$router.push('/about')"
              ) For Businesses
            v-btn.pa-6(outlined color="secondary"
              @click="$router.push('/playground')"
              ) Other Visitors
      ScrollHero
</template>

<script>
import { mapGetters } from "vuex";
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "Home",
  components: {
    ScrollHero
  },
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
