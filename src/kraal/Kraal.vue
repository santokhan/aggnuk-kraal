<script setup>
import Dashboard from './dashboard/Dashboard.vue';
import Form from './form/Form.vue';
import Home from './home/Home.vue';
import {usePageStore} from '@/stores/Page';
const page = usePageStore();
</script>


<template>
  <Home v-if="page.name === 'home'"></Home>
  <Form v-if="page.name === 'form'"></Form>
  <Dashboard v-if="page.name === 'dashboard'"></Dashboard>
</template>
