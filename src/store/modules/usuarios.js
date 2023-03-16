// Tasks module
import axios from "axios";
const resource_uri = "/listarusuario";

const state = {
  usuarios: [],
  usuarioLogado: null,
};

const getters = {
  allUsuarios: (state) => state.usuarios,
  usuarioLogado: (state) => state.usuarioLogado,
  getUsuarioFilter: (state) => (email) => {
    if (email == null || email == "") {
      return state.usuarios;
    }
    return state.usuarios.filter((t) =>
      t.email.toUpperCase().includes(email.toUpperCase())
    );
  },
  getUsuario: (state) => (email) => {
    if (email == null || email == "") {
      return null;
    }
    var filtro = state.usuarios.filter((t) => t.email == email);
    if (filtro.length > 0) {
      return filtro[0];
    }
    return null;
  },
};

const actions = {
  async fetchUsuarios({ commit }, urlBackEnd) {
    //const token =
     // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYXNlIjoia29uc2lzdGF0ZW5kaW1lbnRvIiwiaWQiOiIxMiIsImlhdCI6MTY2NTA1OTYxNX0.gBtaO_eqwbhVyQZu2VEdYLAvnqTpg2E-8oNZlMwptcI";
    const response = await axios.get(urlBackEnd+resource_uri,{ headers: { Authorization: `Bearer ${token}` } });
    commit("setUsuarios", response.data);
  },
  async cadastraUsuarioBack({ commit }, { urlBackEnd, usuario, token }) {
    const response = await axios.post(urlBackEnd+"cadastrarUsuario",usuario);
  },
};

const mutations = {
  setUsuarios: (state, usuarios) => (state.usuarios = usuarios),
};

export default {
  state,
  actions,
  mutations,
  getters,
};
