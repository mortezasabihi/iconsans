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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-2 11a.75.75 0 0 1 0 1 .75.75 0 0 1-1 0l-2-2-2 2a.75.75 0 0 1-1 0 .75.75 0 0 1 0-1l2-2-2-2a.75.75 0 0 1 0-1 .74.74 0 0 1 1 0l2 2 2-2a.74.74 0 0 1 1 0 .75.75 0 0 1 0 1l-2 2 2 2Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CrossSquare",
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
