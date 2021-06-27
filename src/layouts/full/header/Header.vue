<template>
  <v-app-bar app clipped-left clipped-right color="primary" dark>
    <v-toolbar-title class="align-center d-flex">
      <span>Personal<strong>Blogs</strong></span>
    </v-toolbar-title>
    <v-spacer />
    <!---User -->
    <user/>
    <!---User -->
  </v-app-bar>
</template>

<script>
import User from '@/layouts/full/header/components/User'
export default {
  name: 'Header',
  components: {
    User
  }
}
</script>