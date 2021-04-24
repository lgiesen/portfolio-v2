<template lang="pug">
//- full-width parralax image
v-parallax.py-12.text-center(:src="this.imgSrc")
  h1.font-weight-thin.mb-4.break-word(:class="this.$vuetify.breakpoint.mobile ? 'display-1' : 'display-2'") {{ this.sectionTitle }}
  h4.subheading {{ this.sectionSubtitle }}
</template>

<script>
export default {
  name: "ParallaxDivider",
  props: ["sectionTitle", "sectionSubtitle", "imgSrc"]
};
</script>

<style lang="scss" scoped>
.v-parallax {
  margin-bottom: 20vh;
}
</style>
