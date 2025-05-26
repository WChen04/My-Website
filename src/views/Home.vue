<template>
  <Navbar @scroll-to-section="handleScroll" />
  <div class="home">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <header class="top">
      <div class="top-content">
        <div class="top-text">
          <h1 class="intro">👋 Hello, I'm William Chen</h1>
          <h2 class="subtitle"></h2>
          <h1 class="intro2">
            I'm a
            <span ref="typewriter" class="typewriter">Gummy Bear</span>
          </h1>
          <div class="book">
            <button
              class="contact-scroll-button"
              onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })"
            >
              Contact Me
            </button>
            <h2>
              Feel free to view my portfolio and reach out<br />- I'd love to
              connect!
            </h2>
          </div>
        </div>
      </div>

      <div class="images">
        <img
          src="../../imgs/BlobMe.png"
          alt="Image inside blob"
          class="blob-image"
        />
        <img src="../../imgs/blob2.png" alt="" class="blob-back" />
      </div>
    </header>

    <section id="projects">
      <Project />
    </section>

    <section id="about">
      <AboutMe />
    </section>

    <section id="contact" class="contact-me">
      <h2 class="section-title">Let's Connect 🌌</h2>
      <p class="section-description">
        Got an idea, a collab in mind, or just vibing with the stars? I’d love
        to hear from you.
      </p>

      <div class="contact-buttons">
        <a href="mailto:williamchen259@gmail.com" class="contact-btn email">
          📩 Send an Email
        </a>
        <a
          href="https://www.linkedin.com/in/william-chen04"
          target="_blank"
          class="contact-btn linkedin"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/WChen04"
          target="_blank"
          class="contact-btn github"
        >
          🧠 GitHub
        </a>
      </div>

      <div class="constellation-footer">
        <p>📍 Hovering somewhere between code & constellations.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { nextTick } from "vue";
import Typed from "typed.js"; // Import typed.js if you used npm
import Navbar from "../components/Navbar.vue";
import Project from "../views/Project.vue";
import Planet from "../components/Planet.vue"; // Assuming you have a Planet component
import AboutMe from "../views/AboutMe.vue";

export default {
  name: "Home",
  components: { Navbar, Project, Planet, AboutMe },

  mounted() {
    nextTick(() => {
      const typewriterElement = this.$refs.typewriter;

      if (typewriterElement) {
        new Typed(typewriterElement, {
          strings: [
            "Passionate Computer Science Student.",
            "Innovative Software Developer.",
            "Creative Web Designer.",
            "Analytical Problem Solver.",
            "Visionary Product Manager.",
            "Curious Tech Enthusiast.",
            "Adventurous Rock Climber.",
            "Dedicated Gym Rat.",
            "Enthusiastic Foodie.",
            "Wanderlust Traveler.",
            "Devoted Croissant Enjoyer.",
          ],
          typeSpeed: 45,
          backSpeed: 20,
          loop: true,
        });
      } else {
        console.warn("typewriter ref is undefined");
      }
    });
  },

  methods: {
    handleScroll(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.top {
  position: relative;
  width: 100%;
  padding: 0%;

  margin: 2em 0 2em 0;
}

.top-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-text {
  position: absolute;
  top: 50%; /* You can adjust this to place it wherever you want vertically */
  left: 30%;
  transform: translate(
    -50%,
    -50%
  ); /* Centers it both vertically and horizontally */
  text-align: left;
  color: #fff;
  z-index: 10;
}

.intro {
  position: relative; /* So it stays in the flow and doesn't move */
  width: 100%;
  font-weight: bold;
}

.intro2 {
  position: relative; /* This ensures intro2 expands and is not restricted */
  width: 100%; /* Optional: Ensures intro2 spans the whole width */
  font-weight: 200;
  font-size: 1.5em;
  margin-top: 2em;
  font-family: "Manrope", sans-serif;
}
.images {
  position: relative;
  margin-left: 30em;
}

.blob-image {
  width: 40%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  z-index: 10;
  margin-left: 20em;
}
.blob-back {
  z-index: 100;
  width: 40%;
  margin-left: 20em;
}

.home {
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  position: relative; /* So it stays in the flow and doesn't move */
  width: 100%;
  text-align: left;
  font-weight: 400;
}

.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.top h2 {
  margin-bottom: 1.5rem;
}

.projects {
  margin: 5em 0;
  color: #fff;
}
.book {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2em 0;
  text-align: left;

  align-items: center;
}
.contact-scroll-button {
  font-size: 1.25em;
  border-radius: 2em;
  padding: 1.25em;
  background-color: #000000;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  margin-right: 1em;
  display: inline-block;
}

.contact-scroll-button:hover {
  color: #ffffff;
  background-color: #000000;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.5),
    0 0 24px rgba(255, 255, 255, 0.25);
}

.book h2 {
  padding: 1em;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0;
}
.contact-me {
  padding: 4rem 2rem;
  text-align: center;
  color: #e4f3ec;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Manrope", sans-serif;
  z-index: 10;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-inline: auto;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.contact-btn {
  background-color: #1f2933;
  border: 2px solid #4fd1c5;
  color: #4fd1c5;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
}

.contact-btn:hover {
  background-color: #4fd1c5;
  color: #0f1d17;
}

.constellation-footer {
  margin-top: 3rem;
  font-style: italic;
  font-size: 0.95rem;
  color: #8ff1f1;
}
</style>
