<script setup>
import { reactive } from 'vue';


const {value, setData} = defineProps({
    value: String,
    setData: Function,
    active: String,
})


const status = reactive({isActive: false})
function updateData() {
    status.isActive = !status.isActive;
    setData(value);
}
</script>


<template>
    <button v-if="value" type="button" :class="'w-28 flex flex-col gap-8 py-8 px-6 items-center group shadow-xl border rounded-3xl capitalize ' + active" @click="updateData">
        <slot></slot>
        <div class="h-6 overflow-hidden group-hover:h-auto">{{ value }}</div>
    </button>
</template>