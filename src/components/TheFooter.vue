<template lang="pug">
div
  v-footer#footer.mt-12.pa-10(padless)
    //- :class="isDarkTheme ? '' : 'background'")
    //- if light theme: make background darker
    v-row(justify="center" no-gutters)
      v-btn.my-2(
        v-for="link in links"
        :key="link.link"
        color="white"
        @click='goTo(link.link)'
        text) {{ link.title }}
      v-col.lighten-2.py-4.text-center.white--text(
        cols="12")
        v-btn.mx-4.primary--text(
          v-for="icon in icons"
          :key="icon.mdi"
          icon target="_blank"
          :href="icon.link")
          v-icon(size="24px") {{ icon.mdi }}
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
        title: "Contact",
        link: "/contact"
      },
      {
        title: "Imprint",
        link: "imprint"
      },
      {
        title: "Privacy Policy",
        link: "privacy-policy"
      }
    ],
    icons: [
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
      },
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
    ...mapGetters(["isDarkTheme"])
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
#footer {
  background: url(../assets/background/Subtle-Prism.svg) center center;
}
</style>
