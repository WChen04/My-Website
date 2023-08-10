<template>
  <div class="maincontainer">
    <div id="Photo">
      <img src="../../imgs/WebsitePhoto.JPG" id="MyPhoto" />
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/7l55725YpVuNPKIEKAjkZe?utm_source=generator”"
        width="50%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <div id="AboutMe">
      <h2>Hey, What's up? 👋</h2>
      <p>
        I'm William, a student currently studying Computer Science at Rensselaer
        Polytechnic Institute in Troy, NY. I am working on multiple projects but
        I'm currently working on creating my IOS productivity app, StudyBuddy.
      </p>
      <p>
        As a computer guy, I love to listen to music whether I'm grinding out
        work, traveling and exploring different parts of the world, lifting at
        the gym, or even eating my favorite food, an Ice-Cream Sandwich. Some of
        my current favorite artists include slchld, Bruno Major, Post Malone and
        so many more. Check out my playlist below!
      </p>
      <p>
        I consider myself an avid learner and never afraid to step away from
        change. I believe that change allows me to be who I am today. I love to
        travel and explore new places around the World. Adapting to new places
        and cultures always amazes me and it allows me to experience more and
        broaden my horizons. If you have any recommendations about songs, ice
        cream sandwiches, or cool things I haven't seen or tried yet, let's get
        in touch!
      </p>
      <div class="Contacts">
        <a id="email" href="mailto:williamchen259@gmail.com">
          <img src="../../imgs/Email.svg" alt="email icon" id="EmailIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/william-chen-83b451265/"
          id="linkedin"
        >
          <img src="../../imgs/LinkedIn2.png" id="LinkedInIcon" />
        </a>
        <a id="github" href="https://github.com/WChen04"
          ><img src="../../imgs/github.png" id="GithubIcon"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.maincontainer {
  display: flex;
  justify-content: space-around;
}
#Photo {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#AboutMe {
  display: flex;
  flex-direction: column;
  width: 100%;
}
#MyPhoto {
  width: 50%;
  border-radius: 10%;
  overflow: hidden;
}
iframe {
  margin-top: 2em;
}
.Contacts {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* padding-top: 15%;   */
  padding-left: 50%;
}

#GithubIcon {
  width: 60%;
  padding: 1em;
}
#EmailIcon {
  width: 80%;
  padding: 1em;
}
#LinkedInIcon {
  width: 60%;
  padding-left: 1em;
}
a {
  display: block;
  width: 30%;
  padding: 1em;
}
p,
h2 {
  text-align: left;
}
</style>
