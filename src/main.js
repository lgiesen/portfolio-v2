import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import router from "./router/router.js";
import store from "./store/store.js";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
