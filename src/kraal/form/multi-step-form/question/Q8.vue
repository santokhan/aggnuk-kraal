<script setup>
import { reactive } from 'vue';
import QInputButton from './layout/QInputButton.vue';
import QProgressBar from './layout/QProgressBar.vue';
import QHeader from './layout/QHeader.vue';
import QTitle from './layout/QTitle.vue';
import QSubTitle from './layout/QSubTitle.vue';
import QMain from './layout/QMain.vue';
import QFooter from './layout/QFooter.vue';
import QContainer from './layout/QContainer.vue';
import QBackButton from './layout/QBackButton.vue';
import QNextButton from './layout/QNextButton.vue';
import {usePageStore} from '@/stores/Page';
import {useFormDataStore} from '@/stores/FormData';

const data = reactive({value: null});
function setData(e) {
    data.value=e.target.value;
}

const formData = useFormDataStore();
const page = usePageStore();
// For all questions
function previousForm() {
    page.decrement()

    formData.$patch({Q8: ""})  ;
}
// For all questions
function nextForm() {
    page.increment();
    
    formData.$patch({Q8: data.value})
    // console.log(data.value);   
}


const opt = [
    'Credit Cards',
    'Past Due Bills',
    'Private student loans',
    'Back taxes owed to IRS',
    'Money owed to family or friends',
    'Auto loan (or future lease payments added up)',
    'Financed purchases (furniture, appliances, electronics, cell phone)',
    'Personal loans owed to a bank or financial institution',
]
</script>


<template>
    <QContainer>
        <QHeader>
            <QProgressBar></QProgressBar>
            <QTitle>What percent of your income do you dave towards retirement for living expenses?</QTitle>
            <QSubTitle></QSubTitle>
        </QHeader>
        <QMain>
            <form>
                <div class="mb-6 flex gap-2 items-center">
                    <input type="number" class="block p-4 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" @change="setData">
                    <span class="text-4xl font-medium">%</span>
                </div>
            </form>
        </QMain>
        <QFooter>
            <QBackButton :previousForm="previousForm"></QBackButton>
            <QNextButton :nextForm="nextForm"></QNextButton>
        </QFooter>
    </QContainer>
</template>
