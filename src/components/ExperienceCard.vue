<template lang="pug">
v-card.pa-5.mt-5
    v-img(:src="associationsSrc" contain
        min-height="30px" height="5vh"  min-width="100px" max-width="7vw")
</template>

<script>
export default {
  name: "ExperienceCard",
  props: ["associationsSrc"]
};
</script>

<style lang="scss" scoped></style>
