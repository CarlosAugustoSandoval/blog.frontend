import Vue from 'vue'
import { mapGetters } from 'vuex'

Vue.mixin({
  data: () => ({
    esMovil: false
  }),
  computed: {
    ...mapGetters(['user'])
  },
  watch: {
    '$vuetify.breakpoint.name': {
      handler (val) {
        val && (this.esMovil = !!(navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/BlackBerry/i)))
      },
      immediate: true
    }
  },
  methods: {
    clone (object) {
      return JSON.parse(JSON.stringify(object))
    },
    currency: (valor, decimal = 2) => {
      return new Intl.NumberFormat(
        'es-CO',
        {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: decimal
        }).format(valor)
    }
  }
})
