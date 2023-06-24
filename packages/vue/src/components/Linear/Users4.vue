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
      d="M10.75 9.81a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7.5 10.38a7.5 7.5 0 0 1 15 0m-.53-7.69a6.5 6.5 0 0 1 3 5.5M15.65 4.31a2.5 2.5 0 1 1 0 5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Users4",
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
