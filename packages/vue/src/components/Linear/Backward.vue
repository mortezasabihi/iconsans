<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M12.4 10.57 16.82 8a1.69 1.69 0 0 1 2.53 1.46v5.06A1.69 1.69 0 0 1 16.82 16l-4.38-2.53"
    />
    <path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M5.49 13.46 9.87 16a1.68 1.68 0 0 0 2.53-1.46V9.47A1.68 1.68 0 0 0 9.87 8l-4.38 2.54a1.69 1.69 0 0 0 0 2.92Z"
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
      default: () => "1em",
    },
    height: {
      required: false,
      type: [Number, String],
      default: () => "1em",
    },
  },
});
</script>
