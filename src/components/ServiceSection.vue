<template>
    <div class="mt-32">
        <heroSection :heading="titles[0].heading" :title="titles[0].title" :slogan="titles[0].content" />
        <div class="w-11/12 mx-auto flex flex-col">
            <div v-for="(item, index) in ServicesContent" :key="index"
                :class="['box_service flex items-center justify-center', reverseBox(index) ? 'flex-row-reverse ml-12' : '']">
                <div class="w-1/2">
                    <img :src="item.image" class="w-3/" :alt="`Image of ${item.title}`">
                </div>
                <div class="w-1/2">
                    <h2 class="text-4xl text-gray-950 text-opacity-90 font-semibold">{{ item.title }}</h2>
                    <p
                        class="w-fit inline-block my-4 text-opacity-70 lowercase text-balance font-normal text-lg text-gray-900">
                        {{ item.content }}
                    </p>
                    <router-link :to="item.url" class="bg-indigo-500 text-white capitalize py-2 px-3 rounded-md inline-block my-1">{{ item.value }}</router-link>
                </div>
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
                    heading: "Services",
                    title: "provide many services that cover all you needs",
                    content: "Explore our services that simplify communication! Whether you need translation, clear expression of your ideas, rephrasing, or grammar checks, we're here to help you work more efficiently and connect effortlessly."
                },
            ],
            ServicesContent: [
                {
                    image: "/images/easy.webp",
                    title: "Translation with AI",
                    content: "Translate your text easily with our service! Whether it's sentences, essays, emails, or articles, we help you share your ideas in another language. Great for school, work, or chatting with friends, we make sure your message is clear and makes sense.",
                    url: "/translation",
                    value: "Get started"
                },
                {
                    image: "/images/exportpdf.webp",
                    title: "Paraphrasing",
                    content: "Need to change up your writing? We can help you rephrase sentences, essays, emails, articles, and more. Our service makes it easy to express your thoughts in a new way while keeping the original meaning. Perfect for school assignments.",
                    url: "/paraphrase",
                    value: "Get started"
                },
                {
                    image: "/images/resources.webp",
                    title: "Grammar Checker",
                    content: "Make sure your writing is error-free with our grammar checker! Quickly spot and correct mistakes in sentences, essays, emails, and articles. Whether you're writing for school, work, or personal use, we help you polish your text so it’    s clear and professional.",
                    url: "/correcter",
                    value: "Get started"
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