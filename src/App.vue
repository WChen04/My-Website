<script setup>
import { RouterView } from "vue-router";
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style scoped>
#Nav {
  display: flex;
  padding: 30px;
}
</style>
