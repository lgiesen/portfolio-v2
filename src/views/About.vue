<template lang="pug">
div
  //- Hero Area
  Parallax(:parallaxImage="require('@/assets/about/Aasee.webp')" :title="$t('parallaxText.title')" :subtitle="$t('parallaxText.subtitle')")
  
  //- About me texts alternating with corresponding images
  section#scroll
    div
      h3.display-1.font-weight-thin.text-center {{ $t("introHeader") }}
      v-container.text-justify
        //- friends and family
        v-row.justify-center
          v-col.col-11.col-md-6
            v-img(src="@/assets/about/Familie_Aegina.webp" :max-width="imageWidth")
          v-col.col-11.col-md-6
            p {{ $t("friendsAndFamily") }}
            //- career
            p(v-html="$t('career')")

        //- sport
        v-row.justify-center
          v-col.col-11.col-md-6(order-md="2")
            v-img(src="@/assets/about/FCG.webp" :max-width="imageWidth")
          v-col.col-11.col-md-6(order-md="1")
            p(v-html="$t('sport')")
        v-row.justify-center
          v-col.col-11.col-md-6
            v-img(src="@/assets/about/Ski_HSP.webp" :max-width="imageWidth")
          v-col.col-11.col-md-6
            p(v-html="$t('tennisAndSkiing')")
            //- v-img(src="@/assets/about/Ski_Familie.webp")
        //- travel
        v-row.justify-center
          v-col.col-11.col-md-6(order-md="2")
            v-img(src="@/assets/about/Fujiyoshida, Japan.webp" :max-width="imageWidth")
          v-col.col-11.col-md-6(order-md="1")
            p(v-html="$t('travel')")
            p {{ $t("quote") }}
            Quote(:quoteText="this.quotes[0].quoteText" :quoteAuthor="this.quotes[0].quoteAuthor")
  section
    v-container.grey--text.px-5.text-justify
      h2.mb-5 {{ isDE ? "Literaturverzeichnis" : "Bibliography" }}
      p McCandless, C. (n.d.). The joy of life comes from our 
        | encounters with new experiences, and hence there is no greater joy 
        | than to have an endlessly changing horizon, for each day to have a 
        | new and different sun. Retrieved April 3, 2021, from 
        a(:href="quotes[0].quoteLink" target="_blank") {{ quotes[0].quoteLink }}
</template>

<script>
import Parallax from "@/components/Parallax.vue";
import Quote from "@/components/Quote.vue";
import { mapGetters } from "vuex";

export default {
  name: "About",
  components: {
    Parallax,
    Quote
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
            <a href="/experience">Erfahrungsübersicht</a>.
        </p>`,
        sport: `Neben der Arbeit und meinem Privatleben bin ich auch sportlich sehr ambitioniert, 
        denn ich möchte auf verschiedene Weise an meine Grenzen gehen: Zum Beispiel versuche ich, mein 
        Laufen zu verbessern, da ich im Alter von 16 Jahren einen Halbmarathon gelaufen bin und ich mich damit begnüge, etwa 
        4 min/km auf meiner üblichen Strecke rund um den Aasee und die Promenade in Münster zu laufen<span class="hidden-md-and-up">
            (sehen Sie sich meinen Fortschritt 
            <a href="https://www.runtastic.com/user/68B0X1VDRZ87HHRR" target="_blank">hier</a>
            an)</span>. 
        Als Ausblick würde ich gerne einen 
        Marathon absolvieren, wenn ich genügend Zeit finde, mich darauf vorzubereiten. 
        Früher habe ich ein Jahrzehnt lang Fußball gespielt und konnte mich in der Regionalliga beweisen. 
        Es ist jedoch schwierig für mich, die Zeit zu finden, um mich auf einem hohen Niveau 
        hohem Niveau zu spielen. Trotzdem ist es mein Lieblingssport und ich liebe es, ihn zu spielen, egal 
        ob entspannt mit Familie und Freunden oder wettkampfmäßig in einer Fußballmannschaft`,
        tennisAndSkiing: `
        <p>
          Außerdem spiele ich gerne Tennis mit Freunden, weil es mir leichter fällt, eine 
          eine starke Bindung zu Menschen aufzubauen, während ich Sport treibe. 
          Außerdem liebe ich das unglaubliche Gefühl beim Skifahren wegen des schnellen Gleitens im Schnee 
          und die tolle Aussicht, während man sich schnell aber elegant den Berg hinunter bewegt. Dieses Gefühl gipfelt 
          wenn man in einer sportlichen und dynamischen Gruppe abseits der Piste fährt, wo es keine oder nur wenige 
          Spuren der vorherigen Skifahrer gibt. Denn man spürt, wie man den weichen Schnee formt, der auch 
          die Sonnenstrahlen reflektiert.
          Deshalb fahre ich jedes Jahr mit meiner Familie zum Skifahren nach 
            <a href="https://www.bergfex.com/lech-zuers-arlberg/" target="_blank">Warth/Lech in Österreich</a>. 
          Gelegentlich habe ich auch die Gelegenheit zum Skifahren in 
            <a href="https://www.bergfex.com/portes-du-soleil/" target="_blank">Portes du Soleil, Schweiz</a> 
          mit der Hochschule
            (<a href="https://www.uni-muenster.de/Hochschulsport/" target="_blank">HSP</a>) zu fahren, was 
          immer ein ereignisreiches und spannendes Erlebnis ist, 
          denn man lernt neue gleichgesinnte Snowboarder und Skifahrer kennen, lebt, feiert und fährt mit ihnen. 
          Es wäre toll, in den Bergen Fallschirmspringen zu gehen, mit einer tollen Aussicht 
          denn das könnte ein ähnliches Gefühl von Adrenalin gepaart mit Freiheit und Lebenslust auslösen 
          für das Leben. Daher freue ich mich sehr darauf, das eines Tages zu tun!
        </p>`,
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
        </p>`,
        tennisAndSkiing: `
        <p>
          Additionally, I enjoy playing Tennis with friends because I find it easier to create a 
          strong bond with people while doing sports. 
          Moreover, I love the incredible feeling of skiing because of the swift glide in the snow 
          and the great view while you move fast but elegantly down a mountain. This feeling peaks 
          when you ski off-slope in a sporty and dynamic group, where there are no or only a few 
          tracks of previous skiers. Because you can feel how you shape the soft snow, which also 
          reflects the sun rays.
          That is why I go on a yearly skiing trip with my family to
            <a href="https://www.bergfex.com/lech-zuers-arlberg/" target="_blank">Warth/Lech, Austria</a>.
          Occasionally, I also have the opportunity to ski in 
            <a href="https://www.bergfex.com/portes-du-soleil/" target="_blank">Portes du Soleil, Switzerland</a>
          with the university 
            (<a href="https://www.uni-muenster.de/Hochschulsport/" target="_blank">HSP</a>), which is 
          always an eventful and thrilling experience, 
          because you get to know, live, party and ski with new like-minded snowboarders and skiers. 
          It would be awesome to go skydiving and parachuting in the mountains with a great view 
          because that might spark a similar feeling of adrenalin combined with freedom and lust 
          for life. Consequently, I am thrilled to do that one day!
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
