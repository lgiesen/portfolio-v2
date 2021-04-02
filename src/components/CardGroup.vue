<template lang="pug">
div
  h1.display-2.font-weight-thin.mb-12.text-center {{ this.sectionTitle }}
  v-container
    v-row(justify="center")
      v-col.col-12.col-md-8.col-lg-6(v-for="item in iterableObject" :key="item.title")
        v-hover
          template(v-slot:default="{ hover }")
            v-card.mb-12.pa-7.transition-swing(height="100%"
              :class="`elevation-${hover ? 24 : 6}`")
              v-row
                v-col(align="center" justify="center")
                  v-img(:src="item.imageSrc" height="10vh" max-width="20vw" contain)
              v-row
                v-col
                  v-card-title.justify-center {{ item.title }} 
                  v-card-subtitle.text-center @
                    AnimatedLink(:href="item.link" :linkText="item.institution + ', ' + item.location" target="_blank")
                  v-card-text.mt-7.text-justify {{ item.description }}
</template>

<script>
import AnimatedLink from "@/components/playground/hyperlinks/AnimatedLink.vue";
export default {
  name: "CardGroup",
  props: ["sectionTitle", "iterableObject"],
  components: { AnimatedLink }
};
</script>

<style lang="scss" scoped></style>
