<template lang="pug">
v-container.text-center
  h3 Playground
  v-card
    v-card-title Special Link animation
    p This is a paragraph - 
      a.link(href='#') 
        span(data-content='ipsum') ipsum
      |  etc.

</template>

<script>
export default {
  name: "Playground"
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
  cursor: pointer;
  position: relative;
  transition: clip-path 275ms ease;
  &:hover span::before,
  &:focus span::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
span {
  &::before {
    position: absolute;
    content: attr(data-content);
    text-decoration: underline;
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    transition: clip-path 275ms ease;
  }
}
</style>
