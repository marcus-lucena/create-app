import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./assets/styles/app.scss";
import { makeServer } from "./server";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  makeServer();
}

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
