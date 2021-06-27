<template>
  <div>
    <main-menu/>
    <v-btn
        color="pink"
        large
        dark
        fixed
        right
        bottom
        fab
        @click="createPost"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-container fluid>
      <v-row dense>
        <v-col
            v-for="(post, indexPost) in posts"
            :key="`post${indexPost}`"
            cols="12"
            sm="6"
            md="4"
            lg="3"
        >
          <card-post
              :post="post"
              @detail="$router.push({ name: 'PostDetail', params: { id: post.id } })"
          />
        </v-col>
      </v-row>
    </v-container>
    <modal-register-post
        ref="modalRegisterPost"
        @saved="getPosts"
    />
  </div>
</template>

<script>
import CardPost from '@/modules/blog/components/CardPost'
import ModalRegisterPost from '@/modules/blog/components/ModalRegisterPost'
export default {
  name: 'Blog',
  components: {ModalRegisterPost, CardPost},
  data: () => ({
    posts: null,
    loading: false
  }),
  created() {
    this.getPosts()
  },
  methods: {
    createPost() {
      this.$refs.modalRegisterPost.open()
    },
    getPosts() {
      this.loading = true
      this.axios.get('posts')
          .then(response => {
            this.posts = response.data
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
