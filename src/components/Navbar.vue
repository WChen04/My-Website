<!-- Navbar.vue -->
<template>
  <nav>
    <div class="Navigation">
      <div class="righthand">
        <a href="/">
          <img
            src="/WC_logos/WilliamChen-logos_white.png"
            alt="William Chen logo"
            class="logo"
          />
        </a>
        <div class="open">
          <div class="circle"><div class="circle2"></div></div>
          <h2>Open to Work</h2>
        </div>
      </div>
      <div class="nav-links">
        <a href="#" @click.prevent="scrollTo('projects')">Projects</a>
        <a href="#" @click.prevent="scrollTo('about')">About</a>
        <a href="#" @click.prevent="scrollTo('contact')">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollTo(section) {
      this.$emit("scroll-to-section", section);
    },
  },
};
</script>

<style scoped>
nav {
  border-color: rgb(227, 227, 227);
}
.Navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 5em;
  /* background-color: hsla(159, 42%, 88%, 1); */
}
.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5em;
  color: white;
  font-size: 1.1em;
  text-decoration: none;
}
.logo {
  width: 7em;
  height: 7em;
}
a {
  text-decoration: none;
  color: white;
}
#Resume {
  margin: 1em 3em;
  font-size: 1.5em;
}
#Resume,
#About,
#Projects,
#Contact {
  color: white;
  display: inline-block;
  position: relative;
}

#Resume::after,
#About::after,
#Projects::after,
#Contact::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: hsla(159, 42%, 88%, 1);
  transform-origin: bottom right;
  transition: transform 0.2s ease-out;
}

#Resume:hover::after,
#About:hover::after,
#Projects:hover::after #Contact:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.open {
  background-color: #fff;
  padding: 0.1em 0.75em;
  border-radius: 2em;
  color: #000;
  font-size: 1em;
  border-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.open h2 {
  font-size: 1em;
  font-weight: 200;
  color: #000;
}
.circle {
  width: 1em;
  height: 1em;
  background-color: rgba(144, 248, 144, 0.82);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5em;
}
.circle2 {
  width: 0.5em;
  height: 0.5em;
  background-color: rgba(30, 231, 30, 0.82);
  border-radius: 50%;
}
.righthand {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
