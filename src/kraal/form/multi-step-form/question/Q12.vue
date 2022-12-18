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
function setData(params) {
    if(data.indexOf(params)===-1){
        data.push(params);
    }else{
        const index=data.indexOf(params);
        data.splice(index,1)
    }
    console.log(data);
}
// setData("new array");
// setData("new array");

const formData = useFormDataStore();
const page = usePageStore();
// For all questions
function previousForm() {
    page.decrement()

    formData.$patch({Q2: ""})  
}
// For all questions
function nextForm() {
    page.increment();
    
    formData.$patch({Q2: data})   
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
            <QTitle>Property and Other Assets</QTitle>
            <QSubTitle></QSubTitle>
        </QHeader>
        <QMain>
            <QInputButton :value="opt[0]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :value="opt[1]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :value="opt[2]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :value="opt[3]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :value="opt[4]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :value="opt[5]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :value="opt[6]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :value="opt[7]" :setData="setData">
                <img src="/src/assets/image/icon/1/loan.png" alt="loan" class="w-14" />
            </QInputButton>
        </QMain>
        <QFooter>
            <QBackButton :previousForm="previousForm"></QBackButton>
            <QNextButton :nextForm="nextForm"></QNextButton>
        </QFooter>
    </QContainer>
</template>
