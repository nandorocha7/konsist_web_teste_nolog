import Vue from "vue";
import Vuex from "vuex";
import configuracoes from "./modules/configuracoes";
import medicos from "./modules/medicos";
import usuarios from "./modules/usuarios";
import agenda from "./modules/agenda";
import { createLogger } from "vuex";

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production'
const debug = false;

export default new Vuex.Store({
  modules: {
    configuracoes: configuracoes,
    medicos: medicos,
    agenda: agenda,
    usuarios: usuarios,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
