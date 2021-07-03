<template>
  <div>
    <div v-if="!image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange" />
    </div>
    <div v-else>
      <img :src="image" />
      <button @click="removeImage">Remove image</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  data: function () {
    return {
      image: "",
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // let image = new Image();
      let reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.image = "";
    },
  },
};
</script>

<style scoped></style>
