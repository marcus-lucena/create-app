<template>
  <div class="title">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: "Create Your App",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
.title {
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  text-align: left;
  text-transform: uppercase;
  color: $gray-250;
}
</style>
