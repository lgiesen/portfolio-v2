<template lang="pug">
div
  //- Hero Area
  section
    v-parallax.hero(dark
      src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')
      v-row(align="center" justify="center")
        v-col.text-center(cols='12')
          h1.display-3.font-weight-thin.mb-4 About Leo
          h4.subheading I love to learn and apply my knowledge!
      ScrollHero
  //- Introduction
  section#scroll
    v-container
      h1.display-2.font-weight-thin.text-center.ma-10 About
      v-row(align="center")
        v-col(cols="6")
          p Leo has a huge passion for computer science and economics, which is why he 
            | studies Information Systems and ambitiously works on personal projects 
            | in his free time like his website.
          p In order to put his insights into practice Leo started working at move e. V. 
            | and at the chair of Information Systems at WWU, which fostered his 
            | analytical and conceptional abilities.
          p In his projects at move he developed a strength in communication and teamwork 
            | through intense group work. From those projects and his course of study, 
            | Leo acquired the skill of goal orientated work, great time management and 
            | precise project planning.
          div.text-center.mt-10
            v-btn.ma-auto.pa-6.gradient-btn(href="/LeoGiesenCV.pdf")
              v-icon mdi-download
              | Download CV
        v-col(cols="6")
          v-img(src="@/assets/profile/Leo Giesen Profile square.jpg")
  
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped></style>
