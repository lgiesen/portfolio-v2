<template lang="pug">
div.text-center.mb-6(v-if="!this.$vuetify.breakpoint.mobile")
  v-btn#heroScrollBtn(
    @click="scrollHero"
    fab text outlined color="white") 
    v-icon mdi-chevron-down
</template>

<script>
export default {
  name: "ScrollHero",
  methods: {
    scrollHero() {
      this.$vuetify.goTo("#scroll");
    }
  }
};
</script>

<style lang="scss">
#heroScrollBtn {
  border-color: white;
}
</style>
