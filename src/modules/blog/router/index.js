export default {
    path: '/',
    redirect: {name: 'Blog'},
    component: () => import('@/layouts/full/Layout'),
    children: [
        {
            name: 'Blog',
            path: 'blog',
            component: () => import('@/modules/blog/views/Blog'),
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'PostDetail',
            path: 'post/:id',
            props: true,
            component: () => import('@/modules/blog/views/PostDetail'),
            meta: {
                requiresAuth: true
            }
        }
    ]
}