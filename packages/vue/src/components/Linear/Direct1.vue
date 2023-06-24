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
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m7.34 15.31 3.77-7.52a1 1 0 0 1 1.78 0l3.77 7.52a1 1 0 0 1-1.34 1.35l-2.87-1.44a1 1 0 0 0-.9 0l-2.87 1.44a1 1 0 0 1-1.34-1.35Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Direct1",
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
