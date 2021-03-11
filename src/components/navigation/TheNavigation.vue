/* eslint-disable prettier/prettier */
<template lang="pug">
v-app-bar(app)
  div.d-flex.align-center
    v-img.shrink.mr-2(alt="Leo Giesen Logo"
      contain width="40"
      transition="scale-transition"
      :src="themespecificLogoSrc")
      //- Change icon depending on the theme
  v-tabs(align-with-title)
    v-tab(to="/") Home
    v-tab(
      v-for="view in views" :key="view.to.name"
      :to="view.to"
      ) {{ view.tag }}
  v-btn(icon) 
    v-icon(@click="toggleTheme") mdi-brightness-6
</template>

<script>
import { mapGetters } from "vuex";

//import the items for the navbar
import navItems from "./navItems.json";
export default {
  name: "TheNavigation",
  data: () => ({
    views: navItems
  }),
  computed: {
    ...mapGetters(["isDarkTheme"]),
    themespecificLogoSrc() {
      if (this.isDarkTheme) return require("@/assets/logo/logo-neon.svg");
      else return require("@/assets/logo/logo-green-blue.svg");
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped lang="scss">
// $primary: #2142b9;
// .router-link-exact-active,
// a.v-tab--active {
//   color: $primary;
// }
</style>
