<template lang="pug">
div
  //- Hero Area
  section
    //- https://github.com/johndatserakis/vue-video-section
    //- Video by Michal Marek from Pexels
    vue-video-section(
      :elementId="'coast'" :desktopHeight="750" :mobileHeight="680"
      :mp4Source="require('@/assets/background/video/coast.mp4')"
      :posterSource="require('@/assets/background/nature.jpg')")
      v-container(slot="overlay-content")
        v-row.text-center.pa-12(align="center" justify="center" fill-height fluid)
          v-col.white--text(cols="12")
            h1.display-2.mb-4.font-weight-thin {{ $t("blogHero.title") }}
            h1.subtitle-1 {{ $t("blogHero.subtitle") }}
            
        v-row.text-center(align="center" justify="center" fill-height fluid)
          v-col(cols="12")
            ScrollHero
  
  section.d-flex.flex-wrap.justify-space-between#scroll
    v-container
      h2.display-2.font-weight-thin.text-center.mb-12 Posts  
      v-row.d-flex.flex-wrap.justify-space-between
        v-col.col-12.col-sm-6(v-for="i in 6" :key="i")
          v-card.mb-9
            v-card-title Card {{ i }}
            v-card-text Vue template im Internet recherchieren für Blogposts und 
              | folder structure und referenzieren von Posts (z.B. Übersicht davon)
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "BlogHome",
  components: {
    ScrollHero
  },
  data: () => ({}),
  computed: {},
  i18n: {
    messages: {
      en: {
        blogHero: {
          title: "Blog (catchy name)",
          subtitle: "lorem"
        }
      },
      de: {
        blogHero: {
          title: "Blog",
          subtitle: "ipsum"
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
