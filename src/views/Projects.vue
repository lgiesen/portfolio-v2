<template lang="pug">
div
  //- Hero area
  section.fullwidth
    v-parallax(src="@/assets/background/Aasee.jpg" height="900")
      //- Another section is necessary to provide the max-width for ultra-wide screens
      section.mb-0 
        v-container(width="50vw")
          v-row.pa-md-12.d-flex.text-center
            v-col.col-10.col-md-6(order-md="2")
              h1.display-3.font-weight-thin.mb-12 {{ $t("intro.title") }}
              h3.subtitle.mt-0 {{ $t("intro.subtitle") }}
              ScrollHero.mt-16.pt-16
            v-col.col-10.col-md-6(order-md="1")
              v-card(max-width="400px" elevation="50")
                v-img(alt="Leo Giesen Profil" src="@/assets/about/Snow-Profile.jpg")

  //- Ideas to include:
  //- Share Insights, Best Practices, Learnings
  //- Add what tools I have worked with, which positions I fulfilled
  //- What skills I learned and applied
  
  //- Projects
  article#scroll
    section(v-for="project in projects" :id="project.id")
      v-container
        v-row.justify-center
          v-col.col-11.col-md-7.text-center
            h2.display-3.font-weight-thin.mb-0 {{ project.title }}
            //- Links to repository and/or website
            div.mt-5
              //- repository
              span(v-if="project.link != ''") 
                v-icon(small) mdi-link-variant
                AnimatedLink(:href="project.link" :linkText="$t('projects.links.repository')" target="_blank" prepend-icon="mdi-link-variant")
              //- divider between repository and website
              span.mx-3(v-if="project.link != '' && project.embedLink != ''") |
              //- website
              span(v-if="project.embedLink != ''")
                v-icon(small) mdi-open-in-new
                AnimatedLink(:href="project.embedLink" :linkText="$t('projects.links.website')" target="_blank")
              //- divider between website and file
              span.mx-3(v-if="project.embedLink != '' && project.file != ''") |
              //- website
              span(v-if="project.files.length > 0")
                div(v-for="file in project.files")
                  v-icon(small) mdi-file-document-outline
                  AnimatedLink(:href="project.files" :linkText="$t('projects.links.' + project.id)" target="_blank")
            //- Icon of project
            v-img.ma-10.mx-auto(:src="project.imgSrc" :width="project.img_width")
            //- Project description
            p.text-justify {{ $t(project.translationKey)}} 
            //- (v-html="$t(project.translationKey)")
            
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
      // TODO ML Transfer Learning Presentation + Overview + Paper)
      {
        title: "Machine Learning Case Study",
        year: "2021",
        link: "",
        imgSrc: require("@/assets/projects/ml_case_study.png"),
        img_width: "500px",
        translationKey: "projects.ml_case_study",
        id: "ml_case_study",
        showPreview: false,
        embedLink: "",
        files: [
          {
            title: "Paper",
            link:
              "ML/Machine_Learning_Segmentation_Case_Study__Land_Usage_and_Land_Coverage.pdf"
          },
          {
            title: "Poster Overview",
            link: "ML/ML_Case_Study_LULC_Poster.pdf"
          }
        ]
      },
      // TODO Scalable Web Scraper pivoty Text
      {
        title: "Scalable Forum Web Scraper",
        year: "2021",
        link: "",
        imgSrc: require("@/assets/projects/pivoty-logo.png"),
        img_width: "80px",
        translationKey: "projects.forum_web_scraper",
        id: "forum_web_scraper",
        showPreview: false,
        embedLink: "",
        file: ""
      },
      {
        title: "Game of Competences",
        year: "2020-2021",
        link: "",
        imgSrc: require("@/assets/projects/GoC.svg"),
        img_width: "80px",
        translationKey: "projects.goc",
        id: "goc",
        showPreview: false,
        embedLink: "",
        file: ""
      },
      {
        title: "watchtrainer",
        year: "2019-2020",
        link: "https://github.com/Arceoavs/watchtrainer",
        imgSrc: require("@/assets/projects/watchtrianer_logo.svg"),
        img_width: "80px",
        translationKey: "projects.watchtrainer",
        id: "watchtrainer",
        showPreview: false,
        embedLink: "https://watchtrainer.arz.berlin/",
        file: ""
      },
      {
        title: "Portfolio v1",
        year: "2019",
        link: "https://github.com/lgiesen/portfolio-v1",
        imgSrc: require("@/assets/projects/portfolioV1Logo.png"),
        img_width: "80px",
        translationKey: "projects.portfolioV1",
        id: "",
        showPreview: false,
        embedLink: "https://lgiesen.github.io/portfolio-v1/",
        file: ""
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
          ml_case_study: `In this case study, a supervised deep learning algorithm is 
          implemented with the objective of semantically segmenting a landscape into ten 
          predefined land usage and coverage classes. This is achieved by sliding window 
          approach with a three-dimensional convolutional neural network resulting in an 
          accuracy of 73%. At the hand of seven steps of machine learning projects, the 
          functionality and characteristics of the algorithm are outlined and how it may 
          be improved upon.`,
          forum_web_scraper: `The Information Systems specialization module ‘Principles 
          of Entrepreneurship’ was supplemented by the project group work with the startup 
          pivoty. This project strengthens pivoty’s product development as well as gives 
          the project team the opportunity to gain practical experience. Thus, both parties 
          benefitted from the external input and work together.
          </br>
          pivoty is located in Münster and develops “an AI-based analytics software that 
          tries to discover innovation potentials” (Schäper et al. 2021) for companies 
          “by analyzing unbiased customer insights” (Schäper et al. 2021). To clarify, 
          the extracted ideas are subjective, but the positivity bias may be overcome. 
          These insights “draw on a variety of online sources like social networks, 
          forums, blogs, and product reviews to systematically derive inspirations for 
          new products and services” (Schäper et al. 2021b). The corresponding two-step 
          process portrays that the innovation potential is derived with an AI analysis 
          from extracted information from discussion forums using web scraping`,
          // Schäper:
          // Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021. “Pivoty - Simplifying Innovation.” (https://www.pivoty.de/, accessed June 29, 2021).
          goc: `We created a web-based simulation platform for public administrations. 
          Unfortunatly, I am not allowed to share the project results of the project seminar, 
          though it was a lot of fun for the whole project team and considering a grade of 1.3 
          successful.`,
          watchtrainer: `WatchTrainer is a sharing-based sports platform for the future of wearable devices like the AppleWatch.`,
          portfolioV1: `This is the previous version of my portfolio website. I created it with 
          simple HTML5, CSS3, JavaScript and Bootstrap.`
        }
      },
      de: {
        intro: {
          title: "Projekte",
          subtitle:
            "- inspiriert oder fasziniert werden von ausgewählten Projekten -"
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
          ml_case_study: `In dieser Fallstudie wird ein überwachter Deep-Learning-Algorithmus 
          mit dem Ziel implementiert, eine Landschaft semantisch in zehn vordefinierte 
          vordefinierte Landnutzungs- und Bedeckungsklassen. Dies wird durch einen Sliding-Window 
          mit einem dreidimensionalen neuronalen Faltungsnetzwerk erreicht, was zu einer 
          Genauigkeit von 73%. An der Hand von sieben Schritten des maschinellen Lernens werden die 
          werden die Funktionalität und die Eigenschaften des Algorithmus beschrieben und wie er 
          verbessert werden kann.`,
          forum_web_scraper: ``,
          goc: `Wir haben eine webbasierte Simulationsplattform für öffentliche Verwaltungen erstellt. 
          Leider darf ich die Projektergebnisse des Projektseminars nicht teilen. Im Projektteam hat es 
          sehr viel Spaß gemacht hat und mit einer Note von 1,3 kann man es einen Erfolg nennen.`,
          watchtrainer: `WatchTrainer ist eine auf Sharing basierende Sportplattform für die Zukunft von Wearable Devices wie der AppleWatch.`,
          portfolioV1: `Dies ist die vorherige Version meiner Portfolio-Website. Ich habe sie erstellt mit 
          einfachem HTML5, CSS3, JavaScript und Bootstrap erstellt.`
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
