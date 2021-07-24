<template>
  <div id="app" class="container">
    <h1>Card Shimmer</h1>
    <card-shimmer :is-loading="true" />

    <h1>Paragraph Shimmer</h1>
    <paragraph-shimmer :is-loading="true" :lines="4" :random-size="true" />

    <h1>Free Style Shimmer</h1>
    <free-style-shimmer
      :is-loading="true"
      height="100px"
      width="100px"
      border-radius="50px"
      color="#bdbdbd"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { CardShimmer, ParagraphShimmer, FreeStyleShimmer } from "@/entry.esm";

export default defineComponent({
  name: "ServeDev",
  components: {
    CardShimmer,
    ParagraphShimmer,
    FreeStyleShimmer,
  },
});
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding: 10px;
}
</style>
