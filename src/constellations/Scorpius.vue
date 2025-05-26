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
    <div class="label">Scorpius</div>
  </div>
</template>

<script setup>
const metadata = {
  name: "Scorpius",
  img: "/imgs/scorpius.jpeg",
  description:
    "Scorpius reflects the part of me that works in silence. This is where I check my progress without distractions and hold myself to a higher standard. I do not look for praise in the mirror. I look for more. Still frame. Still building.",
  caption: "Still frame. Still building",
};

const stars = [
  { x: 65, y: 165 },
  { x: 50, y: 159 },
  { x: 30, y: 190 },
  { x: 20, y: 220 },
  { x: 55, y: 240 },
  { x: 95, y: 235 },
  { x: 125, y: 225 },
  { x: 130, y: 180 },
  { x: 140, y: 140 },
  { x: 160, y: 110 },
  { x: 190, y: 95 },
  { x: 240, y: 90 },
  { x: 235, y: 60 },
  { x: 220, y: 45 },
  { x: 239, y: 125 },
  { x: 234, y: 145 },
];

const lines = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [11, 14],
  [14, 15],
];
</script>

<style scoped>
@import "./sharedConstellationStyle.css";
</style>
