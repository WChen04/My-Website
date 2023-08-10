<template>
  <nav>
    <div class="Navigation">
      <!-- <RouterLink to="/" id="Projects">Projects</RouterLink> -->
      <RouterLink to="/" id="About">About</RouterLink>
      <RouterLink to="/resume" id="Resume">Resume</RouterLink>
      <!-- <a href="../assets/Resume.pdf" id="Resume">Resume</a> -->
    </div>
  </nav>
</template>

<style scoped>
.Navigation {
  /* display: inline-block; */
  justify-content: space-between;
  list-style-type: none;
  border-radius: 0.5em;
  margin-bottom: 3em;
  /* position: fixed; */
}
#About {
  margin: 1em 3em;
}
#Projects {
  margin: 1em 3em;
}
#Resume {
  margin: 1em 3em;
}
#Resume,
#About,
#Projects {
  color: hsla(159, 42%, 88%, 1);
  display: inline-block;
  position: relative;
}

#Resume::after,
#About::after,
#Projects::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: hsla(159, 42%, 88%, 1);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

#Resume:hover::after,
#About:hover::after,
#Projects:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
