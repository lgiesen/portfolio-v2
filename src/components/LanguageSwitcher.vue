<template lang="pug">
  //- img.w-8.h-8(:src='`/flag_${$i18n.locale}.svg`' alt='flag')
  //- span.ml-2 {{ $i18n.locale.toUpperCase() }}
  //-       img.h-8.w-8(src="@/assets/locales/English.svg" alt='english flag')
  div
    v-btn.pa-0(text @click="switchLanguage()")
      v-img(:src="switchLanguageSrc" width="50")
    //- Alternative select option
    //- select.text-uppercase(v-model="$i18n.locale")
    //-   option(v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang"
    //-     ) {{ lang }}
</template>

<script>
export default {
  name: "locale-changer",
  data: () => ({
    langs: ["de", "en"]
  }),
  methods: {
    switchLanguage() {
      console.log("----");
      console.log("START: set language: " + this.$i18n.locale);

      if (!this.$i18n.locale || this.$i18n.locale == "en") {
        console.log("EN -> DE");
        this.$i18n.locale = "de";
      } else if (this.$i18n.locale == "de") {
        this.$i18n.locale = "en";
        console.log("DE -> EN");
      }
      console.log("END: set language: " + this.$i18n.locale);
    }
  },
  computed: {
    switchLanguageSrc() {
      if (!this.$i18n.locale) {
        console.log("active language: " + this.$i18n.locale);
        this.$i18n.locale == "de";
        return null;
      } else if (this.$i18n.locale == "de")
        return require("@/assets/locales/English.svg");
      else return require("@/assets/locales/German.svg");
    }
  }
};
</script>

<style scoped></style>
