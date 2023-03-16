<template>
  <v-card
    v-bind="$attrs"
    :class="classes"
    class="v-card--material mt-4 mx-auto v-card v-sheet rounded"
    style="transform-origin: center top 0px"
    light
    max-width="350"
  >
    <a class="imagem_logo">
      <img
        class="kon_logo"
        :src="imgLogo2"
        alt="Link para site da empresa konsist"
      />
    </a>
    <!--<div class="v-card__title align-start">
      <div
        class="overflow-hidden mt-n9 transition-swing v-card--material__sheet v-sheet theme--light elevation-6 rounded success"
        style="max-width: 100%; width: 100%"
      >
        <div class="text-center pa-5">
          <div class="text-h4 font-weight-bold white--text">Web</div>
          <div class="mt-4">

          </div>
        </div>
      </div>
    </div>-->
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>
    <div class="v-card__text text-center">
      <form @submit.prevent="submit">
        <div
          class="
            v-input
            mt-10
            theme--light
            v-text-field v-text-field--is-booted v-text-field--placeholder
          "
        >
          <div class="v-input__prepend-outer">
            <div class="v-input__icon v-input__icon--prepend">
              <i
                aria-hidden="true"
                class="v-icon notranslate mdi mdi-face theme--light"
              ></i>
            </div>
          </div>
          <div class="v-input__control">
            <v-text-field
              v-model="email"
              color="orangered"
              label="E-mail"
              required
            ></v-text-field>
            <div class="v-text-field__details">
              <div class="v-messages theme--light">
                <div class="v-messages__wrapper"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            v-input
            mb-8
            theme--light
            v-text-field v-text-field--is-booted v-text-field--placeholder
          "
        >
          <div class="v-input__prepend-outer">
            <div class="v-input__icon v-input__icon--prepend">
              <i
                aria-hidden="true"
                class="v-icon notranslate mdi mdi-lock-outline theme--light"
              ></i>
            </div>
          </div>
          <div class="v-input__control">
            <v-text-field
              v-model="senha"
              type="password"
              color="orangered"
              label="Senha"
              required
            ></v-text-field>

            <div class="v-text-field__details">
              <div class="v-messages theme--light">
                <div class="v-messages__wrapper"></div>
              </div>
            </div>
          </div>
        </div>

        <v-btn
          elevation="2"
          :loading="loading"
          class="
            v-btn v-btn--flat v-btn--rounded v-btn--text
            theme--light
            v-size--large
            success--text
          "
          type="submit"
        >
          <span class="v-btn__content" style="color: orangered !important">
            Entrar
          </span></v-btn
        >
        <!--<p></p>
        <p>Não tem cadastro? <a href="/user/"> clique aqui</a>.</p>-->
      </form>

      <v-snackbar
        v-model="snackbar"
        top
        :timeout="-1"
        elevation="24"
        color="deep-purple success-4"
      >
        {{ mensagemErro }}

        <template v-slot:action="{ attrs }">
          <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <slot />

    <template v-if="$slots.actions">
      <v-divider class="mt-2" />

      <v-card-actions class="pb-0">
        <slot name="actions" />
      </v-card-actions>
    </template>
    
    
    <v-dialog
      v-model="selecionaUrl"
      persistent
      max-width="450"
    >
      
      <v-card>
        <v-card-title class="headline">
          Escolha a clínica
        </v-card-title>

        <v-list  >
          <v-list-item
            v-for="item in links"
            :key="item.clienteid"
            link
            @click="selecionarLink(item)"
            
          >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
            <v-list-item-title
              v-text="item.cliente"
              style="color: black; font-size: 0.9em;"
            ></v-list-item-title>
          </v-list-item>
      </v-list>
         
           

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="selecionaUrl = false"
          >
            Cancelar
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
// Utilities
// import { mapState, mapMutations,mapActions,mapGetters } from 'vuex'
import VueCookies from "vue-cookies";

export default {
  name: "materialcardlogin",
  components: {},

  props: {
    avatar: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "success",
    },
    icon: {
      type: String,
      default: undefined,
    },
    image: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    imgLogo2: {
      type: String,
      default: require("@/assets/img/logo.png"),
    },
    status: String,
  },

  data() {
    return {
      email: "",
      senha: "",
      loading: false,
      mensagemErro: "",
      snackbar: false,
      erroSenha: false,
      selecionaUrl: false,
      linkSelecionado: null,
      links:[],
    };
  },

  methods: {
    // ...mapMutations({
    //     setToken: 'SET_TOKEN',
    //   }),
    //   ...mapActions(['listUserAuth','setUser']),
    selecionarLink(item){
      
      if(item == null ){
        //alert("Selecionar Link.");
        this.$notify({
            group: 'foo',
            title: 'Atenção',
            text: 'Selecione uma clínica'
          });
        return;
      }
      
      this.$store.state.configuracoes.urlBackEnd = item.api_endereco;
      this.$store.state.configuracoes.usuarioLogado = item;
      this.$store.state.configuracoes.id = item.id;
      this.$store.state.configuracoes.email = item.email;
      this.$store.state.configuracoes.tokenBack = item.token_api;
      this.$store.state.configuracoes.urlCliente = item.api_endereco;
      this.$cookies.set(
            "token_api",
            this.$store.state.configuracoes.tokenBackLocal
          );
          this.$cookies.set(
            "token_back",
            this.$store.state.configuracoes.tokenBack
          );
          this.$cookies.set(
            "url_back",
            this.$store.state.configuracoes.urlCliente
          );
          this.$cookies.set(
            "email_user",
            this.$store.state.configuracoes.email
          );
          this.$router.push(this.$route.query.redirect);

    },
    submit() {
      this.loading = true;
      var self = this;
      this.$store
        .dispatch("logar", { email: this.email, senha: this.senha })
        .then((data) => {
            if(Array.isArray(data) && data.length > 1){
              this.links = data;
              this.selecionaUrl = true;

              return;
            }
            this.$store.state.configuracoes.tokenBackLocal = data.api_endereco;
          this.$cookies.set(
            "token_api",
            this.$store.state.configuracoes.tokenBackLocal
          );
          this.$cookies.set(
            "token_back",
            this.$store.state.configuracoes.tokenBack
          );
          this.$cookies.set(
            "url_back",
            this.$store.state.configuracoes.urlCliente
          );
          this.$cookies.set(
            "email_user",
            this.$store.state.configuracoes.email
          );
          this.$router.push(this.$route.query.redirect);
        })
        .catch((e) => {
          alert("Erro ao tentar logar.");
          
        })
        .finally(() => {
          this.email = "";
          this.password = "";
          this.loading = false;
        });
    },
  },

  computed: {
    classes() {
      return {
        "v-card--material--has-heading": this.hasHeading,
      };
    },
    hasHeading() {
      return Boolean(this.$slots.heading || this.title || this.icon);
    },
    hasAltHeading() {
      return Boolean(this.$slots.heading || (this.title && this.icon));
    },
  },
};
</script>

<style scoped>
.v-input__icon {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 24px;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 24px;
  width: 24px;
}

.v-input__append-outer,
.v-input__prepend-outer {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-bottom: 4px;
  margin-top: 4px;
  line-height: 1;
  margin-right: 9px;
  padding-top: 12px;
  margin-top: 4px;
}
.v-card--material {
  padding: 0 !important;
}
.text-h4 {
  font-size: 1.125rem !important;
  letter-spacing: 0.0073529412em !important;
  line-height: 1.4em;
  font-family: Roboto, sans-serif !important;
  font-weight: 700 !important;
}
.white--text {
  color: #fff !important;
  caret-color: #fff !important;
}
.text-center {
  text-align: center !important;
}
.pa-5 {
  padding: 20px !important;
  color: #fff;
}

*,
:after,
:before {
  background-repeat: no-repeat;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  padding: 0;
}
.v-card > .v-card__progress + :not(.v-btn):not(.v-chip),
.v-card > :first-child:not(.v-btn):not(.v-chip) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.accent {
  background-color: orangered !important;
  border-color: orangered !important;
}
.mt-n9 {
  margin-top: -36px !important;
}
.elevation-6 {
  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.v-card--material .avatar {
  position: relative;
  top: -64px;
  margin-bottom: -32px;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14), 0 0 0 0 transparent,
    0 0 0 0 transparent;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14), 0 0 0 0 transparent,
    0 0 0 0 transparent;
}

.v-card--material .heading {
  position: relative;
  top: -40px;
  transition: 0.3s ease;
  z-index: 1;
}
.v-application .align-start {
  -webkit-box-align: start !important;
  -ms-flex-align: start !important;
  align-items: flex-start !important;
  margin-top: 50px;
}

.v-card__title {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 1.5em;
  word-break: break-all;
}
.v-application .mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.mt-4 {
  margin-top: 16px !important;
}
.rounded {
  border-radius: 4px !important;
}
.theme--light.v-card {
  background-color: #fff;
  color: #333;
}
.imagem_logo {
  margin-left: 55px;
}
.kon_logo {
  margin-top: 35px;
}
.reg {
  color: rgb(241, 11, 11);
  font-size: medium;
}
</style>
