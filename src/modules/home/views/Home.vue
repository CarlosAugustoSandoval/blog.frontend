<template>
  <div>
    <main-menu/>
    <v-card flat>
      <v-card-text class="text-center font-weight-black text-h4">
        {{ blog && blog.title }}
      </v-card-text>
      <v-card-text v-html="blog && blog.text"/>
      <loading v-model="loading"/>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    blog: null,
    loading: false
  }),
  created() {
    this.getBlog()
  },
  methods: {
    getBlog() {
      this.loading = true
      this.axios.get('blogs/1')
          .then(response => {
            this.blog = response.data
            this.loading = false
            this.$store.commit('SET_BLOG_SELECTED', response.data.id)
          })
          .catch((error) => {
            this.$store.commit('SET_SNACKBAR', { color: 'error', message: 'Error al recuperar el Blog.', error: error })
            this.loading = false
          })
    },
    enviar() {
      const obj = {
        title: 'alguna cosa',
        text: 'otra joda',
        blog_id: 2
      }
      this.axios.post('posts', obj)
          .then(response => {
            console.log('res', response)
          })
          .catch((error) => {
            console.log('error', error.response)
          })
    }, enviarBlog() {
      const objB = {
        title: 'Blog title',
        text: 'otra blog text'
      }
      this.axios.post('blogs', objB)
          .then(response => {
            console.log('res', response)
          })
          .catch((error) => {
            console.log('error', error.response)
          })
    }
  }
}
</script>
