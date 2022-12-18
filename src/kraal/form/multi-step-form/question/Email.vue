<script setup>
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
import { useFormDataStore } from '@/stores/FormData';
import {usePageStore} from '@/stores/Page';
import { reactive } from 'vue';

const email = reactive({value: null})
function handleChange(e){
    email.value = e.target.value;
}

const formData = useFormDataStore();

const page = usePageStore();
function previousForm() {
    page.decrement();
}
function nextForm() {
    page.$patch({name: 'dashboard'})
    formData.$patch({email: email.value});
    console.log(formData);
}
</script>


<template>
    <QContainer>
        <QHeader>
            <QProgressBar></QProgressBar>
            <QTitle>Enter your email to continue</QTitle>
            <QSubTitle></QSubTitle>
        </QHeader>
        <QMain>
            <form>
                <div class="mb-6 gap-2 items-center">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                    <input type="email" placeholder="someone@mail.com" value="" @change="handleChange"
                        class="block p-4 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                </div>
            </form>
        </QMain>
        <QFooter>
            <QBackButton :previousForm="previousForm"></QBackButton>
            <QNextButton :nextForm="nextForm"></QNextButton>
        </QFooter>
    </QContainer>
</template>