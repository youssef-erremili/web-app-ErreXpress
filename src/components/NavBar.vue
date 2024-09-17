<template>
    <div class="p-5" id="navbarContainer">
        <div id="navbar"  class="navbar flex justify-between items-center text-white w-8/12 mx-auto py-5 px-6 my-4 rounded-full shadow-lg bg-black">
            <section class="logo">
                <CustomLink :href="brandUrl" class="flex items-center space-x-3">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        {{ brandName }}
                    </span>
                </CustomLink>
            </section>
            <section class="links">
                <ul class="flex">
                    <li class="mx-2" v-for="(link, index) in removeLastLink()" :key="index">
                        <CustomLink :href="link.url" class="font-light capitalize" >{{ link.text }}</CustomLink>
                    </li>
                </ul>
            </section>
            <section v-html="getLastLink()"></section>
        </div>
    </div>
</template>


<script>

import CustomLink from './CustomLink.vue';

export default {
    name: "NavBar",
    components: {
        CustomLink,
    },
    data() {
        return {
            temp: "",
            brandName: "Errehub",
            brandUrl: "index.html",
            links: [
                { text: "Home", url: "index.html" },
                { text: "Services", url: "services.html" },
                { text: "Features", url: "features.html" },
                { text: "contact", url: "contact.html" },
                { text: "Get started", url: "getstarted.html" },
            ]
        }
    },
    methods: {
        removeLastLink() {
            return this.links.slice(0, -1)
        },
        getLastLink() {
            let lastLink = this.links.findLast(element => element.text.length > 0);
            return `<a class="bg-white rounded-full p-3 text-black font-semibold" href="${lastLink.url}">${lastLink.text}</a>`;
        }
    },    
}


</script>
