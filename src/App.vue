<script setup>
import { RouterView } from "vue-router";
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <Home msg="Hi, I'm William." />
  <RouterView />
</template>

<style scoped></style>
