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
    <div class="label">Ursa Major</div>
  </div>
</template>

<script setup>
import { cameraPosition } from "three/tsl";

const metadata = {
  name: "Ursa Major",
  img: "/imgs/ursamajor.jpg",
  description:
    "Ursa Major reminds me of the familiar. The people and places that keep me grounded no matter how far I go. It is the hoodie I have worn too many times, the mirror photo I did not overthink, and the friend who always feels like home.",
  caption: "This is what constant looks like.",
};

const stars = [
  { x: 10, y: 30 }, // Dubhe (top left)
  { x: 40, y: 35 }, // Dubhe (top left)
  { x: 70, y: 55 }, // Merak (bottom left)
  { x: 90, y: 70 }, // Phecda (bottom right){ x: 90, y: 70 }, // Phecda (bottom right)
  { x: 170, y: 80 }, // Phecda (bottom right)
  { x: 150, y: 120 },
  { x: 95, y: 105 }, // Alioth (top right)
  { x: 80, y: 140 }, // Mizar (top right)
  { x: 100, y: 180 }, // Alkaid (top right)
  { x: 130, y: 210 },
  { x: 150, y: 210 },
  { x: 240, y: 95 },
  { x: 280, y: 110 },
  { x: 200, y: 120 },
  { x: 190, y: 160 },
  { x: 210, y: 180 },
  { x: 230, y: 200 }, // Alioth (top right)
  { x: 225, y: 205 }, // Alkaid (top right)
];

const lines = [
  [0, 1],
  [1, 2], // Dubhe → Merak
  [2, 3], // Merak → Phecda
  [3, 4],
  [4, 5], // Phecda → Alioth
  [5, 6],
  [6, 7],
  [6, 3],
  [7, 8],
  [8, 9],
  [8, 10],
  [4, 11],
  [11, 12],
  [12, 13],
  [13, 14],
  [14, 5],
  [14, 15],
  [15, 16],
  [15, 17], // Alioth → Alkaid
];
</script>

<style scoped>
@import "./sharedConstellationStyle.css";
</style>
