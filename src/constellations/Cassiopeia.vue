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
    <div class="label">Cassiopeia</div>
  </div>
</template>

<script setup>
const metadata = {
  name: "Cassiopeia",
  img: "/imgs/cassio.jpeg",
  description:
    "Cassiopeia feels like a burst of energy. It is confidence without overthinking, style without a filter, and moments that light up in unexpected ways. This is the version of me that leans into chaos and makes it unforgettable.",
  caption: "We beat the bomb!",
};

const stars = [
  { x: 40, y: 60 },
  { x: 80, y: 120 },
  { x: 150, y: 110 },
  { x: 180, y: 170 },
  { x: 240, y: 120 },
];

const lines = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];
</script>

<style scoped>
@import "./sharedConstellationStyle.css";
</style>
