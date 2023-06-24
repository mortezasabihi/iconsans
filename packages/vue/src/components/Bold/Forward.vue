<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      fill="currentColor"
      d="M18.51 10.54 14.13 8a1.68 1.68 0 0 0-2.53 1.47v1.1L7.18 8a1.69 1.69 0 0 0-2.53 1.47v5.06A1.69 1.69 0 0 0 7.18 16l4.38-2.53v1.1A1.68 1.68 0 0 0 14.13 16l4.38-2.53a1.69 1.69 0 0 0 0-2.93Z"
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
