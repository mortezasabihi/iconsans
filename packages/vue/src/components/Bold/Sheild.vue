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
      d="m13 20.52-.5.29a1 1 0 0 1-1 0l-.5-.29A14 14 0 0 1 4 8.39a2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L19 6.66a2 2 0 0 1 1 1.73 14 14 0 0 1-7 12.13Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sheild",
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
