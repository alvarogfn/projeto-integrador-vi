import LoginView from "@/views/login-view.vue";
import RegisterView from "@/views/register-view.vue";
import HomeView from "@/views/home-view.vue";
import AppView from "@/views/app-view.vue";
import ClientsFormView from "@/views/clients/clients-form-view.vue";
import ClientsAnalyticsView from "@/views/clients/clients-analytics-view.vue";
import ClientsDatasetView from "@/views/clients/clients-dataset-view.vue";
import ClientsView from "@/views/clients/clients-view.vue";

import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/stores/app";
import { api } from "@/api/api";
import type { Login } from "@/model/loginModel";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,

      beforeEnter: async (to, from, next) => {
        const store = useAppStore();

        const redirect = to.redirectedFrom ?? { name: "home" };

        if (store.isAuth) return next({ ...redirect });

        const token = localStorage.getItem("token");

        if (!token) return next();

        try {
          const { data } = await api.get<Login>("/user", {
            headers: { authorization: token },
          });

          store.username = data.username;
          store.name = data.name;
          store.token = token;

          if (store.isAuth) return next({ ...redirect });
          return next();
        } catch (e) {
          localStorage.removeItem("token");
          return next();
        }
      },
    },
    {
      path: "",
      component: AppView,
      beforeEnter: async (to, from, next) => {
        const store = useAppStore();
        if (store.isAuth) return next();
        next({ name: "login" });
      },
      children: [
        {
          path: "",
          component: HomeView,
          name: "home",
        },
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
              path: "analytics/:id?",
              name: "clients-analytics",
              component: ClientsAnalyticsView,
            },
          ],
        },
      ],
    },
    { path: "/register", name: "register", component: RegisterView },
  ],
});

export default router;
