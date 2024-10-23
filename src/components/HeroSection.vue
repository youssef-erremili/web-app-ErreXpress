<template>
    <div class="text-center w-11/12 mx-auto">
        <h4 class="text-base text-blue-800 capitalize font-medium">{{ heading }}</h4>
        <h2 class="text-gray-800 text-3xl font-semibold sm:text-4xl capitalize">
            {{ title }}
        </h2>
        <p class="font-normal lowercase text-balance text-opacity-80 text-gray-900">{{ slogan }}</p>
    </div>
</template>

<script>
export default {
    name: "HeroSection",
    props: {
        heading: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        slogan: {
            type: String,
            required: false
        },
    }
}
</script>