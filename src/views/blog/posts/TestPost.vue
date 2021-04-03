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
            h1.display-2.mb-4.font-weight-thin {{ $t("postHero.title") }}
            h1.subtitle-1 {{ $t("postHero.subtitle") }}
            
        v-row.text-center(align="center" justify="center" fill-height fluid)
          v-col(cols="12")
            ScrollHero
  
  section.d-flex.flex-wrap.justify-space-between#scroll
    v-img(v-for="(image, index) in associations" :key="index" 
      :src="associations[index]" max-height="10vh" width="15vw" contain)
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "TestPost",
  components: {
    ScrollHero
  },
  data: () => ({}),
  computed: {},
  i18n: {
    messages: {
      en: {
        postHero: {
          title: "Post Title",
          subtitle: "lorem"
        }
      },
      de: {
        postHero: {
          title: "Post Titel",
          subtitle: "ipsum"
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
