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

  section#scroll
    v-container
      h1.display-2.font-weight-thin.text-center Experience
      v-row(align="center")
        v-col(cols="6")
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
          div.text-center.mt-12
            v-btn.ma-auto.pa-6.gradient-btn(href="/LeoGiesenCV.pdf")
              v-icon mdi-download
              | Download CV
        v-col(cols="6")
          v-img(src="@/assets/profile/Leo Giesen Profile square.jpg")
  

  //- full-width parralax image
  section
    v-parallax(dark height="300"
      src='https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')
      v-row(align='center' justify='center')
        v-col.text-center(cols='12')
          h1.display-1.font-weight-thin.mb-4 Work Experience
          h4.subheading Build your application today!
  
  //- CV: work experience
  CardGroup(sectionTitle="Education" :iterableObject="employment")
  //- section
  //-   h1.display-1.font-weight-thin.mb-4.text-center Work Experience
  //-   v-container.alternatingBoxes(v-for="(work, index) in employment" :key="index" 
  //-     :class="floatDirection(index)")
  //-     v-card.pa-10(elevation="6")
  //-       v-row
  //-         v-col(cols="3")
  //-           v-img(:src="work.imageSrc" cover)
  //-         v-card-title {{ work.title }} 
  //-           span @
  //-             a(:href="work.link" target="_blank"
  //-             ) {{ work.institution }}, {{ work.location }}
  //-       p {{ work.description }}

  //- full-width parralax image
  section.clear-both
    v-parallax(dark height="300"
      src='https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')
      v-row(align='center' justify='center')
        v-col.text-center(cols='12')
          h1.display-1.font-weight-thin.mb-4 Education
          h4.subheading Build your application today!
  
  CardGroup(sectionTitle="Education" :iterableObject="education")

//- CV: Education
  section
    h1.display-1.font-weight-thin.mb-12.text-center Education
    v-container.d-flex.flex-wrap.justify-space-between
      v-card.mb-9.pa-7(elevation="6" v-for="item in education" :key="item.title" 
        :width="$vuetify.breakpoint.mobile ? '100vw' : '38vw'")
        //- if desktop use two columns (38vw)
        //- else use full width (100vw)
        v-row
          v-col(align="center" justify="center")
            v-img(:src="item.imageSrc" width="20vw")
        v-row
          v-col
            v-card-title.justify-center {{ item.title }} 
            v-card-subtitle.text-center @
              a(:href="item.link" target="_blank"
                ) {{ item.institution }}, {{ item.location }}
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import CardGroup from "@/components/CardGroup.vue";

export default {
  name: "Experience",
  components: {
    ScrollHero,
    CardGroup
  },
  data: () => ({
    employment: [
      {
        title: "Student Assistant",
        institution:
          "Chair of Information Systems (European Research Center for Information Systems)",
        link: "https://www.ercis.org/",
        imageSrc: require("@/assets/employmentAndEducation/ERCIS.png"),
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
        imageSrc: require("@/assets/employmentAndEducation/move.png"),
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
        imageSrc: require("@/assets/employmentAndEducation/SEPAone.png"),
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
        imageSrc: require("@/assets/employmentAndEducation/BRL.png"),
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
        imageSrc: require("@/assets/employmentAndEducation/WWU.png"),
        location: "Münster",
        startDate: "2018-10",
        endDate: "today",
        description: ""
      },
      {
        title: "Abitur",
        institution: "Evangelisch Stiftischem Gymnasium",
        link: "https://esg-guetersloh.de/",
        imageSrc: require("@/assets/employmentAndEducation/ESG.png"),
        location: "Gütersloh",
        startDate: "2016-06",
        endDate: "2018-06",
        description: ""
      }
    ]
  }),
  methods: {
    floatDirection(index) {
      // on medium sized viewports float
      if (index % 2 == 1) return "float-md-left";
      else return "float-md-right";
    }
  }
};
</script>

<style lang="scss" scoped>
v-parallax {
  height: 15vh;
}
.card-group {
  height: 40vh;
}
a {
  text-decoration: none !important;
  cursor: pointer;
  title: relative;
  transition: clip-path 275ms ease;
  &:hover span::before,
  &:focus span::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
span {
  &::before {
    title: absolute;
    content: attr(data-content);
    text-decoration: underline;
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    transition: clip-path 275ms ease;
  }
}
</style>
