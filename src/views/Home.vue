<template lang="pug">
div
  //- Hero Area
  section
    //- https://github.com/johndatserakis/vue-video-section
    //- Video by Michal Marek from Pexels
    vue-video-section(
      :elementId="'coast'" :desktopHeight="750" :mobileHeight="680"
      :mp4Source="require('../assets/background/video/coast.mp4')"
      :posterSource="require('../assets/background/nature.jpg')")
      v-container(slot="overlay-content")
        v-row.text-center.pa-md-12.align-center.justify-center(fill-height fluid)
          v-col.white--text(cols="12")
            h1.display-2.font-weight-thin {{ $t("homeHero.title") }}
            h1.subtitle-1 {{ $t("homeHero.subtitle") }}
            v-btn.pa-6.gradient-btn.ma-4.ma-md-10(
              @click="$router.push('/about')") {{ $t("homeHero.btnBussness") }}
            v-btn.pa-6(outlined color="secondary"
              @click="$router.push('/about')") {{ $t("homeHero.btnOtherVisistors") }}
        //- v-row.text-center.align-center.justify-center(fill-height fluid)
        //-   v-col(cols="12")
    ScrollHero
  section#scroll
    v-container
      p {{ $t("homeIntro") }}
  section
    v-container.d-flex.flex-wrap.justify-space-between
      v-img(v-for="(image, index) in associations" :key="index" 
        :src="associations[index]" max-height="7vh" max-width="13vw" contain)
</template>

<script>
import { mapGetters } from "vuex";
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "Home",
  components: {
    ScrollHero
  },
  data: () => ({
    associations: [
      require("@/assets/workExperience/SEPAone.png"),
      require("@/assets/workExperience/ERCIS.png"),
      require("@/assets/workExperience/move.png"),
      require("@/assets/workExperience/WWU.png"),
      require("@/assets/workExperience/BRL.png")
    ]
  }),
  computed: {
    ...mapGetters(["isDarkTheme"]),
    themeSpecificHeroImage() {
      if (this.isDarkTheme)
        return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80";
      // else return require("@/assets/background/nature.jpg");
      else
        return "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80";
    }
  },
  i18n: {
    messages: {
      en: {
        homeHero: {
          title: "- Portfolio of Leo Giesen -",
          subtitle: "Passionate about Business and Computer Science",
          btnBussness: "For Businesses",
          btnOtherVisistors: "Other Visitors"
        },
        homeIntro: `Fascinating – That is how I perceive various computer science 
        technologies. Thus, this passion drives me to study Information Systems at 
        the WWU and to constantly improve my IT-skillset. To understand the 
        application of the acquired theoretical knowledge from my studies, I put 
        them into practice in real-life projects at the student consultancy move. 
        Furthermore, I work on personal projects in my free time and work at the 
        Information Systems’ chair, which fosters my analytical and conceptual 
        abilities.`
      },
      de: {
        homeHero: {
          title: "- Portfolio von Leo Giesen -",
          subtitle: "Leidenschaft für Wirtschaft und Informatik",
          btnBussness: "Unternehmen",
          btnOtherVisistors: "Interessenten"
        },
        homeIntro: `Faszinierend - so empfinde ich verschiedene Technologien der 
        Informatik. Diese Leidenschaft treibt mich an, Wirtschaftsinformatik an der 
        WWU zu studieren und meine IT-Fähigkeiten ständig zu verbessern. Um die 
        Anwendung der erworbenen theoretischen Kenntnisse aus dem Studium noch 
        tiefgehender zu verstehen, setze ich diese in realen Projekten bei der 
        studentischen Unternehmensberatung move um. Darüber hinaus arbeite ich in 
        meiner Freizeit an eignen Projekten und arbeite am Lehrstuhl für 
        Wirtschaftsinformatik, was meine analytischen und konzeptionellen 
        Fähigkeiten fördert.`
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
