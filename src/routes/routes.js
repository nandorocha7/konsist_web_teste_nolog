import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import LoginLayout from "@/pages/Layout/LoginLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Welcome from "@/pages/Welcome.vue";
import Agenda from "@/pages/Agenda.vue";


import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "nav-item active",
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Layout/DashboardLayout.vue"),
      redirect: "/dashboard",
      children: [
        // Dashboard
        {
          name: "Página Inicial",
          path: "dashboard",
          component: () => import("@/pages/Dashboard"),
          meta: { requiresAuth: true },
        },
        // {
        //   name: "Dashboard2",
        //   path: "",
        //   component: () => import("@/pages/Dashboard"),
        //   meta: { requiresAuth: true },
        // },

        // Pages
        {
          name: "Agenda",
          path: "agenda/:id",
          component: () => import("@/pages/Agenda.vue"),
          meta: { requiresAuth: true },
        },
        {
          name: "Listagem Médicos",
          path: "listaMedicos",
          component: () => import("@/pages/ListaMedicos.vue"),
          meta: { requiresAuth: true },
          children: [
            // Dashboard
            {
              name: "Agenda Tabela",
              path: "agendatable/:id",
              component: () => import("@/pages/AgendaTable.vue"),
              meta: { requiresAuth: true },
            },
          ],
        },
        {
          name: "",
          path: "agendatable/:id",
          component: () => import("@/pages/AgendaTable.vue"),
          meta: { requiresAuth: true },
        },
        {
          name: "",
          path: "Paciente/:Id",
          component: () => import("@/pages/UserProfile/Paciente.vue"),
          meta: { requiresAuth: true },
        },
        {
          name: "",
          path: "Usuario/:_id", //:_id
          component: () => import("@/pages/UserProfile/Usuario.vue"),
          meta: { requiresAuth: true },
        },          
      ],
    },
    {
      path: "/login",
      component: () => import("@/pages/Layout/LoginLayout.vue"),
      children: [
        // Dashboard
        {
          name: "Login",
          path: "",
          component: () => import("/src/pages/Welcome"),
        },
        {
          name: "user",
          path: "/user",
          component: () => import("@/pages/Layout/User.vue"),
          meta: { requiresAuth: false },
        }, 
      ],
    },
  ],
});
