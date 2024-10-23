<template>
    <div class="mt-32">
        <section class="py-14">
            <heroSection :heading="titles[0].heading" :title="titles[0].title" :slogan="titles[0].content" />
            <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div class="relative mt-12">
                    <div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
                        <div v-for=" (feature, index) in features" :key="index"
                        class="bg-white space-y-3 p-4 border rounded-lg">
                        <span class="flex items-center mb-4 text-purple-600" v-html="feature.icon"></span>
                        <h5 class="text-lg font-semibold text-gray-800">{{ feature.title }}</h5>
                        <p class="mt-2 text-base">{{ feature.desc }}</p>
                    </div>
                </div>
            </div>
    </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'FeaturesSection',
    data() {
        return {
            titles: [
                {
                    heading: "Features",
                    title: "seemless features to make your work easier",
                    content: "Check out the great features of our site that make it easier for you to connect with others! We help you communicate easily, making your work simpler and opening up a world of smooth interaction."
                }
            ],
            features: [
                {
                    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' class='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
                    </svg>`,
                    title: "Speed Service",
                    desc: "Experience the best of both worlds with our exceptional translation service - where speed meets precision."
                },
                {
                    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' class='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
                    </svg>`,
                    title: "Datacenter security",
                    desc: "Make your words stand out with our promise of top-notch quality. We talk about excellence, Your message matters."
                },
                {
                    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' class='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' />
                    </svg>`,
                    title: "Build on your terms",
                    desc: "Stay in the now with our translations, always fresh, always up-to-date. Your content evolves, and so do we."
                },
                {
                    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' class='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h
                    0a11.959 11.959 0 00-8.402-3.714V2.714z' /></svg>`,
                    title: '24/7 Support',
                    desc: 'From Sunrise to Sunset and Beyond, Our Support is Here 24/7 to Keep You Moving Forward!'
                },
                {
                    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' class='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' />
                    </svg>`,
                    title: 'Flexible',
                    desc: 'Life Can Change in an Instant—That’s Why We’re Here to Be Flexible for You!'
                }
                
            ],
        }
    }
};
</script>