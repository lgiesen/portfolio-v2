<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero.text-center(dark cover
      src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80')
      v-row(align='center' justify='center')
        v-col(cols='12')
          h1.display-1.font-weight-thin.mb-4
            | Passionate about Business and Computer Science
          h3.subheading
            | - Portfolio of Leo Giesen -
          div.mt-10
            v-btn.pa-6.mr-10(outlined
              @click="this.$router.push("/")"
              ) For Businesses
            v-btn.pa-6(outlined
              @click="this.$router.push("/")"
              ) Other Visitors
  section  
    v-container
      h3.text-center Title
      ul Ideas:
        li Empfehlungen von Schule, Uni (Friedrich), 
          | move (Kunden), Mitgründer vivIT
        li 
      blockquote.font-italic "Lorem ipsum solor dolor"
</template>

<script>
export default {
  name: "Home"
};
</script>
