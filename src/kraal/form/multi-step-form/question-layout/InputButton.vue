<script>
export default {
    props:['value'],
    data(){
        return{
            isActive: false
        }
    },methods: {logging(){
        console.log(this.value);
        this.isActive=true;
    }}
}
</script>


<template>
    <button type="button" class="w-20 flex flex-col gap-8 py-8 px-6 items-center"
        :class="isActive ? 'bg-indigo-50 text-indigo-400 shadow-xl shadow-indigo-300/25 border-2 border-indigo-400 rounded-3xl' : 'bg-white text-gray-900 shadow-xl border-2 border-white rounded-3xl'"
        @click="logging">
        <slot></slot>
        {{ value }}
    </button>
</template>