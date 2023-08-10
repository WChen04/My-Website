import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("../views/Resume.vue"),
    },
  ],
});

export default router;
