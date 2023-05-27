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
        d="M5 19a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 .5-.5V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .5.5H17m3 .27A2 2 0 0 1 21 9v8a2 2 0 0 1-2 2H9"
      />
      <path d="M9.17 14A3 3 0 0 1 13 10.17M22 2 2 22" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Camera-Slash",
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
