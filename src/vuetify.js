// You still need to register Vuetify itself
// src/plugins/vuetify.js

import Vue from "vue";
//import Vuetify from 'vuetify/lib'
import Vuetify from "vuetify";
//import colors from 'vuetify/lib/util/colors'
//import '../sass/overrides.sass'

Vue.use(Vuetify);

const opts = {
  theme: {
    options: { customProperties: true, extractVueStyles: true },
    themes: {
      light: {
        // primary: "f0b207", // #E53935
        primary: "#00d092", // #E53935
        //secondary: "#ffffff", // #FFCDD2
        secondary: "#0083d0", // #FFCDD2
        accent: "#9C27b0", // #3F51B5
        info: "#00CAE3",
      },
    },
  },
};

// const opts = {  }

export default new Vuetify(opts);
