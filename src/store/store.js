import Vuetify from "@/plugins/vuetify";
import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
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
    isDE() {
      if (i18n.locale == "de") return true;
      else return false;
    },
    isDarkTheme() {
      return Vuetify.framework.theme.dark;
    },
    ActiveTheme() {
      if (Vuetify.framework.theme.dark == undefined) return;
      else if (Vuetify.framework.theme.dark) return "dark";
      else return "light";
    },
    GetShowContactDialog: state => state.showContactDialog
  },
  modules: {
    auth
  }
});
