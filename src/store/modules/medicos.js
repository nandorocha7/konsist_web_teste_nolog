// Tasks module
import axios from "axios";
import store from "/src/store/index";
const resource_uri = "/listarmedico";

const state = {
  medicos: [],
  medicoSelecionado: null,
};

const getters = {
  allMedicos: (state) => state.medicos,
  medicoSelecionado: (state) => state.medicoSelecionado,
  getMedicosFilter: (state) => (nome) => {
    if (nome == null || nome == "") {
      return state.medicos;
    }
    return state.medicos.filter((t) =>
      t.nome.toUpperCase().includes(nome.toUpperCase())
    );
  },
  getMedico: (state) => (id) => {
    if (id == null || id == "") {
      return null;
    }
    var filtro = state.medicos.filter((t) => t.id === Number(id));
    if (filtro.length > 0) {
      return filtro[0];
    }
    return null;
  },
};

const actions = {
  async fetchMedicos({ commit }, urlBackEnd) {

    const response = await axios.get(urlBackEnd+resource_uri,{ headers: { Authorization: `Bearer ${store.state.configuracoes.tokenBack}` } });
    commit("setMedicos", response.data);
  },
};

const mutations = {
  setMedicos: (state, medicos) => (state.medicos = medicos),
};

export default {
  state,
  actions,
  mutations,
  getters,
};
