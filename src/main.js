import Vue from "vue";
import VueVideoSection from "vue-video-section";
import "vue-video-section/dist/vue-video-section.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router.js";
import store from "./store/store.js";

Vue.component("vue-video-section", VueVideoSection);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
