<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "ParagraphShimmer",
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    lines: {
      type: Number,
      default: 3,
    },
    randomSize: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getWidth() {
      if (this.randomSize)
        return Math.floor(Math.random() * (100 - 80 + 1) + 80);
      return 100;
    },
  },
});
</script>

<template>
  <div class="shimmer" v-if="isLoading">
    <div v-for="i in lines" v-bind:key="i">
      <div class="text-item" :style="'width: ' + getWidth() + '%'" />
    </div>
  </div>
</template>

<style scoped>
.text-item {
  height: 12px;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
  background-color: rgb(211, 211, 211);
}
.text-item::before {
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
