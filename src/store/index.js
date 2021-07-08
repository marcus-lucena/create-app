import Vue from "vue";
import Vuex from "vuex";
import { all } from "@/services/categories.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    title: "",
    file: [],
    category: "",
    iconColor: "#1a1a1a",
  },
  mutations: {
    setCategories(state, values) {
      state.categories = values;
    },
    setTitle(state, values) {
      state.title = values;
    },
    setFiles(state, values) {
      state.file = values;
    },
    setCategoriesValue(state, values) {
      state.category = values;
    },
    setIconColor(state, values) {
      state.iconColor = values;
    },
  },
  actions: {
    getCategories(context) {
      all().then((response) => {
        context.commit("setCategories", response.data);
      });
    },
    title(context, value) {
      context.commit("setTitle", value);
    },
    files(context, value) {
      context.commit("setFiles", value);
    },
    category(context, value) {
      context.commit("setCategoriesValue", value);
    },
    iconColor(context, value) {
      context.commit("setIconColor", value);
    },
  },
  modules: {},
});
