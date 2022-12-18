<script setup>
defineProps(['nextForm'])
</script>

<template>
    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-xl px-12 py-4 mb-2 flex gap-4 items-center"
        @click="nextForm">Continue <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
</template>