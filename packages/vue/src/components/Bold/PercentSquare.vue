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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4ZM8.67 8.5a1 1 0 0 1 .07-.38A1.19 1.19 0 0 1 9 7.79a1 1 0 1 1 1.41 1.42 1 1 0 0 1-.32.22 1 1 0 0 1-1.31-.55 1 1 0 0 1-.11-.38Zm1 7.75a.72.72 0 0 1-.42-.13.75.75 0 0 1-.21-1l4.67-7a.76.76 0 0 1 1.29.8l-4.67 7a.74.74 0 0 1-.66.33Zm5.37 0a1 1 0 1 1-1.09-1.63A1 1 0 0 1 15 16.21l.04.04Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PercentSquare",
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
