<template>
  <header>
    <NavBar></NavBar>
    <HeaderSection></HeaderSection>
  </header>
  <main>
    <FeatureSection></FeatureSection>
    <ServiceSection></ServiceSection>
  </main>
  <footer>
      <FooterSection></FooterSection>
  </footer>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FeatureSection from "./components/FeatureSection.vue";
import ServiceSection from "./components/ServiceSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  components: {
    NavBar,
    HeaderSection,
    FeatureSection,
    ServiceSection,
    FooterSection
  }
}
</script>