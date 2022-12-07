import LoginView from "@/views/login-view.vue";
import HomeView from "@/views/home-view.vue";
import DatasetView from "@/views/dataset-view.vue";
import AppView from "@/views/app-view.vue";
import AnalyticsView from "@/views/analytics-view.vue";
import RegisterView from "@/views/login-view.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", name: "login", component: LoginView },
    {
      path: "/app",
      name: "app",
      children: [
        {
          path: "",
          name: "/home",
          component: HomeView,
        },
        {
          path: "/dataset",
          name: "dataset",
          component: DatasetView,
        },
        {
          path: "/analytics",
          name: "analytics",
          component: AnalyticsView,
        },
      ],
    },
  ],
});

export default router;
