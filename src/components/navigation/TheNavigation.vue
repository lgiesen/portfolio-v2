<template lang="pug">
v-app-bar(app color="background" dark)
  div.d-flex.align-center
    v-img(alt="Leo Giesen Logo"
      class="shrink mr-2"
      contain
      src="@/assets/logo/logo-neon.svg"
      transition="scale-transition"
      width="40")
  v-app-bar-title Leo Giesen
  v-spacer
  v-tabs(align-with-title='')
    v-tab(
      v-for="view in views" :key="view.to.name"
      :to="view.to"
      ) {{ view.tag }}  
  v-btn(icon='')
    v-icon(@click="toggleTheme") mdi-brightness-6
//- v-card#nav
  template
    div.overflow-hidden
      v-app-bar(
        absolute src='https://picsum.photos/1920/1080?random' color='#6A76AB' dark='' 
        shrink-on-scroll='' prominent=''  fade-img-on-scroll='' scroll-target='#scrolling-techniques-3')
        template(v-slot:img='{ props }')
          v-img(v-bind='props' 
            gradient='to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)')
        v-app-bar-nav-icon
        v-app-bar-title Portfolio - Leo Giesen
        v-spacer
        //- socials
        div
          v-btn(icon='')
            v-icon mdi-magnify
          v-btn(icon='')
            v-icon mdi-heart
          v-btn(icon='')
            v-icon(@click="toggleTheme") mdi-brightness-6
        template(v-slot:extension='')
          v-tabs(align-with-title='')
            v-tab(
              v-for="view in views" :key="view.to.name"
              :to="view.to"
              ) {{ view.tag }}   
</template>

<script>
//import the items for the navbar
import navItems from "./navItems.json";
export default {
  name: "TheNavigation",
  data: () => ({
    views: navItems
  }),
  computed: {},
  methods: {
    toggleTheme() {
      // this.$vuetify.theme.themes.dark.anchor = "#fff"
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped lang="scss">
// $primary: #2142B9;
// .router-link-exact-active,
// a.v-tab--active {
//   color: $primary;
// }
</style>
