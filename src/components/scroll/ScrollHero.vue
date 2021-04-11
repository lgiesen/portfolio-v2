<template lang="pug">
div.text-center.mb-6
  v-btn#heroScrollBtn(
    @click="scrollHero"
    fab text outlined color="btnColor") 
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
$btnColor: var(--v-btnColor-base);
#heroScrollBtn {
  border-color: $btnColor;
  margin-top: -200px;
}
</style>
