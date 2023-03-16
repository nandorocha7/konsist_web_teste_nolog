<template @click.stop>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Configurações
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="editItem(item)"
        >
          <v-list-item-avatar>
            <v-avatar
              size="32px"
              tile
            >
              <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>

      </v-list>
      <v-sheet
        class="text-center"
        height="100px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          close
        </v-btn>

      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        //{ img: 'keep.png', title: 'Keep', to:"/Usuario" },
        //{ img: 'inbox.png', title: 'Inbox', class: "text-center" },
        //{ img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Configurações de usuário', class: "text-center"},
       //{ img: 'google.png', title: 'Google+' },
      ],
    }
    ),
    methods: {
    editItem(item) {
      
      this.$router.push("/Usuario/" + this.$store.state.configuracoes.id);
    },
    },
    mounted() {

      this.$store
      .dispatch("logar", {
        urlBackEnd: this.$store.state.configuracoes.urlBackEndLocal,
        email: this.$store.state.configuracoes.email,
        senha: this.$store.state.configuracoes.senha,
      }
      )
      .then(() => {

        })
    }
  }
</script>