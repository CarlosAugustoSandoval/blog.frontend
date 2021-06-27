import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


import auth from '@/modules/auth/store'
import snackbar from '@/modules/snackbar/store'
import loading from '@/modules/loading/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    snackbar,
    loading
  },
  plugins: [createPersistedState({
    paths: ['auth']
  })]
})
