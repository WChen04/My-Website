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
    <div class="label">Taurus</div>
  </div>
</template>

<script setup>
const metadata = {
  name: "Taurus",
  img: "/imgs/taurus.jpeg",
  description:
    "Taurus is the part of me that holds steady even when everything around me moves. It shows up in the way I plant myself when things get loud, how I stay calm under pressure, and how I carry strength without needing to prove it. This is where I feel solid. This is where I stand firm.",
  caption: "Waves come and go. I stay grounded.",
};

const stars = [
  { x: 50, y: 30 }, // Dubhe (top left)
  { x: 110, y: 65 }, // Dubhe (top left)
  { x: 30, y: 80 }, // Merak (bottom left)
  { x: 120, y: 120 }, // Phecda (bottom right){ x: 90, y: 70 }, // Phecda (bottom right)
  { x: 140, y: 95 }, // Phecda (bottom right)
  { x: 150, y: 110 },
  { x: 140, y: 125 },
  { x: 155, y: 130 },
  { x: 190, y: 160 },
  { x: 160, y: 180 },
  { x: 180, y: 220 },
  { x: 240, y: 170 },
  { x: 245, y: 200 },
  { x: 250, y: 210 },
];

const lines = [
  [0, 1],
  [2, 3],
  [1, 4],
  [4, 5],
  [3, 6],
  [5, 7],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [8, 11],
  [11, 12],
  [12, 13],
];
</script>

<style scoped>
@import "./sharedConstellationStyle.css";
</style>
