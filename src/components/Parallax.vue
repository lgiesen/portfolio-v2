<template lang="pug">
div
    section.mb-0
        v-container(v-if="$vuetify.breakpoint.xlOnly")
            //- hero class makes parallax fullwidth, which most likely distorts the parallax image
            v-parallax(:src="this.parallaxImage")
                v-row.justify-center.align-center
                    v-col.text-center
                        h1.display-3.font-weight-thin.mb-4.black--text {{ this.title }}
                        h4.subheading {{ this.subtitle }}
                ScrollHero
        
        v-parallax.hero(v-else :src="this.parallaxImage")
            v-row.justify-center.align-center
                v-col.text-center
                    h1.display-3.font-weight-thin.mb-4.black--text {{ this.title }}
                    h4.subheading {{ this.subtitle }} {{ this.parallaxImage }}
            ScrollHero
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "Parallax",
  components: {
    ScrollHero
  },
  props: ["parallaxImage", "title", "subtitle"]
};
</script>

<style lang="scss" scoped></style>
