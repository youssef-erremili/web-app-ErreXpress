<template>
    <div>
        <HeaderSection />
        <main>
            <FeatureSection />
            <ServiceSection />
        </main>
        <footer>
            <FooterSection />
        </footer>
    </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
    name: "HomeView",
    components: {
        NavBar
    }
}
</script>

<style></style>