import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NestingView from "@/views/NestingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/nesting",
      name: "nesting",
      component: NestingView,
    },
    {
      path: "/colortext",
      name: "colortext",
      component: () => import("../views/Example.vue"),
    },
    {
      path: "/traffic",
      name: "fraffic",
      component: () => import("../views/TraficLight.vue")
    }
  ],
});

export default router;
