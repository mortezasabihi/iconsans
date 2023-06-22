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
      d="m16.66 8.69-3.77 7.52a.999.999 0 0 1-1.78 0L7.34 8.69a1 1 0 0 1 1.34-1.35l2.87 1.44a1 1 0 0 0 .9 0l2.87-1.44a1 1 0 0 1 1.34 1.35Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Direct2",
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
