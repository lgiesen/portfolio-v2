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
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  name: "App",

  components: {
    TheNavigation,
    TheFooter,
    ScrollToTop
  },

  data: () => ({}),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
<style lang="scss">
// import of vuetify colours
$primary: var(--v-primary-base);
$secondary: var(--v-secondary-base);
$btnColor: var(--v-btnColor-base);
// $text: var(--v-text-base);

// 1. General Style
// 1.1 Word break
#app {
  word-break: normal !important;
}

// 2. Sections
// 2.1 Space between sections
section {
  margin-bottom: 20vh;
}
// 2.2 Hero area
.hero {
  min-height: 80vh;
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
    $primary 0%,
    $secondary 51%,
    $primary 100%
  );
  &:hover {
    // change the direction of the change here
    background-position: right center;
  }
}
</style>
