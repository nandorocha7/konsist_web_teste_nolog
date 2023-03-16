<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="this.$store.state.configuracoes.corPadrao">
        <h4 class="title">Detalhes da marcação</h4>
        <p class="category"></p>
      </md-card-header>

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
              <md-input v-model="paciente.nomePaciente" type="text" disabled></md-input>
            </md-field>
          </div>           
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Convênio</label>
              <md-input v-model="paciente.convenio" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Procedimento</label>
              <md-input v-model="paciente.name" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Status da marcação</label>
              <md-input v-model="paciente.status" type="text" disabled></md-input>
            </md-field>
          </div> 
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Horário</label>
              <md-input v-model="paciente.desHora" type="text" disabled></md-input>
            </md-field>
          </div> 
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Observações da marcação</label>
              <md-textarea v-model="paciente.obs" disabled></md-textarea>
            </md-field>
          </div>
          <!--<div>
            <v-row
              align="center"
              justify="space-around"
            >
              <v-btn color="primary" class="mx-3">
                <v-icon>mdi-thumb-up </v-icon>
                Confirmar
              </v-btn>
              <v-btn color="error" class="mx-3">
                <v-icon>mdi-thumb-down </v-icon>
                Desmarcar
              </v-btn>
            </v-row>
            <v-row></v-row>
          </div>  -->                                     
        </div>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Dados do paciente</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">            
          <div class="md-layout-item md-small-size-100 md-size-100" >
            <md-field>
              <label>Endereço</label>
              <md-input v-model="paciente.endereco" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Bairro</label>
              <md-input v-model="paciente.bairro" type="text" disabled></md-input>
            </md-field>
          </div>          
          <div class="md-layout-item md-small-size-100 md-size-10">
            <md-field>
              <label>CEP</label>
              <md-input v-model="paciente.num_cep" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email</label>
              <md-input v-model="paciente.desEmail" type="email" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-15">
            <md-field>
              <label>Telefone 1</label>
              <md-input v-model="paciente.fone1" type="text" disabled></md-input>
            </md-field>
            <md-field>
              <label>Telefone 2</label>
              <md-input v-model="paciente.fone2" type="text" disabled></md-input>
            </md-field>
          </div>            
          <div class="md-layout-item md-size-100 text-left">
            <md-button href="javascript:history.back()" class="md-raised md-success">Voltar</md-button>
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
      paciente: {},
      disabled: null,
    };
  },
  mounted() {
    //this.fetchMedicos(this.$store.state.configuracoes.urlBackEnd);
    this.paciente = this.getPaciente(
        this.$route.params.Id
      );
      
  },
  methods: {
    ...mapActions(["fetchMedicos"]),
    editItem(item) {
      

    },
    mudaStatus(status, paciente) {
      
      this.$store
        .dispatch("agendaStatus", {
          urlBackEnd: this.$store.state.configuracoes.urlBackEnd,
          idPaciente: paciente.Id,
          status: status,
        })
        .then(() => alert("Status alterado com sucesso"));
    },
  },
  computed: {
    ...mapGetters(["getPaciente"]),
  },
};
</script>
<style>

</style>
