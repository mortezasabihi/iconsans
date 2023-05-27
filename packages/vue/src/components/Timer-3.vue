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
      d="M8 7.67A2.66 2.66 0 0 1 10.67 5h2.66A2.66 2.66 0 0 1 16 7.67a2.66 2.66 0 0 1-1.07 2.13l-5.86 4.4A2.66 2.66 0 0 0 8 16.33 2.66 2.66 0 0 0 10.67 19h2.66A2.659 2.659 0 0 0 16 16.33a2.661 2.661 0 0 0-1.07-2.13L9.07 9.8A2.66 2.66 0 0 1 8 7.67Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Timer-3",
  props: {
    width: {
      required: false,
      type: Number,
      default: () => 16,
    },
    height: {
      required: false,
      type: Number,
      default: () => 16,
    },
  },
});
</script>
