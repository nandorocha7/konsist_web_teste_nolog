<template>
  <form class="card2">
    <md-card class="card1">
      <md-card-header
        :data-background-color="this.$store.state.configuracoes.corPadrao"
      >
        <h4 class="title">Cadastro de usuário</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <v-text-field
              v-model="usuarioCadastro.name"
              label="Nome Completo"
              required
            ></v-text-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <v-text-field
              v-model="usuarioCadastro.email"
              label="Email"
              required
            ></v-text-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <v-text-field
              v-model="usuarioCadastro.password"
              type="password"
              label="Senha"
              required
            ></v-text-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <v-text-field
              v-model="confirmarSenha"
              type="password"
              label="Confirmar Senha"
              required
            ></v-text-field>
          </div>
          <v-combobox
            label="Selecione seu perfil (indisponível)"
            filled
            outlined
            class="combo"
            :items="items"
            disabled
          ></v-combobox>
          <div class="md-layout-item md-size-100">
            <md-button
              @click="cadastrar()"
              class="md-raised md-success text-left"
              >Cadastrar</md-button
            >
            <md-button href="javascript:history.back()" class=""
              >Voltar</md-button
            >
          </div>
          <p class="importante">
            *O e-mail informado deve ser idêntico ao e-mail cadastrado no
            KonsistMed da clínica.
          </p>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "user",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      items: ["Administrador", "Médico", "Usuário Padrão"],
      usuarioCadastro: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch(
      "fetchUsuarios",
      this.$store.state.configuracoes.urlBackEnd
    );
  },
  methods: {
    cadastrar() {
      
      var usuarioSistema = this.getUsuario(this.usuarioCadastro.email);
      if (usuarioSistema == null) {
        alert("Email nao cadastrado no sistema Konsist!");
      } else {
        this.$store
          .dispatch("cadastraUsuarioBack", {
            urlBackEnd: this.$store.state.configuracoes.urlBackEndLocal,
            usuario: this.usuarioCadastro,
          })
          .then(() => alert("Usuário Cadastrado com sucesso!"))
          
      }
    },
  },
  computed: {
    ...mapGetters(["getUsuario"]),
  },
};
</script>
<style lang="scss" scoped>
.card1 {
  text-align: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
.card2 {
  text-align: center !important;
  margin-left: 40px !important;
  margin-right: 40px !important;
  margin-top: 120px;
}
.importante {
  color: red;
  font-weight: bold;
  font-size: medium;
}
</style>
