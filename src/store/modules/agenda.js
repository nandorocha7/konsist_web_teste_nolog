// Tasks module
import axios from "axios";
import store from "/src/store/index";
const resource_uri = "/listaragenda";

const state = {
  agendaDia: [],
  diaSelecionado: new Date(),
};

const getters = {
  getAgendaDia: (state) => state.agendaDia,
  diaSelecionado: (state) => state.diaSelecionado,
  getPaciente: (state) => (Id) => {
    if (Id == null || Id == "") {
      return null;
    }
    var filtro = state.agendaDia.filter((t) => t.Id === Number(Id));
    if (filtro.length > 0) {
      return filtro[0];
    }
    return null;
  },
};

const actions = {
  async fetchAgendaDia({ commit }, { urlBackEnd, idMedico , dia , qtdDias , }) {

    const response = await axios.post(urlBackEnd+resource_uri,{
    "idMedico":idMedico,
    "data": dia,
    "qtdDias":0,
    "emailUsuario": store.state.configuracoes.email,
    "mostrarHVazio": false
},{ headers: { Authorization: `Bearer ${store.state.configuracoes.tokenBack}`, 'Content-Type': 'application/json' } });

    commit("setAgendaDia", response.data)
  },
  async agendaStatus({ commit }, { urlBackEnd, idPaciente , status }) {
    const response = await axios.post(urlBackEnd+"/status",{
      "chave": idPaciente,
      "status": status
},{ headers: { Authorization: `Bearer ${store.state.configuracoes.tokenBack}`, 'Content-Type': 'application/json' } });

  },  
};

const mutations = {
  setAgendaDia: (state, agendaDia) => (state.agendaDia = agendaDia),
  setDiaSelecinado: (state, diaSelecionado) =>
    (state.diaSelecionado = diaSelecionado),
};

export default {
  state,
  actions,
  mutations,
  getters,
};
