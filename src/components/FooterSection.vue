<template>
    <footer class="text-gray-400 px-20 py-10 w-full mt-32 bg-slate-950">
        <div class="max-w-lg sm:mx-auto sm:text-center backdrop-filter">
            <img src="/images/errehub-dark.webp" class="backdrop-filter sm:mx-auto" />
            <ul class="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                <li v-for="item in footerNavs" :key="item.id" class="hover:text-gray-800">
                    <router-link :to="item.href">{{ item.name }}</router-link>
                </li>
            </ul>
            <p class="leading-relaxed font-light my-4 text-center text-[15px]">
                Competent full-stack developer, specializing in HTML5, CSS3, JavaScript, Vuejs, Tailwind, APIs, PHP,
                Laravel and MySQL. I studied web development at Solicode, where I gained hands-on experience doing
                various projects!
            </p>
        </div>
        <div class="mt-8 items-center justify-between sm:flex">
            <div class="mt-4 sm:mt-0">
                &copy; 2024 ErreXpress All rights reserved.
            </div>
            <div class="mt-6 sm:mt-0">
                <ul class="flex items-center space-x-4">
                    <li class="p-2.5 border rounded-full overflow-hidden bg-white">
                        <a target="_blank" href="https://personal-portfolio-umber-nu.vercel.app/">
                            <img src="/images/globe.png" width="30" height="30" alt="portfolio">
                        </a>
                    </li>

                    <li class="p-2.5 border rounded-full overflow-hidden bg-white">
                        <a target="_blank" href="https://github.com/youssef-erremili">
                            <img src="/images/github.png" width="30" height="30" alt="github">
                        </a>
                    </li>

                    <li class="p-2.5 border rounded-full overflow-hidden bg-white">
                        <a target="_blank" href="https://www.linkedin.com/in/youssef-erremili-100070296/">
                            <img src="/images/linkedin.png" width="30" height="30" alt="linkden">
                        </a>
                    </li>

                    <li class="p-2.5 border rounded-full overflow-hidden bg-white">
                        <a target="_blank" href="https://www.instagram.com/youssef_erremili/?locale=gb&hl=am-et">
                            <img src="/images/instagram.png" width="30" height="30" alt="instagram">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterSection",
    data() {
        return {
            footerNavs: [
                {
                    href: '/',
                    name: 'Home'
                },
                {
                    href: '',
                    name: 'Services'
                },
                {
                    href: '',
                    name: 'About Us'
                },
                {
                    href: '',
                    name: 'Contact'
                }
            ]
        }
    },
}
</script>
