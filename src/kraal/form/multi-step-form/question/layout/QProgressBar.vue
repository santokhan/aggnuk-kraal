<script setup>
import {usePageStore} from '@/stores/Page';

const page = usePageStore();
const width = {width: (page.form - 1) * 9 + '%'}
</script>
<template>
    <div>Setting up your Trueworth...</div>
    <div class="max-w-sm w-full h-3 bg-gray-200 relative rounded-xl overflow-hidden my-3">
        <div class="absolute h-full left-0 top-0 bg-red-500 rounded-xl" :style="width"></div>
    </div>
</template>