<template lang="pug">
v-hover
  template
    v-hover(v-slot="{ hover }")
      v-card.pa-5.mt-5(
        :elevation="hover ? 24 : 2"
        @click="scrollToCard(associationsSrc.href)"
        :class="{ 'on-hover': hover }")
        v-img(:src="associationsSrc.imageSrc" :alt="associationsSrc.title" contain
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

<style lang="scss" scoped>
.v-card {
  transition: opacity 0.3s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
