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
      d="M4.12 19.77A4 4 0 0 1 3 17V7a4 4 0 0 1 4-4h10a4 4 0 0 1 2.75 1.1M21 7v10a4 4 0 0 1-4 4H8"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M12.19 16a2 2 0 0 0 2.22-.41L21 9M3 17l3.59-3.59a2 2 0 0 1 2.82 0M22 2 2 22"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageSlash",
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
