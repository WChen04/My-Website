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
    <div class="label">Orion</div>
  </div>
</template>

<script setup>
const metadata = {
  name: "Orion",
  img: "/imgs/Nature.jpeg",
  description:
    "Orion is momentum in motion. I see it when I’m mid-sprint on a new idea, hiking a trail with music in my ears, or building something late into the night. It's the part of me that stays curious, never content, always reaching for the next star.",
  caption: "Feet on the trail, head in the stars.",
};

const stars = [
  { x: 70, y: 20 }, // Meissa
  { x: 95, y: 15 }, // Betelgeuse
  { x: 60, y: 60 }, // Bellatrix
  { x: 70, y: 50 }, // Alnitak
  { x: 75, y: 90 }, // Alnilam
  { x: 100, y: 110 }, // Mintaka
  { x: 140, y: 90 }, // Saiph
  { x: 170, y: 120 }, // Rigel
  { x: 150, y: 180 }, // Bellatrix
  { x: 140, y: 190 }, // Bellatrix
  { x: 130, y: 200 },
  { x: 120, y: 270 }, // Bellatrix
  { x: 190, y: 260 }, // Bellatrix
  { x: 250, y: 110 }, // Bellatrix
  { x: 245, y: 85 }, // Bellatrix
  { x: 230, y: 70 },
  { x: 245, y: 135 }, // Bellatrix
  { x: 230, y: 145 },
];

const lines = [
  [0, 2],
  [1, 3], // Meissa → Bellatrix
  [2, 3],
  [2, 4], // Bellatrix → Alnitak
  [3, 4], // Alnitak → Alnilam
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [5, 10],
  [10, 11],
  [11, 12],
  [12, 8],
  [13, 7],
  [13, 14],
  [14, 15],
  [13, 16],
  [16, 17],
];
</script>
<style scoped>
@import "./sharedConstellationStyle.css";
</style>
