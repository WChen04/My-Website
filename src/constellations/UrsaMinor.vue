<template>
  <div class="constellation-wrapper" @click="$emit('select', metadata)">
    <svg class="lines" width="300" height="300">
      <line
        v-for="(line, i) in lines"
        :key="i"
        :x1="stars[line[0]].x"
        :y1="stars[line[0]].y"
        :x2="stars[line[1]].x"
        :y2="stars[line[1]].y"
        stroke="#88aaff"
        stroke-width="1"
      />
    </svg>
    <div
      v-for="(star, i) in stars"
      :key="i"
      class="star"
      :style="{ left: star.x + 'px', top: star.y + 'px' }"
    />
    <div class="label">Ursa Minor</div>
  </div>
</template>

<script setup>
const metadata = {
  name: "Ursa Minor",
  img: "/imgs/ursaminor.jpeg",
  description:
    "Ursa Minor holds space for the quiet parts of me. It is late-night reflection, solo walks, and the kind of clarity that only shows up when everything else fades. I do not always need to be seen to be centered. This is where I return to when I want to feel aligned again.",
  caption: "I think best when the world gets quiet.",
};

const stars = [
  { x: 10, y: 110 }, // Dubhe (top left)
  { x: 90, y: 75 }, // Dubhe (top left)
  { x: 40, y: 155 }, // Merak (bottom left)
  { x: 110, y: 110 }, // Phecda (bottom right){ x: 90, y: 70 }, // Phecda (bottom right)
  { x: 170, y: 90 }, // Phecda (bottom right)
  { x: 230, y: 100 },
  { x: 270, y: 130 },
];

const lines = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
];
</script>

<style scoped>
@import "./sharedConstellationStyle.css";
</style>
