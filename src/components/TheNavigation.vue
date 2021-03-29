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
        | Home
      v-tab(v-for="view in views" :key="view.to.name" :to="view.to") 
        //- v-icon.mr-3 mdi-{{ view.icon }}
        | {{ view.tag }}
    v-btn(icon) 
      v-icon(@click="toggleTheme") mdi-brightness-6
  
  //- Mobile navigation
  div.hidden-md-and-up
    v-app-bar(app)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-spacer
      div.d-flex
        a(href="/")
          v-img.shrink.mr-2(alt="Leo Giesen Logo"
            contain width="40"
            transition="scale-transition"
            :src="themespecificLogoSrc")
            //- Change icon depending on the theme
      v-spacer
      LanguageSwitcher
      v-btn(icon) 
        v-icon(@click="toggleTheme") mdi-brightness-6
    v-navigation-drawer(v-model="drawer" absolute temporary)
      v-list(nav dense)
        v-list-item-group.mt-6(v-model="group")
          v-list-item.justify-center
            a(href="/")
              v-img.shrink(alt="Leo Giesen Logo"
                contain width="40"
                transition="scale-transition"
                :src="themespecificLogoSrc")
                //- Change icon depending on the theme
          //- active-class="deep-purple--text text--accent-4")
          v-list-item(to="/")
            v-list-item-title 
              v-icon(color="primary") mdi-home-outline
              | Home
          v-list-item(v-for="view in views" :key="view.to.name" :to="view.to") 
            v-list-item-title 
              v-icon(color="primary") mdi-{{ view.icon }}
              | {{ view.tag }}
</template>

<script>
import { mapGetters } from "vuex";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default {
  name: "TheNavigation",
  components: {
    LanguageSwitcher
  },
  data: () => ({
    views: [
      {
        tag: "About",
        to: { name: "About" },
        icon: "information-outline"
      },
      {
        tag: "Experience",
        to: { name: "Experience" },
        icon: "briefcase-outline"
      },
      {
        tag: "Projects",
        to: { name: "Projects" },
        icon: "code-tags"
      }
    ],
    drawer: true,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
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
