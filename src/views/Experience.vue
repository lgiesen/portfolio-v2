<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero(
      src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')
      v-row.align-center.justify-center
        v-col.text-center
          h1.display-3.font-weight-thin.mb-12 {{ $t("experienceHero.title") }}
          p.subheading {{ $t("experienceHero.subtitle") }}
      ScrollHero
  
  //- Intro
  section
    v-row
      v-col.col-12.col-md-6
        h2.display-1 Intro text
        p Lorem ipsum ...
      v-col.col-12.col-md-6
        v-card
          v-img(src="@/assets/about/Snow-Profile.jpg")
  
  section
    h2.display-1 Skills
    


  //- Recommendation
  section
    v-container 
      h1.display-1.mb-12.text-center {{ $t("recommendationsTitle") }}
      v-carousel
        v-carousel-item(v-for="(recommendation, index) in recommendations" 
          :key="index" :src="recommendation.src" 
          reverse-transition="fade-transition" transition="fade-transition")
          v-row.fill-height(align="center")
            v-col.text-center.pa-12
              v-container.pa-12
                h2.mb-5.display-1 {{ recommendation.title }}
                h4.ma-5.overline {{ recommendation.location }}
                p.mt-10.font-italic.text-justify 
                  | "{{ isDE ? recommendation.description_de : recommendation.description_en }}"

</template>

<script>
import { mapGetters } from "vuex";
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import ParallaxDivider from "@/components/ParallaxDivider.vue";

export default {
  name: "Experience",
  components: {
    ScrollHero,
    ParallaxDivider
  },
  data: () => ({
    recommendations: [
      {
        title: "Prof. Dr. Friedrich Chasin",
        location: "Münster",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        description_en: `1 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
        do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
        nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
        voluptate elit amet. (translated)`,
        description_de: `1 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
        do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
        nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
        voluptate elit amet.`
      },
      {
        title: "Jason Haak - IT Ressortleiter und Vorstand bei move e. V.",
        location: "Münster",
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        description_en: `2 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
        do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
        nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
        voluptate elit amet. (translated)`,
        description_de: `2 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
        do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
        nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
        voluptate elit amet.`
      },
      {
        title: "Thespina Coombe - Teacher at Cambridge International School",
        location: "Cambridge (UK)",
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        description_en: `Leo has an exceptionally polite and mature manner. He is enthusiastic and 
        a pleasure to teach. He has shown an interest and aptitude in all the subjects he has 
        studied, including Chemistry, Maths and History. He has contributed to many interesting 
        discussions in English Literature lessons where Leo has had no reservations in joining 
        in confidently. He is an asset to any classroom to inspire and challenge other students; 
        he is a positive influence. All the subject teachers speak highly of Leo because he is 
        curious and always focused in class.`,
        description_de: `(übersetzt)`
      },
      {
        title: "Lehrer Recommendation",
        location: "Gütersloh",
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        description_en: `4 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
        do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
        nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
        voluptate elit amet. (translated)`,
        description_de: `4 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
        do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
        nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
        voluptate elit amet.`
      }
    ]
  }),
  computed: {
    ...mapGetters(["isDE"])
  },
  i18n: {
    messages: {
      en: {
        experienceHero: {
          title: "Experience",
          subtitle: "I love to learn and apply my knowledge!"
        },
        recommendationsTitle: "Recommendations"
      },
      de: {
        experienceHero: {
          title: "Erfahrung",
          subtitle: `Ich liebe es, zu lernen und mein Wissen anzuwenden!`
        },
        recommendationsTitle: "Empfehlungen"
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
