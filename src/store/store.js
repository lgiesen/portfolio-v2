import Vuetify from "@/plugins/vuetify";
import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showContactDialog: false
  },
  mutations: {
    ToggleShowContactDialog(state) {
      state.showContactDialog = !state.showContactDialog;
    }
  },
  actions: {},
  getters: {
    isDarkTheme() {
      return Vuetify.framework.theme.dark;
    },
    GetShowContactDialog: state => state.showContactDialog
  },
  modules: {
    auth
  }
});
