<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M9.97 8.24H8.24a.87.87 0 0 0-.87.87v5.78c0 .48.39.87.87.87h1.73c.48 0 .87-.39.87-.87V9.11a.87.87 0 0 0-.87-.87Zm5.79 0h-1.73a.87.87 0 0 0-.87.87v5.78c0 .48.39.87.87.87h1.73c.48 0 .87-.39.87-.87V9.11a.87.87 0 0 0-.87-.87Z"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PauseCircle",
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
