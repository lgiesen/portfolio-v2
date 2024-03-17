<template lang="pug">
section.mb-0
  //- Hero area
  section.fullwidth.mb-0
    v-parallax(
      :class="parallaxHeight"
      :src="parallaxImage" :alt="parallaxImage")
      v-overlay(absolute :color="overlayColor")
        //- Another section is necessary to provide the max-width for ultra-wide screens
        section.mb-0 
          v-container
            v-row.pa-md-12.d-flex.text-center
              v-col(order-md="2")
                h1.text-break.display-3.font-weight-thin.mb-12(
                  v-html="$t('parallaxText.' + translationKey + '.title')")
                p.text-break.subheading(
                  v-html="$t('parallaxText.' + translationKey + '.subtitle')")
                ScrollHero.mt-16.pt-16
              v-col.d-flex.justify-center.col-12.col-md-6(v-if="translationKey == 'about'" order-md="1")
                v-card.pa-0(elevation="50" max-width="400px" max-height="400px")
                  v-img(alt="Leo Giesen Profil" src="@/assets/profile/leo-giesen-nature.jpg" max-width="90vw")
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "Parallax",
  components: {
    ScrollHero
  },
  computed: {
    parallaxHeight() {
      // Full height for phones (xs) and Laptops (lg). 80% vh for xs handy ipad (sm) and wide screen (xl)
      return ["xs", "lg"].includes(this.$vuetify.breakpoint.name)
        ? "h-100vh"
        : "h-80vh";
    }
  },
  props: ["parallaxImage", "overlayColor", "translationKey"]
};
</script>
