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
        d="m6.25 10.33 1.33 8a2 2 0 0 0 2 1.67h5.12a2 2 0 0 0 2-1.67l1.33-8A2 2 0 0 0 16 8H8.22a2 2 0 0 0-1.97 2.33Z"
      />
      <path
        d="M9.71 9V6.4a2.41 2.41 0 0 1 2.4-2.4 2.41 2.41 0 0 1 2.4 2.4V9m-.4 5h-4"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Bag-Minus",
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
