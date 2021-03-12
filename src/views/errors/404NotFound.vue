/* eslint-disable */
<template lang="pug">
  v-parallax(dark src="@/assets/errors/404.jpg" height="800")
    v-container.text-center(fluid)
      h1.display-3.primary--text.font-weight-bold
        | 404 - Page not found
      h2.mt-4 You got lost on the search for Game of Competences! 
      h2 Unfortunatly, this page does not exist. 
      h2 Luckily, someone offers you a way out of this situation.
      v-btn.mt-5(
        color="primary"
        :to="{ name: 'Home' }") 
          | Take me back home
      v-img.mt-10.ma-auto(src="@/assets/errors/pulp-fiction.gif" width="600")
</template>

<script>
/* eslint-disable max-len */
export default {
  name: "NotFound"
};
</script>
