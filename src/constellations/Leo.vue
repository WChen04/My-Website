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
    <div class="label">Leo</div>
  </div>
</template>

<script setup>
const metadata = {
  name: "Leo",
  img: "/imgs/leo.mp4",
  description:
    "Leo is pure energy. This one is about shared chaos, loud laughter, and making memories from wildly fun moments. Like the time my friends and I decided to dismantle a TV just because we could. This constellation doesn’t whisper. It roars.",
  caption: "Night Time Tech Shenigans",
};

const stars = [
  { x: 30, y: 200 }, // Dubhe (top left)
  { x: 110, y: 155 }, // Dubhe (top left)
  { x: 105, y: 195 }, // Merak (bottom left)
  { x: 190, y: 160 }, // Phecda (bottom right){ x: 90, y: 70 }, // Phecda (bottom right)
  { x: 210, y: 210 }, // Phecda (bottom right)
  { x: 215, y: 180 },
  { x: 200, y: 130 },
  { x: 240, y: 110 },
  { x: 260, y: 125 },
];

const lines = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [4, 5],
  [3, 5],
  [3, 6],
  [6, 7],
  [7, 8],
];
</script>

<style scoped>
@import "./sharedConstellationStyle.css";
</style>
