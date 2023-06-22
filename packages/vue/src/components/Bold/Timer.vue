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
      d="M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 6.22a.75.75 0 1 1-1.5 0V7.67a.75.75 0 1 1 1.5 0v3.55ZM10 3.75h4a.75.75 0 1 0 0-1.5h-4a.75.75 0 0 0 0 1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Timer",
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
