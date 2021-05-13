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
            //- Icon of project
            v-img.ma-10.mx-auto(:src="project.imgSrc" width="80px")
            //- Project description
            p.text-justify {{ $t(project.translationKey)}}
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
      {
        title: "Game of Competences",
        link: "",
        imgSrc: require("@/assets/projects/GoC.svg"),
        translationKey: "projects.goc",
        id: "goc",
        showPreview: false,
        embedLink: ""
      },
      {
        title: "watchtrainer",
        link: "https://github.com/Arceoavs/watchtrainer",
        imgSrc: require("@/assets/projects/watchtrianer_logo.svg"),
        translationKey: "projects.watchtrainer",
        id: "watchtrainer",
        showPreview: false,
        embedLink: "https://watchtrainer.arz.berlin/"
      },
      {
        title: "Portfolio v1",
        link: "https://github.com/lgiesen/portfolio-v1",
        imgSrc: require("@/assets/projects/portfolioV1Logo.png"),
        translationKey: "projects.portfolioV1",
        id: "",
        showPreview: false,
        embedLink: "https://lgiesen.github.io/portfolio-v1/"
      }
    ]
  }),
  i18n: {
    messages: {
      en: {
        intro: {
          title: "Projects",
          subtitle: "- This page is still in development -"
        },
        projects: {
          links: {
            repository: "repository",
            website: "website"
          },
          preview: {
            hide: "Hide Preview",
            show: "Show Preview"
          },
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
          subtitle: "- Diese Seite ist noch in Entwicklung -"
        },
        projects: {
          links: {
            repository: "Repository",
            website: "Website"
          },
          preview: {
            hide: "Vorschau verbergen",
            show: "Vorschau anzeigen"
          },
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
