<template>
  <v-row class="ma-0">
    <loading :value="loading"/>
    <caption-auth/>
    <v-col cols="12" md="6" lg="5" xl="4" class="d-flex align-center py-0">
      <v-container fluid class="py-0">
        <div class="px-10 py-0">
          <v-row justify="center">
            <v-col cols="12" sm="8" md="12" class="py-0">
              <v-row justify="center" class="mb-1 mt-2">
                <v-col cols="12" class="text-center">
                  <div class="font-weight-bold text-h6">Inicio de Sesión</div>
                </v-col>
              </v-row>
              <ValidationObserver class="mb-5" ref="formLogin" v-slot="{ invalid }" tag="form" autocomplete="off"
                                  @submit.prevent="login">
                <c-text
                    v-model="email"
                    label="Nombre de Usuario"
                    rules="required|email"
                    name="nombre de usuario"
                    :dense="false"
                />
                <c-password
                    v-model="password"
                    label="Contraseña"
                    rules="required"
                    name="contraseña"
                    :dense="false"
                />
                <v-btn
                    :disabled="invalid"
                    color="primary"
                    block
                    submit
                    type="submit"
                >
                  Iniciar Sesión
                </v-btn>

                <v-btn
                    color="warning"
                    block
                    class="mt-4"
                    submit
                    type="button"
                    :to="{ name: 'Singup' }"
                >
                  Registrarse
                </v-btn>
              </ValidationObserver>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import CaptionAuth from '@/modules/auth/components/CaptionAuth'
export default {
  name: 'Login',
  components: {CaptionAuth},
  data: () => ({
    email: null,
    password: null,
    loading: false
  }),
  methods: {
    login() {
      this.$refs.formLogin.validate().then(result => {
        if (result) {
          this.loading = true
          this.$store.dispatch('login', {username: this.email, password: this.password})
              .then(resolve => {
                if (resolve) this.$router.push({name: 'Home'})
                this.loading = false
              })
        }
      })
    }
  }
}
</script>
