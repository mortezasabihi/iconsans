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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8.67 8.5a1 1 0 0 1 .07-.38A1.19 1.19 0 0 1 9 7.79a1 1 0 1 1 0 1.42 1.19 1.19 0 0 1-.22-.33 1 1 0 0 1-.11-.38Zm1.62 7.41a.74.74 0 0 1-1.04.21.75.75 0 0 1-.21-1l4.67-7a.76.76 0 0 1 1.29.8l-4.71 6.99Zm4.75.3a1 1 0 1 1-1.41-1.42c.092-.09.2-.161.32-.21A1 1 0 0 1 15 16.21h.04Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PercentCircle",
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
