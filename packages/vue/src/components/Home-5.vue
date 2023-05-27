<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
      <path d="m13.5 4.9 6 4v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8l6-4" />
      <path
        stroke-linecap="round"
        d="m21 9.9-1.5-1-6-4-.95-.63a1 1 0 0 0-1.1 0l-.95.63-6 4-1.5 1m9 7v-2"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home-5",
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
