<template lang="pug">
div
  //- section
    //- https://github.com/johndatserakis/vue-video-section
    //- Video by Michal Marek from Pexels
    vue-video-section(
      :elementId="'coast'" :desktopHeight="750" :mobileHeight="680"
      :mp4Source="require('@/assets/background/video/coast.mp4')"
      :posterSource="require('@/assets/background/nature.jpg')")
      v-container(slot="overlay-content")
        v-row.text-center.pa-12(align="center" justify="center" fill-height fluid)
          v-col.white--tepxt(cols="12")
            h1.display-2.mb-4.font-weight-thin {{ $t("blogHero.title") }}
            h1.subtitle-1 {{ $t("blogHero.subtitle") }}
            
    ScrollHero
  
  
  //- Code from about
  //- Hero Area
  //- Parallax(:parallaxImage="require('@/assets/about/Aasee.jpg')" 
  //-   :title="$t('parallaxText.title')" :subtitle="$t('parallaxText.subtitle')")
  v-img.align-center(src="@/assets/background/Glatthorn.jpg" height="100vh"
    gradient="to bottom right, rgba(100,115,201,.33), rgba(38,145,66,.5)")
    //- Another section is necessary to provide the max-width for ultra-wide screens
    section.mb-0 
      v-container
        v-row.pa-md-12.d-flex.text-center
          v-col.col-12.col-md-6.white--text(order-md="2")
            h1.display-3.font-weight-thin.mb-12 {{ $t("parallaxText.title") }}
            p.subheading {{ $t("parallaxText.subtitle") }}
            ScrollHero.mt-16.pt-16
          v-col.d-flex.justify-center.col-12.col-md-6(order-md="1")
            v-card.pa-0(elevation="50" max-width="400px" max-height="400px")
              v-img(alt="Leo Giesen Profil" src="@/assets/about/Snow-Profile.jpg" max-width="90vw")
  //- About me texts alternating with corresponding images
  article

  section
    h2.display-2.font-weight-thin.text-center.mb-12 This page is in development 
  section.d-flex.flex-wrap.justify-space-between#scroll
    v-container
      h2.display-2.font-weight-thin.text-center.mb-12 Posts  
      v-row.d-flex.flex-wrap.justify-space-between
        v-col.col-12.col-sm-6(v-for="i in 6" :key="i")
          v-card.mb-9
            v-card-title Card {{ i }}
            v-card-text Vue template im Internet recherchieren für Blogposts und 
              | folder structure und referenzieren von Posts (z.B. Übersicht davon)
  section
    //- iframe(style='position:fixed;top:0;left:0;width:100%;height:100%;border:none;margin:0;padding:0;overflow:hidden;z-index:10;' src='https://pseudocode.deepjain.com/')
    //- NotionRenderer(:blockMap="blockMap" fullPage)
    //- vue-notion-render(:unofficial="true" :data="data")
    //- src="https://www.notion.so/giesen/Productivity-Programs-d37875b3bdad42baaea754dd2100c693" 
    //- title="Great Applications to Boost Your Productivity"
    
    
    //- iframe(src="https://v1.embednotion.com/embed/0c7acb7e6cb543d0b6b27fe4fbbd6a40")
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";
// import { NotionRenderer, getPageBlocks } from "vue-notion";

export default {
  name: "BlogHome",
  components: {
    ScrollHero
  },
  // data: () => ({ }),
  computed: {},
  i18n: {
    messages: {
      de: {
        parallaxText: {
          title: "Blog",
          subtitle: "Der Blog ist noch in der Entwicklung."
        }
      },
      en: {
        parallaxText: {
          title: "Blog",
          subtitle: "The blog is in development."
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
