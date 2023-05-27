<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path stroke-width="1.5" d="m9 16.76 5.5-9.52" />
      <path stroke-width="2" d="M9 7v.001M15 17v.001" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Percent",
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
