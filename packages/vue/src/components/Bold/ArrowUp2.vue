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
      d="M17.5 15.5a.741.741 0 0 1-.53-.22l-5-5-5 5A.75.75 0 0 1 6 14.22l5.5-5.5a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1-.56 1.28Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowUp2",
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
