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
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M8.5 5.5h-3A1.5 1.5 0 0 0 4 7v10a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 10 17V7a1.5 1.5 0 0 0-1.5-1.5Zm10 0h-3A1.5 1.5 0 0 0 14 7v10a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 20 17V7a1.5 1.5 0 0 0-1.5-1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Pause",
  props: {
    width: {
      required: false,
      type: Number,
      default: () => 16,
    },
    height: {
      required: false,
      type: Number,
      default: () => 16,
    },
  },
});
</script>
