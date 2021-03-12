<template lang="pug">
  v-btn(
    v-scroll="onScroll"
    @click="scrollHero"
    fab text) 
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

<style></style>
