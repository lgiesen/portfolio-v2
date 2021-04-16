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
          v-btn.mx-4.secondary--text(
              v-for="icon in socialIcons"
              :key="icon.mdi"
              icon target="_blank"
              :href="icon.link")
              v-icon(elevation="15" size="24px") {{ icon.mdi }}
          v-btn.mx-4.secondary--text(
            v-for="icon in programmingIcons"
            :key="icon.mdi"
            icon target="_blank"
            :href="icon.link")
            v-icon(elevation="15" size="24px") {{ icon.mdi }}
        //- mobile version: two social icons above, three code icons below
        v-row.hidden-md-and-up
          v-col.col-12
            v-btn.mx-4.secondary--text(
              v-for="icon in socialIcons"
              :key="icon.mdi"
              icon target="_blank"
              :href="icon.link")
              v-icon(elevation="15" size="24px") {{ icon.mdi }}
          v-col.col-12
            v-btn.mx-4.secondary--text(
              v-for="icon in programmingIcons"
              :key="icon.mdi"
              icon target="_blank"
              :href="icon.link")
              v-icon(elevation="15" size="24px") {{ icon.mdi }}
        p.mt-6 &copy; {{new Date().getFullYear()}} - 
          span.secondary--text Leo Giesen

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheFooter",
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
    socialIcons: [
      // {
      //   mdi: "mdi-email-outline",
      //   link: "mailto:leo.richard.giesen@gmail.com"
      // },
      {
        mdi: "mdi-linkedin",
        link: "www.linkedin.com/in/leogiesen"
      },
      {
        mdi: "mdi-xing",
        link: "https://www.xing.com/profile/Leo_Giesen"
      }
    ],
    programmingIcons: [
      {
        mdi: "mdi-github",
        link: "https://github.com/lgiesen"
      },
      {
        mdi: "mdi-gitlab",
        link: "https://wiwi-gitlab.uni-muenster.de/l_gies10"
      },
      {
        mdi: "mdi-stack-overflow",
        link: "https://stackoverflow.com/users/10220142/leo-giesen"
      }
    ]
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
