<template>
    <div class="bg-green-400">
        <nav class="py-1 px-10 flex justify-between items-center backdrop-filter">
            <div class="mix-blend-multiply">
                <router-link to="/">
                    <img src="/images/errehub-wight.webp" class="h-20" alt="brand logo">
                </router-link>
            </div>
            <div>
                <ul class="flex items-center justify-center">
                    <li class="mx-4">
                        <router-link activeClass="bg-indigo-400" to="/"
                            class="leading-6 text-white text-base font-medium py-2 px-4 rounded capitalize">
                            home
                        </router-link>
                    </li>
                    <li class="mx-4 relative">
                        <button type="button" @click="toggle()"
                            class="flex items-center text-white text-base font-medium rounded capitalize">
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
                                <div
                                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div
                                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
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
                                <div
                                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div
                                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                                        </svg>
                                    </div>
                                    <div @click="removeToggle()" class="flex-auto cursor-pointer">
                                        <router-link to="/correcter"
                                            class="capitalize block font-semibold text-gray-900">
                                            grammer checker
                                            <p class="capitalize mt-1 text-gray-600 font-normal">
                                                Use our service to correct anything you want
                                            </p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="mx-4">
                        <router-link activeClass="bg-indigo-400" to="/contact"
                            class="leading-6 text-white text-base font-medium py-2 px-4 rounded capitalize">contact</router-link>
                    </li>
                    <li class="mx-4">
                        <router-link activeClass="bg-indigo-400" to="/about-us"
                            class="leading-6 text-white text-base font-medium py-2 px-4 rounded capitalize">about us</router-link>
                    </li>
                </ul>
            </div>
            <div class="bg-indigo-400 rounded-md">
                <router-link to="/" class="inline-block py-2 px-4 text-white text-base font-medium capitalize">
                    Get started
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
        
        removeToggle() {
            this.isOpen = "hidden"
        }
    }
}
</script>