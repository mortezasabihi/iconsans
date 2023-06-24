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
      d="M15.38 13.6 13.25 12l2.13-1.6a3.42 3.42 0 0 0-2.05-6.15h-2.66a3.42 3.42 0 0 0-2.05 6.15l2.13 1.6-2.13 1.6a3.42 3.42 0 0 0 2.05 6.15h2.66a3.42 3.42 0 0 0 2.05-6.15Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Timer3",
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
