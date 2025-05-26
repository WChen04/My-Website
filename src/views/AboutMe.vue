<template>
  <div class="about-me-section">
    <h2 class="about-title">About Me</h2>
    <div class="about-me-description">
      <p>
        These stars are not random. Every constellation here is a piece of me.
        Some come from late nights building projects no one asked for. Some are
        built from loud laughs, quiet walks, and good music on repeat. I learn
        by doing. I lead by listening. I build by showing up again and again.
        Click around. Each constellation tells a story I am still writing.🌠
      </p>
    </div>
  </div>
  <div
    class="carousel-wrapper"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <button class="nav left" @click="prev">&#8249;</button>

    <div class="carousel-track" :style="trackStyle">
      <div
        class="carousel-slide"
        v-for="(component, index) in components"
        :key="index"
        :style="{ flex: `0 0 ${100 / itemsPerView}%` }"
      >
        <component :is="component" @select="selected = $event" />
      </div>
    </div>

    <button class="nav right" @click="next">&#8250;</button>

    <PolaroidModal v-if="selected" :item="selected" @close="selected = null" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Orion from "../constellations/Orion.vue";
import UrsaMajor from "../constellations/UrsaMajor.vue";
import Cassiopeia from "../constellations/Cassiopeia.vue";
import UrsaMinor from "../constellations/UrsaMinor.vue";
import Taurus from "../constellations/Taurus.vue";
import Scorpius from "../constellations/Scorpius.vue";
import Leo from "../constellations/Leo.vue";
import PolaroidModal from "./PolaroidModal.vue";

const selected = ref(null);
const rawComponents = [
  Orion,
  UrsaMajor,
  Cassiopeia,
  UrsaMinor,
  Taurus,
  Scorpius,
  Leo,
];

const buffer = 2;
const itemsPerView = 2;
const components = computed(() => [
  ...rawComponents.slice(-buffer),
  ...rawComponents,
  ...rawComponents.slice(0, buffer),
]);

const activeIndex = ref(buffer);
const isTransitioning = ref(true);
const slideCount = computed(() => components.value.length);

const trackStyle = computed(() => {
  const totalWidth = (components.value.length * 12) / itemsPerView;
  const offset = (activeIndex.value * 100) / itemsPerView;
  return {
    transform: `translateX(-${offset}%)`,
    width: `${totalWidth}%`,
    transition: isTransitioning.value ? "transform 0.4s ease" : "none",
  };
});

const next = () => {
  isTransitioning.value = true;
  activeIndex.value++;
  if (activeIndex.value === rawComponents.length + buffer) {
    setTimeout(() => {
      isTransitioning.value = false;
      activeIndex.value = buffer;
    }, 400);
  }
};

const prev = () => {
  isTransitioning.value = true;
  activeIndex.value--;
  if (activeIndex.value === buffer - 2) {
    setTimeout(() => {
      isTransitioning.value = false;
      activeIndex.value = rawComponents.length + buffer - 2;
    }, 400);
  }
};

const touchStartX = ref(0);
const onTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].clientX;
};
const onTouchEnd = (e) => {
  const diff = e.changedTouches[0].clientX - touchStartX.value;
  if (diff > 40) prev();
  else if (diff < -40) next();
};
</script>

<style>
.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.carousel-track {
  display: flex;
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: #aaa;
  cursor: pointer;
  user-select: none;
}

.nav.left {
  left: 1rem;
}

.nav.right {
  right: 1rem;
}
.about-me-section {
  text-align: center;
  color: #e0e7ff;
  margin-bottom: 2rem;
  /* background: radial-gradient(ellipse at center, #0f172a 0%, #000 100%); */
  padding: 2rem 1rem;
  border-radius: 1rem;
  /* box-shadow: 0 0 40px rgba(138, 180, 255, 0.1); */
}

.about-title {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  /* color: #c7d2fe; */
  letter-spacing: 0.05em;
  text-shadow: 0 0 6px rgba(136, 170, 255, 0.3);
}

.about-me-description p {
  font-size: 1.15rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  color: #a5b4fc;
  text-shadow: 0 0 4px rgba(136, 170, 255, 0.15);
  /* background: rgba(255, 255, 255, 0.03); */
  padding: 1.5rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(4px);
  /* border: 1px solid rgba(138, 180, 255, 0.1); */
}
.about-me-section {
  font-family: "Manrope", sans-serif;
}
</style>
