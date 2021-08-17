<template lang="pug">
div
  //- Hero area
  section.fullwidth.mb-0
    v-parallax(src="@/assets/background/Aasee.jpg" height="900")
      //- Another section is necessary to provide the max-width for ultra-wide screens
      section.mb-0 
        v-container
          v-row.pa-md-12.d-flex.text-center
            v-col.col-md-9(order-md="2")
              h1.display-3.font-weight-thin.mb-12 {{ $t("intro.title") }}
              p.subheading {{ $t("intro.subtitle") }}
              ScrollHero.mt-16.pt-16
            v-col.d-flex.justify-center.col-md-3(order-md="1")
              v-card(width="400px" elevation="50" max-width="80vw")
                v-img(alt="Leo Giesen Profil" src="@/assets/profile/Glatthorn_Aufstieg.jpg")

  //- Ideas to include:
  //- Share Insights, Best Practices, Learnings
  //- Add what tools I have worked with, which positions I fulfilled
  //- What skills I learned and applied
  
  //- Projects
  article#scroll
    section
      v-container
        div(v-for="project in projects" :id="project.id")
          v-row.justify-center
            v-col.col-11.col-md-7.text-center
              h2.display-3.font-weight-thin.mb-0(style="word-break: break-word;") {{ project.title }}
              //- Links to repository and/or website
              div.mt-5
                v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.link != ''" :href="project.link" target="_blank") 
                  v-icon(small) mdi-code-tags
                  | {{ $t('projects.links.repository') }}
                  //- AnimatedLink(:href="project.link" :linkText="$t('projects.links.repository')" target="_blank" prepend-icon="mdi-link-variant")

                //- website
                v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.embedLink != ''" :href="project.embedLink" target="_blank") 
                  v-icon(small) mdi-open-in-new
                  | {{ $t('projects.links.website') }}
                  //- AnimatedLink(:href="project.embedLink" :linkText="$t('projects.links.website')" target="_blank")
                
                //- file(s)
                span(v-for="(file, index) in project.files")
                  v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.files.length > 0" :href="project.files[index].link" target="_blank")
                    v-icon(small) mdi-file-document-outline
                      //- "$t('projects.links.' + project.id)"
                    | {{ $t('projects.' + project.files[index].title) }}
                    //- AnimatedLink(:href="project.files[index].link"
                    //-   :linkText="$t('projects.' + project.files[index].title)"
                    //-   target="_blank")
                    
              //- Icon of project
              v-img.ma-10.mx-auto(:src="project.imgSrc" :width="project.img_width" max-width="80vw")
              //- Project description
              p.text-justify(v-html="$t('projects.' + project.translationKey)")
              
              //- Show preview of website, but exclude elements, which do not have an embedLink
              div.text-center(v-if="project.embedLink != ''")
                //- toggle preview button
                v-btn.gradient-btn.pa-6.ma-8(rounded
                  @click="project.showPreview = !project.showPreview") 
                  span(v-show="!project.showPreview") {{ $t("projects.preview.show")}}
                  span(v-show="project.showPreview") {{ $t("projects.preview.hide")}}
                //- actual preview (embed of other website)
                v-card.pa-0.my-10(v-show="project.showPreview")
                  embed.mb-n2(:src="project.embedLink" width="100%" height="500px")
  
  //- Bibliography
  section#bibliography
    v-container.grey--text.px-5.text-justify
      h2.mb-5 {{ this.$store.getters.isDE ? "Literaturverzeichnis" : "Bibliography" }}
      p Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021a. “Pivoty - Simplifying Innovation.” (
        a(href="https://www.pivoty.de/" target="_blank") https://www.pivoty.de/
        | , accessed June 29, 2021).
      p Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021b. “Pivoty,” LinkedIn. (
        a(href="https://www.linkedin.com/company/pivoty/" target="_blank") https://www.linkedin.com/company/pivoty/
        | , accessed June 30, 2021).

    //- section
      v-container
        v-row.justify-center
          v-col.col-11.col-md-7
            h2.display-3.font-weight-thin.mb-0.text-center
              AnimatedLink(href="https://github.com/lgiesen/portfolio-v1" linkText="Portfolio v1" target="_blank")
            v-img.ma-10.mx-auto(src="@/assets/projects/portfolioV1Logo.png" width="80px")
            p.text-justify {{ $t("projects.portfolioV1")}}
            div.text-center
              v-btn.gradient-btn.pa-6.ma-8(rounded
                @click="showPreviews.portfolioV1 = !showPreviews.portfolioV1") Show/Hide Preview {{ showPreviews.portfolioV1 }}
            v-card.pa-0.my-10(v-show="showPreviews.portfolioV1")
              embed(src="https://lgiesen.github.io/portfolio-v1/" width="100%" height="500px")
  //- section
    h1.display-3.font-weight-thin.mb-0#watchtrainer watchtrainer
    v-img.ma-10(src="@/assets/projects/watchtrianer_logo.svg" width="80px")
    p This project is not live yet, though a draft of the homepage can be observed here: 
      AnimatedLink(href="https://watchtrainer.arz.berlin/" linkText="Visit Homepage" target="_blank")
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import AnimatedLink from "@/components/playground/hyperlinks/AnimatedLink.vue";
import BackgroundHighlightLink from "@/components/playground/hyperlinks/BackgroundHighlightLink.vue";
import HeroBackgroundGradientGroup from "@/assets/background/HeroBackgroundGradientGroup.vue";
export default {
  name: "Projects",
  components: {
    ScrollHero,
    AnimatedLink,
    BackgroundHighlightLink,
    HeroBackgroundGradientGroup
  },
  data: () => ({
    projects: [
      {
        title: "Machine Learning Case Study",
        year: "2021",
        link: "",
        imgSrc: require("@/assets/projects/ml_case_study.png"),
        img_width: "500px",
        translationKey: "ML.ml_case_study",
        id: "ml_case_study",
        showPreview: false,
        embedLink: "",
        files: [
          {
            title: "ML.seminar_thesis",
            link:
              "ML/Machine_Learning_Segmentation_Case_Study__Land_Usage_and_Land_Coverage.pdf"
          },
          {
            title: "ML.poster_overview",
            link: "ML/ML_Case_Study_LULC_Poster.pdf"
          },
          {
            title: "ML.transfer_learning",
            link: "ML/Transfer_Learning_Presentation.pdf"
          }
        ]
      },
      {
        title: "Scalable Forum Web Scraper",
        year: "2021",
        link: "",
        imgSrc: require("@/assets/projects/pivoty-logo.png"),
        img_width: "80px",
        translationKey: "forum_web_scraper",
        id: "forum_web_scraper",
        showPreview: false,
        embedLink: "",
        files: []
      },
      {
        title: "Game of Competences",
        year: "2020-2021",
        link: "",
        imgSrc: require("@/assets/projects/GoC.svg"),
        img_width: "80px",
        translationKey: "goc",
        id: "goc",
        showPreview: false,
        embedLink: "",
        files: []
      },
      {
        title: "watchTrainer",
        year: "2019-2020",
        link: "https://github.com/Arceoavs/watchtrainer",
        imgSrc: require("@/assets/projects/watchtrianer_logo.svg"),
        img_width: "80px",
        translationKey: "watchtrainer",
        id: "watchtrainer",
        showPreview: false,
        embedLink: "https://watchtrainer.arz.berlin/",
        files: []
      },
      {
        title: "Portfolio v1",
        year: "2019",
        link: "https://github.com/lgiesen/portfolio-v1",
        imgSrc: require("@/assets/projects/portfolioV1Logo.png"),
        img_width: "80px",
        translationKey: "portfolioV1",
        id: "",
        showPreview: false,
        embedLink: "https://lgiesen.github.io/portfolio-v1/",
        files: []
      }
    ]
  }),
  i18n: {
    messages: {
      en: {
        intro: {
          title: "Projects",
          subtitle: "- get inspired or fascinated by selected IT projects -"
        },
        projects: {
          links: {
            repository: "repository",
            website: "website",
            file: "file"
          },
          preview: {
            hide: "Hide Preview",
            show: "Show Preview"
          },
          ML: {
            seminar_thesis: "Seminar Thesis",
            poster_overview: "Poster Overview",
            transfer_learning: "Transfer Learning Presentation",
            ml_case_study: `In this case study, a supervised deep learning algorithm is 
            implemented with the objective of semantically segmenting a landscape into ten 
            predefined land usage and coverage classes. This is achieved by sliding window 
            approach with a three-dimensional convolutional neural network resulting in an 
            accuracy of 73%. At the hand of seven steps of machine learning projects, the 
            functionality and characteristics of the algorithm are outlined and how it may 
            be improved upon.`
          },
          forum_web_scraper: `The Information Systems specialization module ‘Principles 
          of Entrepreneurship’ was supplemented by the project group work with the startup 
          pivoty. The basic business process idea of the start-up is that extracted information 
          from discussion forums (using web scraping) is used to derive hidden innovation 
          potentials with an AI analysis.
          </br>
          pivoty is located in Münster and develops “an AI-based analytics software that 
          tries to discover innovation potentials” 
            (<a href="#bibliography">Schäper et al. 2021a</a>)
          for companies “by analyzing unbiased customer insights” 
            (<a href="#bibliography">Schäper et al. 2021a</a>)
          . To clarify, 
          the extracted ideas are subjective, but the positivity bias may be overcome. 
          These insights “draw on a variety of online sources like social networks, 
          forums, blogs, and product reviews to systematically derive inspirations for 
          new products and services” 
            (<a href="#bibliography">Schäper et al. 2021b</a>).`,
          goc: `We created a web-based simulation platform for public administrations. 
          Unfortunatly, I am not allowed to share the project results of the project seminar, 
          though it was a lot of fun for the whole project team and considering a grade of 1.3
          successful.`,
          watchtrainer: `WatchTrainer is a sharing-based sports platform for the future of 
          wearable devices like the AppleWatch. The linked page only includes the frontend, since 
          not all backend features are implemented yet.`,
          portfolioV1: `I created the first version of my portfolio website in 2019 
          with simple HTML5, CSS3, JavaScript and Bootstrap.`
        }
      },
      de: {
        intro: {
          title: "Projekte",
          subtitle: "Meine Erfahrung baut auf diese Beispiel-Projekte"
        },
        projects: {
          links: {
            repository: "Repository",
            website: "Website",
            file: "Dokument"
          },
          preview: {
            hide: "Vorschau verbergen",
            show: "Vorschau anzeigen"
          },
          ML: {
            seminar_thesis: "Seminararbeit",
            poster_overview: "Poster Überblick",
            transfer_learning: "Transfer Learning Präsentation",
            ml_case_study: `In dieser Fallstudie wird ein überwachter Deep-Learning-Algorithmus 
            mit dem Ziel implementiert, eine Landschaft semantisch in zehn vordefinierte 
            vordefinierte Landnutzungs- und Bedeckungsklassen. Dies wird durch einen Sliding-Window 
            mit einem dreidimensionalen neuronalen Faltungsnetzwerk erreicht, was zu einer 
            Genauigkeit von 73%. An der Hand von sieben Schritten des maschinellen Lernens werden die 
            werden die Funktionalität und die Eigenschaften des Algorithmus beschrieben und wie er 
            verbessert werden kann.`
          },
          forum_web_scraper: `Das Vertiefungsmodul 'Principles of Entrepreneurship' wurde durch 
          die Projektgruppenarbeit mit dem Startup pivoty ergänzt. Die grundlegende 
          Geschäftsprozess-Idee von pivoty ist, dass extrahierte Informationen (mittels Web 
          Scraping) aus Diskussionsforen genutzt werden, um mit einer KI-Analyse versteckte 
          Innovationspotenziale abzuleiten.
          </br>
          pivoty ist in Münster ansässig und entwickelt "eine KI-basierte Analysesoftware, die 
          Innovationspotenziale" 
            (<a href="#bibliography">Schäper et al. 2021a</a>)
          für Unternehmen "durch die Analyse von unvoreingenommenen Customer Insights" 
            (<a href="#bibliography">Schäper et al. 2021a</a>)
          versucht zu entdecken. Die extrahierten Ideen sind zwar subjektiv, aber der 
          Positivitätsbias kann überwunden werden. 
          Diese Erkenntnisse "stützen sich auf eine Vielzahl von Online-Quellen wie soziale Netzwerke, 
          Foren, Blogs und Produktrezensionen, um systematisch Inspirationen für neue 
          neue Produkte und Dienstleistungen abzuleiten" 
          (<a href="#bibliography">Schäper et al. 2021b</a>).`,
          goc: `Wir haben eine webbasierte Simulationsplattform für öffentliche Verwaltungen erstellt. 
          Leider darf ich die Projektergebnisse des Projektseminars nicht teilen. Im Projektteam hat es 
          sehr viel Spaß gemacht hat und mit einer Note von 1,3 kann man es einen Erfolg nennen.`,
          watchtrainer: `WatchTrainer ist eine auf Sharing basierende Sportplattform für die Zukunft von 
          Wearable Devices wie der AppleWatch. Die verlinkte Seite umfasst lediglich das Frontend, da 
          noch nicht alle Backend Features implementiert sind.`,
          portfolioV1: `Die erste Version meiner Portfolio-Website habeich 2019 mit 
          einfachem HTML5, CSS3, JavaScript und Bootstrap erstellt.`
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
