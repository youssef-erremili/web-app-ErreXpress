<template>

  <NavBar></NavBar>
  <HeaderSection></HeaderSection>

</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
    HeaderSection
  }
}
</script>