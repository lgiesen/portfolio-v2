<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero(dark
      src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')
      v-row(align="center" justify="center")
        v-col.text-center(cols='12')
          h1.display-3.font-weight-thin.mb-4 Experience
          h4.subheading I love to learn and apply my knowledge!
      ScrollHero
  
  //- Introduction
  section#scroll
    v-container
      h1.display-2.font-weight-thin.text-center.ma-10 About
      v-row(align="center")
        v-col.col-12.col-sm-6
          p Leo has a huge passion for computer science and economics, which is why he 
            | studies Information Systems and ambitiously works on personal projects 
            | in his free time like his website.
          p In order to put his insights into practice Leo started working at move e. V. 
            | and at the chair of Information Systems at WWU, which fostered his 
            | analytical and conceptional abilities.
          p In his projects at move he developed a strength in communication and teamwork 
            | through intense group work. From those projects and his course of study, 
            | Leo acquired the skill of goal orientated work, great time management and 
            | precise project planning.
          div.text-center.mt-10
            v-btn.ma-auto.pa-6.gradient-btn(:href="'Leo_Giesen-CV-' + this.$i18n.locale +'.pdf'")
              v-icon mdi-download
              | Download CV
        v-col.col-12.col-sm-6
          v-img(src="@/assets/profile/Leo Giesen Profile square.jpg")
  
  ParallaxDivider(sectionTitle="Work Experience and Education" 
    sectionSubtitle="I have gained a large variety of work experience and in-depth knowledge"
    imgSrc="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
  
  v-img(:src="require('@/assets/background/' + ActiveTheme + '/rectangle.svg')")
    //- CV: work experience
    CardGroup(sectionTitle="Work Experience" :iterableObject="employment")
    //- Education
    CardGroup(sectionTitle="Education" :iterableObject="education")

  section
    v-container 
      h1.display-2.font-weight-thin.mb-12.text-center Recommendations
      v-carousel
        v-carousel-item(v-for="(recommendation, index) in recommendations" :key="index" :src="recommendation.src" 
          reverse-transition="fade-transition" transition="fade-transition")
          v-row.fill-height(align="center")
            v-col.text-center.pa-12
              h1.mb-5.display-1 {{ recommendation.title }}
              h3.ma-5.overline {{ recommendation.location }}
              p.mt-10.font-italic.text-start.text-justify "{{ recommendation.description }}"

</template>

<script>
import { mapGetters } from "vuex";
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import CardGroup from "@/components/CardGroup.vue";
import ParallaxDivider from "@/components/ParallaxDivider.vue";

export default {
  name: "Experience",
  components: {
    ScrollHero,
    CardGroup,
    ParallaxDivider
  },
  data: () => ({
    employment: [
      {
        title: "Student Assistant",
        institution:
          "Chair of Information Systems (European Research Center for Information Systems)",
        link: "https://www.ercis.org/",
        imageSrc: require("@/assets/workExperience/ERCIS.png"),
        location: "Münster",
        startDate: "2019-10",
        endDate: "today",
        description:
          "I enthusiastically work as a student assistant for Dr. Chasin for IT projects and research at Westphalian Wilhelms- University Münster, where I gained insights into modern technologies."
      },
      {
        title: "Student Consultant",
        institution: "move e. V.",
        link: "https://move-ev.de/",
        imageSrc: require("@/assets/workExperience/move.png"),
        location: "Münster",
        startDate: "2019-03",
        endDate: "today",
        description:
          "At move I developed great communication skills and learned how to contribute an innovative perspective to foster productive teamwork."
      },
      {
        title: "Online Payment Internship",
        institution: "SEPAone",
        link: "https://www.sepaone.com/",
        imageSrc: require("@/assets/workExperience/SEPAone.png"),
        location: "Gütersloh",
        startDate: "2018-04",
        endDate: "2018-05",
        description:
          "Data Process Management for Customers: Customer support on how to get started with the online payment process"
      },
      {
        title: "Assistant of Insolvency Administrator",
        institution: "Boege Rohde Luebbehuesen",
        link: "https://www.brl.de/de/disziplinen/sanierung-und-insolvenz",
        imageSrc: require("@/assets/workExperience/BRL.png"),
        location: "Hamburg",
        startDate: "2016-06",
        endDate: "2016-07",
        description: "Gained experience in writing insolvency reports."
      }
    ],
    education: [
      {
        title: "Information Systems B.Sc.",
        institution: "Westphalian Wilhelms-University",
        link: "https://www.wi.uni-muenster.de/de/willkommen",
        imageSrc: require("@/assets/workExperience/WWU.png"),
        location: "Münster",
        startDate: "2018-10",
        endDate: "today",
        description: ""
      },
      {
        title: "Abitur",
        institution: "Evangelisch Stiftischem Gymnasium",
        link: "https://esg-guetersloh.de/",
        imageSrc: require("@/assets/workExperience/ESG.png"),
        location: "Gütersloh",
        startDate: "2016-06",
        endDate: "2018-06",
        description: ""
      }
    ],
    recommendations: [
      {
        title: "Prof. Dr. Friedrich Chasin",
        location: "Münster",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        description: `1 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
voluptate elit amet.`
      },
      {
        title: "Jason Haak - IT Ressortleiter und Vorstand bei move e. V.",
        location: "Münster",
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        description: `2 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
voluptate elit amet.`
      },
      {
        title: "Thespina Coombe - Teacher at Cambridge International School",
        location: "Cambridge (UK)",
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        description: `Leo has an exceptionally polite and mature manner. He is enthusiastic and 
        a pleasure to teach. He has shown an interest and aptitude in all the subjects he has 
        studied, including Chemistry, Maths and History. He has contributed to many interesting 
        discussions in English Literature lessons where Leo has had no reservations in joining 
        in confidently. He is an asset to any classroom to inspire and challenge other students; 
        he is a positive influence. All the subject teachers speak highly of Leo because he is 
        curious and always focused in class.`
      },
      {
        title: "Lehrer Recommendation",
        location: "Gütersloh",
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        description: `4 Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
voluptate elit amet.`
      }
    ]
  }),
  computed: {
    ...mapGetters(["ActiveTheme"])
  },
  methods: {
    floatDirection(index) {
      // on medium sized viewports float
      if (index % 2 == 1) return "float-md-left";
      else return "float-md-right";
    }
  }
};
</script>

<style lang="scss" scoped></style>
