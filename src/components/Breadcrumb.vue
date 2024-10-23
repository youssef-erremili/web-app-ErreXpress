<template>
    <div class="my-10 mx-10">
        <ul>
            <li class="flex items-center" v-for="(crumb, index) in breadcrumbs" :key="index">
                <router-link class="text-base capitalize text-gray-800 mr-1" to="/">home</router-link>
                <span class="text-gray-500 text-[20px] font-serif mx-0.5 " v-if="index < breadcrumbs.length + 1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-indigo-400 w-3 -rotate-90 leading-none"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                            clip-rule="evenodd" data-original="#000000"></path>
                    </svg>
                </span>
                <router-link class="text-base capitalize text-indigo-600 rounded-md py0.5 px-1" :to="crumb.path">
                    {{ crumb.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        breadcrumbs() {
            const pathArray = this.$route.path.split('/').filter(Boolean);
            const breadcrumbs = [];
            let path = '';

            pathArray.forEach((segment) => {
                path += `/${segment}`;
                breadcrumbs.push({
                    name: segment.charAt(0) + segment.slice(1), // Capitalize first letter
                    path: path,
                });
            }); 
            return breadcrumbs;
        },
    },
};
</script>
