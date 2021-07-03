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
      <div class="container-color-picker">
        <div class="input-form">Pick a Color</div>
        <v-swatches v-model="iconColor">
          <input
            slot="trigger"
            :value="iconColor"
            :style="{ background: iconColor }"
            readonly
          />
        </v-swatches>
      </div>
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
import VSwatches from "vue-swatches";
import vSelect from "vue-select";
import ImageUpload from "@/components/ImageUpload";
import Title from "@/components/Title";
import CreateAppMixin from "@/mixins/CreateApp";

import "vue-select/dist/vue-select.css";
import "vue-swatches/dist/vue-swatches.css";

export default {
  name: "CreateApp",
  mixins: [CreateAppMixin],
  components: {
    ImageUpload,
    Title,
    VSwatches,
    vSelect,
  },
  methods: {
    colorSelected() {
      return "background:" + this.iconColor;
    },
  },
};
</script>

<style lang="scss">
.container-color-picker {
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  box-sizing: border-box;

  > div {
    line-height: 40px;
  }

  > .vue-swatches {
    position: absolute;
    right: 0;
    z-index: 98;

    > div {
      > input {
        width: 100px;
        height: 40px;

        border: 0;
        border-radius: 0 0.3rem 0.3rem 0;

        font-size: 1.2rem;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
}
</style>
