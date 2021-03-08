<template lang="pug">
  v-app
    TheNavigation
    v-main
      router-view
</template>

<script>
import TheNavigation from "@/components/navigation/TheNavigation.vue";

export default {
  name: "App",

  components: {
    TheNavigation
  },

  data: () => ({
    //
  })
};
</script>
