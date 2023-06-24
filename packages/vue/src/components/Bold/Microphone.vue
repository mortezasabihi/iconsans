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
      d="M14.47 3A3.46 3.46 0 0 0 12 2a3.5 3.5 0 0 0-3.5 3.5v5a3.5 3.5 0 0 0 7 0v-5A3.46 3.46 0 0 0 14.47 3ZM13 8.75h-2a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5Zm0-3h-2a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M19.25 10.5a.75.75 0 1 0-1.5 0 5.75 5.75 0 0 1-11.5 0 .75.75 0 1 0-1.5 0 7.25 7.25 0 0 0 6.5 7.21V22a.75.75 0 1 0 1.5 0v-4.29a7.25 7.25 0 0 0 6.5-7.21Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Microphone",
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
