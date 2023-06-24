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
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M11.6 13.43 7.18 16a1.69 1.69 0 0 1-2.53-1.46V9.47A1.69 1.69 0 0 1 7.18 8l4.38 2.53"
    />
    <path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M18.51 10.54 14.13 8a1.68 1.68 0 0 0-2.53 1.47v5.06A1.68 1.68 0 0 0 14.13 16l4.38-2.53a1.69 1.69 0 0 0 0-2.93Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Forward",
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
