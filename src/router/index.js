import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import store from '../store'

import auth from '@/modules/auth/router'
import home from '@/modules/home/router'
import blog from '@/modules/blog/router'
import contact from '@/modules/contact/router'

Vue.use(VueRouter)

const routes = [
    auth,
    home,
    blog,
    contact
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0
        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }
        return goTo(scrollTo)
    },
    routes
})

// navigation guards before each
router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.auth.access_token) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
