<script setup>
import Q1 from './question/Q1.vue';
import Q2 from './question/Q2.vue';
import Q3 from './question/Q3.vue';
import Q4 from './question/Q4.vue';
import Q5 from './question/Q5.vue';
import Q6 from './question/Q6.vue';
import Q7 from './question/Q7.vue';
import Q8 from './question/Q8.vue';
import Q9 from './question/Q9.vue';
import Q10 from './question/Q10.vue';
import Q11 from './question/Q11.vue';
import Q12 from './question/Q12.vue';
import Email from './question/Email.vue'
import {usePageStore} from '@/stores/Page'
import {useFormDataStore} from '@/stores/FormData'

const page = usePageStore()
const formData = useFormDataStore()
</script>


<template>
    <div>
        <Q1 v-if="page.form === 1"></Q1>
        <Q2 v-if="page.form === 2"></Q2>
        <Q3 v-if="page.form === 3"></Q3>
        <Q4 v-if="page.form === 4"></Q4>
        <Q5 v-if="page.form === 5"></Q5>
        <Q6 v-if="page.form === 6"></Q6>
        <Q7 v-if="page.form === 7"></Q7>
        <Q8 v-if="page.form === 8"></Q8>
        <Q9 v-if="page.form === 9"></Q9>
        <Q10 v-if="page.form === 10"></Q10>
        <Email v-if="page.form === 11"></Email>

        <div class="max-w-screen-sm mx-auto p-4 bg-white">
            <div>Q1 : {{ formData.Q1 }}</div>
            <div>Q2 : {{ formData.Q2 }}</div>
            <div>Q3 : {{ formData.Q3 }}</div>
            <div>Q4 : {{ formData.Q4 }}</div>
            <div>Q5 : {{ formData.Q5 }}</div>
            <div>Q6 : {{ formData.Q6 }}</div>
            <div>Q7 : {{ formData.Q7 }}</div>
            <div>Q8 : {{ formData.Q8 }}</div>
            <div>Q9 : {{ formData.Q9 }}</div>
            <div>Q10 : {{ formData.Q10 }}</div>
            <div>Q10 : {{ formData.Email }}</div>
        </div>
    </div>
</template>

