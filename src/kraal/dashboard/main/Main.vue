<script setup>
import { reactive } from "vue";
import Footer from "./footer/Footer.vue";
import Header from "./header/Header.vue";
import MainContainer from "./main/MainContainer.vue";

const {dropSidebar} = defineProps({dropSidebar:Function})
</script>


<script>
// export default {props: ['dropSidebar']}
</script>


<template>
  <div class="w-full pl-3 xl:pl-6">
    <Header :dropSidebar="dropSidebar"></Header>
    <MainContainer></MainContainer>
    <Footer></Footer>
  </div>
</template>
