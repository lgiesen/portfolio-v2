<template lang="pug">
div
  section.fullwidth
    v-img.align-center(src="@/assets/background/WWU-Schloss.jpg" cover
      max-height="calc(min(500px, 100vh))" width="100vw"
      :gradient="$store.getters.isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgb(255,255,255,.4), rgb(255,255,255,.7)'")
      v-row.text-center.pb-12
        v-col
          h6.primary--text.display-2 {{ $t("socialTitle") }}
          v-btn.mx-8.secondary--text(
            v-for="icon in socialIcons" :key="icon.mdi"
            icon target="_blank" :href="icon.link")
            //- :class="$vuetify.theme.dark ? 'secondary--text' : 'white--text'"
            v-icon(elevation="15" size="42px") {{ icon.mdi }}
</template>

<script>
import socialIcons from "@/components/social-icons/SocialIcons.json";
import Icons from "@/components/social-icons/Icons.vue";

export default {
  name: "SocialContactSection",
  components: { Icons },
  data: () => ({
    socialIcons: socialIcons
  }),
  i18n: {
    messages: {
      en: {
        socialTitle: "Connect with me"
      },
      de: {
        socialTitle: "In Kontakt setzen"
      }
    }
  }
};
</script>
