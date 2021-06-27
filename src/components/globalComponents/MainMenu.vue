<template>
  <v-tabs
      fixed-tabs
  >
    <v-tabs-slider></v-tabs-slider>
    <v-tab
        :to="{ name: 'Home' }"
        class="primary--text"
    >
      Home
    </v-tab>

    <v-tab
        :to="{ name: 'Blog' }"
        class="primary--text"
    >
      Blog
    </v-tab>

    <v-tab
        :to="{ name: 'Contact' }"
        class="primary--text"
    >
      Contacto
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style scoped>

</style>