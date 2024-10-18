<template>
    <div class="bg-green-400">
        <header class="block relative mx-auto pt-5 rounded-md mb-6 w-11/12">
            <div class="text-center my-16 px-10">
                <span class="flex items-center justify-evenly bg-white capitalize w-72 font-medium text-sm text-gray-700 rounded-full py-1.5 px-5 mb-3 mx-auto">
                    <img src="../../public/images/icon-title.svg" alt="icon">
                    {{ shortSlogan }}
                </span>
                <h1 class="text-6xl text-balance capitalize font-bold leading-tight">{{ theBigTitle }}</h1>
                <p class="text-balance text-lg text-gray-950 my-3">{{ slogan }}</p>
            </div>
            <div class="mt-16 w-2/3 mx-auto">
                <img class="mx-auto w-full rounded-t-xl rounded-tr-xl" src="../../public/images/hero-image.jpg"
                    alt="hero image">
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "HeaderSection",
    data() {
        return {
            shortSlogan: "unlock the power of our tools",
            theBigTitle: "Your Ultimate Destination for Translation and Grammar Perfection",
            slogan: "Perfect your words, and effortlessly connect the  entire world with unmatched precision, clarity, and confidence in every communication",
        }
    }
}

</script>