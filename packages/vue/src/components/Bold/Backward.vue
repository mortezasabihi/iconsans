<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      fill="currentColor"
      d="m16.82 8-4.38 2.53V9.47A1.68 1.68 0 0 0 9.87 8l-4.38 2.54a1.69 1.69 0 0 0 0 2.92L9.87 16a1.68 1.68 0 0 0 2.53-1.46v-1.1L16.82 16a1.692 1.692 0 0 0 2.53-1.46V9.47A1.69 1.69 0 0 0 16.82 8Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Backward",
  props: {
    width: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
    height: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
  },
});
</script>
