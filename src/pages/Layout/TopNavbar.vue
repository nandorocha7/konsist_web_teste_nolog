<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        

        <div class="md-collapse">
          <!--<div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedEmployee"
              :md-options="employees"
            >
              <label>Localizar médico...</label>
            </md-autocomplete>
          </div> -->
          <md-list>
            <!--<md-list-item href="/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item> -->
            <!-- <li class="md-list-item">
              <a
                href="#/notifications"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>notifications</md-icon>
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">1Mike John responded to your email</a></li>
                      <li><a href="#">You have 5 new tasks</a></li>
                      <li><a href="#">You're now friend with Andrew</a></li>
                      <li><a href="#">Another Notification</a></li>
                      <li><a href="#">Another One</a></li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li> -->

            <md-list-item href="" @click="sairSistema">
              <v-icon aria-hidden="false"> mdi-account-arrow-right </v-icon>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: ["", "", ""],
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
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

<style lang="css"></style>