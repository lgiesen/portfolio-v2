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
    v-container
      v-row.d-flex.flex-wrap.justify-space-between
        //- skillCardGroup holds the title and where to find the corresponding text
        //- of the skill card in i18n 
        v-col.col-12.col-sm-6(v-for="card in skillCardGroup" :key="card.title")
          v-card.mb-9(height="100%")
            v-card-title {{ card.title }}
            v-card-text
              p(v-html="$t('skills.' + card.textSrc)")
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
  data: () => ({
    skillCardGroup: [
      {
        title: "Python",
        textSrc: "python"
      },
      {
        title: "Front-end Web Development",
        textSrc: "frontend"
      },
      {
        title: "Back-end Web Development",
        textSrc: "backend"
      },
      {
        title: "Microsoft Office / 365",
        textSrc: "office"
      },
      {
        title: "Modelling & Project Management",
        textSrc: "other"
      },
      {
        title: "Soft Skills",
        textSrc: "softSkills"
      }
    ]
  }),
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
        skills: {
          python: `I learned Python by studying online courses and programming along 
          in my free time. Furthermore, I had the opportunity to apply and enhance my 
          python capabilities in a regular and advanced module of my study at the 
          University of Münster. In the latter, I used Python and <strong>TensorFlow</strong> for a 
          <strong>Machine Learning</strong>
           project, which gave me insights into how Artificial Intelligence 
          works and what its current limitations and capabilities are.
          Additionally, I implemented smaller projects, for instance, a backtracking 
          algorithm to solve Sudokus and used 
          <strong>Web scraping</strong>
           to predict Bundesliga game results. 
          Lastly, I will use either Machine Learning or Web scraping at the start-up pivoty, 
          where I will work for a couple of months. As an outlook, I love to work with Python 
          and would be grateful for any Python-related job opportunities.`,
          frontend: `I took various online courses in my free time where I learned how to 
          program a website with 
          <strong>Vue.js</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, and prototype with 
          <strong>Figma</strong>. I was able to 
          apply my web dev skills in numerous projects, e.g., the watchtrainer project, which 
          is the corresponding website to a fitness app for the apple watch. Additional projects 
          comprise my previous and this portfolio page, two WordPress websites, which I 
          single-handedly developed in consultancy projects at move. However, I am most proud of 
          my project team's complex web application built in the project seminar 
          Game of Competences
          .`,
          backend: `My primary Web Development focus lies on the front end. Nevertheless, I am very 
          familiar with setting up and working with a database, e.g., building an Entity-relationship 
          Model (ERM), 
          <strong>SQL</strong>
           queries, and implemented 
          <strong>API calls</strong>
           with a REST API and GraphQL. I 
          acquired and applied these skills at university and in the watchtrainer and 
          Game of Competences 
          project. Moreover, I demonstrate how to work with API calls in my projects.`,
          office: `Since my everyday use of 
          <strong>Microsoft PowerPoint</strong>, <strong>Word</strong>, and <strong>Excel</strong> in school, I frequently 
          used these Microsoft products. As a student assistant at the Information Systems' chair at the 
          University of Münster, I prepared many lectures. Further, I created various presentations 
          as a consultant at move, which enhanced my presentation abilities. Thus, I became very profound with 
          PowerPoint and Word in particular. Lastly, in my work in the IT department at move, I worked with 
          <strong>Microsoft PowerApps</strong> and <strong>Flows</strong> with connections to <strong>SharePoint</strong> databases.`,
          other: `In my study, I worked with <strong>Java</strong> and learned about data management, structures, and 
          algorithms. Moreover, I learned how to structure and plan IT projects and their implementation 
          with the help of various modules, e.g., Project Management. Additionaly, I learned Unified Modeling Language (UML), Object Constraint Language (OCL), the 
          theory of Process Mining and the process modelling with <strong>BPMN</strong> or <strong>EPK</strong> 
          in the Software Engineering and Process Management modules. Finally, after I studied <strong>SCRUM</strong> 
          at my university and in a 
          Lufthansa Consulting 
          workshop, I worked with it in the 
          Game of Competences 
          project and a web development project at move.`,
          softSkills: `dynamic teamwork, leadership`
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
        },
        skills: {
          python: `Python habe ich durch das Studium und mit Hilfe vom nebenher Programmieren bei Online-Kursen in meiner 
          Freizeit gelernt. Außerdem hatte ich die Möglichkeit, meine Python-Fähigkeiten in einem regulären 
          und einem Vertiefungsmodul meines Wirtschaftsinformatik Studiums an der WWU anzuwenden und zu erweitern. In 
          letzterem habe ich Python und  <strong>TensorFlow </strong> für ein <strong>Machine-Learning</strong>-Projekt eingesetzt, was mir 
          Einblicke in die Funktionsweise und die aktuellen Grenzen und Möglichkeiten von Künstlicher Intelligenz 
          gegeben hat.
          </br>
          Außerdem habe ich kleinere Projekte umgesetzt, z.B. einen 
          Backtracking-Algorithmus 
          zum Lösen von Sudokus und habe <strong>Web Scraping</strong> zur Vorhersage von Bundesliga-Spielergebnissen eingesetzt. 
          Zuletzt werde ich entweder Machine Learning oder Web Scraping bei dem Start-up Pivoty einsetzen, wo ich für ein paar 
          Monate arbeiten werde. Als Ausblick: Ich liebe es, mit Python zu arbeiten und wäre dankbar für jede 
          Jobmöglichkeit mit Python-Bezug.`,
          frontend: `In meiner Freizeit belegte ich verschiedene Online-Kurse, in denen ich lernte, wie man eine Website mit 
          <strong>Vue.js</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> und Prototypen mit
          <strong>Figma</strong> programmiert. Meine Webdev-Kenntnisse konnte ich in zahlreichen Projekten anwenden, z. B. 
          im Projekt 
          watchtrainer
          , das die Website zu einer Fitness-App für die Apple Watch ist. Weitere Projekte 
          sind meine bisherige und diese Portfolio Webseite, zwei WordPress-Websiten, die ich in Beratungsprojekten 
          bei move entwickelt habe. Besonders stolz bin ich auf die komplexe Webanwendung, die mein Projektteam im Rahmen 
          des Projektseminars 
          Game of Competences
           erstellt hat.`,
          backend: `Mein primärer Fokus in der Webentwicklung liegt auf dem Frontend. Nichtsdestotrotz bin ich sehr vertraut 
          mit dem Aufbau und der Arbeit mit einer Datenbank, z.B. dem Aufbau eines Entity-Relationship-Modells (ERM), 
          <strong>SQL</strong>-Abfragen und der Implementierung von <strong>API Calls</strong> mit einer REST-API und GraphQL. 
          Diese Fähigkeiten habe ich an der Universität und im Projekt 
          watchtrainer
           und 
          Game of Competences
           erworben und angewendet. Außerdem zeige 
          ich in meinen Projekten, wie man mit API-Aufrufen arbeitet.`,
          office: `Da ich in der Schule täglich mit 
          <strong>Microsoft PowerPoint</strong>, <strong>Word</strong> und <strong>Excel</strong> arbeite, habe ich diese 
          Microsoft-Produkte häufig eingesetzt. Als studentische Hilfskraft am Lehrstuhl für Wirtschaftsinformatik an der 
          Universität Münster habe ich viele Vorträge vorbereitet. Außerdem habe ich bei move als Berater verschiedene 
          Präsentationen erstellt, was meine Präsentationsfähigkeiten erweitert hat. So wurde ich vor allem mit 
          PowerPoint und Word sehr tiefgründig. Zuletzt habe ich bei move in der IT-Abteilung mit 
          <strong>Microsoft PowerApps</strong> und <strong>Flows</strong> mit Anbindung an 
          <strong>SharePoint</strong>-Datenbanken gearbeitet.`,
          other: `In meinem Studium habe ich mit <strong>Java</strong> gearbeitet und Prinzipien des Datenmanagements, 
          Strukturen und Algorithmen gelernt und wie man sie umsetzt. Außerdem lernte ich in verschiedenen 
          Modulen, z. B. Projektmanagement, wie man IT-Projekte strukturiert und plant und wie man sie umsetzt. 
          Außerdem lernte ich Unified Modeling Language (UML), Object Constraint Language (OCL), Theorie des Process Mining und Modellierung eines Prozesses mithilfe 
          <strong>BPMN</strong> und <strong>EPK</strong> in den Modulen Software-Engineering und Prozessmanagement. 
          Nachdem ich <strong>SCRUM</strong> an der WWU und in einem 
          Lufthansa Consulting 
          Workshop lernte, habe ich es im Projekt 
          Game of Competences 
          und in einem Webentwicklungsprojekt bei move angewendet.`,
          softSkills: `dynamische Teamarbeit, Führung`
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
