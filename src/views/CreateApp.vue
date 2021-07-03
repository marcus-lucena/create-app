<template>
  <div class="create-app">
    <Title :title="$t('create-app.title')" />
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
      <Verte picker="wheel" model="rgb" :value="iconColor" />
      <span></span>
    </div>
    <div class="field-grouping">
      <label>{{ $t("create-app.labels.category") }}</label>
      <vSelect />
      <span></span>
    </div>
  </div>
</template>

<script>
import ImageUpload from "@/components/ImageUpload";
import Title from "@/components/Title";
import CreateAppMixin from "@/mixins/CreateApp";
import Verte from "verte";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

export default {
  name: "CreateApp",
  mixins: [CreateAppMixin],
  components: {
    ImageUpload,
    Title,
    Verte,
    vSelect,
  },
};
</script>

<style lang="scss" scoped></style>
