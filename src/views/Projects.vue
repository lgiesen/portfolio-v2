<template lang="pug">
div
  //- Hero area
  section.fullwidth.mb-0
    v-parallax(src="@/assets/background/Aasee.jpg" height="900")
      //- Another section is necessary to provide the max-width for ultra-wide screens
      section.mb-0 
        v-container
          v-row.pa-md-12.d-flex.text-center
            v-col.col-12.col-md-6(order-md="2")
              h1.display-3.font-weight-thin.mb-12 {{ $t("intro.title") }}
              p.subheading {{ $t("intro.subtitle") }}
              ScrollHero.mt-16.pt-16
            v-col.d-flex.justify-center.col-12.col-md-6(order-md="1")
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
              h2.display-2.font-weight-thin.mb-0(style="word-break: break-word;")
                | {{ $t('projects.' + project.translationKey + '.title') }}
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
                  //- p {{ "dsj" + file.translationID }}
                  v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.files.length > 0" :href="project.files[index].link" target="_blank")
                    v-icon(small) mdi-file-document-outline
                    | {{ $t('projects.' + project.translationKey + '.files.' + file.translationID) }}

                    //- "$t('projects.links.' + project.id)"
                    //- + project.files[index].title) }}
                    //- AnimatedLink(:href="project.files[index].link"
                    //-   :linkText="$t('projects.' + project.files[index].title)"
                    //-   target="_blank")
                    
              //- Icon of project
              v-img.ma-7.mx-auto(:src="project.imgSrc" :width="project.img_width" max-width="80vw")
              //- Project description
              p.text-justify(v-html="$t('projects.' + project.translationKey + '.desc')")
              
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
      p [RFB15] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. “U-Net: Convolutional Networks for Biomedical Image 
        | Segmentation”. In: Proceedings of the International Conference on Medical Image Computing and Computer-Assisted 
        | Intervention. Cham, DE: Springer, 2015, pp. 234– 241.
      p [SLEa] Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021a. “Pivoty - Simplifying Innovation.” (
        a(href="https://www.pivoty.de/" target="_blank") https://www.pivoty.de/
        | , accessed June 29, 2021).
      p [SLEb] Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021b. “Pivoty” LinkedIn. (
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
import HeroBackgroundGradientGroup from "@/assets/background/HeroBackgroundGradientGroup.vue";
import AnimatedLink from "@/components/playground/hyperlinks/AnimatedLink.vue";
import BackgroundHighlightLink from "@/components/playground/hyperlinks/BackgroundHighlightLink.vue";
import ScrollHero from "@/components/scroll/ScrollHero.vue";
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
        // Internship at zeb: NLP, ML
        translationKey: "NLP",
        year: "2021",
        link: "",
        imgSrc: require("@/assets/projects/svm.jpg"),
        img_width: "250px",
        id: "NLP",
        showPreview: false,
        embedLink: "",
        files: []
        // TODO: Präsentation updaten und hochladen -> vorher Ti Fragen
      },
      {
        // Bachelor Thesis
        translationKey: "BA",
        year: "2022",
        link:
          "https://github.com/lgiesen/DL-Semantic-Segmentation-of-Tree-Stock-in-South-Africa-Using-Satellite-Images",
        imgSrc: require("@/assets/projects/unet-no-nums-wide.png"),
        // U-Net von mir oder von dem original publisher - Bild von Predictions (unpatchified am besten)
        img_width: "500px",
        id: "ba",
        showPreview: false,
        embedLink: "",
        files: [
          {
            translationID: "BAThesis",
            link:
              "projects/BA/Deep_Learning_Semantic_Segmentation_of_Tree_Stock_in_South_Africa_Using_Satellite_Images.pdf"
          }
        ]
      },
      {
        // VM DL Case Study
        translationKey: "DLCaseStudy",
        year: "2021",
        link: "",
        imgSrc: require("@/assets/projects/ml_case_study.png"),
        img_width: "500px",
        id: "ml_case_study",
        showPreview: false,
        embedLink: "",
        files: [
          {
            translationID: "seminar_thesis",
            link:
              "projects/ML/Machine_Learning_Segmentation_Case_Study__Land_Usage_and_Land_Coverage.pdf"
          },
          {
            translationID: "poster_overview",
            link: "projects/ML/ML_Case_Study_LULC_Poster.pdf"
          },
          {
            translationID: "transfer_learning",
            link: "projects/ML/Transfer_Learning_Presentation.pdf"
          }
        ]
      },
      {
        // pivoty
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
        // Game of Competences
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
        // watchTrainer
        year: "2019-2020",
        link: "",
        imgSrc: require("@/assets/projects/watchtrianer_logo.svg"),
        img_width: "80px",
        translationKey: "watchtrainer",
        id: "watchtrainer",
        showPreview: false,
        embedLink: "",
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
  methods: {
    scrollBibliography() {
      this.$vuetify.goTo("#bibliography");
    }
  },
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
          NLP: {
            title: "Language Analysis with Machine Learning (NLP with SVM)",
            desc: `<p style="text-align:center;">
              (<a href="#bibliography">The MathWorks 2021</a>)
            </p>
            During my software development internship at zeb, I worked on a Machine Learning (ML) 
            project where I gained experience with Natural Language Processing (NLP). By selecting and 
            implementing an alternative Support Vector Machine (SVM) approach, I was able to increase 
            the accuracy of the ML algorithm from 50% to 83%.`,
            files: {}
          },
          DLCaseStudy: {
            title: "Semantic Segmentation - Land Usage and Land Coverage",
            desc: `In this case study, a supervised deep learning algorithm is 
            implemented with the objective of semantically segmenting a landscape into ten 
            predefined land usage and coverage classes. This is achieved by sliding window 
            approach with a three-dimensional convolutional neural network resulting in an 
            accuracy of 73%. At the hand of seven steps of machine learning projects, the 
            functionality and characteristics of the algorithm are outlined and how it may 
            be improved upon.`,
            files: {
              seminar_thesis: "Seminar Thesis",
              poster_overview: "Poster Overview",
              transfer_learning: "Transfer Learning Presentation"
            }
          },
          BA: {
            title: "Semantic Segmentation of Satellite Images",
            desc: `<p style="text-align:center;"> (adapted from
              <a href="#bibliography">Ronneberger, Fischer, and Brox [RFB15]</a>)
            </p>
              A significant proportion of Africa’s drylands trees and shrubs (subsequently 
              collectively referred to as trees) grow in an isolated manner without canopy closure. 
              Nevertheless, these non-forest trees crucially contribute to the biodiversity and ecosystem 
              because they store carbon, offer food resources, and shelter to humans and animals. Therefore, 
              single trees are detected by a deep learning approach utilizing the U-Net architecture, 
              which enables an analysis of the tree stock development in South Africa.
              The number of trees also provides an estimate of the dryland’s biomass. Thus, the 
              idea is to visualize these results on a website devoted to sustainability. These 
              results can be used to create awareness concerning the fostering of sustainability by 
              publishing the insights on an information system. For instance, a website could highlight 
              land degradation, desertification, deforestation or reforestation, which may be derived 
              from monitoring the tree count.`,
            files: {
              BAThesis: "Bachelor Thesis"
            }
          },
          forum_web_scraper: {
            title: "Scalable Forum Web Scraper",
            desc: `The Information Systems specialization module ‘Principles 
            of Entrepreneurship’ was supplemented by the project group work with the startup 
            pivoty. The basic business process idea of the start-up is that extracted information 
            from discussion forums (using web scraping) is used to derive hidden innovation 
            potentials with an AI analysis. In the project, I have built 
            a scalable web scraper with Scrapy, so that it can be applied to as many discussion forums as possible. 
            The structure of the most widespread forum frameworks was used to cover almost 
            90% of all german discussion forums. 
            <br/>
            <br/>
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
              (<a href="#bibliography">Schäper et al. 2021b</a>).`
          },
          goc: {
            title: "Web-Based Application",
            desc: `We created a web-based simulation platform called Game of Competences for public administrations with Vue.js and Flask. 
            It was a lot of fun for me as I was able to lead the front-end team and teach them front-end skills with Vue.js 2. 
            The overall grade of 1.3 also underlined the project's success. 
            Unfortunatly, I am not allowed to share the project results of the project seminar in further detail.`
          },
          watchtrainer: {
            title: "Web Development: watchTrainer",
            desc: `WatchTrainer is a sharing-based sports platform for the future of 
            wearable devices like the AppleWatch. After a fundamental implementation of the backend 
            and frontend, I am no longer working on this research project.`
          },
          portfolioV1: {
            title: "Web Development: Portfolio v1",
            desc: `I created the first version of my portfolio website in 2019 
            with HTML5, CSS3, JavaScript and Bootstrap to understand front-end web development.`
          }
        }
      },
      de: {
        intro: {
          title: "Projekte",
          subtitle: "Meine Erfahrung baut auf diese Beispiel-Projekte"
        },
        projects: {
          links: {
            repository: "Code",
            website: "Website",
            file: "Dokument"
          },
          preview: {
            hide: "Vorschau verbergen",
            show: "Vorschau anzeigen"
          },
          NLP: {
            title: "Sprachanalyse mit Machine Learning (NLP mit SVM)",
            desc: `
              <p style="text-align:center;">
                (<a href="#bibliography">The MathWorks 2021</a>)
              </p>
              Im Software Development Praktikum bei zeb habe ich an einem Machine Learning (ML) Projekt gearbeitet, 
              wo ich Erfahrung mit Natural Language Processing (NLP) gemacht habe. Durch die Auswahl und Implementation 
              eines alternativen Support Vector Machine (SVM) Ansatzes konnte ich die ML-Algorithmus Genauigkeit 
              von 50% auf 83% erhöhen.`,
            files: {}
          },
          DLCaseStudy: {
            title: "Semantische Segmentierung - Landnutzung",
            desc: `In dieser Fallstudie habe ich mit einem Kommolitonen einen supervised 
            Deep-Learning-Algorithmus implementiert, der eine Landschaft semantisch in zehn vordefinierte 
            Landnutzungs- und Flächenklassen segmentiert. Dabei wird eine Genauigkeit von 73% durch einen Sliding-Window 
            mit einem 3D CNN erreicht. In den sieben Schritten des Machine Learnings werden die 
            Funktionalität und die Eigenschaften des Algorithmus erklärt und zum Schluss wird ein Ausblick gegeben wie  
            Verbesserungspotential ausgenutzt werden kann.`,
            files: {
              seminar_thesis: "Seminararbeit",
              poster_overview: "Poster Überblick",
              transfer_learning: "Transfer Learning Präsentation"
            }
          },
          BA: {
            title: "Semantische Segmentierung von Satellitenbildern",
            desc: `<p style="text-align:center;"> (angepasst von
              <a href="#bibliography">Ronneberger, Fischer, and Brox [RFB15]</a>)
              </p>
              Ein großer Teil der Bäume und Sträucher in Afrikas Trockengebieten (im Folgenden 
              im Folgenden als Bäume bezeichnet) wächst isoliert und ohne Kronenschluss. 
              Dennoch leisten diese einzelstehenden Bäume einen entscheidenden Beitrag zur 
              biologischen Vielfalt und zum Ökosystem denn sie speichern Kohlenstoff, bieten 
              Nahrungsressourcen und Schutz für Menschen und Tiere. Deshalb, 
              werden einzelne Bäume durch einen Deep-Learning-Ansatz unter Verwendung der 
              U-Net-Architektur segmentiert, was eine Analyse der Entwicklung des Baumbestands 
              in Südafrika ermöglicht. Die Anzahl der Bäume liefert auch eine Schätzung der 
              Biomasse des Trockengebiets. Daher ist die Idee, diese Ergebnisse auf einer Website 
              zu visualisieren, die der Nachhaltigkeit gewidmet ist. Diese Ergebnisse können genutzt 
              werden, um ein Bewusstsein für die Förderung der Nachhaltigkeit zu schaffen, indem 
              die Erkenntnisse in einem Informationssystem veröffentlicht werden. 
              Eine Website könnte zum Beispiel Bodenverschlechterung, Wüstenbildung, Entwaldung 
              oder Wiederaufforstung hervorheben, die sich aus der Überwachung der Baumzahl ableiten lässt.`,
            files: {
              BAThesis: "Bachelorarbeit"
            }
          },
          forum_web_scraper: {
            title: "Skalierbarer Foren Web Scraper",
            desc: `Das Vertiefungsmodul Principles of Entrepreneurship wurde durch 
            die Projektgruppenarbeit mit dem Startup pivoty ergänzt. Die grundlegende 
            Geschäftsprozess-Idee von pivoty ist, dass extrahierte Informationen (mittels Web 
            Scraping) aus Diskussionsforen genutzt werden, um mit einer KI-Analyse versteckte 
            Innovationspotenziale abzuleiten. In dem Projekt habe ich mit zwei anderen Projektmitgliedern 
            einen skalierbaren Web Scraper mit Scrapy gebaut, sodass dieser auf so viele Foren wie möglich angewendet werden kann. 
            Hierbei wurde sich an der Struktur von den am weit verbreitensten Forenframeworks orientiert, um knapp 90% 
            aller deutschsprachigen Diskussionsforen abzudecken. 
            <br/>
            <br/>
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
            (<a href="#bibliography">Schäper et al. 2021b</a>).`
          },
          goc: {
            title: "Webbasierte Applikation",
            desc: `Wir haben eine webbasierte Simulationsplattform namens Game of Competences für öffentliche Verwaltungen mit Vue.js und Flask implementiert. 
            Das Projekt hat mir viel Spaß gemacht, da ich das Frontend-Team leiten und ihnen Frontend-Kenntnisse mit Vue.js 2 vermitteln konnte. 
            Auch die Gesamtnote von 1,3 unterstreicht den Erfolg des Projekts. 
            Leider darf ich die Projektergebnisse des Projektseminars nicht im Detail veröffentlichen.`
          },
          watchtrainer: {
            title: "Web Development: watchTrainer",
            desc: `WatchTrainer ist eine auf Sharing basierende Sportplattform für die Zukunft von 
            Wearable Devices wie der AppleWatch. Nach einer fundamentalen Umsetzung des Backends und 
            Frontends, arbeite ich nicht weiter an diesem Forschungsprojekt.`
          },
          portfolioV1: {
            title: "Web Development: Portfolio v1",
            desc: `Die erste Version meiner Portfolio-Website habe ich 2019 mit 
            HTML5, CSS3, JavaScript und Bootstrap erstellt, um die Front-End-Webentwicklung zu verstehen.`
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
