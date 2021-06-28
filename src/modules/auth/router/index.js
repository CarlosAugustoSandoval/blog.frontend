export default {
    path: '/auth',
    redirect: { name: 'Login' },
    component: () => import('@/layouts/blank/Blanklayout'),
    children: [
        {
            name: 'Login',
            path: 'login',
            component: () => import('@/modules/auth/views/Login'),
            meta: {
                requiresAuth: false
            }
        },
        {
            name: 'Singup',
            path: 'singup',
            component: () => import('@/modules/auth/views/Singup'),
            meta: {
                requiresAuth: false
            }
        },
        {
            name: 'Error',
            path: '*',
            component: () => import('@/modules/auth/views/Error'),
            meta: {
                requiresAuth: false
            }
        },
    ]
}