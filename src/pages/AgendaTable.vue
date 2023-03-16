<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header
            :data-background-color="this.$store.state.configuracoes.corPadrao"
          >
            <h4 class="title">
              Dr.
              {{
                this.$store.state.medicos.medicoSelecionado
                  ? this.$store.state.medicos.medicoSelecionado.nome
                  : ""
              }}
            </h4>
          </md-card-header>
          <md-card-content>
            <v-sheet>
              <v-toolbar flat style="height: auto !important">
                <v-row>
                  <v-col cols="auto">
                    <v-btn
                      outlined
                      class="mr-4"
                      color="grey darken-2"
                      @click="setToday"
                    >
                      Hoje
                    </v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn
                      outlined
                      class="mr-4"
                      color="deep-orange"
                      @click="refreshEventosDia()"
                    >
                      Carregar agenda
                    </v-btn>
                  </v-col>
                  <!--<v-col cols="auto">
                    <v-menu bottom right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          outlined
                          color="grey darken-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <span>{{ typeToLabel[type] }}</span>
                          <v-icon right> mdi-menu-down </v-icon>
                        </v-btn>
                      </template>
                      <v-list style="padding-top: 36px" dark>
                        <v-list-item @click="type = 'day'" dark>
                          <v-list-item-title>Dia</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'week'">
                          <v-list-item-title>Semana</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'month'">
                          <v-list-item-title>Mês</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>-->
                  <v-col>
                    <div style="display: inline-flex" class="align-self-center">
                      <v-btn fab text small color="grey darken-2" @click="prev">
                        <v-icon small> mdi-chevron-left </v-icon>
                      </v-btn>
                      <v-toolbar-title>
                        {{
                          new Date(this.$store.state.configuracoes.diaSelecionado).toLocaleDateString(
                            "PT-Br",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )
                        }}
                      </v-toolbar-title>
                      <!-- <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title> -->
                      <v-btn fab text small color="grey darken-2" @click="next">
                        <v-icon small> mdi-chevron-right </v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-toolbar>
            </v-sheet>
            <div :class="[{ notShowDiv: type != 'day' }]">
              <v-data-table
                :headers="headers"
                :items="this.$store.state.agenda.agendaDia"
                
                :items-per-page="-1"
                disable-pagination
                class="elevation-1"
              >
                <template v-slot:[`item.actions`]="{ item }">
                  <v-row align="center" justify="space-around">
                    <v-btn :disabled="item.status==null"
                      small
                      class="mr-2"
                      @click="editItem(item)" 
                      tile
                      color="blue"
                    >
                      <v-icon> mdi-format-list-bulleted-square </v-icon>
                    </v-btn>
                    <v-btn color="green" @click="mudaStatus(1, item)" :disabled="item.status=='Confirmado' || item.status=='Desmarcado' || item.status==null">
                      <v-icon>mdi-thumb-up </v-icon>
                    </v-btn>
                    <v-btn color="deep-orange" @click="mudaStatus(2, item)" :disabled="item.status=='Desmarcado' || item.status==null">
                      <v-icon>mdi-thumb-down </v-icon>
                    </v-btn>
                  </v-row>
                </template>
              </v-data-table>
            </div>
            <div :class="[{ notShowDiv: type == 'day' }]">
              <v-calendar
                ref="calendar"
                v-model="focus"
                :now="$store.state.configuracoes.diaSelecionado"
                :value="$store.state.configuracoes.diaSelecionado"
                color="primary"
                :events="events"
                event-color="green"
                :type="type"
              ></v-calendar>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  components: {},
  data: () => ({
    focus: "",
    type: "day",
    typeToLabel: {
      month: "Mês",
      week: "Semana",
      day: "Dia",
      "4day": "4 Dias",
    },
    events: [],
    showDiv: [],
    //diaSelecionado: new Date(),
    medico: {},
    dadosBusca: {},
    headers: [
      {
        text: "Horário",
        align: "start",
        sortable: false,
        value: "desHora",
      },
      {
        text: "Paciente",
        align: "start",
        sortable: false,
        value: "nomePaciente",
      },
      {
        text: "Procedimento",
        align: "center",
        sortable: false,
        value: "name",
      },      
      {
        text: "Convênio",
        align: "center",
        value: "convenio",
        sortable: false,
      },
      {
        text: "Status",
        align: "start",
        sortable: false,
        value: "status",
      },
      {
        text: "",
        align: "end",
        value: "actions",
        sortable: false,
      },
    ],
 
  }),
  /*mounted() {
    //this.fetchMedicos(this.$store.state.configuracoes.urlBackEnd);
    if (this.$store.state.medicos.medicos.length === 0) {
      this.$store
        .dispatch("fetchMedicos", this.$store.state.configuracoes.urlBackEnd)
        .then(
          () =>
            (this.$store.state.medicos.medicoSelecionado = this.getMedico(
              this.$route.params.id
            ))
        )

    }
    if (this.$store.state.medicos.medicoSelecionado == null) {
      this.$store.state.medicos.medicoSelecionado = this.getMedico(
        this.$route.params.id
      );
    }

    this.dadosBusca = {
      idMedico: idMedico,
      data: dia,
      qtdDias: qtdDias,
      mostrarHVazio: true,
    };

    this.$store
      .dispatch("fetchAgendaDia", {
        urlBackEnd: this.$store.state.configuracoes.urlBackEnd,
        idMedico: this.$route.params.id,
        // dia: moment(this.diaSelecionado).format("YYYY-MM-DD"),
        dia: moment(this.diaSelecionado).format("YYYY-MM-DD"),
        qtdDias: 1,
      })

  },*/
  methods: {
    //...mapActions(["fetchMedicos"]),
    editItem(item) {
      
      this.$router.push("/Paciente/" + item.Id);
    },
    prev() {
      //this.$refs.calendar.prev();
      this.$store.state.configuracoes.diaSelecionado.setDate(this.$store.state.configuracoes.diaSelecionado.getDate() - 1);
      this.focus = moment(this.$store.state.configuracoes.diaSelecionado).format("YYYY-MM-DD");
      //this.refreshEventosDia();

      this.$forceUpdate();

      // this.focus = this.diaSelecionado.getDate();
    },
    next() {
      this.$store.state.configuracoes.diaSelecionado.setDate(this.$store.state.configuracoes.diaSelecionado.getDate() + 1);
      this.focus = moment(this.$store.state.configuracoes.diaSelecionado).format("YYYY-MM-DD");
      // this.$refs.calendar.updateDay(
      //   moment(this.diaSelecionado).format("YYYY-MM-DD")
      // );
      //this.refreshEventosDia();

      this.$forceUpdate();

      
    },
    setToday() {
      this.focus = "";
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
    refreshEventosDia() {
      this.$store
        .dispatch("fetchAgendaDia", {
          urlBackEnd: this.$store.state.configuracoes.urlBackEnd,
          idMedico: this.$store.state.medicos.medicoSelecionado.id,
          dia: moment(this.$store.state.configuracoes.diaSelecionado).format("YYYY-MM-DD"),
          qtdDias: 1,
        })
        .then(this.$notify({
            group: 'foo',
            title: 'Buscando agenda',
            text: 'Aguarde',
            position: 'top-center',
            duration: 7500
          })) 
        .catch(error => this.$notify({
            group: 'foo',
            title: 'Sem agendamento para este dia',
            text: '',
            type: 'warn',
          }) )
        .catch(this.$store.state.agenda.agendaDia = ['']  )
        .catch(error => this.$store.state.agenda.agendaDia == [])  
        
        
    },
  },
  computed: {
    //...mapGetters(["getMedico"]),
    diaSelecionadoFormated() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.$store.state.configuracoes.diaSelecionado).toLocaleDateString("PT-Br", options);
    },
  },
};
</script>
<style>
.v-toolbar__content {
  height: auto !important;
}
.dia-anterior {
  position: fixed;
  /* right: -46px; */
  /* width: 64px; */
  background: rgba(0, 0, 0, 0.3);
  z-index: 1031;
  border-radius: 8px 0 0 8px;
  text-align: center;
  top: 120px;
}
.category {
  font-size: 20px;
}
.agend {
  color: rgb(255, 255, 255);
  font-size: 20px;
}
.sele {
  background-color: rgba(20, 173, 109, 0.74);
  border-radius: 2%;
}
.notShowDiv {
  display: none;
}
.v-list-item__title {
  color: gray;
  font-weight: bold;
}
</style>