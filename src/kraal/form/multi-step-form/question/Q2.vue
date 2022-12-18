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
    // console.log(data);
}

const formData = useFormDataStore();
const page = usePageStore();
// For all questions
function previousForm() {
    page.decrement()

    formData.$patch({Q2: ""});
}
// For all questions
function nextForm() {
    page.increment();
    
    formData.$patch({Q2: data})   
}


const opt = [
    'Primary residence',
    'Inherited IRA',
    'Vacation Property',
    'Investment Property ',
    'Collectibles',
    'Cash Value Life Insurance',
    'Revocable Trust',
    'Vehicles (if not a lease)',
    'Irrevocable trust (if you’re the beneficiary)',
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
            <QInputButton :setData="setData" :value="opt[0]">
                <img src="/src/assets/image/icon/3/pin.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[1]">
                <img src="/src/assets/image/icon/3/save-money.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[2]">
                <img src="/src/assets/image/icon/3/home.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[3]">
                <img src="/src/assets/image/icon/3/apartment.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[4]">
                <img src="/src/assets/image/icon/3/collection.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[5]">
                <img src="/src/assets/image/icon/3/coins.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[6]">
                <img src="/src/assets/image/icon/3/trust.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[7]">
                <img src="/src/assets/image/icon/3/shield.png" alt="loan" class="w-14" />
            </QInputButton>
            <QInputButton :setData="setData" :value="opt[8]">
                <img src="/src/assets/image/icon/3/car.png" alt="loan" class="w-14" />
            </QInputButton>
        </QMain>
        <QFooter>
            <QBackButton :previousForm="previousForm"></QBackButton>
            <QNextButton :nextForm="nextForm"></QNextButton>
        </QFooter>
    </QContainer>
</template>
