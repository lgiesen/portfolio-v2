<template lang="pug">
  v-app#app
    //- change color depending on the theme:
    //- :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    TheNavigation
    v-main
      router-view
    TheFooter
</template>

<script>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheNavigation,
    TheFooter
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
#app {
  word-break: normal !important;
}
section {
  margin-bottom: 20vh;
}
.hero {
  height: 100vh !important;
}
</style>
