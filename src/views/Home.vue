<template lang="pug">
div
  //- Hero Area
  section(style="height: 100vh;")
    v-parallax.hero.text-center(dark cover
      :src="themeSpecificHeroImage")
      v-row(align='center' justify='center')
        v-col(cols='12')
          h1.display-1.font-weight-thin.mb-4
            | Passionate about Business and Computer Science
          h3.subheading
            | - Portfolio of Leo Giesen -
          div.mt-10
            v-btn.pa-6.gradient-btn.ma-10(
              @click="$router.push('/about')"
              ) For Businesses
            v-btn.pa-6(outlined
              @click="$router.push('/playground')"
              ) Other Visitors
      ScrollHero
  section#scroll
    v-container
      h3.text-center Title
      p showContactDialog: {{ this.$store.state.showContactDialog }}
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
      else
        return "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    }
  }
};
</script>

<style lang="scss" scoped></style>
