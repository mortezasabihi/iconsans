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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.07 13.07a5.75 5.75 0 0 1-9.81-4.39.75.75 0 0 1 1.306-.43.76.76 0 0 1 .194.54A4.25 4.25 0 1 0 15 9a4.23 4.23 0 0 0-5-.71.74.74 0 0 1-.39 1.38H8.13a.76.76 0 0 1-.75-.75V7.47a.75.75 0 0 1 1.45-.26 5.75 5.75 0 0 1 7.24 8.86Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RotateLeft",
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
