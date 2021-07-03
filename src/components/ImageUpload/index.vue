<template>
  <div class="image-upload">
    <VueUploadComponent
      ref="upload"
      v-model="files"
      @input-file="inputFile"
      @input-filter="inputFilter"
      :drop="true"
      :multiple="false"
      class="input-file-custom"
    >
      <input
        type="text"
        class="fake-input"
        :value="files[0] ? files[0].name : ''"
      />
      <button class="btn btn-primary">
        {{ $t("create-app.placeholder.icon") }}
      </button>
    </VueUploadComponent>
  </div>
</template>

<script>
import VueUploadComponent from "vue-upload-component";
import CreateAppMixin from "@/mixins/CreateApp.js";

export default {
  name: "ImageUpload",
  components: { VueUploadComponent },
  mixins: [CreateAppMixin],
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.image-upload {
  width: 100%;
  height: auto;

  > .input-file-custom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    > .fake-input {
      width: 100%;
      height: 36px;
      display: block;
      position: relative;

      padding: 0 15px;
      margin-right: 10px;

      border-radius: 0.3rem;
      border: $gray-100 solid 1px;

      font-size: 1.3rem;
      color: $gray-150;
      opacity: 1;
    }
  }
}
</style>
