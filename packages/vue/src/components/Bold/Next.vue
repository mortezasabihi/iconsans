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
      d="M15.12 9.83 8.63 6.08a2.5 2.5 0 0 0-3.75 2.17v7.5a2.5 2.5 0 0 0 3.75 2.17l6.49-3.75a2.51 2.51 0 0 0 0-4.34Zm4.01 8.92a.75.75 0 0 1-.75-.75V6a.75.75 0 1 1 1.5 0v12a.76.76 0 0 1-.75.75Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Next",
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
