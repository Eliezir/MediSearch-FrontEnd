/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        colors: {
          primary: "#0e2f42",
          secondary: "#66a3ff",
          accent: "#0086c7",
          background: "#fff",
          text: "#1e1e1e",
          outlined: "#757575",
        },
      },
      dark: {
        colors: {
          primary: "#001f33",
          secondary: "#3399ff",
          accent: "#0086c7",
          background: "#121212",
          text: "#e6e6e6",
          outlined: "#9E9E9E",
        },
      },
    },
  },
});
