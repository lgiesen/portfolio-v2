import Vuetify from "@/plugins/vuetify";
import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {
    isDarkTheme() {
      return Vuetify.framework.theme.dark;
    }
  },
  modules: {
    auth
  }
});
