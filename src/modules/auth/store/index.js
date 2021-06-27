import Vue from 'vue'
// state
const state = {
    access_token: null,
    token_type: 'Bearer',
    user: null,
    blog_selected: null,
    server: 'http://localhost:8000/api'
}

// getters
const getters = {
    user: state => {
        return state.user
    },
    blog_selected: state => {
        return state.blog_selected
    }
}

// actions
const actions = {
    async login(context, user) {
        return await new Promise(resolve => {
            Vue.axios.post('login_check', user)
                .then(response => {
                    console.log('response.data', response.data)
                    context.commit('SET_DATA_LOGIN', response.data)
                    context.commit('SET_DEFAULT_AXIOS')
                    resolve(true)
                })
                .catch((error) => {
                    context.commit('SET_SNACKBAR', { color: 'error', message: `Error ${error.response.status} al iniciar sesión. ${error.response.status === 401 ? 'Credenciales incorrectas.' : ''}` })
                    resolve(false)
                })
        })
    },
    async getUser(context) {
        return await new Promise(resolve => {
            Vue.axios.get('userin')
                .then(responseUser => {
                    context.commit('SET_USER', responseUser.data)
                    resolve(true)
                })
                .catch(() => {
                    context.commit('SET_SNACKBAR', { color: 'error', message: 'Error al recuperar el usuario actual.' })
                    resolve(false)
                })
        })
    }
}

// mutations
const mutations = {
    SET_DATA_LOGIN(state, data) {
        state.access_token = data.token
    },
    SET_DEFAULT_AXIOS(state) {
        Vue.axios.defaults.baseURL = state.server
        if (state.access_token) {
            Vue.axios.defaults.headers.common.Authorization = `${state.token_type} ${state.access_token}`
        }
    },
    SET_LOGOUT(state) {
        state.access_token = null
        state.user = null
        Vue.axios.defaults.headers.common['Authorization'] = null
    },
    SET_USER(state, data) {
        state.user = data
    },
    SET_BLOG_SELECTED(state, blog) {
        state.blog_selected = blog
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
