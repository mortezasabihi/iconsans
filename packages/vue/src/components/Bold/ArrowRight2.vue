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
      d="M9.25 18.25a.74.74 0 0 1-.53-.25.75.75 0 0 1 0-1.06l5-5-5-5A.75.75 0 0 1 9.78 6l5.5 5.5a.75.75 0 0 1 0 1.06L9.78 18a.74.74 0 0 1-.53.25Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowRight2",
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
