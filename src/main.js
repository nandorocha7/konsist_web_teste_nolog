// =========================================================
// * Vue Material Dashboard - v1.5.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Vuex from "vuex";
// router setup
//import routes from "./routes/routes";
import router from "./routes/routes";
import store from "./store/index";
// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
//import Notifications from "./components/NotificationPlugin";
import Notifications from 'vue-notification';
import Vuetify from "./vuetify";
import VueCookies from "vue-cookies";

import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import "@mdi/font/css/materialdesignicons.css";
import VueSocialSharing from "vue-social-sharing";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

// router.beforeEach(async (to, from, next) => {
//   // if (
//   //   // make sure the user is authenticated
//   //   !isAuthenticated &&
//   //   // ❗️ Avoid an infinite redirect
//   //   to.name !== 'Login'
//   // ) {
//   //   // redirect the user to the login page
//   //   return { name: 'Login' }
//   // }
//   //&& this.$store.state.configuracoes.token != ""


//   // if(to.meta.requiresAuth && store.state.configuracoes.token == ""){
//   //   next({
//   //     path: '/login?url='+to.fullPath
//   //     // Redirect to original path if specified
//   // })
//   // }

//   next();
// });
Vue.use(Notifications);
Vue.use(VueCookies, { expire: "1d" });
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (
      store.state.configuracoes.tokenBackLocal == "" &&
      VueCookies.isKey("token_api")
    ) {
      store.state.configuracoes.tokenBackLocal = VueCookies.get("token_api");
    }
    if (store.state.configuracoes.tokenBackLocal == "") {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (
      store.state.configuracoes.urlBackEnd == "" &&
      VueCookies.isKey("url_back")
    ) {
      store.state.configuracoes.urlBackEnd = VueCookies.get("url_back");
    }
    if (store.state.configuracoes.urlBackEnd == "") {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (
      store.state.configuracoes.tokenBack == "" &&
      VueCookies.isKey("token_back")
    ) {
      store.state.configuracoes.tokenBack = VueCookies.get("token_back");
    }
    if (store.state.configuracoes.tokenBack == "") {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (
      store.state.configuracoes.email == "" &&
      VueCookies.isKey("email_user")
    ) {
      store.state.configuracoes.email = VueCookies.get("email_user");
    }
    if (store.state.configuracoes.email == "") {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

Vue.prototype.$Chartist = Chartist;
Vue.use(VueSocialSharing);
Vue.use(Vuex);

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

Vue.component(
  "materialcardlogin",
  require("./components/Cards/MaterialCardLogin.vue").default
);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
  vuetify: Vuetify,
  data: {
    Chartist: Chartist,
  },
});
