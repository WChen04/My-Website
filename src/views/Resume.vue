<script setup></script>

<template>
  <h1>hi</h1>
  <div class="test">
    <a :href="targetUrl">
      <img :src="imageUrl" :alt="imageAlt" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetUrl: "https://www.example.com",
      imageUrl: require("@/public/Resume.pdf"), // Adjust the path as needed
      imageAlt: "My Image",
    };
  },
};
</script>

<style scoped>
iframe {
  padding-top: -1rem;
}
</style>
