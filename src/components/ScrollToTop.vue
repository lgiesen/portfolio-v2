<template lang="pug">
    v-btn( 
      v-scroll="onScroll"
      v-show="fab" fab
      outlined
      color="primary"
      fixed bottom right
      @click="toTop"
      style="opacity: 0.7;")
      v-icon mdi-chevron-up
</template>

<script>
export default {
  name: "ScrollToTop",
  data: () => ({
    // show scroll button
    fab: false
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="scss" scoped></style>
