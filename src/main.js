import Vue from "vue";
import SvgFiller from "vue-svg-filler";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router.js";
import store from "./store/store.js";

Vue.component("svg-filler", SvgFiller);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
