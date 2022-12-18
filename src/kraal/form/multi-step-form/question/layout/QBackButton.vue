<script setup>
defineProps(['previousForm'])
</script>

<template>
    <button type="button" class="focus:outline-none text-gray-900 bg-red-50 hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-xl px-12 py-4 mb-2 flex gap-4 items-center"
        @click="previousForm"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
</template>