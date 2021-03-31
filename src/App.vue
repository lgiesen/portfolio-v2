<template lang="pug">
  v-app#app
    //- change color depending on the theme:
    //- :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    TheNavigation#scroll-target
    v-main
      router-view
    ScrollToTop
    TheFooter
</template>

<script>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import ScrollToTop from "@/components/scroll/ScrollToTop.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter,
    ScrollToTop
  },
  data: () => ({})
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
// 1.1 Word break
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-break: normal !important;
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
  }
  p,
  v-btn {
    font-family: "Roboto", "PT Sans", sans-serif !important;
  }
}
// 1.2 Link animation
a:not(a.v-tab, .v-btn) {
  text-decoration: none;
  cursor: pointer;
  color: $primary;
  &:hover {
    text-decoration: underline !important;
  }
}

// 2. Sections
// 2.1 Space between sections
section {
  margin-bottom: 20vh;
}
// 2.2 Hero area
.hero {
  min-height: calc(100vh - 60px);
  width: 100vw;
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
    $primaryLight 0%,
    $primaryDark 51%,
    $primaryLight 100%
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
