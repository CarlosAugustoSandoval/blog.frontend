const state = {
  snackbar: null
}

// getters
const getters = {
  snackbar (state) {
    return state.snackbar
  }
}
// actions
const actions = {}

// mutations
const mutations = {
  SET_SNACKBAR (state, data) {
    if(!(data.error && data.error.response && data.error.response.status === 401)) {
      const timeout = 6000
      let message = ''
      message = data.message
      if(data.error && data.error.response && data.error.response.status === 500 && data.error.response.data.message.includes('Integrity constraint violation: 1062 Duplicate entry')) {
        message = `${message} Ya existe el registro en la base de datos.`
      }
      state.snackbar = {
        timeout: timeout,
        message: message,
        color: data.color
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
