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
      d="M16.58 10.41 9.25 6.18A1.83 1.83 0 0 0 6.5 7.77v8.46a1.83 1.83 0 0 0 2.75 1.59l7.33-4.23a1.83 1.83 0 0 0 0-3.18Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowRight3",
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
