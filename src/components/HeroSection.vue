<template>
    <div :class="CustomClass" class="main_hero text-center w-11/12 mx-auto mt-40">
        <h4 :id="CustomId" class="text-base text-blue-800 capitalize font-medium">{{ heading }}</h4>
        <h1 class="text-balance text-5xl my-2 capitalize font-semibold text-black text-opacity-90">
            {{ title }}
        </h1>
        <p class="font-light text-balance text-xl text-opacity-80 lowercase text-gray-900">{{ slogan }}</p>
    </div>
</template>

<script>
export default {
    name: "HeroSection",
    props: {
        heading: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: false
        },
        slogan: {
            type: String,
            required: false
        },
        CustomId: {
            type: String,
            required: false
        },
        CustomClass: {
            type: String,
            required: false
        }
    }
}
</script>