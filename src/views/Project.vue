<template>
  <div class="solar-wrapper">
    <div ref="canvasContainer" class="canvas-container" />
    <div class="info-panel">
      <transition name="fade-slide">
        <div v-if="!selectedProject" key="intro" class="info-content">
          <h2>Take a look at some of my projects!</h2>
          <p>Click on any orbiting planets to explore.</p>
        </div>
        <div v-else key="project" class="info-content">
          <div class="project-visual">
            <img
              :src="selectedProject.gif"
              alt="Project preview"
              class="project-gif"
            />
            <h2 class="project-title-overlay">{{ selectedProject.name }}</h2>
          </div>
          <div class="tech-ball-grid">
            <div
              v-for="tech in selectedProject.stack"
              :key="tech.name"
              class="ball-wrapper"
            >
              <Ball :imgUrl="tech.icon" />
            </div>
          </div>
          <div class="description">
            <p v-html="selectedProject.description"></p>
          </div>
          <div class="action-items">
            <button class="reset-button" @click="selectedProject = null">
              ← Back
            </button>
            <div class="github-link">
              <a
                :href="selectedProject.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>

            <div v-if="selectedProject.projectpitch" class="project-pitch">
              <a
                :href="selectedProject.projectpitch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Pitch!
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { onMounted, ref } from "vue";
import Ball from "../components/Ball.vue";

const canvasContainer = ref(null);
const selectedProject = ref(null);

const textureLoader = new THREE.TextureLoader();
const moonTextures = [
  textureLoader.load("/textures/rocky.jpg"),
  textureLoader.load("/textures/sandy.jpg"),
  textureLoader.load("/textures/water.jpg"),
];

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvasContainer.value.clientWidth / canvasContainer.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 4);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(
    canvasContainer.value.clientWidth,
    canvasContainer.value.clientHeight
  );
  canvasContainer.value.appendChild(renderer.domElement);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 0, 10);
  light.castShadow = false;
  scene.add(light);

  const loader = new GLTFLoader();
  let planetModel = null;
  const moonOrbit1 = new THREE.Group();
  const moonOrbit2 = new THREE.Group();
  const moonOrbit3 = new THREE.Group();

  loader.load("/planet/scene.gltf", (gltf) => {
    planetModel = gltf.scene;
    planetModel.scale.set(1.5, 1.5, 1.5);
    planetModel.position.set(0, 0, 0);
    planetModel.traverse((child) => {
      child.raycast = () => {}; // disables raycasting
    });

    scene.add(planetModel);

    const moonGeometry = new THREE.SphereGeometry(0.3, 48, 48);
    // Different materials for each project
    const moonMaterials = moonTextures.map((texture) => {
      return new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.4,
        roughness: 0.6,
      });
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // brightness: 1 (adjustable)
    scene.add(ambientLight);
    light.intensity = 1.5; // instead of 1

    const projects = [
      // {
      //   name: "StudyBuddy",
      //   description:
      //     "StudyBuddy is a gamified productivity app that transforms your study time into in-app currency you can spend on digital rewards. Designed to keep you focused and motivated, StudyBuddy makes studying feel rewarding—literally.",
      //   stack: [
      //     { name: "React Native", icon: "/tech/react.png" },
      //     { name: "Firebase", icon: "/tech/firebase.png" },
      //     { name: "Expo", icon: "/tech/expo.png" },
      //   ],
      //   gif: "src/assets/Hackathon.gif",
      //   group: moonOrbit1,
      //   rotationAxis: "x",
      //   tilt: Math.PI / 3,
      //   github: "https://github.com/WChen04/StudyBuddy",
      // },
      {
        name: "Gesturo",
        description:
          "Gesturo is a real-time hand gesture recognition tool using MediaPipe and Python, designed to map gestures like 👍 and 👋 to system actions like media control, navigation, and drawing.",
        stack: [
          { name: "Numpy", icon: "/tech/numpy.png" },
          { name: "Tensorflow", icon: "/tech/tensorflow.png" },
          { name: "MediaPipe", icon: "/tech/mediapipe.png" },
        ],
        gif: new URL("/imgs/gesturo.gif", import.meta.url).href,
        group: moonOrbit2,
        rotationAxis: "y",
        tilt: Math.PI / 4,
        github: "https://github.com/WChen04/Gesturo",
      },
      {
        name: "Public Transit Planner App",
        description: `Public Transit Planner is a hackathon-winning app that uses the District of Columbia’s 2022 traffic volume data to help design smarter bus routes in Washington, DC. By analyzing congestion and population trends, it improves public transportation by making it safer, more efficient, and easier to access.`,
        stack: [
          { name: "Python", icon: "/tech/python.png" },
          { name: "HTML", icon: "/tech/html.png" },
        ],
        gif: new URL("/imgs/Hackathon.gif", import.meta.url).href,
        group: moonOrbit3,
        rotationAxis: "z",
        tilt: Math.PI / 4,
        github: "https://github.com/WChen04/ptp",
        projectpitch:
          "https://docs.google.com/presentation/d/1zk5lAR1Hq3bNVyU5E16s8disCJWG3-XUb5UxJ2PSntI/edit?slide=id.g1d124867081_0_1#slide=id.g1d124867081_0_1",
      },
    ];

    projects.forEach((proj, index) => {
      const moon = new THREE.Mesh(
        moonGeometry,
        moonMaterials[index % moonMaterials.length]
      );
      moon.position.x = 2;
      moon.userData = proj;

      // Add label
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 64;

      const texture = new THREE.CanvasTexture(canvas);
      const labelMaterial = new THREE.SpriteMaterial({ map: texture });
      const label = new THREE.Sprite(labelMaterial);
      label.scale.set(2, 0.5, 1);
      label.position.set(2.5, 0.5, 0);

      const labelGroup = new THREE.Group();
      labelGroup.add(moon);
      labelGroup.add(label);

      proj.group.add(labelGroup);
      proj.group.rotation[proj.rotationAxis] = proj.tilt;
      scene.add(proj.group);
    });
  });

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onClick(event) {
    const bounds = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    raycaster.params.Points = { threshold: 0.2 };
    const intersects = raycaster.intersectObjects(scene.children, true);

    for (const intersect of intersects) {
      if (intersect.object.userData && intersect.object.userData.name) {
        selectedProject.value = intersect.object.userData;
        break;
      }
    }
  }

  renderer.domElement.addEventListener("click", onClick);

  function animate() {
    requestAnimationFrame(animate);
    if (planetModel) planetModel.rotation.y += 0.0006;

    moonOrbit1.rotation.y += 0.004;
    moonOrbit1.rotation.z += 0.007;
    moonOrbit2.rotation.y += 0.005;
    moonOrbit2.rotation.x += 0.001;
    moonOrbit3.rotation.y += 0.006;
    moonOrbit3.rotation.z += 0.002;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    const width = canvasContainer.value.clientWidth;
    const height = canvasContainer.value.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
});
</script>

<style scoped>
.solar-wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  font-family: "Manrope", sans-serif;
  z-index: 10000;
}

.canvas-container {
  flex: 1.5;
  height: 90%;
  z-index: 1000;
}

.info-panel {
  flex: 1;
  padding: 2rem;
  margin-right: 5rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: none; /* so Three.js can still capture clicks if needed */
}

.info-content {
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  max-width: 90%;
  width: 100%;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease both;
  backdrop-filter: blur(12px);
  color: white;
  padding-bottom: 2em;
}
.info-content:hover {
  box-shadow: 0 0 30px rgba(120, 220, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

h2 {
  font-size: 1.8rem;
  /* margin-bottom: 1rem; */
  font-weight: 600;
  letter-spacing: 0.5px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.tech-item {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: #fff;
  transition: background 0.3s;
}
.tech-item:hover {
  background: rgba(255, 255, 255, 0.15);
}

.project-visual {
  position: relative;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  overflow: hidden;
}

.project-gif {
  width: 100%;
  display: block;
  object-fit: cover;
}

.project-title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.021);
  font-size: 1.75rem;
  font-weight: bold;
  color: #000;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 2rem;
  margin: 0;
  box-sizing: border-box;
  text-align: left;
  font-family: "Manrope", sans-serif;
}

.tech-item {
  /* margin-bottom: 0.2rem; */
  transition: all 0.3s;
  cursor: default;
}
.tech-item:hover {
  color: #88f;
  transform: translateX(4px);
}
.description {
  font-size: 1rem;
  text-align: left;
  padding: 0 2em 0 2em;
}

.reset-button {
  background: none;
  border: 1px solid #aaa;
  color: #aaa;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.reset-button:hover {
  background-color: #333;
  color: #fff;
  border-color: #fff;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideFromLeft {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 768px) {
  .solar-wrapper {
    flex-direction: column;
  }

  .canvas-container,
  .info-panel {
    flex: unset;
    width: 100%;
    height: 50%;
  }

  .info-content::before {
    left: 20px;
    top: auto;
    bottom: -20px;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    border-top: 20px solid #2e2e33;
    border-bottom: none;
    transform: rotate(180deg);
  }
}
.tech-ball-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  margin-left: 1rem;
}

.ball-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px; /* explicitly set dimensions */
  height: 60px;
}

.action-items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 2rem 1rem 2rem;
  gap: 2rem;
}
</style>
