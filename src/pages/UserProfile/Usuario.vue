<template>
  <form>
    <md-card>
      <md-card-content>
        <div class="md-layout">
          <!--<div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Company (disabled)</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>-->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nome</label>
              <md-input v-model="this.$store.state.configuracoes.nome" type="text" disabled></md-input>
            </md-field>
          </div>           
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Email</label>
              <md-input v-model="this.$store.state.configuracoes.email" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-150 md-size-30">
            <md-field>
              <label>Clinica</label>
              <md-input v-model="this.$store.state.configuracoes.cliente" type="text" disabled></md-input>
            </md-field> <!-- Nao aparece pq preciso exportar todos os campos-->
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Digite a nova senha</label>
              <md-input v-model="tes" type="password" ></md-input>
            </md-field>
          </div> 
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Confirme</label>
              <md-input v-model="tes" type="password" ></md-input>
            </md-field>
          </div>           
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>API Conectada</label>
              <md-input v-model="this.$store.state.configuracoes.urlBackEnd" type="text" disabled></md-input>
            </md-field>
          </div> 
          <div>
            <div class="md-layout-item md-size-100">
            <md-button
              @click="cadastrar()"
              class="md-raised md-success text-left"
              >Salvar</md-button
            >
            <md-button href="javascript:history.back()" class=""
              >Voltar</md-button
            >
          </div>
          </div>                                       
        </div>
      </md-card-content>
    </md-card>
  
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      usuario: {},
      disabled: null,
    };
  },
  mounted() {
    //this.fetchMedicos(this.$store.state.configuracoes.urlBackEnd);
    this.usuario = this.getLogin(
        this.$route.params.id
      );
      
  },
  methods: {
    ...mapActions(["fetchMedicos"]),
    editItem(item) {
      

    },
  },
  computed: {
    ...mapGetters(["getLogin"]),
    ...mapGetters(["get_filtroUsuario"]),
  },
};
</script>
<style>

</style>
