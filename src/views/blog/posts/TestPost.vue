<template lang="pug">
div
  article
    section.d-flex.flex-wrap
      v-container
        v-layout(row)
          v-flex(xs2)
          v-flex(xs8)
            h2.display-2.font-weight-thin.text-center.mb-12 TITLE
            p by AUTHOR, DATE
              v-btn.ml-2(@click="cite(post_id=1)") cite
              //- TODO: cite
              //- v-icon(elevation="15" size="42px") mdi-heart-outline
              Icons(:iconGroup="shareIcons")
            v-img.align-center.mb-12(src="@/assets/background/Glatthorn.jpg" 
              height="40vh" :max-width="$vuetify.breakpoint.xs ? '100vw' : '40vw'")
            v-card.mb-9
              v-card-text {{ $t("content") }} {{!$vuetify.breakpoint.xs}}
          v-flex(xs2)
</template>

<script>
import shareIcons from "@/components/icons/icons-share.json";
import Icons from "@/components/social-icons/Icons.vue";

export default {
  name: "TestPost",
  data: () => ({
    shareIcons: shareIcons,
    citation: "abc"
  }),
  components: { Icons },
  methods: {
    async cite() {
      try {
        await navigator.clipboard.writeText(this.citation);
        alert("Copied");
        // todo: make pop-up which auto-disappears
      } catch ($e) {
        alert("Cannot copy");
      }
    }
  },
  i18n: {
    messages: {
      en: {
        title: "Title",
        content: "Lorem ipsum"
      },
      de: {
        title: "Titel",
        content: "Lorem ipsum"
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
