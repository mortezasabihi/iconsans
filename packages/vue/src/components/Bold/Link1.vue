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
      d="M16 16.75h-1a.75.75 0 1 1 0-1.5h1a3.25 3.25 0 1 0 0-6.5h-1a.75.75 0 1 1 0-1.5h1a4.75 4.75 0 1 1 0 9.5Zm-7 0H8a4.75 4.75 0 1 1 0-9.5h1a.75.75 0 0 1 0 1.5H8a3.25 3.25 0 0 0 0 6.5h1a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M15 12.75H9a.75.75 0 1 1 0-1.5h6a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Link1",
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
