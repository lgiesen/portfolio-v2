<template lang="pug">
div
  //- Hero Area
  //- Parallax(:parallaxImage="require('@/assets/about/Aasee.jpg')" 
  //-   :title="$t('parallaxText.title')" :subtitle="$t('parallaxText.subtitle')")
  v-img.align-center(src="@/assets/background/Glatthorn.jpg" height="100vh"
    gradient="to bottom right, rgba(100,115,201,.33), rgba(38,145,66,.5)")
    //- Another section is necessary to provide the max-width for ultra-wide screens
    section.mb-0 
      v-container
        v-row.pa-md-12.d-flex.text-center
          v-col.col-12.col-md-6.white--text(order-md="2")
            h1.display-3.font-weight-thin.mb-12 {{ $t("parallaxText.title") }}
            p.subheading {{ $t("parallaxText.subtitle") }}
            ScrollHero.mt-16.pt-16
          v-col.d-flex.justify-center.col-12.col-md-6(order-md="1")
            v-card.pa-0(elevation="50" max-width="400px" max-height="400px")
              v-img(alt="Leo Giesen Profil" src="@/assets/about/Snow-Profile.jpg" max-width="90vw")
  //- About me texts alternating with corresponding images
  article
    section#scroll
      div
        h3.display-1.font-weight-thin.text-center {{ $t("introHeader") }}
        v-container.text-justify
          //- friends and family
          v-row.justify-center
            v-col.col-11.col-md-6
              v-img(alt="Leo Giesen Familie" src="@/assets/about/Familie_Aegina.jpg" :max-width="imageWidth")
            v-col.col-11.col-md-6
              p {{ $t("friendsAndFamily") }}
              //- career
              p(v-html="$t('career')")
            //- TODO Link Erfahrungsbericht & Projekt does not work
          //- sport
          v-row.justify-center
            v-col.col-11.col-md-6(order-md="2")
              v-img(alt="Ski fahren mit HSP" src="@/assets/about/Ski_HSP.jpg" :max-width="imageWidth")
            v-col.col-11.col-md-6(order-md="1")
              p(v-html="$t('sport')")
          //- travel
          v-row.justify-center
            v-col.col-11.col-md-6(order-md="2")
              p(v-html="$t('travel')")
              p {{ $t("quote") }}
              Quote(:quoteText="this.quotes[0].quoteText" :quoteAuthor="this.quotes[0].quoteAuthor")
            v-col.col-11.col-md-6(order-md="1")
              v-img(alt="Reisen Japan Landschaft" src="@/assets/about/Fujiyoshida, Japan.jpg" :max-width="imageWidth")
  section
    v-container.grey--text.px-5.text-justify
      h2.mb-5 {{ isDE ? "Literaturverzeichnis" : "Bibliography" }}
      p McCandless, C. unknown. "The joy of life comes from our 
        | encounters with new experiences, and hence there is no greater joy 
        | than to have an endlessly changing horizon, for each day to have a 
        | new and different sun." BrainyQuote. (
        a.text-break(:href="quotes[0].quoteLink" target="_blank") {{ quotes[0].quoteLink }}
        | , accessed April 3, 2021).
</template>

<script>
// import Parallax from "@/components/Parallax.vue";
import Quote from "@/components/Quote.vue";
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import { mapGetters } from "vuex";

export default {
  name: "About",
  components: {
    // Parallax,
    Quote,
    ScrollHero
  },
  data: () => ({
    quotes: [
      {
        quoteText:
          "The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun.",
        quoteAuthor: "Christopher McCandless",
        quoteLink:
          "https://www.brainyquote.com/quotes/christopher_mccandless_473529"
      }
    ]
  }),
  computed: {
    ...mapGetters(["isDE", "isMobile"]),
    imageWidth() {
      if (this.isMobile) return "90vw";
      else return "50vw";
    }
  },
  i18n: {
    messages: {
      de: {
        parallaxText: {
          title: "Über Leo",
          subtitle:
            "Ich liebe es komplexe Probleme zu destrukturieren und das Gelernte anzuwenden!"
        },
        introHeader: "Was ist für Dich am wichtigsten?",
        friendsAndFamily: `Für mich haben meine Familie und Freunde die höchste Priorität, 
        denn ohne ein tolles soziales Leben als Fundament kann man leicht unausgeglichen sein, 
        ausbrennen und den Blick für das Wesentliche im Leben 
        verlieren.
        Deswegen versuche ich mich so oft es geht mit meiner Familie und meinen Freunden tolle Erinnerungen 
        an zum Beispiel faszinierende Ausflüge und tolle Partys zu kreiren. Dazu gehören z. B. unsere jährlichen 
        Skiausflüge, Wochenendtrips oder Karneval mit einer Gruppe von Freunden und meiner 
        Familie in Köln.`,
        career: `
        <p>
          Neben meinem Privatleben investiere ich viel Energie in meine Arbeit und Karriere 
          da ich eine Leidenschaft für verschiedene IT-Themen habe. Deswegen studiere ich 
          Information Systems (M. Sc.) in Münster und habe zwei Nebenjobs mit IT-Fokus. 
          Die Jobs sind am Lehrstuhl für Wirtschaftsinformatik und Informationsmanagement als studentische Hilfskraft
          und als Werkstudent bei viadee in der Forschung und Entwicklung im Data Science Bereich.
          Zudem konnte ich mein Skillset durch Consulting-Projekte bei 
            <a href="https://move-ev.de/" target="_blank">move e. V.</a> 
          erweitern. Außerdem habe ich weitere Projekte abgeschlossen in meiner Freizeit oder in der Universiät. 
          Weitere Einblicke in diese und 
          andere Projekte können in meiner
            <a href="/experience">Erfahrungsübersicht</a>
          gefunden werden.
        </p>`,
        sport: `Neben der Arbeit und meinem Privatleben bin ich auch sportlich sehr ambitioniert, 
        denn ich möchte auf verschiedene Weise an meine Grenzen gehen: Zum Beispiel versuche ich, mein 
        Laufen zu verbessern. Z. B. bin ich mit 16 Jahren einen Halbmarathon gelaufen und laufe knapp unter 
        4 min/km auf meiner Strecke von 6-8 km um den Aasee und ein paar Felder in Münster zu laufen 
        <span>
          (Mein Fortschritt ist in 
            <a href="https://www.strava.com/athletes/17923080" target="_blank">Strava</a>
          dokumentiert)</span>. 
        Zur Schulzeit habe ich ein Jahrzehnt lang Fußball gespielt und konnte mich in der Regionalliga beweisen. 
        Aktuell spiele ich nur entspannt mit Freunden. Dafür mache ich Tennis, Home-Workouts und Beach- und Hallenvolleyball aktiver.
        </br>
        Ein anderer Sport, der mir viel Spaß macht ist das Skifahren, weil ich das unglaubliche Gefühl liebe,
          wenn man schnell durch den Schnee gleitet und die tolle Aussicht genießen kann.
          Es macht auch Spaß Touren im Gelände mit Aufsteigen zu machen und dann durch unberührten Schnee zu fahren.
          
          Deshalb fahre ich jedes Jahr mit meiner Familie zum Skifahren nach 
            <a href="https://www.bergfex.com/lech-zuers-arlberg/" target="_blank">Warth/Lech</a>
          (Österreich). 
          Jedes Jahr fahre ich ebenfalls mit dem Hoschulsport nach  
            <a href="https://www.bergfex.com/portes-du-soleil/" target="_blank">Portes du Soleil</a> 
          (Schweiz-Frankreich), was immer ein ereignisreiches und spannendes Erlebnis ist, denn man lernt viele coole Leute kennen.
        `,
        travel: `
        <p>
          Außerdem möchte ich gerne neue Orte erkunden und verschiedene Kulturen kennenlernen, z.B. 
          Asien und Süd- oder Mittelamerika. Konkret würde ich gerne nach Japan und Argentinien reisen, 
          Chile oder Nicaragua. Außerdem könnte ich mir vorstellen, für längere Zeit in Kanada zu bleiben und dort zu arbeiten, da 
          ich tolle Landschaften mag und es nach allem, was ich gehört habe, viel zu bieten hat.
        </p>
        `,
        quote:
          "Zum Schluss möchte ich mit einem Zitat abschließen, das meine Lebenseinstellung auf den Punkt bringt:"
      },
      en: {
        parallaxText: {
          title: "About Leo",
          subtitle: "I love to learn and apply my knowledge!"
        },
        introHeader: "What is most important to you?",
        friendsAndFamily: `For me, my family and friends are the highest priority, 
        because without a great social life as a foundation, it's easy to become unbalanced, 
        burn out and lose sight of what's important in life. 
        That is why I try to make great memories with my family and friends as often as possible. 
        These include our annual ski trips, weekend getaways, or carnival with a group of friends and my family in Cologne.`,
        career: `
        <p>
          Besides my private life I invest a lot of energy in my work and career because 
          I have a passion for different IT topics. That's why I study Information Systems (M. Sc.) 
          in Münster and have two part-time jobs with IT focus. The jobs are at the Chair of 
          Information Systems and Information Management as a student assistant and 
          as a working student at viadee in research and development in the Data Science area. 
          In addition, I was able to expand my skillset through consulting projects at 
            <a href="https://move-ev.de/" target="_blank">move e. V.</a>. 
          I also completed other projects in my spare time or at the university. 
          More insights into these and other projects can be found in my 
          <a href="/experience">experience overview</a>. 
        </p>`,
        sport: `
        <p>
          Apart from work and my private life, I am also very ambitious about sports, 
          because I want to push my limits in various ways: For example, I try to improve my 
          running as I have run a half-marathon at the age of 16 and I am content to run about 
          4 min/km on my usual route around the Aasee and Promenade in Münster<span class="hidden-md-and-up">
              (check out my progress 
              <a href="https://www.runtastic.com/user/68B0X1VDRZ87HHRR" target="_blank">here</a>
              )</span>. 
          As an outlook, I would like to complete a 
          marathon in the near future, if I find sufficient time to prepare for it. 
          I used to play football for a decade and managed to prove myself in the regional league. 
          However, it is difficult for me to find the time to commit properly to playing at a 
          high level. Nevertheless, it is my favourite sport and I love playing it, regardless 
          if it is relaxed with family or friends or competitive in a football team.
          </br>
          Another sport that I enjoy a lot is skiing because I love the incredible feeling of gliding 
          fast through the snow and enjoying the great views. It's also fun to do tours in the 
          backcountry with ascents and then ski through untouched snow. That's why every year I go 
          skiing with my family to 
            <a href="https://www.bergfex.com/lech-zuers-arlberg/" target="_blank">Warth/Lech</a>
          (Austria). Every year I also go to 
            <a href="https://www.bergfex.com/portes-du-soleil/" target="_blank">Portes du Soleil</a> 
          (Switzerland-France) with Hoschulsport, which is always an eventful and exciting experience 
          because you get to meet a lot of cool people. 
        </p>`,
        travel: `
        <p>
          What is more, I would like to explore new places and get to know different cultures, e.g. 
          Asia and South or Central America. Specifically, I would like to travel to Japan and Argentina, 
          Chile or Nicaragua. Additionally, I could imagine staying a long time in Canada and working there as 
          I enjoy great landscapes and from what I have heard, it has a lot to offer.
        </p>`,
        quote:
          "Lastly, I'd like to conclude with a quote, which sums up my life attitude:"
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
