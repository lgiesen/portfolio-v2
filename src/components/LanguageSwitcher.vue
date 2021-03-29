<template lang="pug">
  //- img.w-8.h-8(:src='`/flag_${$i18n.locale}.svg`' alt='flag')
  //- span.ml-2 {{ $i18n.locale.toUpperCase() }}
  //-       img.h-8.w-8(src="@/assets/locales/English.svg" alt='english flag')

  .locale-changer
    select.text-uppercase(v-model='$i18n.locale')
      option(v-for='(lang, i) in langs' :key='`Lang${i}`' :value='lang'
        ) {{ lang }}
</template>

<script>
export default {
  data() {
    return { langs: ["de", "en"] };
  }
};
</script>

<style scoped></style>
