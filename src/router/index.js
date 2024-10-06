import { createRouter, createWebHistory } from 'vue-router'

// import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServiceView from '@/views/ServiceView.vue'
import TranslateView from '@/views/TranslateView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    path: '/services',
    name: "service",
    component: ServiceView
  },
  {
    path: '/translate',
    name: "translate",
    component: TranslateView
  },
  {
    path: '/contact',
    name: "contact",
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
