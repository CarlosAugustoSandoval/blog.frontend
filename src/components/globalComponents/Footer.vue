<template>
    <v-footer app class="footerpart" inset>
      <v-col cols="12" class="pa-1">
        <span>© {{ new Date().getFullYear() }} — Personal<strong>blogs</strong> por <a>Carlos Sandoval</a></span>
      </v-col>
    </v-footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>