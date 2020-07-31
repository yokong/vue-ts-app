import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Lavout from "../views/layout/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Lavout,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "/password",
    name: "password",
    component: () => import("@/views/login/Password.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to: any, from: any, next: any) => {
  const isLogin: boolean = localStorage.tsToken ? true : false;
  if (to.path == "/login" || to.path == "/password") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});
export default router;
