<template lang="pug">
v-container.text-center
  section
    h1.display-3.font-weight-thin Projects
  section 
    h1.display-3.font-weight-thin Playground
    v-card.pa-10
      v-card-title Special Link animation
      p This is a paragraph - 
        a.link(href='#') 
          span(data-content='ipsum') ipsum
        |  etc.
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style lang="scss" scoped></style>
