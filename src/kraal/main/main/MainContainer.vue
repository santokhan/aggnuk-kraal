<script setup>
import Button from "../header/button/Button.vue";
import Assets from "./assets/Assets.vue";
import Liabilites from "./liabilites/Liabilites.vue";
import SectionTop from  './top/SectionTop.vue'
import Chart from  './chart/Chart.vue'
import { GChart } from 'vue-google-charts';

console.log(GChart);
</script>

<template>
  <div class="w-full bg-white px-4 py-6 xl:px-6 rounded-xl mb-8 max-w-screen-xl mx-auto">
    <SectionTop></SectionTop>
    <section class="flex justify-between items-center flex-col xl:flex-row py-2">
      <div>
        <Assets></Assets>
        <Liabilites></Liabilites>
      </div>
      <Chart></Chart>
    </section>
  </div>
</template>

