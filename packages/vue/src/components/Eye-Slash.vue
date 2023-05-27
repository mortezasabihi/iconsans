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
        d="m18.69 9.19 2.1 2.1a1.002 1.002 0 0 1 0 1.42l-3.13 3.13A8 8 0 0 1 10.21 18M7.3 16.66a7.998 7.998 0 0 1-1-.82l-3.09-3.13a1 1 0 0 1 0-1.42l3.13-3.13a8 8 0 0 1 10.23-.92"
      />
      <path d="M10.11 13.63a2.5 2.5 0 0 1 3.56-3.49m7.22-7.07L2.93 21.03" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Eye-Slash",
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
