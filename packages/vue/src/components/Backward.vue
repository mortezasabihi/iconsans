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
      <path
        d="M12.84 13.46 17.22 16a1.68 1.68 0 0 0 2.53-1.46V9.47A1.68 1.68 0 0 0 17.22 8l-4.38 2.53a1.69 1.69 0 0 0 0 2.93Z"
      />
      <path
        d="M5.09 13.46 9.47 16A1.68 1.68 0 0 0 12 14.53V9.47A1.68 1.68 0 0 0 9.47 8l-4.38 2.54a1.69 1.69 0 0 0 0 2.92Z"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Backward",
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
