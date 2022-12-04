<script setup>
import Footer from "./footer/Footer.vue";
import Header from "./header/Header.vue";
import MainContainer from "./main/MainContainer.vue";
</script>
<script>
export default {props: ['dropSidebar']}
</script>

<template>
  <div class="w-full lg:pl-8">
    <Header :dropSidebar="dropSidebar"></Header>
    <MainContainer></MainContainer>
    <Footer></Footer>
  </div>
</template>
