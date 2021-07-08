import Vue from "vue";
import VueRouter from "vue-router";
import CreateApp from "../views/CreateApp.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CreateApp",
    component: CreateApp,
    beforeEnter: (to, from, next) => {
      store.dispatch("getCategories").finally(() => next());
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
