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

const formData = useFormDataStore();

const data = reactive([]);
function setData(params) {
    if(data.indexOf(params)===-1){
        data.push(params);
    }else{
        const index=data.indexOf(params);
        data.splice(index,1)
    }
    // console.log(data);
}
// setData("new array");
// setData("new array");


// For first question only
const page = usePageStore();
function backToHome() {
    page.$patch({name:'home'})

    formData.$patch({Q1: ""})  
}


// For all questions
function nextForm() {
    page.increment();
    
    formData.$patch({Q1: data})   
}


const opt = [
    'Savings Account',
    '529 plan',
    'Company Stock',
    'Checking account',
    'Educational IRA',
    'Private Equity',
    'Non-retirement investments/Brokerage account',
    'Custodial account',
    'Ownerships Stake in your business or another business',
]
</script>


<template>
    <QContainer>
        <QHeader>
            <QProgressBar></QProgressBar>
            <QTitle>Bank account and kids savings</QTitle>
            <QSubTitle></QSubTitle>
        </QHeader>
        <QMain>
            <QInputButton :setData="setData" :value="opt[0]">
                <img src="/src/assets/image/icon/2/saving.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[1]">
                <img src="/src/assets/image/icon/2/planning.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[2]">
                <img src="/src/assets/image/icon/2/increasing.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[3]">
                <img src="/src/assets/image/icon/2/planning.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[4]">
                <img src="/src/assets/image/icon/2/graduation-cap.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[5]">
                <img src="/src/assets/image/icon/2/pie-chart.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[6]">
                <img src="/src/assets/image/icon/2/invest.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[7]">
                <img src="/src/assets/image/icon/2/hand.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[8]">
                <img src="/src/assets/image/icon/2/stake.png" alt="loan" class="w-14" />
            </QInputButton>
        </QMain>
        <QFooter>
            <QBackButton :previousForm="backToHome"></QBackButton>
            <QNextButton :nextForm="nextForm"></QNextButton>
        </QFooter>
    </QContainer>
</template>
