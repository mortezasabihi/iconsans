<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5">
      <path
        d="m7.69 9.72 8-2.66a1 1 0 0 1 1.26 1.26l-2.66 8a1 1 0 0 1-1.9 0l-1-3a1 1 0 0 0-.64-.64l-3-1a1 1 0 0 1-.06-1.96Z"
      />
      <path stroke-linecap="round" d="m11.21 12.79 1.41-1.41" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Send-2",
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
