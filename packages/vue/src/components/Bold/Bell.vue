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
      d="M19 16.91a1.5 1.5 0 0 1-1.25 1.48H6.25a1.5 1.5 0 0 1-.895-2.445 1.49 1.49 0 0 1 .895-.505V9.66a5.75 5.75 0 1 1 11.5 0v5.78A1.49 1.49 0 0 1 19 16.91Zm-5 4.25h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M12.82 4.41a1 1 0 0 0-.113-1.277A1 1 0 0 0 11.18 4.41"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Bell",
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
