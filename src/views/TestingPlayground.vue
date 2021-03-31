<template lang="pug">
div
    //- Image Gallery
    v-container
        h2.text-center Image Gallery
    section.d-flex.flex-wrap
        v-img(
            v-for="(image, index) in imageGallery" :key="index" 
            :width="$vuetify.breakpoint.mobile ? '40vw' : '25vw'"
            :height="$vuetify.breakpoint.mobile ? '40vw' : '25vw'"
            :src="image.src")
</template>

<script>
export default {
  name: "TestingPlayground",
  data: () => ({
    imageGallery: [
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      },
      {
        src:
          "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
