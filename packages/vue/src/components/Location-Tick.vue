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
        d="M13.61 18.94a1.999 1.999 0 0 1-3.22 0C5.42 12.24 5.82 9 5.82 9a6.18 6.18 0 1 1 12.36 0s.4 3.24-4.57 9.94Z"
      />
      <path d="M8.87 10.04 10.83 12l4.3-4.3" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Location-Tick",
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
