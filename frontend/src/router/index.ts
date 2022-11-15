import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home-view.vue";
import AboutView from "@/views/about-view.vue";
import AnalyticsView from "@/views/analytics-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/analytics",
      name: "analytics",
      component: AnalyticsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
