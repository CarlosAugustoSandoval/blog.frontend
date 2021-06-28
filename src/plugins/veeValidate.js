import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
// eslint-disable-next-line camelcase
import { required, email, confirmed } from 'vee-validate/dist/rules'
Vue.use({
  install (Vue) {
    Vue.component('ValidationProvider', ValidationProvider)
    Vue.component('ValidationObserver', ValidationObserver)
  }
})

extend('required', {
  ...required,
  message: 'El campo {_field_} es requerido'
})

extend('confirmed', {
  ...confirmed,
  message: 'El campo {_field_} no coincide con el campo a confirmar'
})

extend('email', {
  ...email,
  message: 'El correo no es valido'
})