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
      d="m16.94 8.32-2.66 8a1 1 0 0 1-1.9 0l-.71-2.15a1 1 0 0 1 .24-1l1.24-1.24a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.24 1.24a1.001 1.001 0 0 1-1 .25l-2.13-.71a1 1 0 0 1 0-1.9l8-2.66a1 1 0 0 1 1.22 1.23Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Send2",
  props: {
    width: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
    height: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
  },
});
</script>
