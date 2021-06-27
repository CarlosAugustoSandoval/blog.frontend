export default {
    path: '/',
    redirect: {name: 'Contact'},
    component: () => import('@/layouts/full/Layout'),
    children: [
        {
            name: 'Contact',
            path: 'contact',
            component: () => import('@/modules/contact/views/Contact'),
            meta: {
                requiresAuth: true
            }
        }
    ]
}