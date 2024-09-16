<template>

  <NavBar></NavBar>
  <HeaderSection></HeaderSection>
  <main>
    <FeatureSection></FeatureSection>
    <ServiceSection></ServiceSection>
  </main>

</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FeatureSection from "./components/FeatureSection.vue";
import ServiceSection from "./components/ServiceSection.vue";

export default {
  components: {
    NavBar,
    HeaderSection,
    FeatureSection,
    ServiceSection,
  }
}
</script>