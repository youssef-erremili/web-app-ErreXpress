<template>
    <div>
        <Breadcrumb />
        <router-view />
    </div>
    <div class="container mx-auto py-5">
        <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div class="max-h-96 md:h-screen">
                <img class="w-screen h-screen object-cover object-top rounded-md" src="/images/yousseferremili.jpg"
                    alt="developer of this website youssef erremili">
            </div>
            <div class="flex p-10">
                <div class="mb-auto mt-auto max-w-lg">
                    <h1 class="text-3xl uppercase">Youssef eremili</h1>
                    <p class="font-semibold mb-5 capitalize">full stack developer</p>
                    <p>Competent full-stack developer, specializing in HTML5, CSS3, JavaScript, Vuejs, Tailwind, APIs,
                        PHP, Laravel and MySQL. I studied web development at Solicode, where I gained hands-on
                        experience doing various projects.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <FooterSection />
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
    name: "AboutView",
    components: {
        Breadcrumb
    }
}
</script>