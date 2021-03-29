<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero(dark
      src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')
      v-row(align="center" justify="center")
        v-col.text-center(cols="12")
          h1.display-3.font-weight-thin.mb-4 About Leo
          h4.subheading I love to learn and apply my knowledge!
      ScrollHero
  //- Introduction
  section#scroll
    v-container
      h1.display-2.font-weight-thin.text-center.ma-10 About
      v-row(align="center")
        v-col.col-12.col-sm-6
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
        v-col.col-12.col-sm-6
          v-img(src="@/assets/profile/Leo Giesen Profile square.jpg")
  section
    v-container
      h2 {{ $t("introHeader") }}
      p {{ $t("friendsAndFamily") }}
      p(v-html="$t('career')")

  section.d-flex.flex-wrap
    v-img(
      v-for="(image, index) in imageGallery" :key="index" 
      :width="$vuetify.breakpoint.mobile ? '40vw' : '25vw'"
      :height="$vuetify.breakpoint.mobile ? '40vw' : '25vw'"
      :src="image.src")
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "About",
  components: {
    ScrollHero
  },
  data: () => ({
    imageGallery: [
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      }
    ]
  }),
  i18n: {
    messages: {
      de: {
        introHeader: "Was ist für Dich am wichtigsten?",
        friendsAndFamily: `Für mich haben meine Familie, Freunde und meine Karriere 
        die höchste Priorität, denn ohne ein tolles soziales Leben als Fundament 
        kann man leicht ausbrennen und den Blick für das Wesentliche im Leben 
        verlieren.
        So hege ich mit meiner Familie und meinen Freunden tolle Erinnerungen 
        an faszinierende Ausflüge und tolle Partys, z. B. unsere jährlichen 
        Skiausflüge oder Karneval mit einer Gruppe von Freunden und meiner 
        Familie in Köln.`,
        career: `
        <p>
          Neben meinem Privatleben investiere ich viel Energie in meine Arbeit und Karriere 
          da ich eine unglaubliche Leidenschaft für verschiedene Geschäfts- und IT-Bereiche habe. Zum Beispiel, 
          hatte ich die Möglichkeit, mir ein breites Skillset durch zwei fruchtbare Consulting 
          Projekten bei 
            <a href="https://move-ev.de/" target="_blank"> @move e. V.</a> 
          zum Thema Web-Konzeptionierung zu erwerben. Weitere Einblicke in diese und 
          andere Projekte finden Sie auf dem Blog (derzeit im Aufbau) und in der 
            <a href="/projects">Projekt-</a> 
          bzw. 
            <a href="/experience">Erfahrungsübersicht</a>
          .
        </p>`
      },
      en: {
        introHeader: "What is most important to you?",
        friendsAndFamily: `For me, my family, friends and my career have the highest 
        priority, because, without a great social life as a foundation, you can easily 
        burn out and lose sight of what is important in life.
        For instance, I cherish great memories with my family and friends from 
        fascinating trips and amazing parties, e.g. our yearly skiing trips or 
        Carnival with a group of friends and my family in Cologne.`,
        career: `
        <p>
          Besides my private life, I spend a lot of energy on my work and career 
          as I am incredibly passionate about various business and IT fields. For example, 
          I had the opportunity to acquire a wide-range skillset from two fruitful consulting 
          projects 
            <a href="https://move-ev.de/" target="_blank"> @move e. V.</a> 
          concerning web conceptualisation. Further insights into these and 
          other projects can be found on the blog (currently in development) and in the 
            <a href="/projects">project</a> 
          or 
            <a href="/experience">work experience</a>
          overview.
        </p>`
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
