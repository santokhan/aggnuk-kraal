<script setup>
import AbsoluteSidebar from "./absolutesidebar/AbsoluteSidebar.vue";
import Main from "./main/Main.vue";
import Sidebar from "./sidebar/Sidebar.vue";
</script>

<script>
export default {
    data() {
        return {
            sidebar: true,
        };
    },
    methods: {
        dropSidebar() {
            this.sidebar = this.sidebar ? false : true;
        }
    },
    components: { AbsoluteSidebar }
}
</script>

<template>
  <div class="w-full font-['Poppins',_sans-serif] ease-in-out">
    <div class="w-full h-screen overflow-y-auto flex p-4 xl:p-12 bg-gray-50 text-gray-900">
      <Sidebar v-if="sidebar"></Sidebar>
      <AbsoluteSidebar v-else></AbsoluteSidebar>
      <Main :dropSidebar="dropSidebar"></Main>
    </div>
  </div>
</template>
