<template>
  <div class="create-app">
    <Title :title="$t('create-app.title')" />
    <div class="field-grouping">
      <label>{{ $t("create-app.labels.name") }}</label>
      <input type="text" v-model="titleData" />
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
        <v-swatches v-model="iconColorData">
          <input
            slot="trigger"
            :value="iconColorData"
            :style="{ background: iconColorData }"
            readonly
          />
        </v-swatches>
      </div>
      <span></span>
    </div>
    <div class="field-grouping">
      <label>{{ $t("create-app.labels.category") }}</label>
      <vSelect
        class="select-form"
        :options="categories"
        :multiple="false"
        placeholder="Select a category"
        v-model="categoryValue"
      ></vSelect>
      <span></span>
    </div>
    <hr />
    <Preview />
    <Button />
  </div>
</template>

<script>
import VSwatches from "vue-swatches";
import vSelect from "vue-select";
import { mapState } from "vuex";

import ImageUpload from "@/components/ImageUpload";
import Title from "@/components/Title";
import CreateAppMixin from "@/mixins/CreateApp";
import Preview from "@/components/Preview";

import "vue-select/dist/vue-select.css";
import "vue-swatches/dist/vue-swatches.css";
import Button from "../components/button";

export default {
  name: "CreateApp",
  mixins: [CreateAppMixin],
  components: {
    Button,
    VSwatches,
    vSelect,
    ImageUpload,
    Title,
    Preview,
  },
  computed: mapState({
    categories: (state) => state.categories,
  }),
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
