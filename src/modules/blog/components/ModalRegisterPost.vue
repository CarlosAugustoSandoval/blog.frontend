<template>
  <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      persistent
  >
    <v-card flat tile>
      <v-btn
          large
          icon
          absolute
          right
          top
          @click="close"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <post-register
          :step="step"
          ref="postRegister"
          @saved="saved"
          @cancel="close"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import PostRegister from '@/modules/blog/components/PostRegister'
export default {
  name: 'ModalRegisterPost',
  components: {PostRegister},
  data: () => ({
    dialog: false,
    step: 1
  }),
  methods: {
    open() {
      this.dialog = true
      this.step = 2
      setTimeout(() => {
        this.$refs.postRegister.assign()
      }, 200)
    },
    close() {
      this.dialog = false
      this.step = 1
    },
    saved() {
      this.dialog = false
      this.$emit('saved')
    }
  }
}
</script>

<style scoped>

</style>