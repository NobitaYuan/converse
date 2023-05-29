import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import( '@/views/HomeView.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '@/views/DetailView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '@/views/CartView')
  }

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
