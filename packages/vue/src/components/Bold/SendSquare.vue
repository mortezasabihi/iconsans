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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-.71 9.71a.75.75 0 1 1-1.5 0v-2.43L9 16.07a.79.79 0 0 1-.53.22.75.75 0 0 1-.53-.22.74.74 0 0 1 0-1.06l5.79-5.8h-2.44a.75.75 0 1 1 0-1.5h4.25a.67.67 0 0 1 .28.06.75.75 0 0 1 .41.41.71.71 0 0 1 .06.28v4.25Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SendSquare",
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
