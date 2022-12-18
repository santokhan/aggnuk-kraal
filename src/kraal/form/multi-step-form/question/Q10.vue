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

const data = reactive([]);
function setBirthPlace(e) {
    data[0] = e.target.value;
}
function setBirthDate(e) {
    data[1] = e.target.value;
}

const formData = useFormDataStore();
const page = usePageStore();
// For all questions
function previousForm() {
    page.decrement()

    formData.$patch({Q10: ""})  
}
// For all questions
function nextForm() {
    page.increment();
    
    formData.$patch({Q10: data})   
    // console.log(data);
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
            <QTitle>Where were you born?</QTitle>
            <QSubTitle></QSubTitle>
        </QHeader>
        <QMain>
            <form>
                <div class="mb-6 gap-2 items-center">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Birth Place</label>
                    <input type="text" class="block p-4 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" @change="setBirthPlace">
                </div>
                <div class="mb-6 gap-2 items-center">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Age between 14 year to 80 year</label>
                    <input type="date" min="1962-01-01" class="block p-4 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                        @change="setBirthDate">
                </div>
            </form>
        </QMain>
        <QFooter>
            <QBackButton :previousForm="previousForm"></QBackButton>
            <QNextButton :nextForm="nextForm"></QNextButton>
        </QFooter>
    </QContainer>
</template>
