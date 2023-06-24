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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm.69 9.29a.779.779 0 0 1-.16.24l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H7a.75.75 0 1 1 0-1.5h8.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.779.779 0 0 1 .22.53c0 .1-.02.198-.06.29Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowRightSquare",
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
