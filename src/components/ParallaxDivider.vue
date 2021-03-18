<template lang="pug">
//- full-width parralax image
section
  v-parallax(dark height="300" :src="this.imgSrc")
    v-row(align="center" justify="center")
      v-col.text-center(cols="12")
        h1.display-1.font-weight-thin.mb-4 {{ this.sectionTitle }}
        h4.subheading {{ this.sectionSubtitle }}
</template>

<script>
export default {
  name: "ParallaxDivider",
  props: ["sectionTitle", "sectionSubtitle", "imgSrc"]
};
</script>

<style lang="scss" scoped></style>
