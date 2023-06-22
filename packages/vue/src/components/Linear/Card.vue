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
      d="M17.89 5H6.11A3.11 3.11 0 0 0 3 8.11v7.78A3.11 3.11 0 0 0 6.11 19h11.78A3.11 3.11 0 0 0 21 15.89V8.11A3.11 3.11 0 0 0 17.89 5Z"
    />
    <path
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M3 10h18"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
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
