<template lang="pug">
section.mb-0
    //- If you wish to use a containered version for xl-screens:
    //- v-container(v-if="$vuetify.breakpoint.xlOnly")
        //- hero class makes parallax fullwidth, which most likely distorts the parallax image
        v-parallax(:src="this.parallaxImage" :alt="this.parallaxImage")
            v-row.justify-center.align-center
                v-col.text-center
                    h1.display-3.font-weight-thin.mb-4.black--text {{ this.title }}
                    p.subheading {{ this.subtitle }}
            ScrollHero
    
    v-parallax.hero(:src="this.parallaxImage" :alt="this.parallaxImage")
        v-row.justify-center.align-center
            v-col.text-center
                h1.display-3.font-weight-thin.black--text {{ this.title }}
                p.subheading {{ this.subtitle }}
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

<style lang="scss" scoped>
.hero {
  // min-height: calc(100vh - 60px);
  width: 100vw;
}
</style>
