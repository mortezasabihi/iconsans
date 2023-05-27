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
      d="m11 9.96 4.07 4.08m0-4.08L11 14.04M8 17h10.36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8a2 2 0 0 0-1.56.75l-2.4 3a2 2 0 0 0 0 2.5l2.4 3A2 2 0 0 0 8 17Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Backspace",
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
