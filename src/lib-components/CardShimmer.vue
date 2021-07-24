<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "CardShimmer",
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<template>
  <div class="shimmer" v-if="isLoading">
    <div class="shimmer-card">
      <div class="card-image" />
      <div class="para">
        <div class="text-item" style="width: 92%" />
        <div class="text-item" style="width: 70%" />
        <div class="text-item" />
        <div class="text-item" style="width: 20%" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.shimmer-card {
  background: #ffffff;
  width: 280px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
}
.para {
  padding: 16px;
}
.card-image {
  height: 220px;
  position: relative;
  overflow: hidden;
  background-color: rgb(211, 211, 211);
}
.text-item {
  height: 12px;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
  background-color: rgb(211, 211, 211);
}
.card-image:before,
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
