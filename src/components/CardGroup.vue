<template lang="pug">
div
  h1.display-2.font-weight-thin.mb-12.text-center {{ this.sectionTitle }}
  v-container.d-flex.flex-wrap.justify-space-between
    v-hover(v-for="item in iterableObject" :key="item.title")
      template(v-slot:default="{ hover }")
        v-card.mb-12.pa-7.transition-swing(
          :width="$vuetify.breakpoint.mobile ? '100vw' : '33vw'"
          :class="`elevation-${hover ? 24 : 6}`")
          //- if desktop use two columns (38vw)
          //- else use full width (100vw)
          v-row
            v-col(align="center" justify="center")
              v-img(:src="item.imageSrc" height="10vh" max-width="20vw" contain)
          v-row
            v-col
              v-card-title.justify-center {{ item.title }} 
              v-card-subtitle.text-center @
                a(:href="item.link" target="_blank"
                  ) {{ item.institution }}, {{ item.location }}
              v-card-text.mt-7 {{ item.description }}
</template>

<script>
export default {
  name: "CardGroup",
  props: ["sectionTitle", "iterableObject"]
};
</script>

<style lang="scss" scoped></style>
