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
      d="M5 15.75a.751.751 0 0 1-.59-1.21l3.09-4a2.7 2.7 0 0 1 2.17-1.03 2.73 2.73 0 0 1 2.17 1.06l1.51 1.94a1.291 1.291 0 0 0 2 0l3.09-4a.75.75 0 0 1 1.18.92l-3.09 4a2.699 2.699 0 0 1-2.17 1.06 2.73 2.73 0 0 1-2.17-1.06l-1.51-1.94a1.29 1.29 0 0 0-2 0l-3.09 4a.75.75 0 0 1-.59.26Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Activity",
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
