<script setup>
import Tab from "./tab/Tab.vue";
</script>
<script></script>
<template>
  <div class="w-full flex justify-between mb-8">
    <div class="flex gap-4 font-medium text-gray-700">
      <div
        class="flex gap-3 items-center px-5 py-2 border border-transparent hover:border-gray-200 rounded-full bg-white"
      >
        <div><i class="fa fa-bars" aria-hidden="true"></i></div>
        <div>Account</div>
      </div>
      <div
        class="flex gap-3 items-center px-5 py-2 border border-transparent hover:border-gray-200 rounded-full"
      >
        <div><i class="fas fa-chart-pie"></i></div>
        <div>Assets Allocation</div>
      </div>
      <div
        class="flex gap-3 items-center px-5 py-2 border border-transparent hover:border-gray-200 rounded-full"
      >
        <div><i class="fa fa-calendar" aria-hidden="true"></i></div>
        <div>Historical Balances</div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="border rounded w-8 h-8 flex justify-center items-center bg-white hover:bg-gray-100"
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        class="border rounded w-8 h-8 flex justify-center items-center bg-white hover:bg-gray-100"
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>
