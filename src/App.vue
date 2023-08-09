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

<!-- Things to do -->

<!-- About Page 
* Add photo of me in the about page 
* Add spotify thing 
* Write a little about myself
-->
<!-- Projects Page 
* Add Gifs of Degree Doctor 
* Finish the App and Make a Gif of it working
-->

<!-- Resume Page 
* Link Resume to the Pressable 
* When changing the tags, make sure the resume word is bolded like the others (Styling)
-->
