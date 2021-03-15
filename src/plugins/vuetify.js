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
                primary: "#3949ab", 
                primaryLight: "#6f74dd",
                primaryDark: "#00227b",
                // green
                secondary: "#f4511e",
                secondaryLight: "#ff844c",
                secondaryDark: "#b91400", 
                
                // sand (looks bad)
                complementary: "#b99821",
                
                // purple
                triadicFirst: "#9c39ab",
                // bordeaux red
                triadicSecond: "#ab3948",

                text: "#3e3e3e",
                background: "#ffffff",
                // alternatively e.g. #cccccc

                btnColor: "#ffffff",

                success: "#34c759",
                warning: "#ff954f",
                error: "#ff3a30",
            },
            dark: {
                // pink
                primary: "#9fa8da",
                primaryLight: "#d1d9ff",
                primaryDark: "#6f79a8",
                
                // light blue
                secondary: "#ffab91",
                secondaryLight: "#ffddc1",
                secondaryDark: "#c97b63",
                
                // light purple
                triadicFirst: "#d19fda",
                // light bordeaux red
                triadicSecond: "#da9fa8",
                
                // If colours above are used as background: black text, otherwise white

                btnColor: "#121212",
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
