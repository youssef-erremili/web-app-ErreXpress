import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ParaphraseView from '@/views/paraphraseView.vue'
import TranslateView from '@/views/TranslateView.vue'
import correcterView from '@/views/CorrecterView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
    {
        path: '/',
        name: "home",
        component: HomeView,
        meta: {
            breadcrumb: "Home"
        }
    },
    {
        path: '/translation',
        name: "translation",
        component: TranslateView,
        meta: {
            breadcrumb: "translation"
        }
    },
    {
        path: '/paraphrase',
        name: "paraphrase",
        component: ParaphraseView,
        meta: {
            breadcrumb: "paraphrase"
        }
    },
    {
        path: '/correcter',
        name: "correcter",
        component: correcterView,
        meta: {
            breadcrumb: "correcter"
        }
    },
    {
        path: '/contact',
        name: "contact",
        component: ContactView,
        meta: {
            breadcrumb: "contact"
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
