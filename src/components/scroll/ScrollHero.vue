<template lang="pug">
  div.text-center.mb-6
    v-btn#heroScrollBtn(
      v-scroll="onScroll"
      @click="scrollHero"
      fab text outlined color="primary") 
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
$primary: var(--v-primary-base);
#heroScrollBtn {
  border-color: $primary;
}
</style>
