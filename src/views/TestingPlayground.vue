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
    
    section
      v-container
        h2.text-center Quotes
        p Nice background image as well: https://codepen.io/johnfinkdesign/pen/gRvEGq?editors=1100
        p https://codepen.io/jupago/pen/dwZKbM
        p https://codepen.io/abdelRhman345/pen/oJOPdq
        p https://codepen.io/JoeHastings/pen/MOdRVm
        p https://freefrontend.com/bootstrap-quotes/
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
