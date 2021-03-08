/* eslint-disable */
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true
        },
        dark: false,
        themes: {
            light: {
                // corporate design
                // blue
                primary: "#2142B9", 
                // green
                secondary: "#149C2D", 
                
                background: "#1C1A32",
                black: "#212121",
                accent: "#5ac8fa",
                success: "#34c759",
                warning: "#ff954f",
                error: "#ff3a30",
                /*
                blue: "#FFEEFF",
                green: "#34c759",
                orange: "#ff954f",
                indigo: "#5856d6",
                pink: "#ff2d55",
                purple: "#af52de",
                red: "#ff3a30",
                teal: "#5ac8fa",
                yellow: "#ffcc00",
                */
            },
            dark: {
                primary: "#00E1FD",
                secondary: "#FC007A",
                background: "#1C1A32",
                black: "#212121",
                anchor:  "#ffffff", 
                // alternatively the anchor could be set in @/components/TheNavigation/TheNavigation.vue 
                // in the toggleTheme method by using this.$vuetify.theme.themes.dark.anchor = "#fff"
            }
        }
    },
    // maybe need to install mdi fonts: npm i @mdi/font
    icons: {
        iconfont: "mdi"
    }
});
