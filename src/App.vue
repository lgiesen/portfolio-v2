<template lang="pug">
  v-app#app
    //- change color depending on the theme:
    //- :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    TheNavigation#scroll-target
    v-main
      router-view
    //- ScrollToTop
    //- LetsTalk
    TheFooter
</template>

<script>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
// import ScrollToTop from "@/components/scroll/ScrollToTop.vue";
import LetsTalk from "@/components/LetsTalk.vue";
// import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter,
    // ScrollToTop,
    LetsTalk
  },
  data: () => ({}),
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    // set theme
    const isDarkThemeActive = localStorage.getItem("isDarkTheme");
    if (isDarkThemeActive) {
      if (isDarkThemeActive == "true") this.$vuetify.theme.dark = true;
      else this.$vuetify.theme.dark = true;
    }
    // --
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    // ...mapActions([
    //   "increment", // map `this.increment()` to `this.$store.dispatch('increment')`
    //   "incrementBy" // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    // ]),
    // ...mapActions({
    //   add: "increment" // map `this.add()` to `this.$store.dispatch('increment')`
    // })
    onResize() {
      this.$store.state.isMobile = window.innerWidth < 600;
    }
  },
  computed: {
    // ...mapGetters(["getterName"])
    // state() {
    //   return this.$store.state.varName;
    // }
    // or
    // ...mapState({
    //   varNameLocal: state => state.varName,
    //   varNameAlias: "varName", // = state => state.count
    //   stateComputed(state) {
    //     return state.varName + this.localVar;
    //   }
    // })
  }
};
</script>
<style lang="scss">
// import of vuetify colours
$primary: var(--v-primary-base);
$primaryLight: var(--v-primaryLight-base);
$primaryDark: var(--v-primaryDark-base);
$secondary: var(--v-secondary-base);
$secondaryLight: var(--v-secondaryLight-base);
$secondaryDark: var(--v-secondaryDark-base);
$btnColor: var(--v-btnColor-base);
// $text: var(--v-text-base);
// 1. General Style
* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
  // word-break: break-all !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
  // Check out cool fonts: https://visme.co/blog/modern-fonts/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", "Prata", sans-serif !important;
    margin-top: 5rem;
    margin-bottom: 5rem;
    word-break: keep-all;
  }

  div.v-card__title {
    word-break: keep-all;
  }
  p,
  v-btn {
    font-family: "PT Sans", "Roboto", sans-serif !important;
  }
}
// 1.2 scroll (to) section padding top so that the navigation does not lay over it
#scroll {
  padding-top: 100px;
}
// 1.3 Link animation
a:not(a.v-tab, .v-btn) {
  text-decoration: none;
  cursor: pointer;
  color: $primary;
  &:hover {
    text-decoration: underline !important;
  }
}
// 1.4 center items
.center-items {
  display: grid;
  place-items: center;
}
// 1.5 box layout to prevent unintended upsizing on bigger viewports
section:not(.fullwidth) {
  // center items becasue size is reduced
  display: grid;
  place-items: center;
  & > div:not(.v-parallax, .vue-video-section-wrapper) {
    max-width: 1280px;
  }
}
// 2. Sections
// 2.1 Space between sections
// section {
//   margin-bottom: 20vh;
// }
// 2.2 Hero area
.h-100vh {
  min-height: calc(100vh - 60px);
}
// 2.3 transparenet background (used in nav and home)
.transparent-background {
  background-color: rgba(#fff, 0) !important;
  border-color: rgba(#fff, 0) !important;
}
// 3. Components
// 3.1 Gradient Button
.gradient-btn {
  color: $btnColor !important;
  transition: 0.5s;
  background-size: 200% auto;
  // text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  // box-shadow: 0 0 20px #eee;
  background-image: linear-gradient(
    to right,
    $secondary 0%,
    $primary 51%,
    $secondary 100%
  );
  &:hover {
    // change the direction of the change here
    background-position: right center;
  }
}
.gradient-btn-secondary {
  color: $btnColor !important;
  transition: 0.5s;
  background-size: 200% auto;
  // text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  // box-shadow: 0 0 20px #eee;
  background-image: linear-gradient(
    to right,
    $secondaryLight 0%,
    $secondaryDark 51%,
    $secondaryLight 100%
  );
  &:hover {
    // change the direction of the change here
    background-position: right center;
  }
}

.p-absolute {
  position: absolute;
}

.vue-video-section-wrapper {
  z-index: 0;
}

.alternatingBoxes {
  // border: 1px solid $primaryLight;
  margin: 5rem 0;
  padding: 0;
}

// Clear counteracts floats
.clear-both {
  clear: both;
}
.clear-left {
  clear: left;
}
.clear-right {
  clear: right;
}
</style>
