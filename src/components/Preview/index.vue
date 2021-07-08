<template>
  <div class="preview">
    <Title :title="$t('create-app.title')" />
    <div class="preview-container">
      <div class="preview-container-image">
        <div class="preview-background" :style="backgroundColor" />
        <img
          :src="file.blob ? file.blob : '/img/no-image.png'"
          class="preview-rounded-circle"
        />
      </div>
      <div class="preview-description">
        <h2>{{ title || "-" }}</h2>
        <p>{{ category || "-" }}</p>
        <span>New App</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "@/components/Title";
import CreateAppMixin from "@/mixins/CreateApp";

export default {
  name: "Preview",
  mixins: [CreateAppMixin],
  components: { Title },
  computed: mapState({
    title: (state) => state.title,
    file: (state) => state.file,
    category: (state) => state.category,
    iconColor: (state) => state.iconColor,
    backgroundColor: (state) => `background: ${state.iconColor}`,
  }),
  methods: {},
};
</script>

<style lang="scss">
.preview {
  width: 90%;
  height: auto;

  .preview-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: nowrap;

    border: 1px solid #a6a6a6;
    border-radius: 0.3rem;

    .preview-container-image {
      width: 100px;
      height: 100px;
      display: block;
      box-sizing: border-box;

      .preview-background {
        width: 100%;
        height: 100%;
        display: block;
        z-index: 1;
      }

      > .preview-rounded-circle {
        width: 90px;
        height: 90px;
        display: flex;

        position: absolute;
        margin: -95px 0 0 5px;
        z-index: 2;
      }
    }

    .preview-description {
      width: calc(100% - 100px);
      height: auto;
      display: block;
      box-sizing: border-box;

      padding: 10px;
    }
  }
}
</style>
