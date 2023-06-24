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
      d="m21 9.9-1.5-1-6-4-.95-.63a1 1 0 0 0-1.1 0l-.95.63-6 4-1.5 1"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M19.5 8.9v8a3 3 0 0 1-3 3H14v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H7.5a3 3 0 0 1-3-3v-8"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home1",
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
