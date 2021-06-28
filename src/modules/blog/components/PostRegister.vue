<template>
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
          <v-card-title>{{post && post.id ? `Edición de post Id: ${post.id}` : 'Nuevo post'}}</v-card-title>
          <ValidationObserver ref="formPost">
            <c-text-area
                v-model="post.title"
                label="Título"
                name="Título"
                rules="required"
                rows="1"
            />
            <c-ckaeditor
                style="width: 100% !important;"
                v-model="post.text"
                placeholder="Contenido"
                mode="basic"
            />
            <v-row justify="center" class="my-4">
              <croppa
                  v-if="show"
                  v-model="base64Image"
                  :width="$vuetify.breakpoint.xsOnly ? 240 : 480"
                  :height="$vuetify.breakpoint.xsOnly ? 135 : 270"
                  :initial-image="post.image"
                  initial-size="contain"
                  placeholder="Seleccione una imagen"
                  accept="image/*"
                  @file-type-mismatch="archivoInvalido"
                  :zoom-speed="10"
                  :show-remove-button="true"
                  remove-button-color="black"
                  :show-loading="true"
                  :loading-size="50"
              />
            </v-row>
          </ValidationObserver>
          <v-card-actions>
            <v-btn
                text
                @click="$emit('cancel')"
            >
              Cancelar
            </v-btn>
            <v-spacer/>
            <v-btn
                color="primary"
                @click="save"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PostRegister',
  props: {
    step: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    loading: false,
    show: false,
    base64Image: {},
    makePost: {
      id: null,
      blog_id: null,
      user_id: null,
      title: null,
      date: null,
      image: null,
      text: null,
      base64Image: null
    },
    post: null
  }),
  watch: {
    step:{
      handler(val) {
        if(val === 1) this.show = false
      },
      immediate: false
    }
  },
  computed: {
    ...mapGetters(['blog_selected'])
  },
  created() {
    this.assign()
  },
  methods: {
    save() {
      this.$refs.formPost.validate().then(result => {
        if (result) {
          this.loading = true
          let copiaData = this.clone(this.post)
          copiaData.base64Image = this.base64Image.hasImage() ? this.base64Image.generateDataUrl() : null
          copiaData.blog_id = this.blog_selected
          let payload = {
            blog_id: copiaData.blog_id,
            base64Image: copiaData.base64Image,
            title: copiaData.title,
            text: copiaData.text
          }
          let request = copiaData.id
              ? this.axios.put(`posts/${copiaData.id}`, payload)
              : this.axios.post(`posts`, payload)
          request
              .then(() => {
                this.$store.commit('SET_SNACKBAR', {color: 'success', message: `El post se guardo correctamente.`})
                this.$emit('saved')
                this.loading = false
              })
              .catch(error => {
                this.loading = false
                this.$store.commit('SET_SNACKBAR', {color: 'error', message: `Error al guardar el post.`, error: error})
              })
        }
      })
    },
    archivoInvalido() {
      this.$store.commit('SET_SNACKBAR', {color: 'warning', message: 'El archivo seleccionado no es válido.'})
    },
    assign(post = null) {
      this.post = this.clone(post ? post : this.makePost)
      setTimeout(() => {
        this.show = true
      }, 200)
    }
  }
}
</script>
<style scoped>
.croppa-container {
  background-color: lightblue;
  border: 2px solid grey;
  border-radius: 8px;
  line-height: 0px;
}

.croppa-container:hover {
  opacity: 1;
  background-color: #8ac9ef;
}
</style>