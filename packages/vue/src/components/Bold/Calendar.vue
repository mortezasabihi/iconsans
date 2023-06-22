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
      d="M3 18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-7.5H3V18Zm13-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm9.75-12.17V3.25a.75.75 0 1 0-1.5 0v1.5h-7.5v-1.5a.75.75 0 0 0-1.5 0v1.5H7a4 4 0 0 0-4 4V9h18v-.25a4 4 0 0 0-3.25-3.92Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Calendar",
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
