<template lang="pug">
div
  v-footer#footer.mt-12.pa-10(padless :class="isDarkTheme ? 'darkFooterBg' : 'lightFooterBg'")
    v-row.justify-center
      v-btn.my-2(
        v-for="link in links"
        :key="link.link"
        color="white"
        @click='goTo(link.link)'
        text) {{ isDE ? link.title_de : link.title_en }}
      v-col.white--text.text-center.col-12
        //- changing arrangement of icons (low code quality :( )
        //- tablet & desktop version
        div.hidden-sm-and-down
          Icons(:iconGroup="socialIcons")
          Icons(:iconGroup="programmingIcons")
        //- mobile version: two social icons above, three code icons below
        v-row.hidden-md-and-up
          v-col.col-12
            Icons(:iconGroup="socialIcons")
          v-col.col-12
            Icons(:iconGroup="programmingIcons")
        p.mt-6 &copy; {{new Date().getFullYear()}} - 
          span.secondary--text Leo Giesen

</template>

<script>
import { mapGetters } from "vuex";
import socialIcons from "@/components/social-icons/SocialIcons.json";
import programmingIcons from "@/components/social-icons/ProgrammingIcons.json";
import Icons from "@/components/social-icons/Icons.vue";

export default {
  name: "TheFooter",
  components: { Icons },
  data: () => ({
    links: [
      {
        title_en: "Contact",
        title_de: "Kontakt",
        link: "contact"
      },
      {
        title_en: "Imprint",
        title_de: "Impressum",
        link: "imprint"
      },
      {
        title_en: "Privacy Policy",
        title_de: "Datenschutz",
        link: "privacy-policy"
      }
    ],
    socialIcons: socialIcons,
    programmingIcons: programmingIcons
  }),
  computed: {
    ...mapGetters(["isDarkTheme", "isDE"])
  },
  methods: {
    goTo(link) {
      // if the link is internal, the router should be used. Otherwise open a new page
      if (!link.includes("http")) this.$router.push("/" + link);
      else window.open("https://www.wi.uni-muenster.de/legal-notice", "_blank");
    }
  }
};
</script>
<style lang="scss" scoped>
.lightFooterBg {
  // background: url(../assets/background/light/largeTriangles.svg) center center;
  background: url(../assets/background/light/subtlePrism.svg) center center;
}
.darkFooterBg {
  // background: url(../assets/background/dark/largeTriangles.svg) center center;
  background: url(../assets/background/dark/subtlePrism.svg) center center;
}
</style>
