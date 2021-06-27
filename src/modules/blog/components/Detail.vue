<template>
  <v-container fluid>
    <v-row dense>
      <v-col
          cols="12"
          md="6"
          offset-md="3"
      >
        <v-card flat>
          <v-btn
              text
              left
              top
              :to="{name: 'Blog'}"
              style="z-index: 10"
          >
            <v-icon>mdi-arrow-left</v-icon>
            Volver a los posts
          </v-btn>
          <v-card-title>
            {{post && post.title}}
            <v-btn
                icon
                small
                color="orange"
                @click="$emit('edit')"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>
          <v-img
              class="elevation-4"
              :src="post.image"
              height="300px"
          />
          <v-card-text v-html="post.text"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>