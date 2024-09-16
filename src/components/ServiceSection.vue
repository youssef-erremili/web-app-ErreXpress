<template>
    <div class="main_hero text-center w-11/12 mx-auto mt-40">
        <h4 class="text-base text-blue-800 capitalize font-medium">services</h4>
        <h1 class="text-5xl my-2 capitalize font-semibold text-black text-opacity-90">{{ titles[0].bigTitle }}</h1>
        <p class="font-light text-balance text-xl text-opacity-80 lowercase text-gray-900">{{ titles[0].content }}</p>
    </div>
    <div class="w-11/12 mx-auto flex flex-col">
        <div v-for="(item, index) in ServicesContent" 
            :key="index" 
            :class="['box_service flex items-center justify-center', reverseBox(index) ? 'flex-row-reverse ml-12' : '']">
            <div class="w-1/2">
                <img :src="item.image" class="w-3/" alt="image of service">
            </div>
            <div class="w-1/2">
                <h2 class="text-4xl text-gray-950 text-opacity-90 font-semibold">{{ item.title }}</h2>
                <p
                    class="w-fit inline-block my-4 text-opacity-70 lowercase text-balance font-normal text-lg text-gray-900">
                    {{ item.content }}</p>
                <a class="px-8 py-2 capitalize inline-block leading-none rounded-md text-xl font-normal bg-indigo-700 text-white"
                    :href="item.url">{{ item.url_text }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ServiceSection",
    data() {
        return {
            titles: [
                {
                    bigTitle: "provide many services that cover all you needs",
                    content: "Discover the amazing  features of our website translator that make your multilingual journey easier! Our translator helps  you communicate effortlessly, making work simpler and opening up a world of seamless communication."
                },
            ],
            ServicesContent: [
                {
                    image: "../../public/images/easy.webp",
                    title: "Speedy Translation Service",
                    content: "Experience the best of both worlds with our exceptional translation service - where speed meets precision.",
                    url: "test.com",
                    url_text: "Get Started"
                },
                {
                    image: "../../public/images/exportpdf.webp",
                    title: "Quality Translation Service",
                    content: "Make your words stand out with our promise of top-notch quality. We talk about excellence, Your message matters.",
                    url: "test.com",
                    url_text: "Get Started"
                },
                {
                    image: "../../public/images/resources.webp",
                    title: "Translation Always Updated",
                    content: "Stay in the now with our translations, always fresh, always up-to-date. Your content evolves, and so do we.",
                    url: "test.com",
                    url_text: "Get Started"
                },
            ]
        }
    },
    methods: {
        reverseBox(index) {
            return index === 1
        }
    },
}
</script>