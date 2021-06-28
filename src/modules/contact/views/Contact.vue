<template>
  <div>
    <main-menu/>
    <v-container fluid>
      <loading v-model="loading"/>
      <v-row dense>
        <v-col
            cols="12"
            md="6"
            offset-md="3"
            xl="4"
            offset-xl="4"
        >
          <v-card flat>
            <v-card-title>Envíenos sus datos y pronto estaremos en contacto</v-card-title>
            <ValidationObserver ref="formContact">
              <c-text
                  v-model="contact.name"
                  label="Nombre"
                  name="Nombre"
                  rules="required"
              />
              <c-text
                  v-model="contact.email"
                  label="Correo electrónico"
                  name="Correo electrónico"
                  rules="required|email"
              />
              <c-text-area
                  v-model="contact.message"
                  label="Mensaje"
                  name="Mensaje"
                  rules="required"
              />
            </ValidationObserver>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                  color="primary"
                  @click="save"
              >
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-list-item-content class="pb-0">
                <v-list-item-title class="title">Carlos Sandoval INC.</v-list-item-title>
              </v-list-item-content>
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="pt-0">
              <v-list-item-content class="pt-0">
                <v-list-item-subtitle class="primary--text">Calle 17 # 22A - 33</v-list-item-subtitle>
                <v-list-item-subtitle class="primary--text">Yopal, Casanare, Colombia</v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
            <v-col cols="12" sm="6" lg="8" class="pt-0">
              <v-list-item-content class="pt-0">
                <v-list-item-subtitle class="primary--text">
                  <v-icon small color="primary">mdi-cellphone</v-icon>
                  322 2346834
                </v-list-item-subtitle>
                <v-list-item-subtitle class="primary--text">
                  <v-icon small color="primary">mdi-email</v-icon>
                  sandovalcarlosaugusto@gmail.com
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data:() => ({
    loading: false,
    contact: {
      message: null,
      name: null,
      email: null
    }
  }),
  methods: {
    save() {
      this.$refs.formContact.validate().then(result => {
        if (result) {
          this.loading = true
          this.axios.post(`contact`, this.contact)
              .then(() => {
                this.$store.commit('SET_SNACKBAR', {color: 'success', message: `Su mensaje ha sido recibido, ¡pronto nos estaremos contactando con usted!`})
                this.loading = false
                this.$router.push({ name: 'Home' })
              })
              .catch(error => {
                this.loading = false
                this.$store.commit('SET_SNACKBAR', {color: 'error', message: `Error al enviar su mensaje.`, error: error})
              })
        }
      })
    },
  }
}
</script>
