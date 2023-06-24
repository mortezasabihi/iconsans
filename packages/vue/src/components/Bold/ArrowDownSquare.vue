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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.47 11.53-3 3a.63.63 0 0 1-.24.16.73.73 0 0 1-.58 0 .63.63 0 0 1-.24-.16l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V7a.75.75 0 1 1 1.5 0v8.19l1.72-1.72a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowDownSquare",
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
