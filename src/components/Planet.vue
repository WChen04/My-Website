<template>
  <div ref="planet1" class="planet-canvas"></div>
</template>
<script>
import * as THREE from "three";

export default {
  name: "Planet",
  mounted() {
    this.initPlanet(this.$refs.planet1);
  },

  methods: {
    initPlanet(container) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(80, 1, 0.1, 400);
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(400, 400);
      container.appendChild(renderer.domElement);

      // 🌍 Planet
      const planetGeometry = new THREE.SphereGeometry(1, 64, 64);
      const planetMaterial = new THREE.MeshStandardMaterial({
        color: 0x8cc0de,
      });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);

      // 🌐 Orbit Ring
      const ringGeometry = new THREE.TorusGeometry(1.3, 0.02, 7, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);

      // Style ring
      ring.rotation.x = Math.PI / 3; // Tilt on X-axis
      ring.rotation.z = Math.PI / 5; // Rotate on Z-axis
      ring.position.y = 0.1;
      ring.position.x = 0.1;

      // 📦 Group planet and ring
      const planetGroup = new THREE.Group();
      planetGroup.add(planet);
      planetGroup.add(ring);
      scene.add(planetGroup);

      // 🌙 Moon (orbiting satellite)
      const moonGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);

      // Orbit group for moon
      const moonOrbit = new THREE.Group();
      moon.position.x = 1.5; // Distance from center
      moonOrbit.add(moon);
      scene.add(moonOrbit);

      // 💡 Lighting
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(6, 3, 6);
      scene.add(light);

      camera.position.z = 4;

      // 🌀 Animate
      const animate = function () {
        requestAnimationFrame(animate);
        planetGroup.rotation.y += 0.01; // Planet + ring spin
        moonOrbit.rotation.y += 0.02; // Moon orbits around planet
        renderer.render(scene, camera);
      };
      animate();
    },
  },
};
</script>

<style scoped>
.planet-canvas {
  width: 400px;
  height: 400px;
  margin-bottom: 1rem;
  /* position: absolute; */
  top: 4em;
  left: 60%;
  z-index: 1000;
}
</style>
