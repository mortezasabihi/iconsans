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
      d="M13.93 9.25h3.81a.11.11 0 0 0 .08-.2L13 4.18a.12.12 0 0 0-.2.09v3.81a1.17 1.17 0 0 0 1.13 1.17Z"
    />
    <path
      fill="currentColor"
      d="M13.22 10.76a2 2 0 0 1-2-2V4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6.24h-4.78Zm.51 4.75h-1v1a.75.75 0 1 1-1.5 0v-1h-1a.75.75 0 1 1 0-1.5h1V13a.75.75 0 1 1 1.5 0v1h1a.75.75 0 1 1 0 1.5v.01Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocumentPlus",
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
