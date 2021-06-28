<template>
  <div>
    <v-menu
        v-if="user"
        bottom
        left
        offset-y
        origin="top"
        transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
            v-on="on"
            dark
            text
            large
        >
          <v-icon class="mr-1">mdi-account-circle</v-icon>
          {{user.name}}
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item @click="setLogout">
          <v-list-item-avatar color="error">
            <v-icon dark>mdi-power-standby</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">Cerrar Sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <template v-else>
      <v-btn
          color="orange"
          class="mr-2"
          :to="{ name: 'Singup' }"
      >
        Registrarse
      </v-btn>

      <v-btn
          color="primary darken-2"
          :to="{ name: 'Login' }"
      >
        Iniciar Sesión
      </v-btn>
    </template>
  </div>
</template>
<script>

export default {
  name: 'UserMenu',
  data: () => ({}),
  methods: {
    setLogout() {
      this.$store.commit('SET_LOGOUT')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss">

</style>