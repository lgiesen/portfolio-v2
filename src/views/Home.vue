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
            v-btn.pa-6.mr-10.primary(
              @click="this.$router.push("/")"
              ) For Businesses
            v-btn.pa-6(outlined color="secondary"
              @click="this.$router.push("/")"
              ) Other Visitors
  section
    v-container
      h3.text-center Title
      p Ideas:
      ol 
        li General
          ul
            li Non-IT Lounge? Is there a target group for that?
            li content
              ul
                li General inspirational introduction text: why should anyone visit this website:
                | What skills I bring to the table: three cards with icons and small description and animation.
                li My story to how I got where I am right now: passions, drive, discipline, motivation
                li Quick overview of who I've worked with an for
                li Link projects (smarket etc.) and blog with small preview
                li Recommendations link favourite quotes, questions, books, articles
                li Blog: personal research (productivity rules etc.), essence/summary of books
                li Values / What I believe in: what is important in teamwork, political stances
                li funny quote somewhere e.g. footer like "don't forget to be awesome"
            li Style
              ul
                li Background video
                li Gradient overlay of images / gradient background with thin white text, moving/floating elements, great css animations
                li Grid Design: light grey boxes with links to other sites (with and without gaps)
                li Overlapping boxes
                li Whitespace!
                li Scroll to top button
                li Scroll past hero image
                li Containers alternating moved to left and right of the page
                li Alternating: left/right image/text
                li Whole screen giant blurred dark background image with minimalistic design and thin text
                li SVG images
                li SVG background: hard edges / diagonal background box (not always rectangles) &rarr; edgy
                li Use Apple Icons and elavation?
                li Opacity navbar: 60%
                li Rethink font (e.g. Montserrat, futura-pt(title), ltc-bodoni-175 (title), europa (text)) &rarr; unique impression of website, memorable (handwriting?)
                li elavated v-cards exceeding background block
                li Logo and app-bar-title exceeds navbar
        li Businesses
          ul
            li Possible topics: Consulting, Project Management, Business/Process Analyst, 
              | Supply Chain Management and other IT topics like AI - Check reference 
              a(href="http://assets.csom.umn.edu/assets/36237.pdf" target="_blank") here 
            li Area of skill &rarr; learning outcomes &rarr; performance indicators, evidence
            li Businesses: hire me and gain valuable ressource (what type of positions do I want to acquire? (cf. previouslink)) 
            li Downloadable CV
            li Recommendations from school (ESG teachers, CIS), Uni (Friedrich), 
              | move (customers), co-founders of vivIT -- use citations:
              blockquote.font-italic "Lorem ipsum solor dolor"
        li Other Visitors
          ul
            li programming page, where I use Menlo as a font and minimalistic terminal design
            li playground:
              ul 
                li introduce magic button: random action for user
                li change color palette on the site itself 
                li provide code and link to repo
            li students: get inspired by my code and website
            li personal site with images and hobbies
</template>

<script>
export default {
  name: "Home"
};
</script>
