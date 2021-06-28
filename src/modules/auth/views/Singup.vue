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
                  <div class="font-weight-bold text-h6">Registro de Usuario</div>
                </v-col>
              </v-row>
              <ValidationObserver
                  class="mb-5"
                  ref="formSingup"
                  v-slot="{ invalid }"
                  tag="form"
              >
                <c-text
                    v-model="name"
                    label="Nombre de Usuario"
                    rules="required"
                    name="Nombre de Usuario"
                    :dense="false"
                />
                <c-text
                    v-model="email"
                    label="Correo Electrónico"
                    rules="required|email"
                    name="Correo Electrónico"
                    :dense="false"
                />
                <c-password
                    v-model="password"
                    label="Contraseña"
                    rules="required"
                    name="contraseña"
                    vid="password"
                    :dense="false"
                />
                <c-password
                    v-model="password_confirmation"
                    label="Confirmación de Contraseña"
                    :rules="{required: true, confirmed:'password'}"
                    name="Confirmación de Contraseña"
                    :dense="false"
                />
                <v-btn
                    :disabled="invalid"
                    color="primary"
                    block
                    submit
                    @click="singup"
                >
                  Registrarse
                </v-btn>

                <v-btn
                    color="warning"
                    block
                    class="mt-4"
                    submit
                    type="button"
                    :to="{ name: 'Login' }"
                >
                  Inicio de Sesión
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
  name: 'Singup',
  components: {CaptionAuth},
  data: () => ({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    loading: false
  }),
  methods: {
    singup() {
      this.$refs.formSingup.validate().then(result => {
        if (result) {
          this.loading = true
          this.axios.post('singup', {name: this.name, email: this.email, password: this.password})
              .then(() => {
                this.$store.dispatch('login', {username: this.email, password: this.password})
                    .then(resolve => {
                      if (resolve) this.$router.push({name: 'Home'})
                      this.loading = false
                    })
              })
              .catch((error) => {
                this.loading = false
                console.log('errorr', error.response)
                this.$store.commit('SET_SNACKBAR', { color: 'error', message: `Error al realizar el registro del usuario.`, error: error })
              })
        }
      })
    }
  }
}
</script>
