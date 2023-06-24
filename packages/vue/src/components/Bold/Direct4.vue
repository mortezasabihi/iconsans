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
      d="m9.72 16.31-2.66-8a1 1 0 0 1 1.26-1.25l8 2.66a1 1 0 0 1 0 1.9l-3 1a1 1 0 0 0-.64.64l-1 3a1 1 0 0 1-1.96.05Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Direct4",
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
