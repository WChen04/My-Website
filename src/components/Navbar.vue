<template>
  <nav>
    <div class="Navigation">
      <RouterLink to="/about" id="About">About</RouterLink>
      <li id="NavBarOptions">Resume</li>
      <RouterLink to="/" id="Projects">Projects</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.Navigation {
  display: inline-block;
  justify-content: space-between;
  list-style-type: none;
  border-radius: 0.5em;
  margin-bottom: 5em;
}
#About {
  margin: 1em 5em;
}
#Projects {
  margin: 1em 5em;
}
#NavBarOptions,
#About,
#Projects {
  color: hsla(159, 42%, 88%, 1);
  display: inline-block;
  position: relative;
}

#NavBarOptions::after,
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

#NavBarOptions:hover::after,
#About:hover::after,
#Projects:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
