<template>
  <div class="Navigation">
    <li><router-link to="/about">About</router-link></li>
    <li>Resume</li>
    <li><router-link to="/contact">Contact</router-link></li>
  </div>
</template>

<style scoped>
.Navigation {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  border-radius: 0.5em;
  margin-bottom: 10em;
}
li {
  color: hsla(159, 42%, 88%, 1);
  display: inline-block;
  position: relative;
}

li::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: hsla(159, 42%, 88%, 1);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

li:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
