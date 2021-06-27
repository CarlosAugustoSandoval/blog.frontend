<template>
  <div>

    <v-window v-model="step">
      <v-window-item :value="1">
        <detail
            v-if="post"
            :post="post"
            @edit="editPost"
        />
      </v-window-item>
      <v-window-item :value="2">
        <post-register
            :step="step"
            ref="postRegister"
            @cancel="step = 1"
            @saved="getPost"
        />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import Detail from '@/modules/blog/components/Detail'
import PostRegister from "../components/PostRegister";
export default {
  name: 'PostDetail',
  components: {PostRegister, Detail},
  props: {
    id: {
      type: [String, Number]
    }
  },
  data: () => ({
    step: 1,
    post: null,
    loading: false
  }),
  created() {
    this.getPost()
  },
  methods: {
    editPost() {
      this.step = 2
      setTimeout(() => {
        this.$refs.postRegister.assign(this.post)
      }, 200)
    },
    getPost() {
      this.step = 1
      this.loading = true
      this.axios.get(`posts/${this.id}`)
          .then(response => {
            this.post = response.data
            this.loading = false
          })
          .catch((error) => {
            this.$store.commit('SET_SNACKBAR', { color: 'error', message: 'Error al las entradas de blog.', error: error })
            this.loading = false
          })
    }
  }
}
</script>
