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
      <path d="M4.22 15.32a8.47 8.47 0 0 1-.59-1.69 8.31 8.31 0 0 1 14-7.77" />
      <path
        d="M18.26 3.9v2.61h-2.61m4.13 2.17a8.47 8.47 0 0 1 .59 1.69 8.31 8.31 0 0 1-14 7.77"
      />
      <path d="M5.74 20.1v-2.61h2.61" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Refresh",
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
