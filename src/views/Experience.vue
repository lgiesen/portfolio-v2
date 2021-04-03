<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero(dark
      src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')
      v-row(align="center" justify="center")
        v-col.text-center(cols='12')
          h1.display-3.font-weight-thin.mb-4 {{ $t("experienceTitle") }}
          h4.subheading {{ $t("experitenceSubtitle") }}
      ScrollHero
  
  //- Introduction
  section#scroll
    v-container
      //- h1.display-2.font-weight-thin.text-center.ma-10 {{ $t("experienceTitle") }}
      v-row(align="center")
        v-col.col-12.col-sm-6
          p {{ $t("introExperience") }}
          div.text-center.mt-10
            //- this.$i18n.locale represents the active language: element of {'de', 'en'}
            v-btn.ma-auto.pa-6.gradient-btn(:href="'Leo_Giesen-CV-' + this.$i18n.locale +'.pdf'")
              v-icon mdi-download
              | {{ $t("downloadCV") }}
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
        v-carousel-item(v-for="(recommendation, index) in recommendations" 
          :key="index" :src="recommendation.src" 
          reverse-transition="fade-transition" transition="fade-transition")
          v-row.fill-height(align="center")
            v-col.text-center.pa-12
              h1.mb-5.display-1 {{ recommendation.title }}
              h3.ma-5.overline {{ recommendation.location }}
              p.mt-10.font-italic.text-start.text-justify "{{ recommendation.description_de }}"

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
        institution: "WWU/ERCIS",
        link: "https://www.ercis.org/",
        imageSrc: require("@/assets/workExperience/ERCIS.png"),
        location: "Münster",
        startDate: "2019-10",
        endDate: "today",
        description_en: `I enthusiastically work as a student assistant for Dr. Chasin 
        at the chair of Information Systems and Information Management
        for IT projects and contribute to scientific research at the European Research 
        Center for Information Systems / University of Münster, where I gained insights 
        into modern technologies and co-create and prepare lectures.`,
        description_de: `Mit Begeisterung arbeite ich als studentische Hilfskraft für 
        Dr. Chasin an IT- Projekten und wirke an der wissenschaftlichen Forschung am 
        European Research Center for Information Systems und WWU mit, wo ich Einblicke in 
        moderne Technologien gewinnen und Vorlesungen mitgestalten und vorbereiten konnte.`
      },
      {
        title: "Student Consultant",
        institution: "move e. V.",
        link: "https://move-ev.de/",
        imageSrc: require("@/assets/workExperience/move.png"),
        location: "Münster",
        startDate: "2019-03",
        endDate: "today",
        description_en: `At move, I developed excellent communication skills and learned 
        how to contribute an innovative perspective to foster productive teamwork. 
        Through intense group work in projects, my work became very goal-orientated, and 
        I improved my time management and developed the ability of precise project planning.`,
        description_de: `Bei move habe ich große Kommunikationsfähigkeiten entwickelt und
        gelernt, eine innovative Perspektive einzubringen, um produktive Teamarbeit zu fördern. 
        Durch den Verlauf meiner Projekte mit intensiver Gruppenarbeit erwarb ich die Fähigkeit 
        zu zielorientiertem Arbeiten, überzeugendem Zeitmanagement und präziser Projektplanung.`
      },
      {
        title: "Online Payment Internship",
        institution: "SEPAone",
        link: "https://www.sepaone.com/",
        imageSrc: require("@/assets/workExperience/SEPAone.png"),
        location: "Gütersloh",
        startDate: "2018-04",
        endDate: "2018-05",
        description_en: `Data Process Management for Customers: Customer support on how to 
        get started with the online payment process`,
        description_de: `Datenprozessmanagement für Kunden: Kundenunterstützung bei der 
        Einstieg in den Online-Zahlungsprozess`
      },
      {
        title: "Assistant of Insolvency Administrator",
        institution: "BRL",
        link: "https://www.brl.de/de/disziplinen/sanierung-und-insolvenz",
        imageSrc: require("@/assets/workExperience/BRL.png"),
        location: "Hamburg",
        startDate: "2016-06",
        endDate: "2016-07",
        description_en: `Through the assistance of insolvency administrators and writing insolvency 
        reports at Boege Rohde Luebbehuesen, I gained experience in the inisolvency process.`,
        description_de: `Durch die Unterstützung von Insolvenzverwaltern und das Schreiben von 
        Insolvenzberichten bei Boege Rohde Luebbehuesen konnte ich Erfahrungen im Insolvenzverfahren sammeln.`
      }
    ],
    education: [
      {
        title: "Wirtschaftsinformatik /Information Systems B. Sc.",
        institution: "WWU",
        link: "https://www.wi.uni-muenster.de/de/willkommen",
        imageSrc: require("@/assets/workExperience/WWU.png"),
        location: "Münster",
        startDate: "2018-10",
        endDate: "today",
        description_en: `At the University of Münster, I acquired foundational knowledge
        about economics, information systems, and computer science. Additionally, I 
        picked up modelling languages and various programming languages, which I 
        improved in my free time. Moreover, my project seminar team successfully
        implemented a complex web application, where I led the frontend team.`,
        description_de: `An der WWU eignete ich mir grundlegendes Wissen der BWL, Wirtschafts- 
        und Informatik an. Zusätzlich habe ich mir Modellierungs- und verschiedene Programmiersprachen 
        angeeignet, die ich in meiner Freizeit verbessert habe. Außerdem leitete ich das 
        Projektseminar Frontend-Team, in dem eine komplexe Webanwendung erfolgreich implementiert wurde.`
      },
      {
        title: "Abitur",
        institution: "ESG",
        link: "https://esg-guetersloh.de/",
        imageSrc: require("@/assets/workExperience/ESG.png"),
        location: "Gütersloh",
        startDate: "2016-06",
        endDate: "2018-06",
        description_en: `I completed my Abitur with a GPA of 2.1 at the Evangelisch 
        Stiftischem Gymnasium, which is a technology-oriented secondary school.`,
        description_de: `Mit einem Notendurchschnitt von 2,1 habe ich mein Abitur an 
        einem technisch orientierten Gymnasium abgeschlossen.`
      }
    ],
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
    ...mapGetters(["ActiveTheme"])
  },
  methods: {
    floatDirection(index) {
      // on medium sized viewports float
      if (index % 2 == 1) return "float-md-left";
      else return "float-md-right";
    }
  },
  i18n: {
    messages: {
      en: {
        experienceTitle: "Experience",
        experitenceSubtitle: "I love to learn and apply my knowledge!",
        introExperience: `Fascinating – That is how I perceive various computer 
        science technologies. Thus, this passion drives me to study Information 
        Systems at the WWU and to constantly improve my IT-skillset. To understand 
        the application of the acquired theoretical knowledge from my studies, I 
        put them into practice in real-life projects at the student consultancy move. 
        Furthermore, I work on personal projects in my free time and work at the 
        Information Systems’ chair, which fosters my analytical and conceptional abilities.`,
        downloadCV: "CV / course of life"
      },
      de: {
        experienceTitle: "Erfahrung",
        experitenceSubtitle:
          "Ich liebe es, zu lernen und mein Wissen anzuwenden!",
        introExperience: `Faszinierend - so empfinde ich verschiedene Technologien der Informatik. 
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
};
</script>

<style lang="scss" scoped></style>
