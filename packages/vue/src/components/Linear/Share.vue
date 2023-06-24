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
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M6.86 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10.28-4.95a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8.11 1.9 6.31-3.04m1.8 11.04a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8.11-5.9 6.31 3.04"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Share",
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
