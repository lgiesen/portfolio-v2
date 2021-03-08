<template lang="pug">
  v-container.text-center
    h3 Leo Giesen Portfolio Home
    img(alt="Vue logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
