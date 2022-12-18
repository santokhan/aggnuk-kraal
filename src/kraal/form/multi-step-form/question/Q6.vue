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
import QInputButtonSquare from './layout/QInputButtonSquare.vue';

const data = reactive({value: null});
function setData(params) {
    data.value = params;
}
// setData("new array");
// setData("new array");

const formData = useFormDataStore();
const page = usePageStore();
// For all questions
function previousForm() {
    page.decrement()

    formData.$patch({Q6: ""})  
}
// For all questions
function nextForm() {
    page.increment();
    
    formData.$patch({Q6: data.value})   
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

function active(params) {
    return data.value === params? "bg-red-50 text-red-500 shadow-red-200/25 border-red-500":""
}
</script>


<template>
    <QContainer>
        <QHeader>
            <QProgressBar></QProgressBar>
            <QTitle>How prepared are yout for retirement financially? Scale of 1 to 5</QTitle>
            <QSubTitle></QSubTitle>
        </QHeader>
        <QMain>
            <QInputButtonSquare :value="'1'" :setData="setData" :active="active('1')">
            </QInputButtonSquare>
            <QInputButtonSquare :value="'2'" :setData="setData" :active="active('2')">
            </QInputButtonSquare>
            <QInputButtonSquare :value="'3'" :setData="setData" :active="active('3')">
            </QInputButtonSquare>
            <QInputButtonSquare :value="'4'" :setData="setData" :active="active('4')">
            </QInputButtonSquare>
            <QInputButtonSquare :value="'5'" :setData="setData" :active="active('5')">
            </QInputButtonSquare>
        </QMain>
        <QFooter>
            <QBackButton :previousForm="previousForm"></QBackButton>
            <QNextButton :nextForm="nextForm"></QNextButton>
        </QFooter>
    </QContainer>
</template>
