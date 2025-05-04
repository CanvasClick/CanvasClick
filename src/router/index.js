import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', name: 'home', component: HomeView, },
    { path: '/', component: () => import('../views/Home.vue'), },
    { path: '/about', component: () => import('../views/About.vue'), },
    { path: '/Services', component: () => import('../views/Services.vue'), },
    { path: '/Portfolio', component: () => import('../views/Portfolio.vue'), },
    { path: '/Contact', component: () => import('../views/Contact.vue'), },
  ],
})

export default router
