/* eslint-disable */
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true
        },
        dark: true,
        themes: {
            light: {
                // corporate design
                // blue
                primary: "#2142B9", 
                // green
                secondary: "#149C2D", 
                
                background: "#9faabd",
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
                // pink
                primary: "#ff8cc6",
                pLight: "#ffbef9",
                pDark: "#ca5b95",
                
                // light blue
                secondary: "#80fff6",
                // orange
                complementary: "#ffc68c",
                sLight: "#b6ffff",
                sDark: "#46cbc3",
                
                // yellow
                triadicFirst: "#ffff8c",
                // green
                triadicSecond: "#8cff8c",
                
                // If colours above are used as background: black text, otherwise white

                // as recommended by the Material Design Guidelines from Google
                background: "#121212",
                backgroundLight: "#383838",
                backgroundSuperlight: "#7f7f7f"
                // Access colours by: this.$vuetify.theme.themes.dark.primary = "#ffffff"
            }
        }
    },
    // maybe need to install mdi fonts: npm i @mdi/font
    icons: {
        iconfont: "mdi"
    }
});
