import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ParaphraseView from '@/views/araphraseView.vue'
import TranslateView from '@/views/TranslateView.vue'
import correcterView from '@/views/CorrecterView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: "home",
        component: HomeView,
    },
    {
        path: '/translation',
        name: "translation",
        component: TranslateView,
    },
    {
        path: '/paraphrase',
        name: "paraphrase",
        component: ParaphraseView,
    },
    {
        path: '/correcter',
        name: "correcter",
        component: correcterView,
    },
    {
        path: '/contact',
        name: "contact",
        component: ContactView,
    },
    {
        path: '/about-us',
        name: "aboutus",
        component: AboutView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
