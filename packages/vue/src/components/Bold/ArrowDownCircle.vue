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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.53 11.53-3 3a.81.81 0 0 1-.24.17.87.87 0 0 1-.58 0 .81.81 0 0 1-.24-.17l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V7a.75.75 0 1 1 1.5 0v8.19l1.72-1.72a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowDownCircle",
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
