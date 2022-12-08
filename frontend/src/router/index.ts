import LoginView from "@/views/login-view.vue";
import HomeView from "@/views/home-view.vue";
import DatasetView from "@/views/dataset-view.vue";
import AppView from "@/views/app-view.vue";
import AddView from "@/views/add-view.vue";
import AnalyticsView from "@/views/analytics-view.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "login" },
    { path: "/login", name: "login", component: LoginView },
    {
      path: "/app",
      name: "app",
      redirect: { name: "home" },
      component: AppView,
      children: [
        { path: "", name: "home", component: HomeView },
        { path: "add", name: "add", component: AddView },
        { path: "dataset", name: "dataset", component: DatasetView },
        { path: "analytics", name: "analytics", component: AnalyticsView },
      ],
    },
  ],
});

export default router;
