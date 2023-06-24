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
      d="M15.23 6h-9.6a3 3 0 0 0-3 3v5.86a3 3 0 0 0 2.2 2.89 1 1 0 0 1 .8 1v1.92a.49.49 0 0 0 .85.35l2.84-2.83a1 1 0 0 1 .7-.29h5.21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-7.8 6.86a1 1 0 1 1 1-1 1 1 0 0 1-1 .99v.01Zm3 0a1 1 0 1 1 1-1 1 1 0 0 1-1 .99v.01Zm3 0a1 1 0 1 1 1-1 1 1 0 0 1-1 .99v.01Z"
    />
    <path
      fill="currentColor"
      d="M21.37 5.86v5.85a3 3 0 0 1-1.68 2.69V7.53a3 3 0 0 0-3-3H6.09a3 3 0 0 1 2.68-1.67h9.6a3 3 0 0 1 3 3Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Messages",
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
