<template lang="pug">
div
  //- Hero Area
  //- section
    //- https://github.com/johndatserakis/vue-video-section
    //- Video by Michal Marek from Pexels
    //- vue-video-section(
    //-   :elementId="'coast'" :desktopHeight="750" :mobileHeight="680"
    //-   :mp4Source="require('../assets/background/video/coast.mp4')"
    //-   :posterSource="require('../assets/background/nature.jpg')")
    //- v-container(slot="overlay-content")
  section.hero.fullwidth
    div
      HeroBackgroundGradientGroup.p-absolute
      v-container.text-center
        v-row.pa-md-12.pb-md-0.align-center.justify-center.h-100vh(fill-height fluid)
          v-col.col-12.col-sm-6.col-md-6
            //- The v-card makes the title visible, because the SVG background was more prominent
            v-card.white--text.transparent-background(outlined)
              h1.display-2.font-weight-thin {{ $t("homeHero.title") }}
              h1.subtitle-1 {{ $t("homeHero.subtitle") }}
            //- v-btn.pa-7.gradient-btn.round.ma-4.ma-md-10(rounded
            //-   @click="$router.push('/about')") {{ $t("homeHero.btnBussness") }}
            //- v-btn.pa-7(outlined color="btnColor" rounded
            //-   @click="$router.push('/about')") {{ $t("homeHero.btnOtherVisistors") }}
            ScrollHero
          v-col.col-12.col-sm-6.col-md-4
            v-card
              v-img(src="@/assets/profile/Leo Giesen Profile.jpeg" max-height="60vh")
    //- Intro card text
    v-container#scroll.center-items
      v-card.pa-4(:width="this.$vuetify.breakpoint.mobile ? '90vw' : '60vw'")
        v-row
          v-col.col-12.col-sm-6.center-items
            //- should be replaced with an animated SVG
            v-card
              v-skeleton-loader(type="card" width="300")
          v-col.col-12.col-sm-6.pr-4
            v-card-title {{ $t("homeIntro.title") }}
            v-card-text.center-items.text-justify {{ $t("homeIntro.text") }}
              v-btn.gradient-btn.pa-6.mt-4(rounded
                :href="'Leo_Giesen-CV-' + this.$i18n.locale +'.pdf'")
                v-icon mdi-download
                | {{ $t("experienceIntro.downloadCV") }}
  section
    h2.display-1 Skills
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import HeroBackgroundGradientGroup from "@/assets/background/HeroBackgroundGradientGroup.vue";

export default {
  name: "Home",
  components: {
    HeroBackgroundGradientGroup,
    ScrollHero
  },
  data: () => ({}),
  i18n: {
    messages: {
      en: {
        homeHero: {
          title: "Progress with Passion",
          subtitle:
            "Fascination for new technologies and their application in business"
          // btnBussness: "For Businesses",
          // btnOtherVisistors: "Other Visitors"
        },
        homeIntro: {
          title: "I love to learn and apply my knowledge!",
          text: `Fascinating – That is how I perceive various computer science 
          technologies. Thus, this passion drives me to study Information Systems at 
          the WWU and to constantly improve my IT-skillset. To understand the 
          application of the acquired theoretical knowledge from my studies, I put 
          them into practice in real-life projects at the student consultancy move. 
          Furthermore, I work on personal projects in my free time and work at the 
          Information Systems’ chair, which fosters my analytical and conceptual 
          abilities.`
        },
        experienceIntro: {
          introduction: `Fascinating – That is how I perceive various computer 
          science technologies. Thus, this passion drives me to study Information 
          Systems at the WWU and to constantly improve my IT-skillset. To understand 
          the application of the acquired theoretical knowledge from my studies, I 
          put them into practice in real-life projects at the student consultancy move. 
          Furthermore, I work on personal projects in my free time and work at the 
          Information Systems’ chair, which fosters my analytical and conceptional abilities.`,
          downloadCV: "CV"
        }
      },
      de: {
        homeHero: {
          title: "Fortschritt mit Leidenschaft",
          subtitle:
            "Faszination für neue Technologien und deren Anwendung in der Wirtschaft"
          // btnBussness: "Unternehmen",
          // btnOtherVisistors: "Projekte"
        },
        homeIntro: {
          title: `Ich liebe es, zu lernen und mein Wissen anzuwenden!`,
          text: `Faszinierend - so empfinde ich verschiedene Technologien der 
          Informatik. Diese Leidenschaft treibt mich an, Wirtschaftsinformatik an der 
          WWU zu studieren und meine IT-Fähigkeiten ständig zu verbessern. Um die 
          Anwendung der erworbenen theoretischen Kenntnisse aus dem Studium noch 
          tiefgehender zu verstehen, setze ich diese in realen Projekten bei der 
          studentischen Unternehmensberatung move um. Darüber hinaus arbeite ich in 
          meiner Freizeit an eignen Projekten und arbeite am Lehrstuhl für 
          Wirtschaftsinformatik, was meine analytischen und konzeptionellen 
          Fähigkeiten fördert.`
        },
        experienceIntro: {
          introduction: `Faszinierend - so empfinde ich verschiedene Technologien der Informatik. 
          Diese Leidenschaft treibt mich an, Wirtschaftsinformatik an der WWU zu studieren und 
          meine IT-Fähigkeiten ständig zu verbessern. Um die Anwendung der erworbenen 
          theoretischen Kenntnisse aus dem Studium noch tiefgehender zu verstehen, setze ich 
          diese in realen Projekten bei der studentischen Unternehmensberatung move um. 
          Darüber hinaus arbeite ich in meiner Freizeit an eignen Projekten und arbeite am 
          Lehrstuhl für Wirtschaftsinformatik, was meine analytischen und konzeptionellen 
          Fähigkeiten fördert.`,
          downloadCV: "Lebenslauf"
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.p-absolute {
  position: absolute;
}
</style>
