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
      d="M17.25 10.5h3.45a.29.29 0 0 1 .3.3v2.4a.29.29 0 0 1-.3.3h-3.45a1.5 1.5 0 0 1 0-3Z"
    />
    <path
      fill="currentColor"
      d="M17.38 9h3.32a.29.29 0 0 0 .3-.3v-.8A2.9 2.9 0 0 0 18.1 5H5.9A2.9 2.9 0 0 0 3 7.9v8.2A2.9 2.9 0 0 0 5.9 19h12.2a2.9 2.9 0 0 0 2.9-2.9v-.8a.29.29 0 0 0-.3-.3h-3.45a3.001 3.001 0 0 1-2.94-3.6A3.09 3.09 0 0 1 17.38 9ZM10 9.75H7a.75.75 0 0 1 0-1.5h3a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Wallet",
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
