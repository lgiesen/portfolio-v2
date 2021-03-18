/* eslint-disable prettier/prettier */
<template lang="pug">
v-app-bar(app style="opacity: 0.9; backdrop-filter: blur(8px);")
  //- style="opacity: 0.7; z-index: 9999999; backdrop-filter: blur(10px);")
  div.d-flex
    a(href="/")
      v-img.shrink.mr-2(alt="Leo Giesen Logo"
        contain width="40"
        transition="scale-transition"
        :src="themespecificLogoSrc")
        //- Change icon depending on the theme
  v-tabs(align-with-title)
    v-tab(to="/") 
      v-icon mdi-home-outline
    v-tab(v-for="view in views" :key="view.to.name" :to="view.to") 
      //- v-icon.mr-3 mdi-{{ view.icon }}
      | {{ view.tag }}
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
      if (this.isDarkTheme) return require("@/assets/logo/dark/logo.svg");
      else return require("@/assets/logo/light/logo.svg");
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
#appBar {
  opacity: 0.7 !important;
  z-index: 9999999 !important;
  backdrop-filter: blur(8px) !important;
}
a.v-tab {
  font-family: "Montserrat", "Prata", sans-serif !important;
}
// $primary: #2142b9;
// .router-link-exact-active,
// a.v-tab--active {
//   color: $primary;
// }
</style>
