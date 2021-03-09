<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero(dark='' cover
      src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80')
      v-row(align='center' justify='center')
        v-col.text-center(cols='12')
          h1.display-1.font-weight-thin.mb-4
            | Portfolio of Leo Giesen
          h4.subheading
            | I love to learn and apply my knowledge!
  section  
    v-container.text-center
      h3 Home
</template>

<script>
export default {
  name: "Home"
};
</script>
