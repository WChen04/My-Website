<script setup>
import { RouterView } from "vue-router";
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
</script>

<template>
  <Navbar />
  <Home msg="Hello, I'm William." />
  <RouterView />
</template>

<style scoped></style>
