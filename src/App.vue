<template lang="pug">
  v-app
    TheNavigation
    v-main
      router-view
    TheFooter
</template>

<script>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheNavigation,
    TheFooter
  },

  data: () => ({
    //
  })
};
</script>
