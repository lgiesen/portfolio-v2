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
      p Ideas:
      ol 
        li Recommendations from school (ESG teachers, CIS), Uni (Friedrich), 
          | move (customers), co-founders of vivIT -- use citations:
          blockquote.font-italic "Lorem ipsum solor dolor"
        li Link projects and blog with small preview
        li blog: personal research (productivity rules etc.), essence/summary of books
        li General inspirational introduction text: why should anyone visit this website:
          | What skills I bring to the table: three cards with icons and small description and animation.
          ul
            li Possible topics: Consulting, Project Management, Business/Process Analyst, 
              | Supply Chain Management and other IT topics like AI - Check reference 
              a(href="http://assets.csom.umn.edu/assets/36237.pdf" target="_blank") here 
            li [area of skill &rarr; learning outcomes &rarr; performance indicators, evidence]
            li Businesses: hire me and gain valuable ressource (what type of positions do I want to acquire? (cf. previouslink)) 
            li students: get inspired by my code and website
            li Non-IT Lounge? Is there a target group for that?
        li background video
        li playground:
          ul 
            li introduce magic button: random action for user
            li change color palette on the site itself 
            li provide code and link to repo
        li gradient overlay, moving/floating elements, great css animations
        li values: what is important in teamwork, political stances
</template>

<script>
export default {
  name: "Home"
};
</script>
