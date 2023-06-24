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
      d="M5.63 18.72a1 1 0 0 0-.8-1 3 3 0 0 1-2.2-2.89V9a3 3 0 0 1 3-3h9.6a3 3 0 0 1 3 3v5.86a3 3 0 0 1-3 3h-5.21a1 1 0 0 0-.7.29L6.48 21a.49.49 0 0 1-.85-.35v-1.93Z"
    />
    <path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M5.77 6v-.14a3 3 0 0 1 3-3h9.6a3 3 0 0 1 3 3v5.85a3 3 0 0 1-3 3h-.14"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7.43 11.84v.01m3-.01v.01m3 0v.01"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Messages",
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
