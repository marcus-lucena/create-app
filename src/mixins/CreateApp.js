import store from "@/store/index.js";

let CreateAppMixin = {
  data: function () {
    return {
      titleData: "",
      files: [],
      categoryValue: "",
      iconColorData: "#1a1a1a",
    };
  },
  watch: {
    titleData: (newValue) => {
      store.dispatch("title", newValue);
    },
    files: (newValue) => {
      store.dispatch("files", newValue[0]);
    },
    iconColorData: (newValue) => {
      store.dispatch("iconColor", newValue);
    },
    categoryValue: (newValue) => {
      store.dispatch("category", newValue);
    },
  },
  methods: {
    inputFile: function (newFile, oldFile) {
      if (newFile && oldFile && !newFile.active && oldFile.active) {
        console.log("response", newFile.response);
        if (newFile.xhr) {
          console.log("status", newFile.xhr.status);
        }
      }
    },
    inputFilter: function (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent();
        }
      }
      newFile.blob = "";
      let URL = window.URL || window.webkitURL;
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
    },
  },
};

export default CreateAppMixin;
