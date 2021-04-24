<template lang="pug">
div
  //- Hero Area
  section.fullwidth
    v-parallax(src="@/assets/background/Aasee.jpg" height="800")
      //- Another section is necessary to provide the max-width for ultra-wide screens
      section.mb-0 
        v-container.text-center
          v-row.align-center.justify-center.pa-md-12
            v-col.col-11.col-md-6
              v-card(max-width="400px" elevation="50")
                v-img(src="@/assets/about/Snow-Profile.jpg")
            v-col.col-12.col-md-6
              h1.display-3.font-weight-thin.mb-12 {{ $t("experienceHero.title") }}
              p.subheading {{ $t("experienceHero.subtitle") }}
              ScrollHero.mt-16.pt-16
  
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
  
  ParallaxDivider#scroll(:sectionTitle="$t('experienceParallax.title')" 
    :sectionSubtitle="$t('experienceParallax.subtitle')"
    imgSrc="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
  
  v-img(:src="require('@/assets/background/' + ActiveTheme + '/rectangle.svg')")
    section
      //- CV: work experience
      CardGroup(:sectionTitle="$t('workExperience')" :iterableObject="employment")
      //- Education
      CardGroup(:sectionTitle="$t('education')" :iterableObject="education")

    //- Contact Me Button:
    //- div.center-items
    //-   v-btn.pa-7.gradient-btn.round.ma-4.ma-md-10(rounded
    //-     @click="$router.push('/contact')") {{ $t("contact") }}
    
  SocialContactSection

  //- Recommendation
  section
    v-container 
      h1.display-2.font-weight-thin.mb-12.text-center {{ $t("recommendationsTitle") }}
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
import ExperienceCard from "@/components/ExperienceCard.vue";
import ParallaxDivider from "@/components/ParallaxDivider.vue";
import CardGroup from "@/components/CardGroup.vue";
import SocialContactSection from "@/components/SocialContactSection.vue";

export default {
  name: "Experience",
  components: {
    ScrollHero,
    ExperienceCard,
    ParallaxDivider,
    CardGroup,
    SocialContactSection
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
        picked up modeling languages and various programming languages, which I 
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
    ...mapGetters(["isDE", "ActiveTheme"])
  },
  i18n: {
    messages: {
      en: {
        experienceHero: {
          title: "Experience",
          subtitle: "I love to learn and apply my knowledge!"
        },
        experienceParallax: {
          title: "Work Experience and Education",
          subtitle: `I have gained a large variety of work experience and in-depth knowledge`
        },
        workExperience: "Work Experience",
        education: "Education",
        contact: "Let's Talk!",
        recommendationsTitle: "Recommendations"
      },
      de: {
        experienceHero: {
          title: "Erfahrung",
          subtitle: `Ich liebe es, zu lernen und mein Wissen anzuwenden!`
        },
        experienceParallax: {
          title: "Berufserfahrung und Bildung",
          subtitle: `Ich habe eine Vielzahl von Arbeitserfahrungen und fundierten Kenntnissen gesammelt`
        },
        workExperience: "Berufserfahrung",
        education: "Bildung",
        contact: "Lass Uns Austauschen!",
        recommendationsTitle: "Empfehlungen"
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
