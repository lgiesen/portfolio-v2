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
  //- Overview of employers and education
  section
    v-container.center-items
      //- Tablet and desktop version
      v-row.align-center.hidden-sm-and-down
        v-col
          ExperienceCard(:associationsSrc="associations[0]")
        v-col
          ExperienceCard(:associationsSrc="associations[1]")
          ExperienceCard(:associationsSrc="associations[2]")
          ExperienceCard(:associationsSrc="associations[3]")
        v-col
          ExperienceCard(:associationsSrc="associations[4]")
      //- Mobile Version
      div.hidden-md-and-up
        div.align-center.d-flex.flex-wrap.justify-space-around
          ExperienceCard(v-for="(association, index) in associations" 
            :key="association.title" :associationsSrc="associations[index]")
  
  ParallaxDivider(:sectionTitle="$t('experienceParallax.title')" 
    :sectionSubtitle="$t('experienceParallax.subtitle')"
    imgSrc="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
  
  v-img(:src="require('@/assets/background/' + ActiveTheme + '/rectangle.svg')")
    section
      //- CV: work experience
      CardGroup(:sectionTitle="$t('workExperience')" :iterableObject="employment")
      //- Education
      CardGroup(:sectionTitle="$t('education')" :iterableObject="education")

    div.center-items
      v-btn.pa-7.gradient-btn.round.ma-4.ma-md-10(rounded
        @click="$router.push('/contact')") {{ $t("contact") }}
</template>

<script>
import { mapGetters } from "vuex";
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import HeroBackgroundGradientGroup from "@/assets/background/HeroBackgroundGradientGroup.vue";
import CardGroup from "@/components/CardGroup.vue";
import ParallaxDivider from "@/components/ParallaxDivider.vue";

export default {
  name: "Home",
  components: {
    HeroBackgroundGradientGroup,
    ScrollHero,
    ExperienceCard,
    CardGroup,
    ParallaxDivider
  },
  data: () => ({
    associations: [
      {
        title: "SEPAone",
        imageSrc: require("@/assets/workExperience/SEPAone.png"),
        href: "SEPAone"
      },
      {
        title: "ERCIS",
        imageSrc: require("@/assets/workExperience/ERCIS.png"),
        href: "ERCIS"
      },
      {
        title: "move",
        imageSrc: require("@/assets/workExperience/move.png"),
        href: "move"
      },
      {
        title: "WWU",
        imageSrc: require("@/assets/workExperience/WWU.png"),
        href: "WWU"
      },
      {
        title: "BRL",
        imageSrc: require("@/assets/workExperience/BRL.png"),
        href: "BRL"
      }
    ],
    employment: [
      {
        title_en: "Student Assistant",
        title_de: "Studentische Hilfskraft",
        institution: "ERCIS / WWU",
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
        title_en: "Student Consultant",
        title_de: "Studentischer Berater",
        institution: "move e. V.",
        link: "https://move-ev.de/",
        imageSrc: require("@/assets/workExperience/move-title.png"),
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
        title_en: "Online Payment Internship",
        title_de: "Online Payment Praktikum",
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
        title_en: "Assistant of Insolvency Administrator",
        title_de: "Insolvenzverwaltung Praktikum",
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
        title_en: "Information Systems B. Sc.",
        title_de: "Wirtschaftsinformatik B. Sc.",
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
        title_en: "Abitur (= A-levels)",
        title_de: "Abitur",
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
    ]
  }),
  computed: {
    ...mapGetters(["ActiveTheme"])
  },
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
        },
        experienceParallax: {
          title: "Work Experience and Education",
          subtitle: `I have gained a large variety of work experience and in-depth knowledge`
        },
        workExperience: "Work Experience",
        education: "Education",
        contact: "Let's Talk!"
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
        },
        experienceParallax: {
          title: "Berufserfahrung und Bildung",
          subtitle: `Ich habe eine Vielzahl von Arbeitserfahrungen und fundierten Kenntnissen gesammelt`
        },
        workExperience: "Berufserfahrung",
        education: "Bildung",
        contact: "Lass Uns Austauschen!"
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
