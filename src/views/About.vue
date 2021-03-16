<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero(dark
      src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')
      v-row(align="center" justify="center")
        v-col.text-center(cols='12')
          h1.display-3.font-weight-thin.mb-4 About Leo
          h4.subheading I love to learn and apply my knowledge!
      ScrollHero
  //- Introduction
  section#scroll
    v-container
      h1.display-2.font-weight-thin.text-center.ma-10 About
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
          div.text-center.mt-10
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
          h1.display-1.font-weight-thin.mb-4
            | Experience
          h4.subheading
            | Build your application today!
  
  //- CV: work experience
  section
    v-row.d-flex.flex(no-gutters)
      v-col(cols="12" sm="12" md="6" 
        v-for="work in employment"
        :key="work.position")
        //- card to frame the inner card
        v-card.pa-0(tile outlined)
          v-card.pa-10.card-group
            v-row(col="12")
              v-col(cols="3")
                v-img(:src="work.imageSrc" cover)
              v-col(cols="9")
                v-card-title {{ work.position }} 
                  span  @
                    a(:href="work.link" target="_blank"
                    ) {{ work.employer }}, {{ work.location }}
            v-row
              p {{ work.description }}
  
  //- full-width parralax image
  section
    v-parallax(dark='' height="300"
      src='https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')
      v-row(align='center' justify='center')
        v-col.text-center(cols='12')
          h1.display-1.font-weight-thin.mb-4
            | Education
          h4.subheading
            | Build your application today!
  
  //- CV: Education
  section
    v-row.d-flex.flex(no-gutters)
      v-col(cols="12" sm="12" md="6" 
        v-for="item in education"
        :key="item.title")
        //- card to frame the inner card
        v-card.pa-0(tile outlined)
          v-card.pa-10.card-group
            v-row(col="12")
              v-col(cols="3")
                v-img(:src="item.imageSrc" cover)
              v-col(cols="9")
                v-card-title {{ item.title }} 
                  span  @
                    a(:href="item.link" target="_blank"
                      ) {{ item.institution }}, {{ item.location }}
            v-row
              p {{ item.description }}
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "About",
  components: {
    ScrollHero
  },
  data: () => ({
    employment: [
      {
        position: "Student Assistant",
        employer:
          "Chair of Information Systems (European Research Center for Information Systems)",
        link: "https://www.ercis.org/",
        imageSrc: require("@/assets/employmentAndEducation/ERCIS.png"),
        location: "Munster",
        startDate: "2019-10",
        endDate: "today",
        description:
          "I enthusiastically work as a student assistant for Dr. Chasin for IT projects and research at Westphalian Wilhelms- University Münster, where I gained insights into modern technologies."
      },
      {
        position: "Student Consultant",
        employer: "move e. V.",
        link: "https://move-ev.de/",
        imageSrc: require("@/assets/employmentAndEducation/move.png"),
        location: "Munster",
        startDate: "2019-03",
        endDate: "today",
        description:
          "At move I developed great communication skills and learned how to contribute an innovative perspective to foster productive teamwork."
      },
      {
        position: "Online Payment Internship",
        employer: "SEPAone",
        link: "https://www.sepaone.com/",
        imageSrc: require("@/assets/employmentAndEducation/SEPAone.png"),
        location: "Gutersloh",
        startDate: "2018-04",
        endDate: "2018-05",
        description:
          "Data Process Management for Customers: Customer support on how to get started with the online payment process"
      },
      {
        position: "Assistant of Insolvency Administrator",
        employer: "Boege Rohde Luebbehuesen",
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
        title: "Bachelor of Science: Information Systems",
        institution: "Westphalian Wilhelms-University",
        link: "https://www.wi.uni-muenster.de/de/willkommen",
        imageSrc: require("@/assets/employmentAndEducation/WWU.png"),
        location: "Munster",
        startDate: "2018-10",
        endDate: "today",
        description: ""
      },
      {
        title: "Abitur",
        institution: "Evangelisch Stiftischem Gymnasium",
        link: "https://esg-guetersloh.de/",
        imageSrc: require("@/assets/employmentAndEducation/ESG.png"),
        location: "Gutersloh",
        startDate: "2016-06",
        endDate: "2018-06",
        description: ""
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
v-parallax {
  height: 15vh;
}
.card-group {
  height: 40vh;
}
</style>
