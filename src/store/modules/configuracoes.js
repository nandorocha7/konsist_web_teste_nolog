// Tasks module
import axios from "axios";
const resource_uri_login = "login";

const tokenBackb= "";
const state = {
  barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
  corPadrao: "green",
  urlLogar: "https://konsistweb.com.br/usuario/login",
  urlBackEnd: "", //urlBackEnd: "https://apikonsist.ngrok.io/",
  tokenBack: "", //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYXNlIjoia29uc2lzdGF0ZW5kaW1lbnRvIiwiaWQiOiIxMiIsImlhdCI6MTY2NTA1OTYxNX0.gBtaO_eqwbhVyQZu2VEdYLAvnqTpg2E-8oNZlMwptcI",
  urlBackEndLocal: "https://konsistweb.com.br/usuario/",
  tokenBackLocal: {},
  email: "",
  barImage:
    "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",
  drawer: null,
  diaSelecionado: new Date(),
  token: "",
  loading: false,
  filtroUsuario: [],
  meses: [
    { numero: 1, texto: "Janeiro" },
    { numero: 2, texto: "Fevereiro" },
    { numero: 3, texto: "Março" },
    { numero: 4, texto: "Abril" },
    { numero: 5, texto: "Maio" },
    { numero: 6, texto: "Junho" },
    { numero: 7, texto: "Julho" },
    { numero: 8, texto: "Agosto" },
    { numero: 9, texto: "Setembro" },
    { numero: 10, texto: "Outubro" },
    { numero: 11, texto: "Novembro" },
    { numero: 12, texto: "Dezembro" },
  ],
  anos: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
};

const getters = {
  loading: (state) => state.loading,
  getDrawer: (state) => state.drawer,
  getBarImage: (state) => state.barImage,
  getBarColor: (state) => state.barColor,
  getMeses: (state) => state.meses,
  getAnos: (state) => state.anos,
  getToken: (state) => state.token,
  getUrlBackEnd: (state) => state.urlBackEnd,
  gettokenBackLocal: (state) => state.tokenBackLocal,
  get_filtroUsuario: (state) => state.filtroUsuario,
  getEmail: (state) => state.email,
  getLogin: (state) => (id) => {
    if (id == null || id == "") {
      return null;
    }
    var filtro = state.filtroUsuario.filter((t) => t.id === Number(id));
    if (filtro.length > 0) {
      return filtro[0];
    }
    return null;
  },
};
const actions = {
  async setLoading({ commit }, loading) {
    commit("SET_LOADING", loading);
  },
  async setDrawer({ commit }, drawer) {
  
    commit("SET_DRAWER", drawer);
  },
  async logar({ commit }, {email, senha}) {

    const response = await axios.post(state.urlBackEndLocal+resource_uri_login,{
      "email":email,
      "senha":senha,
  },{ headers: { Authorization: `Bearer ${""}`, 'Content-Type': 'application/json' } });
      
      // commit("SET_LOGIN", response.data);
      // commit("set_filtroUsuario", response.data);
      // commit("SET_URL_BACKEND", response.data.api_endereco);
      // commit("set_usuarioLogado",response.data);
      // commit("id", response.data.id);
      // commit("set_email", response.data.email);
      // commit("senha", senha);
      // commit("nome", response.data.nome);
      // commit("cliente", response.data.cliente);
      // commit("SET_TOKEN_API", response.data.token_api);
      // commit("urlCliente", response.data.api_endereco);
      return response.data;

  },
};
const mutations = {
  urlCliente: (state, urlCliente) => (state.urlCliente = urlCliente),
  set_filtroUsuario: (state, filtroUsuario) => (state.filtroUsuario = filtroUsuario),
  set_usuarioLogado: (state, usuarioLogado) => (state.usuarioLogado = usuarioLogado),
  SET_TOKEN_API: (state, tokenBack) => (state.tokenBack = tokenBack),
  //set_email: (state, email) => (state.email = email),
  senha: (state, senha) => (state.senha = senha),
  nome: (state, nome) => (state.nome = nome),
  cliente: (state, cliente) => (state.cliente = cliente),
  id: (state, id) => (state.id = id),
  SET_BAR_IMAGE(state, payload) {
    state.barImage = payload;
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload;
   
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  set_email(state, payload) {
    state.email = payload;
  },
  /*SET_TOKEN_API(state, payload) {
    state.tokenBack = payload;
  },*/
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  SET_URL_BACKEND(state, payload) {
    state.urlBackEnd = payload;
    const email = state.tokenBackLocal.email;
  },
  LOGOUT(state, payload) {
    state.token = payload;
  },
  SET_LOGIN(state, payload) {
    state.tokenBackLocal = payload;
    
    const urlBackEnd = state.tokenBackLocal.api_endereco;
    
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
