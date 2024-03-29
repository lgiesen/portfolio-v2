import Vuetify from "@/plugins/vuetify";
import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showContactDialog: false,
    isDE() {
      if (i18n.locale == "de") return true;
      else return false;
    },
  },
  mutations: {
    ToggleShowContactDialog(state) {
      state.showContactDialog = !state.showContactDialog;
    },
  },
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
    GetShowContactDialog: (state) => state.showContactDialog,
    isMobile() {
      return Vuetify.framework.breakpoint.mobile;
      // in local components, you could use:
      // console.log(this.$vuetify.breakpoint.mobile);
    },
    ResponsiveFontSize() {
      if (Vuetify.framework.breakpoint.smAndDown) return "display-1";
      else return "display-2";
    },
  },
});
