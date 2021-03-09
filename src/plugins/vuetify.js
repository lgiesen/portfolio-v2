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
                primaryLight: "#636dec",
                primaryDark: "#001c88",
                // green
                secondary: "#149C2D",
                secondaryLight: "#58ce5c",
                secondaryDark: "#006c00", 
                
                // sand (looks bad)
                complementary: "#b99821",
                
                // purple
                triadicFirst: "#9821b9",
                // bordeaux red
                triadicSecond: "#b92142",

                background: "#9faabd",

                success: "#34c759",
                warning: "#ff954f",
                error: "#ff3a30",
            },
            dark: {
                // pink
                primary: "#ff8cc6",
                primaryLight: "#ffbef9",
                primaryDark: "#ca5b95",
                
                // light blue
                secondary: "#80fff6",
                secondaryLight: "#b6ffff",
                secondaryDark: "#46cbc3",
                
                // orange
                complementary: "#ffc68c",
                
                // yellow
                triadicFirst: "#ffff8c",
                // green
                triadicSecond: "#8cff8c",
                
                // If colours above are used as background: black text, otherwise white

                // as recommended by the Material Design Guidelines from Google
                background: "#121212",
                backgroundLight: "#383838",
                backgroundSuperLight: "#7f7f7f"
                // Access colours by: this.$vuetify.theme.themes.dark.primary = "#ffffff"
            }
        }
    },
    // maybe need to install mdi fonts: npm i @mdi/font
    icons: {
        iconfont: "mdi"
    }
});
