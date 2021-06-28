import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import vuetify from './plugins/vuetify'
import './plugins/moment'
import './plugins/veeValidate'
import './plugins/mixin'
import './plugins/globalComponents'
import './plugins/axios'
import './plugins/croppa'
import './plugins/ckEditor'

Vue.config.productionTip = false
store.commit('SET_DEFAULT_AXIOS')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
