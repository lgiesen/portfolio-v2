<template lang="pug">
v-btn.secondary( 
  elevation="15"
  fixed bottom right fab 
  style="backdrop-filter: blur(8px);"
  @click="$router.push('/contact')" color="white")
  v-icon mdi-email-outline
</template>

<script>
export default {
  name: "LetsTalk"
};
</script>
