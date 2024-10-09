import './index.css'
import './assets/style.css'
import router from './router';

import { createApp } from 'vue'
import App from './App.vue'

import NavBar from "./components/NavBar.vue";
import HeaderSection from "./components/HeaderSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FeatureSection from "./components/FeatureSection.vue";
import ServiceSection from "./components/ServiceSection.vue";
import FooterSection from "./components/FooterSection.vue";
import InputField from '@/components/InputField.vue';

const app = createApp(App)
app.component("NavBar", NavBar)
app.component("HeaderSection", HeaderSection)
app.component("HeroSection", HeroSection)
app.component("FeatureSection", FeatureSection)
app.component("ServiceSection", ServiceSection)
app.component("FooterSection", FooterSection)
app.component("InputField", InputField)



app.use(router);
app.mount('#app')
