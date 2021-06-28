<template>
  <v-col cols="12" md="6" lg="7" xl="8" class="primary d-none d-md-flex align-center justify-center">
    <v-container>
      <div class="pa-10">
        <v-row justify="center">
          <v-col cols="8" xl="6">
            <div>
              <h2
                  class="display-1 white--text font-weight-medium"
              >El mejor blog para ti y tu familia.</h2>
              <h6
                  class="subtitle-1 mt-4 white--text op-5 font-weight-regular"
              >
                Escribe lo que te apasiona siempre a tu manera, atractivo, original, fácil y gratuito.
              </h6>
              <v-btn
                  class="mt-4 text-capitalize"
                  x-large
                  outlined
                  color="white"
                  :to="{ name: 'Blog' }"
              >
                Ver las publicaciones
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: 'CaptionAuth'
}
</script>