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


          //- Sources:
          //- Repo: https://github.com/biigpongsatorn/vue-svg-filler/blob/master/demo/App.vue
          //- Documentation 1: https://www.npmjs.com/package/vue-svg-filler
          //- Documentation 2: https://biigpongsatorn.github.io/#/vue-svg-filler
          //- Example: https://vuejsexamples.com/vue-component-for-customize-your-svg-file/
          //- Alternative: https://vuejs.org/v2/cookbook/editable-svg-icons.html
          svg-filler(path="static/bitcoin.svg")



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
