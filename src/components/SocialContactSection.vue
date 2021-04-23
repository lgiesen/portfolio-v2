<template lang="pug">
div
  section.fullwidth
    div.animated-gradient-box.in
      div.center-items(min-height="20vh" max-height="400px")

</template>

<script>
import socialIcons from "@/components/social-icons/SocialIcons.json";
export default {
  name: "SocialContactSection",
  data: () => ({
    socialIcons: socialIcons
  })
};
</script>

<style lang="scss" scoped>
$primary: var(--v-primary-base);
$secondary: var(--v-secondary-base);

.animated-gradient-box {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to left, $secondary, $primary, $secondary);
    background-size: 300% 300%;
  }
}
.animated-gradient-box.in:after {
  animation: gradient-animation 4s ease-in-out infinite;
}

/* motion */
@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
}
</style>
