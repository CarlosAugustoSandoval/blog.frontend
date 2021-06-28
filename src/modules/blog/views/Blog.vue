<template>
  <div>
    <main-menu/>
    <template v-if="user">
      <v-toolbar
          dense
          floating
          elevation="0"
      >
        <v-spacer/>
        <v-switch
            v-model="mePosts"
            label="Mis Posts"
            color="success"
            class="ma-0 mt-2"
            hide-details
            inset
        />
      </v-toolbar>
      <v-btn
          color="pink"
          dark
          right
          bottom
          fab
          fixed
          @click="createPost"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-container fluid>
      <v-row dense>
        <v-col
            v-for="(post, indexPost) in postsFilter"
            :key="`post${indexPost}`"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
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
    mePosts: false,
    postsFilter: false,
    posts: null,
    loading: false
  }),
  watch: {
    mePosts() {
      this.filterPosts()
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    createPost() {
      this.$refs.modalRegisterPost.open()
    },
    filterPosts() {
      this.postsFilter = this.mePosts ? this.posts.filter(post => post.user.id === this.user.id) : this.posts
    },
    getPosts() {
      this.loading = true
      this.axios.get('posts')
          .then(response => {
            this.posts = response.data
            this.filterPosts()
            this.loading = false
          })
          .catch((error) => {
            this.$store.commit('SET_SNACKBAR', { color: 'error', message: 'Error al recuperar las entradas de blog.', error: error })
            this.loading = false
          })
    }
  }
}
</script>
