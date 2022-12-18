<script setup>
import { reactive } from 'vue';

const {showHide} = defineProps({showHide: Function})

const status = reactive({toggle: false})
function toggle() {
    status.toggle = status.toggle? false : true
}
</script>

<template>
    <div class="flex items-center md:order-2 xl:hidden">
        <button type="button" @click="toggle"><i v-if="status.toggle" class="fa fa-plus rotate-45" aria-hidden="true"></i><i v-else class="fa fa-bars" aria-hidden="true"></i></button>

        <div v-if="status.toggle" class="absolute right-0 top-full w-screen h-screen bg-noom animate-scale overflow-hidden">
            <div class="flex flex-col gap-5 items-center px-4 py-8 text-xl uppercase h-full">
                <a href="http://kraal.ai" class="block text-black noom-nav mx-1 font-normal brown-ll hover:underline">careers</a>
                <a href="http://kraal.ai" class="block text-black noom-nav mx-1 font-normal brown-ll hover:underline">product</a>
                <a href="http://kraal.ai" class="block text-black noom-nav mx-1 font-normal brown-ll hover:underline">freetools</a>
                <a href="http://kraal.ai" class="block text-black noom-nav mx-1 font-normal brown-ll hover:underline">company</a>
                <a href="http://kraal.ai" class="block text-black noom-nav mx-1 font-normal brown-ll hover:underline">support</a>
                <a href="http://kraal.ai" class="block text-black noom-nav mx-1 font-normal brown-ll hover:underline">login</a>
                <a href="http://kraal.ai" class="text-white bg-noom-light-blue font-normal rounded noom-nav px-10 py-2 text-center">learn more</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-scale {
    animation-name: scale;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-duration: 0.25s;
}

@keyframes scale {
    0% {
        height: 0;
    }

    100% {
        height: 100vh;
    }
}
</style>