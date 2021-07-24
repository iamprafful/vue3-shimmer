<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "FreeStyleShimmer",
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    width: {
      required: true,
    },
    height: {
      required: true,
    },
    borderRadius: {
      default: "5px",
    },
    color: {
      default: "rgb(211,211,211)",
    },
  },
});
</script>

<template>
  <div class="shimmer" v-if="isLoading">
    <div
      class="free-style"
      :style="
        'width: ' +
          width +
          '; height: ' +
          height +
          '; border-radius: ' +
          borderRadius +
          '; background-color: ' +
          color +
          ';'
      "
    />
  </div>
</template>

<style scoped>
.free-style {
  position: relative;
  overflow: hidden;
}
.free-style::before {
  content: "";
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 150px;
  background-image: linear-gradient(
    to left,
    rgba(251, 251, 251, 0.05),
    rgba(251, 251, 251, 0.3),
    rgba(251, 251, 251, 0.6),
    rgba(251, 251, 251, 0.3),
    rgba(251, 251, 251, 0.05)
  );
  background-image: -moz-linear-gradient(
    to left,
    rgba(251, 251, 251, 0.05),
    rgba(251, 251, 251, 0.3),
    rgba(251, 251, 251, 0.6),
    rgba(251, 251, 251, 0.3),
    rgba(251, 251, 251, 0.05)
  );
  background-image: -webkit-linear-gradient(
    to left,
    rgba(251, 251, 251, 0.05),
    rgba(251, 251, 251, 0.3),
    rgba(251, 251, 251, 0.6),
    rgba(251, 251, 251, 0.3),
    rgba(251, 251, 251, 0.05)
  );
  animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
</style>
