import LoginView from "@/views/login-view.vue";
import HomeView from "@/views/home-view.vue";
import AppView from "@/views/app-view.vue";
import ClientsFormView from "@/views/clients/clients-form-view.vue";
import ClientsAnalyticsView from "@/views/clients/clients-analytics-view.vue";
import ClientsDatasetView from "@/views/clients/clients-dataset-view.vue";
import ClientsView from "@/views/clients/clients-view.vue";

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
        {
          path: "clients",
          name: "clients",
          component: ClientsView,
          children: [
            { path: "form", name: "clients-form", component: ClientsFormView },
            {
              path: "dataset",
              name: "clients-dataset",
              component: ClientsDatasetView,
            },
            {
              path: "analytics",
              name: "clients-analytics",
              component: ClientsAnalyticsView,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
