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
      d="M5.07 13.87H16.2a2 2 0 0 1 1.94 1.94v3.31m-7.5-8.24a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M3.14 19.12v-3.31a2 2 0 0 1 1.93-1.94H16.2a2 2 0 0 1 1.94 1.94v3.31M15.57 5.38a2.5 2.5 0 0 1 0 5M18.44 12H19a1.85 1.85 0 0 1 1.84 1.84V17"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Users3",
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
