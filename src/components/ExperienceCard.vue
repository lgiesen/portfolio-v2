<template lang="pug">
v-hover
  template(v-slot:default="{ hover }")
    v-card.pa-5.mt-5.transition-swing(
      :class="`elevation-${hover ? 24 : 6}`"
      @click="scrollToCard(associationsSrc.href)")
      v-img(:src="associationsSrc.imageSrc" contain
          min-height="30px" height="5vh"  min-width="100px" max-width="7vw")
</template>

<script>
export default {
  name: "ExperienceCard",
  props: ["associationsSrc"],
  methods: {
    scrollToCard(id) {
      this.$vuetify.goTo("#card-" + id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
