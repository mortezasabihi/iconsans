<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    >
      <path d="m17.58 8.7 1.84-1.85L17.58 5" />
      <path
        d="M4.58 16h.79a6 6 0 0 0 5-2.67l2.43-3.66a6 6 0 0 1 5-2.67h.79m-1.01 7.31 1.84 1.84L17.58 18"
      />
      <path d="M13.32 14a6 6 0 0 0 4.47 2h.79m-14-9h.79a6 6 0 0 1 4.47 2" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Shuffle",
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
