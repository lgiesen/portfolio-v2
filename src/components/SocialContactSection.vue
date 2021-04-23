<template lang="pug">
div
  section.fullwidth
    v-img.align-center(src="@/assets/background/WWU-Schloss.jpg" cover
        max-height="calc(min(500px, 100vh))" width="100vw"
        :gradient="$store.getters.isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.6)' : 'rgba(0,0,0,.4), rgba(0,0,0,.4)'")
        v-row.text-center.pb-12
            v-col
                h3.white--text.display-1 {{ $t("socialTitle") }}
                v-btn.mx-8(
                    :class="$vuetify.theme.dark ? 'secondary--text' : 'white--text'"
                    v-for="icon in socialIcons" :key="icon.mdi"
                    icon target="_blank" :href="icon.link")
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

<style lang="scss" scoped>
$primary: var(--v-primary-base);
$secondary: var(--v-secondary-base);

.animated-gradient-box {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to left, $secondary, $primary, $secondary);
    background-size: 300% 300%;
  }
}
.animated-gradient-box.in:after {
  animation: gradient-animation 4s ease-in-out infinite;
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
