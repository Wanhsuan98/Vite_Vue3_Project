import { createRouter, createWebHistory } from 'vue-router'
import GroupBuying from '../views/GroupBuying.vue'
import Product from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
const routes = [
    // {
    //     path: "/cart", component: () => import("../views/"),
    // },
    {
        path: '/',
        name: 'groupbuying',
        component: GroupBuying
    },
    {
        path: '/products/:id',
        name: 'product',
        component: Product
    },
    {
        path: '/cart/',
        name: 'cart',
        component: Cart,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router