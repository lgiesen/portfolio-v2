/* eslint-disable prettier/prettier */
<template lang="pug">
div
  //- Tablet and desktop navigation
  v-app-bar.hidden-sm-and-down(app style="opacity: 0.9; backdrop-filter: blur(8px);")
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
        //- v-icon.mr-3 mdi-home-outline
        | {{ isDE ? 'Start' : 'Home' }}
      v-tab(v-for="view in views" :key="view.to.name" :to="view.to") 
        //- v-icon.mr-3 mdi-{{ view.icon }}
        | {{ isDE ? view.tag_de : view.tag_en }}
    LanguageSwitcher
    ToggleTheme
  
  //- Mobile navigation
  div.hidden-md-and-up
    v-app-bar(app)
      v-app-bar-nav-icon(@click.stop="mobileDialog = !mobileDialog")
      v-spacer
      div.d-flex
        a(href="/")
          v-img.shrink.mr-2(alt="Leo Giesen Logo"
            contain width="40"
            transition="scale-transition"
            :src="themespecificLogoSrc")
            //- Change icon depending on the theme
    //- v-navigation-drawer(v-model="mobileDialog" absolute temporary)
    v-overlay(v-model="mobileDialog" transition="dialog-top-transition" 
      opacity=".8" style="backdrop-filter: blur(8px);")
      v-btn(fixed top right icon
        @click="mobileDialog = false")
        v-icon mdi-close

      v-tab.ma-8(@click="mobileDialog = false" to="/" )
        v-icon(color="secondary") mdi-home-outline
        | {{ isDE ? 'Start' : 'Home' }}
      v-tab.ma-8(v-for="view in views" :key="view.to.name" 
        @click="mobileDialog = false" :to="view.to")
        v-icon(color="secondary") mdi-{{ view.icon }}
        |  {{ isDE ? view.tag_de : view.tag_en }}
      //-     //- active-class="deep-purple--text text--accent-4")
      div.d-flex.flex-wrap.justify-space-around
        LanguageSwitcher.text-center
        ToggleTheme
</template>

<script>
import { mapGetters } from "vuex";
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher.vue";
import ToggleTheme from "@/components/navigation/ToggleTheme.vue";

export default {
  name: "TheNavigation",
  components: {
    LanguageSwitcher,
    ToggleTheme
  },
  data: () => ({
    views: [
      {
        tag_en: "About",
        tag_de: "Über Mich",
        to: { name: "About" },
        icon: "information-outline"
      },
      {
        tag_en: "Experience",
        tag_de: "Erfahrung",
        to: { name: "Experience" },
        icon: "briefcase-outline"
      },
      {
        tag_en: "Projects",
        tag_de: "Projekte",
        to: { name: "Projects" },
        icon: "code-tags"
      },
      {
        tag_en: "Playground",
        tag_de: "Spielplatz",
        to: { name: "TestingPlayground" },
        icon: "slide"
      }
    ],
    mobileDialog: false
  }),
  computed: {
    ...mapGetters(["isDarkTheme", "isDE"]),
    themespecificLogoSrc() {
      if (this.isDarkTheme) return require("@/assets/logo/dark/logo.svg");
      else return require("@/assets/logo/light/logo.svg");
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
// Navigation Font
// Tablet/desktop (a.v-tab); Mobile (div.v-list-item__title)
a.v-tab,
div.v-list-item__title {
  font-family: "Montserrat", "Prata", sans-serif !important;
}
// $primary: #2142b9;
// .router-link-exact-active,
// a.v-tab--active {
//   color: $primary;
// }

// Mobile navigation
// items in mobile nav
a.v-list-item {
  // = .mt-3
  // https://vuetifyjs.com/en/styles/spacing/#how-it-works
  margin-top: 12px;
}
// Icons in items in mobile nav
i.v-icon {
  // = .mr-3
  // https://vuetifyjs.com/en/styles/spacing/#how-it-works
  margin-right: 12px;
}
</style>
