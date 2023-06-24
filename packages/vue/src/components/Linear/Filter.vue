<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="m9.75 12.24-3-3.43a1 1 0 0 1-.25-.66V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2.15a1 1 0 0 1-.25.66l-3 3.43a1 1 0 0 0-.25.66v3.57a.999.999 0 0 1-.4.8l-2 1.5A1 1 0 0 1 10 18v-5.1a1 1 0 0 0-.25-.66Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Filter",
  props: {
    width: {
      required: false,
      type: [Number, String],
      default: () => "1em",
    },
    height: {
      required: false,
      type: [Number, String],
      default: () => "1em",
    },
  },
});
</script>
