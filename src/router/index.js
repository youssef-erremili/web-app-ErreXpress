import { createRouter, createWebHistory } from 'vue-router'

// import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ParaphraseView from '@/views/paraphraseView.vue'
import TranslateView from '@/views/TranslateView.vue'
import correcterView from '@/views/CorrecterView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
    {
        path: '/',
        name: "home",
        component: HomeView
    },
    {
        path: '/paraphrase',
        name: "paraphrase",
        component: ParaphraseView
    },
    {
        path: '/translation',
        name: "translation",
        component: TranslateView
    },
    {
        path: '/correcter',
        name: "correcter",
        component: correcterView
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
