<template>
    <header class="block relative mx-auto pt-5  rounded-md my-6 w-11/12 custom-bg">
        <div class="header_text text-center my-16 px-10">
            <span class="bg-white uppercase font-bold text-sm text-black rounded-full inline-block py-1 mb-3 px-5 w-auto">{{ shortSlogan }}</span>
            <h1 class="text-6xl text-balance capitalize font-bold leading-tight">{{ theBigTitle }}</h1>
            <p class="text-balance text-lg text-gray-950 my-3">{{ slogan }}</p>
        </div>
        <div class="mt-16 w-2/3 mx-auto">
            <img class="mx-auto w-full rounded-t-xl rounded-tr-xl" src="../assets/images/hero-image.jpg"  alt="hero image">
        </div>
    </header>
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