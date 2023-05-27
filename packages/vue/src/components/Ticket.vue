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
      d="M14 6v2m0 3v2.5m0 2.5v2M3 10V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2h-2a2 2 0 0 0 0 4h2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2h2a2 2 0 1 0 0-4H3Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Ticket",
  props: {
    width: {
      required: false,
      type: Number,
      default: () => 16,
    },
    height: {
      required: false,
      type: Number,
      default: () => 16,
    },
  },
});
</script>
