<template>
  <div class="create-app">
    <h4>TEST</h4>
    <div class="field-grouping">
      <label>{{ $t("create-app.labels.name") }}</label>
      <input type="text" />
      <span></span>
    </div>
    <div class="field-grouping">
      <label>{{ $t("create-app.labels.icon") }}</label>
      <ImageUpload />
      <span></span>
    </div>
    <div class="field-grouping">
      <label>{{ $t("create-app.labels.icons-background") }}</label>
      <Verte />
      <span></span>
    </div>
    <div class="field-grouping">
      <label>{{ $t("create-app.labels.category") }}</label>
      <input type="text" />
      <span></span>
    </div>
  </div>
</template>

<script>
import ImageUpload from "@/components/ImageUpload";
import CreateAppMixin from "../mixins/CreateApp";
import Verte from "verte";

export default {
  name: "CreateApp",
  mixins: [CreateAppMixin],
  components: {
    ImageUpload,
    Verte,
  },
};
</script>

<style scoped></style>
