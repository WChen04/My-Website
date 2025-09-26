<template>
  <div ref="container" class="ball-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";

const props = defineProps({
  imgUrl: { type: String, required: true },
});

const container = ref(null);
let scene, camera, renderer, sphereMesh, iconMesh, animationId;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotationSpeed = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let autoCentering = false;

onMounted(() => {
  scene = new THREE.Scene();

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 4;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  // Ensure correct color management for Three r176+
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.value.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
  directionalLight.position.set(2, 3, 4);
  scene.add(directionalLight);

  const sphereGeometry = new THREE.IcosahedronGeometry(1, 0);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
    roughness: 0.5,
    metalness: 0.1,
  });
  sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphereMesh);

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(props.imgUrl, (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;

    const iconGeometry = new THREE.CircleGeometry(0.6, 32);
    const iconMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });

    iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
    iconMesh.position.z = 1.01;
    scene.add(iconMesh);
  });

  animate();

  window.addEventListener("resize", onWindowResize);
  renderer.domElement.addEventListener("mousedown", startDrag);
  window.addEventListener("mousemove", duringDrag);
  window.addEventListener("mouseup", endDrag);

  renderer.domElement.addEventListener("touchstart", startDrag);
  window.addEventListener("touchmove", duringDrag);
  window.addEventListener("touchend", endDrag);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", onWindowResize);
  window.removeEventListener("mousemove", duringDrag);
  window.removeEventListener("mouseup", endDrag);
  window.removeEventListener("touchmove", duringDrag);
  window.removeEventListener("touchend", endDrag);
  renderer.dispose();
});

function animate() {
  animationId = requestAnimationFrame(animate);

  if (!isDragging) {
    sphereMesh.rotation.y += rotationSpeed.y;
    sphereMesh.rotation.x += rotationSpeed.x;

    rotationSpeed.x *= 0.97;
    rotationSpeed.y *= 0.97;

    // If speed slows down enough, start auto-centering
    if (
      !autoCentering &&
      Math.abs(rotationSpeed.x) < 0.0001 &&
      Math.abs(rotationSpeed.y) < 0.0001
    ) {
      autoCentering = true;
    }

    if (autoCentering) {
      sphereMesh.rotation.x +=
        (targetRotation.x - sphereMesh.rotation.x) * 0.05;
      sphereMesh.rotation.y +=
        (targetRotation.y - sphereMesh.rotation.y) * 0.05;

      if (
        Math.abs(sphereMesh.rotation.x - targetRotation.x) < 0.001 &&
        Math.abs(sphereMesh.rotation.y - targetRotation.y) < 0.001
      ) {
        autoCentering = false;
        sphereMesh.rotation.x = targetRotation.x;
        sphereMesh.rotation.y = targetRotation.y;
      }
    }
  }

  sphereMesh.position.y = Math.sin(Date.now() * 0.001) * 0.1;

  if (iconMesh) {
    iconMesh.rotation.copy(sphereMesh.rotation);
    iconMesh.position.y = sphereMesh.position.y;
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function startDrag(event) {
  isDragging = true;
  autoCentering = false;
  const pos = event.touches ? event.touches[0] : event;
  previousMousePosition = { x: pos.clientX, y: pos.clientY };
}

function duringDrag(event) {
  if (!isDragging) return;
  const pos = event.touches ? event.touches[0] : event;
  const deltaMove = {
    x: pos.clientX - previousMousePosition.x,
    y: pos.clientY - previousMousePosition.y,
  };

  rotationSpeed.y = deltaMove.x * 0.008;
  rotationSpeed.x = deltaMove.y * 0.008;

  sphereMesh.rotation.y += rotationSpeed.y;
  sphereMesh.rotation.x += rotationSpeed.x;

  previousMousePosition = { x: pos.clientX, y: pos.clientY };
}

function endDrag() {
  isDragging = false;

  // Slight delay before starting to auto-center
  setTimeout(() => {
    autoCentering = true;
  }, 500);
}
</script>

<style scoped>
.ball-container {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  z-index: 1000;
}
.ball-container:active {
  cursor: grabbing;
}
</style>
