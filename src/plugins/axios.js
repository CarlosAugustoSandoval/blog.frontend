import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import router from '../router'
import store from '../store'

Vue.use(VueAxios, axios)
axios.interceptors.response.use(undefined, error => {
  if (error.response.status === 401 && error.response.config.url !== 'login_check') {
    store.commit('SET_LOGOUT')
    store.commit('SET_SNACKBAR', { color: 'error', message: 'Los datos de la sesión son incorrectos, por favor inicie sesión.' })
    // router.replace({ name: 'Login' })
  }
  return Promise.reject(error)
})
