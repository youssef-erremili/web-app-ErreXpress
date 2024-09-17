<template>
    <heroSection :heading="titles[0].heading" :title="titles[0].title" :slogan="titles[0].content"/>
    <div class="box_feature flex justify-evenly w-11/12 my-8 mx-auto">
        <div v-for="(box, index) in boxContant" :key="index" class="box w-1/3 h-auto p-7 m-4 rounded-xl text-center shadow-md bg-slate-50">
            <div class="inline-block">
                <img :src="box.image" alt="avatar image">
            </div>
            <h2 class="font-semibold text-xl my-2 uppercase">{{ box.title }}</h2>
            <p class="font-light text-balance text-opacity-90 lowercase text-gray-900">{{ box.content }}</p>
        </div>
    </div>
</template>

<script>

import HeroSection from './HeroSection.vue';

export default {
    name: "FeatureSection",
    components: {
        HeroSection
    },
    data() {
        return {
            titles: [
                {
                    heading: "Features",
                    title: "seemless features to make your work easier",
                    content: "Discover the amazing features of our website translator that make your multilingual journey easier! Our translator helps  you communicate effortlessly, making work simpler and opening up a world of seamless communication."
                },

            ],
            boxContant: [
                {
                    image: "../../public/images/quality.svg",
                    title: "Speedy Translation Service",
                    content: "Experience the best of both worlds with our exceptional translation service - where speed meets precision."
                },
                {
                    image: "../../public/images/quality.svg",
                    title: "Quality Translation Service",
                    content: "Make your words stand out with our promise of top-notch quality. We talk about excellence, Your message matters."
                },
                {
                    image: "../../public/images/quality.svg",
                    title: "Translation Always Updated",
                    content: "Stay in the now with our translations, always fresh, always up-to-date. Your content evolves, and so do we."
                },
            ]
        }
    }
}
</script>