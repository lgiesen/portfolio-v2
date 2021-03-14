<template lang="pug">
div
  //- Hero Area
  section(style="height: 100vh;")
    v-parallax.hero.text-center(dark cover
      :src="themeSpecificHeroImage")
      v-row(align='center' justify='center')
        v-col(cols='12')
          h1.display-1.font-weight-thin.mb-4
            | Passionate about Business and Computer Science
          h3.subheading
            | - Portfolio of Leo Giesen -



          div.mt-10
            v-btn.pa-6.gradient-btn.ma-10(
              @click="$router.push('/about')"
              ) For Businesses
            v-btn.pa-6(outlined
              @click="$router.push('/playground')"
              ) Other Visitors
  section
    v-container
      h3.text-center Title
      div.text-center.mx-auto(justify="center" align="center")
        p svg start
        //- convert so that the svg contains path property 
        //- instead of e.g. polygon --> the svg-filler need that
        //- convert here: https://codepen.io/jakealbaugh/pen/GZwgzV
        svg-filler(path="/svg/bitcoin.svg" fill="#FF9900" 
        width="50px" height="50px" hover-color="#35495e")
        //- SVG Filler only fills the first path and does not display more than that. So get rid of the idea
        svg-filler(path="/svg/background/light/large-triangles.svg" width="100px" height="100px")
        p svg end
      
</template>

<script>
// import SvgFiller from "vue-svg-filler";
import SvgFiller from "../vue-svg-filler";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    SvgFiller
  },
  computed: {
    ...mapGetters(["isDarkTheme"]),
    themeSpecificHeroImage() {
      if (this.isDarkTheme)
        return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80";
      else
        return "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    }
  }
};
</script>

<style lang="scss" scoped></style>
