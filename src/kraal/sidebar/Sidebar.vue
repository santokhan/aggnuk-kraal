<script setup>
import Logo from "./logo/Logo.vue";
import Nav from "./nav/Nav.vue";
import IconNav from "./nav/IconNav.vue";
</script>
<script>
export default {
  data(){
    return {
      expand: true,
      sidebar: "hidden",
    }
  },
  methods:{
    collapse(){
      this.expand = this.expand === true ? false : true;
    },
    dropSidebar(){
      this.sidebar = this.sidebar === "hidden" ? "" : "hidden"
    }
  }
}
</script>
<template>
  <div class="lg:block pr-2 lg:px-4" :class="'hidden'">
    <Logo class="pb-8 pt-2"></Logo>
    <Nav v-if="expand" :collapse="collapse"></Nav>
    <IconNav v-else :collapse="collapse"></IconNav>
  </div>
</template>
