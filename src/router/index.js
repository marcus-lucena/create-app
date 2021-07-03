import Vue from "vue";
import VueRouter from "vue-router";
import CreateApp from "../views/CreateApp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CreateApp",
    component: CreateApp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
