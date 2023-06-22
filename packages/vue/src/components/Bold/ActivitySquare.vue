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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm.59 7.32-2.2 2.83a2.16 2.16 0 0 1-1.72.84 2.14 2.14 0 0 1-1.67-.84l-1.08-1.39a.699.699 0 0 0-.54-.26.66.66 0 0 0-.53.27L7.59 14.6a.75.75 0 0 1-.59.29.75.75 0 0 1-.59-1.21l2.2-2.84a2.19 2.19 0 0 1 2.678-.62c.298.146.559.358.762.62l1.08 1.39a.67.67 0 0 0 .54.26.65.65 0 0 0 .53-.26l2.21-2.83a.75.75 0 1 1 1.18.92Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivitySquare",
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
