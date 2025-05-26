<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="star-animation"></div>
    <div class="polaroid">
      <video
        v-if="item.img.endsWith('.mp4')"
        :src="item.img"
        controls
        autoplay
        muted
        loop
        class="media"
      ></video>
      <img v-else :src="item.img" alt="modal" class="media" />
      <h3>{{ item.caption }}</h3>
      <p>{{ item.description }}</p>
      <button class="close-button" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["item"]);
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background: rgba(10, 10, 20, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.4s ease;
  overflow: hidden;
}

.star-animation::before,
.star-animation::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 20px 30px #88aaff, 60px 80px #aac8ff, 120px 40px #88aaff,
    180px 90px #cfd8ff, 240px 10px #d0e4ff, 300px 130px #ffffff;
  animation: twinkle 2s infinite ease-in-out alternate;
}

@keyframes twinkle {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.polaroid {
  background: #fefefe;
  padding: 1.5rem 1rem 1.5rem;
  border-radius: 12px;
  width: 320px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(138, 180, 255, 0.15);
  border: 10px solid white;
  border-bottom: 40px solid white;
  position: relative;
  transform: rotate(-2deg);
  animation: popIn 0.5s ease;
  background-image: radial-gradient(circle at 10% 10%, #fff 0.5%, #fefefe 100%);
  overflow: hidden;
}

.media {
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.polaroid h3 {
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
  color: #111;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.03em;
  position: relative;
}

.polaroid h3::before {
  content: "✦";
  position: absolute;
  left: -16px;
  top: 0;
  color: #88aaff;
}

.polaroid p {
  font-size: 0.95rem;
  color: #444;
  padding: 0 0.5rem;
  line-height: 1.6;
  font-family: "Inter", sans-serif;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  margin-top: 0.5rem;
}

.close-button {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: #1f2937;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background 0.2s ease;
}

.close-button:hover {
  background: #374151;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0.8) rotate(-3deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(-2deg);
    opacity: 1;
  }
}
</style>
