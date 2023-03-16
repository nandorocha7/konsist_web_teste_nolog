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
            <h4 class="title">Agenda</h4>
            <p class="category">Selecione a agenda desejada</p>
          </md-card-header>
          <md-card-content>
            <v-data-table
              :headers="headers"
              :items="medicos"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-eye
                </v-icon>
              </template>
            </v-data-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    headers: [
      {
        text: "Médico",
        align: "start",
        sortable: false,
        value: "nome",
      },
      {
        text: "Visualizar Agenda",
        align: "end",
        value: "actions",
        sortable: false,
      },
    ],
    medicos: [

    ],
  }),
  mounted() {},
  methods: {
    editItem(item) {
      
      this.$router.push("agendatable/" + item.id);
    },
  },
};
</script>
