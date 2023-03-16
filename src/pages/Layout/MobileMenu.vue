<template>
  <ul class="nav nav-mobile-menu">
    <!--<li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>

          <p>Agendas</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li>
            <md-field>
              <label>Localizar médico</label>
              <md-input v-model="search" type="text"></md-input>
            </md-field>
          </li>
          <sidebar-link to="/agendatable/1">
            <p>Lucas Gordola</p>
          </sidebar-link>
          <sidebar-link to="/agendatable/2">
            <p>Tomas de Aquino</p>
          </sidebar-link>
          <sidebar-link to="/agendatable/3">
            <p>André Tonelas</p>
          </sidebar-link>
        </ul>
      </drop-down>
    </li>-->
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [
      ],
    };
  },
};
</script>
