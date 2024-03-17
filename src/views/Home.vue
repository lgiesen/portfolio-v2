<template lang="pug">
div
  //- Hero Area
  //- section
  //- https://github.com/johndatserakis/vue-video-section
  //- Video by Michal Marek from Pexels
  //- vue-video-section(

  //-   :mp4Source="require('../assets/background/video/coast.mp4')"
  //-   :posterSource="require('../assets/background/nature.jpg')")
  //- v-container(slot="overlay-content")
  section.fullwidth
    div
      HeroBackgroundGradientGroup.p-absolute
      v-container.text-center
        v-row.pa-md-12.pb-md-0.align-center.justify-center.h-100vh(fill-height fluid)
          v-col.col-12.col-md-6
            //- The v-card makes the title visible, because the SVG background was more prominent
            v-card.white--text.transparent-background(outlined)
              h1.display-2.font-weight-thin {{ $t("homeHero.title") }}
              h1.subtitle-1 {{ $t("homeHero.subtitle") }}
            ScrollHero
          v-col.col-12.col-md-6.col-lg-4
            v-card
              v-img(alt="Leo Giesen Profil" src="@/assets/profile/leo-giesen.jpeg" max-height="60vh")
    //- Intro card text
    //- Create another section to create overlap with hero area 
    //- while still maintaining the max-width of all sections
    section
      v-container#scroll
        v-card.pa-4
          v-row
            v-col
              //- with other column: .col-12.col-md-6.pr-4
              v-card-title.justify-center {{ $t("homeIntro.title") }}
              v-card-text.center-items.text-justify {{ $t("homeIntro.text") }}
                v-btn.gradient-btn.pa-6.ma-8.mt-12(rounded
                  :href="'/CV/CV-Leo-Giesen-' + this.$i18n.locale.toUpperCase() +'.pdf'")
                  v-icon mdi-account-tie
                  | {{ $t("homeIntro.downloadCV") }}
  article
    section
      h2.display-1 Skills
      v-container
        v-row.d-flex.flex-wrap.justify-space-between
          //- skillCardGroup holds the title and where to find the corresponding text
          //- of the skill card in i18n 
          v-col.col-12.col-md-6(v-for="card in skillCardGroup" :key="card.title")
            v-card(height="100%" tile max-width="94vw")
              div.animated-gradient-box.in
                v-img.d-flex.white--text.align-end(max-height="200px" :src="card.backgroundImage" :alt="card.aria"
                  :gradient="$store.getters.isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgb(255,255,255,.6), rgb(255,255,255,.9)'")
                  //- single line requires .justify-center and multiline .text-center
                  v-card-title.justify-center.text-center
                    pre
                      h2.gradient-text(width="94vw" max-width="94vw") {{ $t("skills." + card.title) }}
              v-col.seperatorIcon.py-0
                v-btn(elevation="15" fab color="background")
                  v-icon(color="primary") mdi-{{ card.icon }}
              v-card-text
                p.my-0.py-0.text-justify(v-html="$t('skills.' + card.textSrc)")
</template>

<script>
import HeroBackgroundGradientGroup from "@/assets/background/HeroBackgroundGradientGroup.vue";
import ScrollHero from "@/components/scroll/ScrollHero.vue";
export default {
  name: "Home",
  components: {
    HeroBackgroundGradientGroup,
    ScrollHero
  },
  data: () => ({
    skillCardGroup: [
      {
        title: "mlbiTitle",
        textSrc: "mlbi",
        backgroundImage: require("@/assets/home/machine_learning.jpg"),
        icon: "language-python",
        aria: "Machine Learning"
      },
      {
        title: "feTitle",
        textSrc: "frontend",
        backgroundImage: require("@/assets/home/web_dev.jpg"),
        icon: "vuejs",
        aria: "Front-end Web Development Vue.js"
      },
      {
        title: "itArchitectureTitle",
        textSrc: "itArchitecture",
        backgroundImage: require("@/assets/home/it-architecture.jpg"),
        icon: "lan-connect", // progress-wrench
        aria: "It Architecture"
      },
      {
        title: "beTitle",
        textSrc: "backend",
        backgroundImage: require("@/assets/home/backend.jpg"),
        icon: "database", //api
        aria: "API and backend Web Development"
      },
      {
        title: "officeTitle",
        textSrc: "office",
        backgroundImage: require("@/assets/home/microsoft_office_365.jpg"),
        icon: "microsoft-office",
        aria: "Microsoft Office and Microsoft 365"
      },
      // {
      //   title: "pmTitle",
      //   textSrc: "processManagement",
      //   backgroundImage: require("@/assets/home/process.jpg"),
      //   icon: "arrow-decision",
      //   aria: "Process Management"
      // },
      {
        title: "sdevTitle",
        textSrc: "softwareDev",
        backgroundImage: require("@/assets/home/software_development.jpg"),
        icon: "language-java",
        aria: "Software Development"
      },
      {
        title: "otherTitle",
        textSrc: "other",
        backgroundImage: require("@/assets/home/desk.jpg"),
        icon: "star",
        aria: "Other"
      }
      // {
      //   title: "Soft Skills",
      //   textSrc: "softSkills",
      //   backgroundImage: require("@/assets/home/office.jpg"),
      //   icon: "account-group",
      //   aria: ""
      // }
    ]
  }),
  i18n: {
    messages: {
      en: {
        homeHero: {
          title: "Progress with Passion",
          subtitle:
            "Fascination for revolutionizing information technologies and their application in business"
        },
        homeIntro: {
          title: "I love to learn and apply my knowledge in dynamic teams!",
          text: `
            I am fascinated by information technologies, especially Machine Learning. This passion drives me to study Information Systems at the University of Münster with a focus on Business Intelligence. Through internships and part-time work, I have applied my theoretical knowledge in practice. In personal leisure projects and practical projects at the student consultancy move, I continuously enhance my analytical and conceptual skills. Currently, I aim to further develop my leadership qualities as Chairman of the Board and project manager at move.I am fascinated by information technologies, especially Machine Learning. This passion drives me to study Information Systems at the University of Münster with a focus on Business Intelligence. Through internships and part-time work, I have applied my theoretical knowledge in practice. In personal leisure projects and practical projects at the student consultancy move, I continuously enhance my analytical and conceptual skills. Currently, I aim to further develop my leadership qualities as Chairman of the Board and project manager at move.
          `,
          downloadCV: "CV"
        },
        skills: {
          mlbiTitle: `Artificial Intelligence \n& Machine Learning`,
          mlbi: `
          My journey in machine learning started with acquiring the basics of Python during my studies and through online courses in my spare time. 
          Through a 
            <a href="/#/projects#DLCaseStudy">case study</a>  
          in the advanced module "Deep Learning with Python" and the preparation of a lecture on the introduction to machine learning, 
          I gained insights into how artificial intelligence works, its current limitations, and possibilities. 
          I deepened my machine learning knowledge in an 
            <a href="/#/projects#NLP">internship</a>, 
          another
            <a href="/#/projects#ForestHeight">case study</a> 
          about regressing the tree heights in the German Black Forest, and my 
            <a href="/#/projects#BA">bachelor thesis</a> 
          on the semantic segmentation of trees in South Africa using satellite imagery. 
          Moreover, I touched on machine learning in further projects, such as a 
            <a href="/#/projects#DImensaToday">smart dining recommender system</a> and the 
            <a href="/#/projects#AutomationOfDocumentChecks">automation of document checks</a>.
          This fascination led me to choose it as a focus in my Information Systems studies. 
          The application of these technologies in various projects not only broadened my expertise but also reinforced my passion for developing innovative solutions that address real-world problems and create genuine value.
          `,

          feTitle: "Frontend Web\nDevelopment",
          frontend: `I took various online courses in my free time where I learned how to 
          program a website with 
            <strong>Vue.js</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong>, 
            <strong>CSS3</strong>, and prototype with <strong>Figma</strong>. 
          I was able to apply my web dev skills in numerous projects, e.g., the 
            <a href="/#/projects#watchtrainer">watchTrainer</a>
          project, which is the corresponding website to a fitness app for the apple watch. 
          Additional projects comprise my previous and this portfolio page, two WordPress 
          websites, which I single-handedly developed in consultancy projects at 
            <a href="/#/experience#card-move">move</a>. 
          However, I am most proud of my project team's complex 
            <a href="/#/projects#goc">web-based simulation platform</a> 
          built in the project seminar Game of Competences.`,

          itArchitectureTitle: "IT-Architecture",
          itArchitecture: `At university, I learned to portray the IT architecture of a company and to 
          and to analyze it for bottlenecks, for example. I also learned to 
          create a transformation plan to adapt the IT architecture. I applied this knowledge 
          in a case study and in a real project at
          <a href="/#/experience#card-move">move</a>.`,

          beTitle: "Backend &\nDatabases",
          backend: `My primary web development focus lies on the frontend. Nevertheless, I am very 
          familiar with setting up and working with a database, e.g., building an Entity-relationship 
          Model (<strong>ERM</strong>), 
            <strong>SQL</strong>, and implemented 
            <strong>API calls</strong> 
          with a REST API and GraphQL. I acquired and applied these skills at university and in the 
            <a href="/#/projects#watchtrainer">watchTrainer</a> and 
            <a href="/#/projects#goc">Game of Competences</a> 
          project.`,
          // Moreover, I demonstrate how to work with API calls in my <a href="/#/projects">projects</a>.

          officeTitle: "Microsoft Office 365",
          office: `Since year 7 in school, I have been using  
          <strong>Microsoft PowerPoint</strong>, <strong>Word</strong>, and <strong>Excel</strong> almost every day. 
          As a student assistant at the 
            <a href="/#/experience#experience">Information Systems' chair</a> 
          at the University of Münster, I prepared many lectures in PowerPoint. Further, I created various presentations 
          as a consultant at 
            <a href="/#/experience#card-move">move</a>, which enhanced my presentation abilities. 
          </br> 
          Lastly, in my work in the IT department at move, I worked with 
            <strong>Microsoft PowerApps</strong> and <strong>Flows</strong> with connections to 
            <strong>SharePoint</strong> databases. Moreover, I gained a brief overview of Business Intelligence 
          in a Microsoft <strong>Power BI</strong> workshop from the 
            <a href="https://bdsu.de/unternehmen/" target="_blank">BDSU</a>.`,

          otherTitle: "Other Skills",
          other: `
          At university, I studied and applied <strong>Process Mining</strong> and <strong>Modelling</strong> 
          with BPMN and EPK. Additionally, I learned the
            <strong>SCRUM</strong> at my university and in a 
            <a href="https://www.lhconsulting.com/" target="_blank">Lufthansa Consulting</a> 
          workshop at the 
            <a href="https://consultingcontact.de/" target="_blank">Consulting Contact</a>. 
          This helped me to apply it in real-life situations, such as the project seminar
            <a href="/#/projects#goc">Game of Competences</a> 
          and two web development projects at 
            <a href="/#/experience#card-move">move</a>.`,

          // pmTitle: "Process Management",
          // processManagement: `PM`,

          sdevTitle: "Software\nDevelopment",
          softwareDev: `A Software Developer needs to have a mathematical understanding and aptitude 
          as well as <strong>problem-solving</strong> skills. These were taught in my Information Systems course along 
          with programming languages like <strong>Java</strong>. In all honesty, I prefer <strong>JavaScript</strong> and already 
          implemented a 
            <a href="/#/projects#goc">web app</a>  with it.
          In the project, I enhanced my organizational, teamwork, and 
          <strong>time management</strong> skills as I led a team of seven fellow students. Thorough work and attention 
          to detail are rewarded in the long term, as I have discovered in the creation process of the 
          web app.
          I am looking forward to gaining further experience in Software Development and continually 
          expand my horizon and adapt to the ever- and fast-changing technology trends. `
        }
      },
      de: {
        homeHero: {
          title: "Fortschritt mit Leidenschaft",
          subtitle:
            "Faszination für revolutionäre Informationstechnologien und deren Anwendung in der Wirtschaft"
        },
        homeIntro: {
          title: `Ich liebe es zu lernen und mein Wissen in dynamischen Teams anzuwenden!`,
          text: `
            Ich bin fasziniert von Informations-Technologien, insbesondere Machine Learning. Diese Leidenschaft treibt mich an, Information Systems an der Universität Münster mit Schwerpunkt Business Intelligence zu studieren. Durch Praktika und Werkstudententätigkeiten habe ich mein theoretisches Wissen in die Praxis umgesetzt. In persönlichen und Praxisprojekten bei der studentischen Unternehmensberatung move erweitere ich kontinuierlich meine analytischen und konzeptionellen Fähigkeiten. Derzeit strebe ich an, meine Führungsqualitäten als Vorstandsvorsitzender und Projektleiter bei move weiter auszubauen.Ich bin fasziniert von Informations-Technologien, insb. Machine Learning. Diese Leidenschaft treibt mich an, Information Systems an der Universität Münster mit Schwerpunkt Business Intelligence zu studieren. Durch Praktika und Werkstudententätigkeiten habe ich mein theoretisches Wissen in die Praxis umgesetzt. In persönlichen und Praxisprojekten bei der studentischen Unternehmensberatung move erweitere ich kontinuierlich meine analytischen und konzeptionellen Fähigkeiten. Derzeit strebe ich an, meine Führungsqualitäten als Vorstandsvorsitzender und Projektleiter bei move weiter auszubauen.
          `,
          downloadCV: "Lebenslauf"
        },
        skills: {
          mlbiTitle: `Artificial Intelligence \n& Machine Learning`,
          mlbi: `
          Meine Reise im Bereich Machine Learning begann mit dem Erlernen der Python-Grundlagen während meines Studiums und durch Online-Kurse in meiner Freizeit. 
          Durch eine 
            <a href="/#/projects#DLCaseStudy">Fallstudie</a>  
          im fortgeschrittenen Modul „Deep Learning mit Python“ und die Vorbereitung einer Vorlesung zur Einführung in Machine Learning 
          erlangte ich Einblicke, wie künstliche Intelligenz funktioniert, ihre aktuellen Grenzen und Möglichkeiten. 
          Mein Wissen im Bereich Machine Learning vertiefte ich in einem 
            <a href="/#/projects#NLP">Praktikum</a>, 
          einer weiteren 
            <a href="/#/projects#ForestHeight">Fallstudie</a> 
          über die Regression der Baumhöhen im Schwarzwald, und meiner 
            <a href="/#/projects#BA">Bachelorarbeit</a> 
          zur semantischen Segmentierung von Bäumen in Südafrika mit Satellitenbildern. 
          Darüber hinaus befasste ich mich in weiteren Projekten mit Machine Learning, wie einem 
            <a href="/#/projects#DImensaToday">intelligenten Empfehlungssystem für die Mensa</a> und der 
            <a href="/#/projects#AutomationOfDocumentChecks">Automatisierung von Dokumentenprüfungen</a>.
          Aufgrund von dieser Faszination für Machine Learning habe ich es auch als Schwerpunkt in meinem Studium gewählt.
          Die Anwendung dieser Technologien in verschiedenen Projekten erweiterte nicht nur mein Fachwissen, sondern verstärkte auch meine Leidenschaft für die Entwicklung innovativer Lösungen, die reale Probleme adressieren und echten Mehrwert schaffen.
          `,

          // TODO: Data Science / Analysis (viadee) and Business Intelligence

          feTitle: "Frontend Web\nDevelopment",
          frontend: `In meiner Freizeit belegte ich verschiedene Online-Kurse, in denen ich 
          lernte, wie man eine Website mit 
            <strong>Vue.js</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong>, 
            <strong>CSS3</strong> und Prototypen mit <strong>Figma</strong>
          programmiert. Meine Web Development-Kenntnisse konnte ich in zahlreichen 
          Projekten anwenden, z. B. im Projekt 
            <a href="/#/projects#watchtrainer">watchTrainer</a>,
          das die Website zu einer Fitness-App für die Apple Watch ist. Weitere Projekte 
          sind meine bisherige und diese Portfolio Webseite, zwei WordPress-Websiten, 
          die ich in Beratungsprojekten bei 
            <a href="/#/experience#card-move">move</a>  
          entwickelt habe. Besonders stolz bin ich auf die 
            <a href="/#/projects#goc">webbasierte Simulationsplattform</a>, 
          die mein Projektteam im Rahmen des Projektseminars Game of Competences implementiert hat.
          </br>
          Außerdem realisierte ich kleinere Projekte, wie z.B. einen Backtracking-Algorithmus 
          zur Lösung von Sudokus und nutzte <strong>Web Scraping</strong> 
          zur Vorhersage von Bundesliga-Spielergebnissen. 
          Außerdem habe ich einen skalierbaren Web Scraper zur Datenextraktion aus Foren beim Start-up 
            <a href="https://www.pivoty.de/" target="_blank">pivoty</a>
          implementiert.`,

          itArchitectureTitle: "IT-Architektur",
          itArchitecture: `In der Universität habe ich gelernt die IT-Architektur eines Unternehmens 
          abzubilden und diese auf zum Beispiel Bottlenecks zu analysieren. Außerdem habe ich gelernt 
          einen Transformationsplan zu erstellen um die IT-Architektur anzupassen. Diese Kenntnisse 
          konnte ich in einer Case Study und in einem realen Projekt bei 
            <a href="/#/experience#card-move">move</a>
          anwenden.`,

          beTitle: "Backend &\nDatenbanken",
          backend: `Mein primärer Fokus in der Webentwicklung liegt auf dem Frontend. Nichtsdestotrotz 
          bin ich sehr vertraut mit dem Aufbau und der Arbeit mit einer Datenbank, z.B. dem Aufbau 
          eines Entity-Relationship-Modells (<strong>ERM</strong>), 
            <strong>SQL</strong> und der Implementierung von 
            <strong>API Calls</strong> mit einer REST-API und GraphQL. 
          Diese Fähigkeiten habe ich an der Universität und im Projekt 
            <a href="/#/projects#watchtrainer">watchTrainer</a> und der 
            <a href="/#/projects#goc">webbasierte Simulationsplattform</a>
          erworben und angewendet.`,
          // Außerdem zeige ich in meinen <a href="/#/projects">Projekten</a>, wie man mit API-Aufrufen arbeitet.

          officeTitle: "Microsoft Office 365",
          office: `Da ich schon seit der 7. Klasse fast täglich mit 
          <strong>Microsoft PowerPoint</strong>, <strong>Word</strong> und <strong>Excel</strong> 
          arbeite und als studentische Hilfskraft am 
            <a href="/#/experience#experience">Lehrstuhl für Wirtschaftsinformatik</a> 
          an der Universität Münster viele Vorlesungen in PowerPoint vorbereitet habe, 
          kenne ich mich besonders gut mit Microsoft Office aus. Außerdem habe ich bei 
            <a href="/#/experience#card-move">move</a> 
          als Berater verschiedene Präsentationen erstellt und z.B. einen BCG-Workshop besucht, 
          was meine Präsentationsfähigkeiten förderte. 
          </br>
          Zuletzt habe ich bei move in der IT-Abteilung mit 
            <strong>Microsoft PowerApps</strong> und <strong>Flows</strong> mit Anbindung an 
            <strong>SharePoint</strong>-Datenbanken gearbeitet. Außerdem habe ich einen kurzen 
            Überblick über Business Intelligence in einem Microsoft <strong>Power BI</strong> Workshop von des 
            <a href="https://bdsu.de/unternehmen/" target="_blank">BDSU</a> bekommen.`,

          // pmTitle: "Prozess Management",
          // processManagement: `PM`,

          sdevTitle: "Software\nEntwicklung",
          softwareDev: `Ein Softwareentwickler muss mathematisches Verständnis und 
            <strong>Problemlösungsfähigkeiten</strong> besitzen. Diese habe ich mir in meinem 
          Studiengang Wirtschaftsinformatik zusammen mit Programmiersprachen wie <strong>Java</strong> angeeignet. 
          Um ehrlich zu sein, bevorzuge ich <strong>JavaScript</strong> und habe damit bereits z.B. eine 
            <a href="/#/projects#goc">Web-App</a> 
          implementiert. In diesem Projekt konnte ich ebenfalls mein 
          <strong>Zeitmanagement</strong>, meine Selbstorganisation als auch die Koordination im Team verbessern, 
          da ich ein Team von sieben Kommilitonen leitete. Gründliches und detailliertes Arbeiten werden langfristig 
          belohnt, wie ich im Verlaufe der Web-App Implementation festgestellt habe. 
          </br>
          Ich freue mich darauf, weitere Erfahrungen in der Softwareentwicklung zu sammeln und meinen Horizont 
          kontinuierlich zu erweitern und mich den sich ständig und schnell ändernden Technologietrends anzupassen.`,

          otherTitle: "Weitere Fähigkeiten",
          other: `An der WWU habe ich <strong>Process Mining</strong> und 
            <strong>Prozessmodellierung</strong> mit BPMN und EPK gelernt. 
          Darüber hinaus habe ich 
            <strong>SCRUM</strong> an meiner Universität und in einem 
            <a href="https://www.lhconsulting.com/" target="_blank">Lufthansa Consulting</a> 
          Workshop bei der 
            <a href="https://consultingcontact.de/" target="_blank">Consulting Contact</a> gelernt. 
          Dieses theoretische Wissen habe ich habe ich in realen Situationen angewendet, wie zum 
          Beispiel im Projektseminar
            <a href="/#/projects#goc">Game of Competences</a> 
          und in zwei Webentwicklungsprojekten bei 
            <a href="/#/experience#card-move">move</a>.`
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: var(--v-primary-base);
$primaryDark: var(--v-primaryDark-base);
$secondaryLight: var(--v-secondaryLight-base);
$primaryLight: var(--v-primaryLight-base);
$secondary: var(--v-secondary-base);

.seperatorIcon {
  // center icon
  display: flex;
  align-items: center;
  justify-content: center;
  // move icon to top
  position: relative;
  top: -30px;
  // make button not clickable
  pointer-events: none;
}

.gradient-text {
  background: -webkit-linear-gradient(120deg, $secondary, $primaryDark);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animated-gradient-box {
  position: relative;

  &::after {
    --border-width: 3px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, $secondary, $primary, $secondary);
    background-size: 300% 300%;
    clip-path: polygon(0 100%,
        0 calc(100% - var(--border-width)),
        100% calc(100% - var(--border-width)),
        100% 100%,
        0 100%);
    // 0 100%,
    // 0 calc(100% - 3px),
    // 100% calc(100% - 3px),
    // 100% 100%,
    // 0 100%

    // Explanation: https://beyond-paper.com/clip-path-polygons-explained/
    // polygon( We use coordinates to draw: 0 0 is top-left and 100% 0 is the top-right
    //   0% 100%, -> We start in the bottom left (= 0 100%) => result: .
    //   0 calc(100% - 3px), -> Now we define the thinkness of the line, by moving up => result: |
    //   100% calc(100% - 3px), -> Then we move to the right side => result: |‾‾‾‾‾‾‾‾‾‾‾
    //   100% 100%, -> then to the bottom left to mind the border thickness => result: |‾‾‾‾‾‾‾‾‾‾‾|
    //   0 100% -> now we move back to where we began to complete the line
    // );
  }
}

.animated-gradient-box.in:after {
  animation: gradient-animation 4s ease-in-out infinite;
  // With enter-animation:
  // animation: frame-enter 1s forwards ease-in-out reverse,
  //   gradient-animation 4s ease-in-out infinite;
}

/* motion */
@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }

  50% {
    background-position: 85% 100%;
  }

  100% {
    background-position: 15% 0%;
  }
}
</style>
<!-- // You could also animate the polygon (this is not as desired at the moment)
// Hence, it is not in production
// @keyframes frame-enter {
//   0% {
//     clip-path: polygon(
//       0 100%,
//       0 calc(100% - 3px),
//       3px calc(100% - 3px),
//       3px 100%,
//       0 100%
//     );
//   }
//   // 50% {
//   //   clip-path: polygon(
//   //     0 100%,
//   //     0 calc(100% - 3px),
//   //     50% calc(100% - 3px),
//   //     50% 100%,
//   //     0 100%
//   //   );
//   // }
//   100% {
//     -webkit-clip-path: polygon(
//       0 100%,
//       0 calc(100% - 3px),
//       100% calc(100% - 3px),
//       100% 100%,
//       0 100%
//     );
//   }
// } -->
