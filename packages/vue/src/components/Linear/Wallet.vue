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
      d="M18.1 5H5.9A2.9 2.9 0 0 0 3 7.9v8.2A2.9 2.9 0 0 0 5.9 19h12.2a2.9 2.9 0 0 0 2.9-2.9V7.9A2.9 2.9 0 0 0 18.1 5Z"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M17.25 9.75H21v4.5h-3.75a2.25 2.25 0 0 1 0-4.5ZM7 9h3"
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
