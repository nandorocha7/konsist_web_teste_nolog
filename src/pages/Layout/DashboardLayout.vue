<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
      style="height: 100%;"
    >
      <mobile-menu slot="content"></mobile-menu>
      <v-list  nav>
        <sidebar-link to="/dashboard">
          <md-icon>home</md-icon>
          <p>Página inicial</p>
        </sidebar-link>
      </v-list>
      <!--<v-list nav>
        <sidebar-link to="/Usuario"> 
          <v-icon>mdi-account</v-icon>
          <p>Usuário</p>
        </sidebar-link>
      </v-list> -->      
      <v-list style="height: 100% !important;" nav>
        <v-list-group :value="false" no-action sub-group prepend-icon="mdi-bottle-tonic-plus">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Médicos</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-text-field
            label="Pesquisar Médico"
            hide-details="auto"
            v-model="pesquisaMedico"
            color="green"
            class="textoPesquisa"
          ></v-text-field>

          <v-list-item
            v-for="item in this.getMedicosFilter(pesquisaMedico)"
            :key="item.id"
            link
            @click="setMedico(item)"
            :to="`/agendatable/` + item.id"
          >
            <v-list-item-title
              v-text="item.nome"
              style="color: white; font-size: 0.9em;"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>     
      <v-list nav class="float-end" style="height: 100%;">
        <sidebar to="/login?redirect=%2Fdashboard" style="bottom: 21px;
    position: absolute;
    width: 100%;
    left: 0px;
    background: linear-gradient(45deg, black, rgb(255 255 255 / 70%));">
          <md-list-item href="" @click="sairSistema">
                <v-icon aria-hidden="false"> login </v-icon>
                <p class="sair">Sair</p>
          </md-list-item>
        </sidebar>
      </v-list>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
      medicosFiltrados: [],
      pesquisaMedico: "",
    };
  },
  mounted() {
    if (this.$store.state.medicos.medicos.length === 0) {
      this.$store
        .dispatch("fetchMedicos", this.$store.state.configuracoes.urlBackEnd)
        
        .catch(() => (this.error = "Falha ao listar Médicos"))
        
    }
  },
  computed: {
    ...mapGetters(["getMedicosFilter"]),
  },
  methods: {
    setMedico(item) {
      this.$store.state.medicos.medicoSelecionado = item;
      this.$sidebar.displaySidebar(false);
    },
    sairSistema() {
      
      this.$store.commit("LOGOUT", null);
      this.$cookies.remove("token_api");
      this.$cookies.remove("url_back");
      this.$cookies.remove("token_back");
      this.$cookies.remove("email_user");

      this.$router.push("/login?redirect=%2Fdashboard");
    },    
  },
};
</script>
<style >
.v-sheet.v-list {
  background: transparent !important;
}
.v-list-item__title {
  color: white;
}
.textoPesquisa {
  margin-left: 43px;
}
.textoPesquisa .v-label {
  color: rgb(8, 168, 75) !important;
  opacity: 1;
}
.textoPesquisa input {
  color: rgb(243, 243, 243) !important;
}
.sair {
  color:white
}

.sidebar-wrapper{
  height: 100%;
}
.md-list{
  height: 100%;
}
</style>

