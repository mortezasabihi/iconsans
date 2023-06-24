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
      d="M9.76 16.87a.71.71 0 0 1-.53-.22L5.47 12.9a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0l3.23 3.22 7.71-7.71a.75.75 0 0 1 1.06 1.06l-8.24 8.24a.738.738 0 0 1-.53.22Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tick1",
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
