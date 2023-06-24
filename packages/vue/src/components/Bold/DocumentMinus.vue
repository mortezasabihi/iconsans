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
      d="M13.22 10.76a2 2 0 0 1-2-2V4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6.24h-4.78Zm.51 4.75h-3.46a.75.75 0 1 1 0-1.5h3.46a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M13.92 9.26h3.81a.11.11 0 0 0 .08-.2L13 4.19a.12.12 0 0 0-.2.09v3.81a1.18 1.18 0 0 0 1.12 1.17Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocumentMinus",
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
