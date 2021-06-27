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
          <v-card-subtitle class="pt-0">
            <v-list-item-content>
              <v-list-item-title class="body-2">{{ post.user.email }}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{ moment(post.date).format('DD/MM/YYYY [a las] HH:mm')}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-card-subtitle>
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