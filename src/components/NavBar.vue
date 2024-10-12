<template>
    <!-- <nav>
        <div class="p-5" id="navbarContainer">
            <div id="navbar"
                class="navbar flex justify-between items-center text-white w-8/12 mx-auto py-5 px-6 my-4 rounded-full shadow-lg bg-black">
                <section class="logo">
                    <router-link to="/" class="font-light capitalize">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            {{ brandName }}
                        </span>
                    </router-link>
                </section>
                <section class="links">
                    <ul class="flex">
                        <li class="mx-2">
                            <router-link to="/" class="font-light capitalize">home</router-link>
                        </li>
                        <li class="mx-2">
                            <router-link to="/services" class="font-light capitalize">Services</router-link>
                        </li>
                        <li class="mx-2">
                            <router-link to="/contact" class="font-light capitalize">contact</router-link>
                        </li>
                        <li class="mx-2">
                            <router-link to="/translate" class="font-light capitalize">translate</router-link>
                        </li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li class="mx-2">
                            <router-link to="/" class="font-light capitalize">Get started</router-link>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </nav> -->
    <div class="navbar">
        <nav class="py-1 px-10 flex justify-between items-center bg-white shadow-md">
            <div class="brand bg-red-400 block">
                <router-link to="/">
                    <img src="../../public/images/errehub-wight.webp" class="h-20" alt="brand logo">
                </router-link>
            </div>
            <div>
                <ul class="flex items-center justify-center">
                    <li class="mx-4">
                        <router-link activeClass="bg-gray-50" to="/"
                            class="leading-6 text-gray-900 text-base font-medium py-2 px-4 rounded capitalize">home</router-link>
                    </li>
                    <li class="mx-4 relative">
                        <button type="button" @click="toggle()"
                            class="flex items-center text-gray-900 text-base font-medium rounded capitalize">
                            <ion-icon class="mr-0.5" :name="icon" />
                            Services
                        </button>
                        <div :class="isOpen"
                            class="absolute -left-8 top-full z-30 mt-8 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div
                                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div
                                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                        </svg>
                                    </div>
                                    <div @click="removeToggle()" class="flex-auto cursor-pointer">
                                        <router-link to="/translation"
                                            class="capitalize block font-semibold text-gray-900">
                                            translation With AI
                                            <p class="capitalize mt-1 text-gray-600 font-normal">Get a better
                                                translation for you texts</p>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                                        </svg>
                                    </div>
                                    <div @click="removeToggle()" class="flex-auto cursor-pointer">
                                        <router-link to="/paraphrase"
                                            class="capitalize block font-semibold text-gray-900">
                                            paraphrasing
                                            <p class="capitalize mt-1 text-gray-600 font-normal">
                                                rewrite any text with our engine
                                            </p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="mx-4">
                        <router-link activeClass="bg-gray-50" to="/contact"
                            class="leading-6 text-gray-900 text-base font-medium py-2 px-4 rounded capitalize">contact</router-link>
                    </li>
                    <li class="mx-4">
                        <router-link activeClass="bg-gray-50" to="/correcter"
                            class="leading-6 text-gray-900 text-base font-medium py-2 px-4 rounded capitalize">correcter</router-link>
                    </li>
                </ul>
            </div>
            <div class="bg-indigo-400 rounded-md">
                <router-link to="/" class="inline-block py-2 px-4 text-white text-base font-medium capitalize">Get
                    started
                </router-link>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    name: "NavBar",
    data() {
        return {
            isOpen: "hidden",
            icon: "chevron-down-outline"
        }
    },
    methods: {
        toggle() {
            this.isOpen = this.isOpen == "hidden" ? "block" : "hidden"
            this.icon = this.icon == "chevron-down-outline" ? "chevron-up-outline" : "chevron-down-outline"
        },
        selectService(servicePath) {
            this.isOpen = "hidden"; 
            this.icon = "chevron-down-outline"; 
            this.$router.push(servicePath);
        },
        removeToggle() {
            this.isOpen = "hidden"
        }
    }
}
</script>
