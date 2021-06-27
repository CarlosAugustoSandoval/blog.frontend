<template>
  <v-card
      height="100%"
  >
    <v-img
        :src="post.image"
        height="200px"
    />

    <v-card-subtitle class="font-weight-black">
      {{ post.title }}
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer/>
      <v-btn
          color="orange lighten-2"
          text
          class="text-capitalize"
          @click="$emit('detail')"
      >
        Ver Más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>