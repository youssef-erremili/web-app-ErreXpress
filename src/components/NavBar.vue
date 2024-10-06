<template>
    <nav>
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
    </nav>
</template>


<script>
export default {
    name: "NavBar",
    data() {
        return {
            temp: "",
            brandName: "Errehub",
            brandUrl: "/"
        }
    }
}


</script>
